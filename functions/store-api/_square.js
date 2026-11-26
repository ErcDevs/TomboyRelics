// Shared Square helpers for Cloudflare Pages Functions.
// Required environment variables (set in Cloudflare dashboard → Pages →
// tomboyrelics → Settings → Variables and Secrets):
//   SQUARE_ACCESS_TOKEN  (secret)  — from developer.squareup.com → your app → Credentials
//   SQUARE_LOCATION_ID             — from the same page, Locations tab
//   SQUARE_ENV                     — "production" or "sandbox"

export const SQUARE_VERSION = '2026-11-18'

export function squareBase(env) {
  return env.SQUARE_ENV === 'production'
    ? 'https://connect.squareup.com'
    : 'https://connect.squareupsandbox.com'
}

export async function squareFetch(env, path, body) {
  const res = await fetch(squareBase(env) + path, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.SQUARE_ACCESS_TOKEN}`,
      'Square-Version': SQUARE_VERSION,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  const data = await res.json().catch(() => ({}))
  return { ok: res.ok, status: res.status, data }
}

// { id: quantity } of ore items in paid (OPEN or COMPLETED) orders.
export async function paidQuantities(env) {
  const sold = {}
  let cursor
  for (let page = 0; page < 10; page++) {
    const { ok, data } = await squareFetch(env, '/v2/orders/search', {
      location_ids: [env.SQUARE_LOCATION_ID],
      limit: 500,
      cursor,
      query: { filter: { state_filter: { states: ['OPEN', 'COMPLETED'] } } },
    })
    if (!ok) break
    for (const order of data.orders || []) {
      for (const li of order.line_items || []) {
        const sku = li.metadata?.sku || ''
        const m = sku.match(/^ore-(\d+)$/)
        if (m) sold[m[1]] = (sold[m[1]] || 0) + Number(li.quantity || 1)
      }
    }
    cursor = data.cursor
    if (!cursor) break
  }
  return sold
}

export const json = (obj, status = 200, extra = {}) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', ...extra },
  })

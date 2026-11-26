// POST /store-api/checkout  { qty: { "1": 1, "4": 3 } }  →  { url }
// Builds a Square-hosted checkout page for the items in the cart. Prices come
// from src/data/ore.js on the server, never from the browser.
import { ORE } from '../../src/data/ore.js'
import { SITE } from '../../src/data/site.js'
import { squareFetch, paidQuantities, json } from './_square.js'

export async function onRequestPost({ request, env }) {
  if (!env.SQUARE_ACCESS_TOKEN || !env.SQUARE_LOCATION_ID) {
    return json({ error: 'Checkout is not configured yet.' }, 503)
  }

  let lines
  try {
    const { qty } = await request.json()
    lines = Object.entries(qty).map(([id, q]) => ({ item: ORE.find((o) => o.id === Number(id) && !o.sold), q: Math.floor(Number(q)) }))
  } catch {
    return json({ error: 'Bad request.' }, 400)
  }
  if (!lines.length || lines.some((l) => !l.item || !(l.q >= 1))) {
    return json({ error: 'One or more items are no longer available.' }, 409)
  }

  const soldQty = await paidQuantities(env).catch(() => ({}))
  const short = lines.filter((l) => l.q > (l.item.stock ?? 1) - (soldQty[l.item.id] || 0))
  if (short.length) {
    return json({ error: `Sorry, not enough left of: ${short.map((l) => l.item.name).join(', ')}`, soldQty }, 409)
  }

  const origin = new URL(request.url).origin
  const cents = (d) => ({ amount: Math.round(d * 100), currency: 'USD' })

  const body = {
    idempotency_key: crypto.randomUUID(),
    order: {
      location_id: env.SQUARE_LOCATION_ID,
      line_items: lines.map(({ item, q }) => ({
        name: `Tomboy ${item.name}`,
        quantity: String(q),
        base_price_money: cents(item.price),
        metadata: { sku: `ore-${item.id}` },
      })),
    },
    checkout_options: {
      redirect_url: `${origin}/thank-you`,
      ask_for_shipping_address: true,
      shipping_fee: { name: SITE.shippingLabel, charge: cents(SITE.shippingFlat) },
      ...(SITE.contactEmail ? { merchant_support_email: SITE.contactEmail } : {}),
    },
  }

  const { ok, data } = await squareFetch(env, '/v2/online-checkout/payment-links', body)
  if (!ok || !data.payment_link?.url) {
    console.log('Square error', JSON.stringify(data.errors || data))
    return json({ error: 'Could not start checkout. Please try again.' }, 502)
  }
  return json({ url: data.payment_link.url })
}

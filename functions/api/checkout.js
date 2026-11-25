// POST /api/checkout  { ids: [1, 5] }  →  { url }
// Builds a Square-hosted checkout page for the items in the cart. Prices come
// from src/data/ore.js on the server, never from the browser.
import { ORE } from '../../src/data/ore.js'
import { SITE } from '../../src/data/site.js'
import { squareFetch, paidItemIds, json } from './_square.js'

export async function onRequestPost({ request, env }) {
  if (!env.SQUARE_ACCESS_TOKEN || !env.SQUARE_LOCATION_ID) {
    return json({ error: 'Checkout is not configured yet.' }, 503)
  }

  let ids
  try {
    ids = [...new Set((await request.json()).ids.map(Number))]
  } catch {
    return json({ error: 'Bad request.' }, 400)
  }
  const items = ids.map((id) => ORE.find((o) => o.id === id && !o.sold)).filter(Boolean)
  if (!items.length || items.length !== ids.length) {
    return json({ error: 'One or more items are no longer available.' }, 409)
  }

  const sold = await paidItemIds(env).catch(() => [])
  const gone = items.filter((i) => sold.includes(i.id))
  if (gone.length) {
    return json({ error: `Sorry, already sold: ${gone.map((g) => g.name).join(', ')}`, sold }, 409)
  }

  const origin = new URL(request.url).origin
  const cents = (d) => ({ amount: Math.round(d * 100), currency: 'USD' })

  const body = {
    idempotency_key: crypto.randomUUID(),
    order: {
      location_id: env.SQUARE_LOCATION_ID,
      line_items: items.map((i) => ({
        name: `Tomboy ${i.name}`,
        quantity: '1',
        base_price_money: cents(i.price),
        metadata: { sku: `ore-${i.id}` },
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

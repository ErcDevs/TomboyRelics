// GET /api/sold → { soldQty: { id: quantity } } — items already paid for in Square.
import { paidQuantities, json } from './_square.js'

export async function onRequestGet({ env }) {
  if (!env.SQUARE_ACCESS_TOKEN) return json({ soldQty: {} })
  try {
    const soldQty = await paidQuantities(env)
    return json({ soldQty }, 200, { 'Cache-Control': 'public, max-age=60' })
  } catch {
    return json({ soldQty: {} })
  }
}

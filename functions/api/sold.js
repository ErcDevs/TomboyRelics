// GET /api/sold → { sold: [ids] } — items already paid for in Square.
import { paidItemIds, json } from './_square.js'

export async function onRequestGet({ env }) {
  if (!env.SQUARE_ACCESS_TOKEN) return json({ sold: [] })
  try {
    const sold = await paidItemIds(env)
    return json({ sold }, 200, { 'Cache-Control': 'public, max-age=60' })
  } catch {
    return json({ sold: [] })
  }
}

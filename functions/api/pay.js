// functions/api/pay.js — FINAL 405 fix for Square preflight on Pages Functions
export const onRequest = async (context) => {
  const { request, env } = context;
  const { PAYMENTS_WORKER } = env;

  // Square SDK preflight OPTIONS — must be 204 with exact CORS headers
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  // Forward POST to your tomboy-payments Worker (real sandbox charge)
  if (request.method === 'POST') {
    const response = await PAYMENTS_WORKER.fetch(request);

    // Ensure CORS on Worker response
    const newResponse = new Response(response.body, response);
    newResponse.headers.set('Access-Control-Allow-Origin', '*');
    return newResponse;
  }

  // Fallback
  return new Response('Method Not Allowed', { status: 405 });
};
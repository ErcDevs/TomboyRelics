// functions/api/pay.js — FINAL 405/CORS fix for Square SDK on Pages Functions
export const onRequest = async (context) => {
  const { request, env } = context;
  const { PAYMENTS_WORKER } = env;

  // Square SDK preflight OPTIONS — must return 204 with CORS headers
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
    const forwardedResponse = await PAYMENTS_WORKER.fetch(request);

    // Add CORS to Worker response (in case Worker doesn't)
    const response = new Response(forwardedResponse.body, forwardedResponse);
    response.headers.set('Access-Control-Allow-Origin', '*');
    return response;
  }

  // Fallback
  return new Response('Method Not Allowed', { status: 405 });
};
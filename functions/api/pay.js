// functions/api/pay.js — Fixed for 405 + real sandbox payments
export const onRequest = async (context) => {
  const { request, env } = context;
  const { PAYMENTS_WORKER } = env;

  // Handle CORS preflight OPTIONS
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  // Forward POST to your Worker (real charge)
  if (request.method === 'POST') {
    return PAYMENTS_WORKER.fetch(request);
  }

  // Anything else (GET etc.) 405
  return new Response('Method Not Allowed', { status: 405 });
};
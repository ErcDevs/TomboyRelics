// functions/api/pay.js — FINAL for Square SDK preflight + charge
export const onRequest = async (context) => {
  const { request, env } = context;
  const { PAYMENTS_WORKER } = env;

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

  if (request.method === 'POST') {
    const response = await PAYMENTS_WORKER.fetch(request);
    const newResponse = new Response(response.body, response);
    newResponse.headers.set('Access-Control-Allow-Origin', '*');
    return newResponse;
  }

  return new Response('Method Not Allowed', { status: 405 });
};
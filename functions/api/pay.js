// functions/api/pay.js — Proxy to your Square Worker for real sandbox payments
export const onRequestPost = async (context) => {
  const { PAYMENTS_WORKER } = context.env;  // From your binding

  // Forward the POST request to the bound Worker (real charge)
  return PAYMENTS_WORKER.fetch(context.request);
};

export const onRequestOptions = () => {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
// functions/api/pay.js — Proxy to your Square Worker (no changes to Vue code)
export const onRequest = async (context) => {
  const { PAYMENTS_WORKER } = context.env;  // From binding

  // Forward the incoming request to the bound Worker
  return PAYMENTS_WORKER.fetch(context.request);
};
// functions/api/pay.js — Official Cloudflare CORS + Square preflight fix
// Handle OPTIONS preflight (Square SDK sends this first)
export const onRequestOptions = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Max-Age": "86400",
    },
  });
};

// Forward POST to tomboy-payments Worker + add CORS to response
export const onRequestPost = async (context) => {
  const { env } = context;
  const { PAYMENTS_WORKER } = env;

  const response = await PAYMENTS_WORKER.fetch(context.request);

  response.headers.set("Access-Control-Allow-Origin", "*");

  return response;
};
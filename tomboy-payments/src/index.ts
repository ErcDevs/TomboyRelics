// src/index.js — Square Payment Backend for tomboyrelics.com
import { Client, Environment } from 'square';

export default {
  async fetch(request, env) {
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': 'https://tomboyrelics.com',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (request.method === 'POST' && new URL(request.url).pathname === '/api/pay') {
      const { sourceId, amountMoney, idempotencyKey, buyerEmailAddress } = await request.json();

      const client = new Client({
        accessToken: env.SQUARE_ACCESS_TOKEN,
        environment: env.ENVIRONMENT === 'production' ? Environment.Production : Environment.Sandbox,
      });

      try {
        const response = await client.paymentsApi.createPayment({
          sourceId,
          idempotencyKey,
          amountMoney,
          autocomplete: true,
          note: 'Tomboy Mine Relics – authentic Colorado mining artifact',
          ...(buyerEmailAddress && { billingEmailAddress: buyerEmailAddress })
        });

        return new Response(JSON.stringify(response.result), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://tomboyrelics.com',
          },
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: error.message || 'Payment failed' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    return new Response('Not Found', { status: 404 });
  },
};
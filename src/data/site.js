// src/data/site.js — store-wide settings shown on the site and used at checkout.

export const SITE = {
  name: 'Tomboy Relics',
  // Public contact email shown in the footer and on the Shipping & Returns page.
  // Leave empty to hide it.
  contactEmail: '',
  // Flat shipping charged once per order (USD). US addresses only.
  shippingFlat: 12,
  shippingLabel: 'USPS Priority Mail, insured (US only)',
  returnDays: 14,
}

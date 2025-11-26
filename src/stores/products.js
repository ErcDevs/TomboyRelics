// src/stores/products.js  ← FINAL + href added for Tailwind UI grid
import { defineStore } from 'pinia'

const rawProducts = [
  {
    id: 1,
    name: 'Galena-Rich Ore Specimen',
    price: 34,
    description: 'High-grade cubic galena from Tomboy Mine, Savage Basin.',
    image: 'https://images.unsplash.com/photo-1622734134545-5a1c3e7c0f?w=800&h=800&fit=crop',
    href: '/product/1',
    details: [
      'From the historic Tomboy Mine, Savage Basin, Colorado',
      'Hand-collected and photographed under digital microscope',
      'Ships in protective specimen box',
      'Certificate of authenticity included',
    ],
  },
  {
    id: 2,
    name: 'Quartz with Chalcopyrite',
    price: 39,
    description: 'Clear quartz with brassy "fool\'s gold" flecks — free-mill look.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=800&fit=crop',
    href: '/product/2',
    details: [
      'From the historic Tomboy Mine, Savage Basin, Colorado',
      'Hand-collected and photographed under digital microscope',
      'Ships in protective specimen box',
      'Certificate of authenticity included',
    ],
  },
  {
    id: 3,
    name: 'Ore Cart Track Paperweight',
    price: 22,
    description: '2-inch original 1890s Tomboy rail section — authentic relic.',
    image: 'https://images.unsplash.com/photo-1540206392-6a2b3e9ca9b5?w=800&h=800&fit=crop',
    href: '/product/3',
    details: [
      'From the historic Tomboy Mine, Savage Basin, Colorado',
      'Original 1890s rail from the ore cart line',
      'Hand-polished and sealed',
      'Certificate of authenticity included',
    ],
  },
  {
    id: 4,
    name: "Miner's Beaver Felt Hat Fragment",
    price: 68,
    description: '1890s beaver felt from Tomboy boarding house ruins.',
    image: 'https://images.unsplash.com/photo-1514327608482-7d65e0fdcc7d?w=800&h=800&fit=crop',
    href: '/product/4',
    details: [
      'From the historic Tomboy Mine, Savage Basin, Colorado',
      'Recovered from boarding house foundation',
      'Preserved in museum-grade case',
      'Certificate of authenticity included',
    ],
  },
  {
    id: 5,
    name: 'Pyrite on Quartz "Fool\'s Gold"',
    price: 28,
    description: 'Sharp cubic pyrite crystals on sparkling quartz matrix.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc3f?w=800&h=800&fit=crop',
    href: '/product/5',
    details: [
      'From the historic Tomboy Mine, Savage Basin, Colorado',
      'Hand-collected and photographed under digital microscope',
      'Ships in protective specimen box',
      'Certificate of authenticity included',
    ],
  },
  {
    id: 6,
    name: 'Tomboy Mine Nail & Wood Relic',
    price: 18,
    description: 'Hand-forged square nail in 130-year-old mine timber.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=800&fit=crop',
    href: '/product/6',
    details: [
      'From the historic Tomboy Mine, Savage Basin, Colorado',
      'Original hand-forged square nail in timber',
      'Preserved exactly as found',
      'Certificate of authenticity included',
    ],
  },
]

export const useProductsStore = defineStore('products', {
  state: () => ({
    items: structuredClone(rawProducts).map(Object.freeze),
  }),
})

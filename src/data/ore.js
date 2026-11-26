// src/data/ore.js
// Single source of truth for ore listings. Used by the website AND by the
// checkout function (functions/store-api/checkout.js), so prices can't be tampered
// with in the browser.
//
// To add an item: copy a block, give it the next id, set price in dollars.
// One-of-a-kind specimens have no `stock`. For items sold in multiples
// (like bags of concentrate) set `stock` to how many you have.
// To mark an item sold by hand: set sold: true. (Paid Square orders are also
// detected automatically by /store-api/sold, so you usually don't need to.)

export const ORE = [
  {
    id: 1,
    name: 'Peacock Bornite Specimen',
    subtitle: 'Iridescent copper ore, 43.3 g',
    price: 39,
    weight: '43.3 g',
    size: '1.5 × 1.25 × 1 in',
    minerals: ['Bornite'],
    image: '/oreImages/gridThumbs/1main.jpeg',
    images: [
      '/oreImages/productImages/1.1.jpeg',
      '/oreImages/productImages/1.2.jpeg',
      '/oreImages/productImages/1.3.jpeg',
      '/oreImages/productImages/1.4.jpeg',
      '/oreImages/productImages/1.5.jpeg',
    ],
    desc: `Nearly solid massive bornite, the copper-iron sulfide known as "peacock ore," showing blues, purples, pinks and gold across most surfaces. The color is natural tarnish; the piece has not been acid-treated or enhanced.

Bornite is a minor mineral in the Tomboy's mostly gold-silver veins, which makes a clean, colorful piece like this a nice addition to a Telluride district collection.`,
    sold: false,
  },
  {
    id: 2,
    name: 'Visible Gold & Chalcopyrite on Quartz',
    subtitle: 'High-grade vein specimen, 47.8 g',
    price: 135,
    weight: '47.8 g',
    size: '1.75 × 1.5 × 1 in',
    minerals: ['Native gold', 'Chalcopyrite', 'Quartz'],
    image: '/oreImages/gridThumbs/2main.jpeg',
    images: [
      '/oreImages/productImages/2.1.jpeg',
      '/oreImages/productImages/2.2.jpeg',
      '/oreImages/productImages/2.3.jpeg',
      '/oreImages/productImages/2.4.jpeg',
    ],
    desc: `White quartz heavily coated and veined with bright chalcopyrite, with native gold visible on and within the chalcopyrite and quartz. The microscope photo shows the gold particles up close.

This is the quartz-sulfide vein style the Tomboy was worked for. A very photogenic piece.`,
    sold: false,
  },
  {
    id: 3,
    name: 'Hard Rock Gold Ore',
    subtitle: 'Visible gold flecks in chalcopyrite',
    price: 29,
    weight: '',
    size: '',
    minerals: ['Native gold', 'Chalcopyrite'],
    image: '/oreImages/gridThumbs/3main.jpeg',
    images: ['/oreImages/productImages/3.1.jpeg', '/oreImages/productImages/3.2.jpeg'],
    desc: `Hand-selected hard rock specimen with visible gold flecks along a thin chalcopyrite micro-vein. A good, affordable first piece of Tomboy ore.`,
    sold: false,
  },
  {
    id: 4,
    name: 'Gold Concentrates, ¼ lb Bag',
    subtitle: 'Lab-assayed 1,050 g/t gold (30.6 oz/ton)',
    price: 39,
    stock: 10,
    unit: 'bag',
    weight: '¼ lb (113 g) per bag',
    size: '',
    minerals: ['Gold', 'Galena', 'Chalcopyrite', 'Tellurides'],
    image: '/oreImages/gridThumbs/4main.jpeg',
    images: [
      '/oreImages/productImages/4.1.jpeg',
      '/oreImages/productImages/4.2.jpeg',
      '/oreImages/productImages/4.3.jpeg',
    ],
    desc: `High-grade gravity concentrates from our own shaker table, made by crushing Tomboy claim ore and keeping the heavy fraction. Sold in ¼ lb (113 g) bags.

Independent lab assay (Hazen Research, Golden, Colorado, report 25H03928, January 2026) on this concentrate:
• Gold: 1,050 g/t (about 30.6 troy oz per ton)
• Silver: 240 g/t
• Lead: 27%
• Ruthenium: 47 g/t
• Rhodium: 5 g/t

At that grade each ¼ lb bag carries roughly 0.12 g of gold. Much of the gold is fine-grained in sulfides and tellurides, so expect little visible gold when panning; this is a high-grade concentrate for collectors and small-scale refiners, not panning paydirt. Assay results apply to the lab sample; individual bags will vary.`,
    sold: false,
  },
  {
    id: 5,
    name: 'Gold Vein in Galena',
    subtitle: 'Large specimen with visible gold vein, 361.7 g',
    price: 350,
    weight: '361.7 g',
    size: '3 × 3 × 1.75 in',
    minerals: ['Native gold', 'Galena', 'Sulfides'],
    image: '/oreImages/gridThumbs/5main.jpeg',
    images: [
      '/oreImages/productImages/5.1.jpeg',
      '/oreImages/productImages/5.2.jpeg',
      '/oreImages/productImages/5.3.jpeg',
      '/oreImages/productImages/5.4.jpeg',
      '/oreImages/productImages/5.5.jpeg',
      '/oreImages/productImages/5.6.jpeg',
    ],
    desc: `The largest specimen in the shop: massive steel-gray galena and sulfide matrix crossed by a distinct yellow vein of visible gold.

Much of the Tomboy's gold occurred in tellurides and fine-grained sulfides, so visible free gold in a hand specimen of this size is a standout. Our feature piece.`,
    sold: false,
  },
  {
    id: 6,
    name: 'Chalcopyrite Quartz Vein Ore',
    subtitle: 'Brassy sulfides on white quartz, 63.1 g',
    price: 35,
    weight: '63.1 g',
    size: '3 × 2 × 1.5 in',
    minerals: ['Chalcopyrite', 'Quartz', 'Sulfides'],
    image: '/oreImages/gridThumbs/6main.jpeg',
    images: [
      '/oreImages/productImages/6.1.jpeg',
      '/oreImages/productImages/6.2.jpeg',
      '/oreImages/productImages/6.3.jpeg',
      '/oreImages/productImages/6.4.jpeg',
      '/oreImages/productImages/6.5.jpeg',
      '/oreImages/productImages/6.6.jpeg',
    ],
    desc: `Milky white vein quartz with dense brassy chalcopyrite coatings and veinlets, plus darker sulfide patches. A classic example of Tomboy vein ore, with a ruler in the photos for scale.`,
    sold: false,
  },
  {
    id: 7,
    name: 'Visible Gold on Quartz',
    subtitle: 'Small pocket specimen, 22.5 g',
    price: 59,
    weight: '22.5 g',
    size: '2 × 1.5 × 0.5 in',
    minerals: ['Native gold', 'Quartz', 'Sulfides'],
    image: '/oreImages/gridThumbs/7main.jpeg',
    images: [
      '/oreImages/productImages/7.1.jpeg',
      '/oreImages/productImages/7.2.jpeg',
      '/oreImages/productImages/7.3.jpeg',
      '/oreImages/productImages/7.4.jpeg',
      '/oreImages/productImages/7.5.JPG',
    ],
    desc: `White quartz with bright metallic sulfides and patches of native gold visible to the naked eye (best seen in the close-up photos). Free-milling gold like this is what the stamp mills recovered most easily.`,
    sold: false,
  },
  {
    id: 8,
    name: 'Bornite on Quartz',
    subtitle: 'Copper sulfide on vein quartz, 47.8 g',
    price: 39,
    weight: '47.8 g',
    size: '1.5 × 1.5 × 1 in',
    minerals: ['Bornite', 'Quartz'],
    image: '/oreImages/gridThumbs/8main.jpeg',
    images: [
      '/oreImages/productImages/8.1.jpeg',
      '/oreImages/productImages/8.2.jpeg',
      '/oreImages/productImages/8.3.jpeg',
      '/oreImages/productImages/8.4.jpeg',
      '/oreImages/productImages/8.5.jpeg',
    ],
    desc: `A thick layer of metallic bornite with subtle iridescent tones over translucent milky quartz. Copper-rich pockets like this turned up now and then in the Tomboy's gold-silver veins.`,
    sold: false,
  },
  {
    id: 9,
    name: 'Quartz Vein Nugget with Gold & Silver Sulfide',
    subtitle: 'Gold, chalcopyrite and silver sulfide, 17.5 g',
    price: 45,
    weight: '17.5 g',
    size: '1 × 0.75 × 0.75 in',
    minerals: ['Native gold', 'Chalcopyrite', 'Silver sulfide', 'Quartz'],
    image: '/oreImages/gridThumbs/9main.jpeg',
    images: [
      '/oreImages/productImages/9.1.jpeg',
      '/oreImages/productImages/9.2.jpeg',
      '/oreImages/productImages/9.3.jpeg',
      '/oreImages/productImages/9.4.jpeg',
      '/oreImages/productImages/9.5.jpeg',
    ],
    desc: `A compact quartz vein piece showing three of the Tomboy's signature minerals together: native gold on the quartz surfaces, brassy chalcopyrite, and a dark silver-bearing sulfide (likely argentiferous galena or hessite, not lab-confirmed).`,
    sold: false,
  },
]

export const findOre = (id) => ORE.find((o) => o.id === Number(id))

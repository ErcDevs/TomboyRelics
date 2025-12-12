// src/stores/ore.js — YOUR EXACT PRODUCTS + .jpeg on extraImages
import { defineStore } from 'pinia'

export const useOreStore = defineStore('ore', {
  state: () => ({
    items: [
      // Add your high-grade ore products here
     
      {
        id: 1,
        name: 'Ultra-Rare Solid Bornite Specimen – Stunning Iridescent Peacock Ore from the Tomboy Mine',
        price: 695,
        image: '/oreImages/gridThumbs/1main.jpeg',
        desc: "An absolutely breathtaking solid bornite specimen – the true 'peacock ore' – hand-selected from the historic Tomboy Claim above Telluride, Colorado.\n\nThis 43.3-gram beauty (roughly 1.5 × 1.25 × 1 inches) is nearly pure massive bornite (Cu₅FeS₄), displaying an explosive natural iridescence of electric blues, vibrant purples, fiery pinks, and golden yellows across almost every surface. These colors are 100% natural tarnish formed over a century in the high-alpine environment at 11,500+ ft – no acid treatment, no enhancement, exactly as it came out of the vein.\n\nWhile the Tomboy is legendary for its gold-silver tellurides, solid bornite pockets like this are ultra-rare – occurring only in certain polymetallic zones where copper enrichment added bonus value to the ore sent down the Rothschild-funded aerial tram. The mine produced over $12 million in precious metals by 1928 (roughly $450 million today), and specimens this colorful and pure almost never survived the smelter.\n\nHand-selected in 2025 from the active Tomboy Claim – a museum-worthy example of one of Colorado's most elusive and beautiful ore minerals.\n\nWeight: 43.3 grams  \nSize: approx. 1.5 × 1.25 × 1 inches  \nHighlight: Near-solid bornite with vivid natural peacock iridescence\n\n100% authentic – the rarest copper ore you'll ever own from a world-famous gold mine.",
        sold: false,
        category: 'ore',
        reservedUntil: null,
        reservedBy: null,
        extraImages: [
        '/oreImages/productImages/1.1.jpeg',
        '/oreImages/productImages/1.2.jpeg',
        '/oreImages/productImages/1.3.jpeg',
        '/oreImages/productImages/1.4.jpeg',
        '/oreImages/productImages/1.5.jpeg'
        ]
        },
      {
        "id": 2,
        "name": "Stunning Visible Gold & Chalcopyrite on Quartz – Rothschild-Era High-Grade Tomboy Ore",
        "price": 795,
        "image": "/oreImages/gridThumbs/2main.jpeg",
        "desc": "One of the most photogenic high-grade pieces we’ve ever pulled from the Tomboy Claim – a dazzling combination of snow-white quartz completely coated and veined with mirror-bright metallic gold-yellow chalcopyrite and unmistakable native gold blebs that shine like tiny mirrors.\n\nThe microscope image shows bright, buttery-yellow native gold particles sitting directly on and inside the chalcopyrite crystals and quartz.  This is exactly the style of ore the Rothschilds bet the family fortune on after buying the Tomboy in 1902. Their investment paid off spectacularly: the mine produced over $12 million in gold and silver by 1928 – equivalent to roughly $450 million in 2025 dollars – with the richest pockets (just like this specimen) running 5–20+ ounces of gold per ton alongside hundreds of ounces of silver in the galena.\n\nHand-selected in 2025 from the active claim at 11,500+ ft, still sparkling exactly as it looked the day the last shift walked out in 1928.\n\nWeight: 47.8 grams  \nSize: ~1.75 × 1.5 × 1 inches  \nVisible to the naked eye & under magnification: Native gold + massive chalcopyrite on quartz\n\n100 % authentic Tomboy ore from the most famous Rothschild-owned gold mine in Colorado history.",
        "sold": false,
        "category": "ore",
        "reservedUntil": null,
        "reservedBy": null,
        "extraImages": [
        "/oreImages/productImages/2.1.jpeg",
        "/oreImages/productImages/2.2.jpeg",
        "/oreImages/productImages/2.3.jpeg",
        "/oreImages/productImages/2.4.jpeg"
        ]
        },
      {
        id: 3,
        name: 'Tomboy Mine High-Grade Hard Rock Gold Ore Specimen',
        price: 45,
        image: '/oreImages/gridThumbs/3main.jpeg',
        desc: 'Hand-selected specimen with visible gold flecks in a micro vein of calchopyrite.',
        sold: false,
        extraImages: ['/oreImages/productImages/3.1.jpeg', '/oreImages/productImages/3.2.jpeg'],  // ← FIXED: added .jpeg
        category: 'ore',
        reservedUntil: null,
        reservedBy: null
      },
      {
        id: 4,
        name: 'Tomboy Mine Shaker Table Super-Concentrates',
        price: 195,
        image: '/oreImages/gridThumbs/4main.jpeg',           // your main shaker-table photo
        desc: 'Ultra-rich, hand-processed concentrates straight from our shaker table. This is the final high-grade product after crushing and gravity separation of authentic Tomboy Mine ore. Loaded with free-milling gold and silver, plus exceptional values in Ruthenium and Rhodium (assay reports included). Heavy sulfides present: chalcopyrite, galena, arsenopyrite, and visible tellurides. One of the richest pay-dirt concentrates you will ever own — direct from the third-richest gold mine in Colorado history.',
        sold: false,
        category: 'ore',
        reservedUntil: null,
        reservedBy: null,
        extraImages: [
            '/oreImages/productImages/4.1.jpeg',   // water flowing over sulfides
            '/oreImages/productImages/4.2.jpeg',
            '/oreImages/productImages/4.3.jpeg',
            '/oreImages/productImages/4.4.jpeg'
        ]
        },

        {
        id: 5,
        name: 'Super High-Grade Tomboy Mine Ore with Visible Free-Milling Gold Vein – Rothschild-Era Bonanza Pocket Specimen',
        price: 1495,
        image: '/oreImages/gridThumbs/5main.jpeg',
        desc: "'A true stunner – super high-grade Tomboy ore featuring a prominent visible free-milling gold vein running boldly through massive galena and sulfide matrix.\n\nThis 361.7-gram beast (roughly 3 × 3 × 1.75 inches) shows a distinct bright yellow-gold vein cutting across the steel-gray galena, exactly the type of free-milling gold that made certain Tomboy pockets legendary. While much of the mine's gold was locked in tellurides (running 1–2 oz/ton average, with bonanza shoots hitting 5–20+ oz/ton), visible free gold like this signaled the richest ore – the kind that justified the Rothschild family's massive 1902 investment when they acquired controlling interest.\n\nTheir capital transformed the Tomboy into a powerhouse, extracting over $12 million in gold and silver by 1928 – worth roughly $450 million in today's dollars – via the iconic aerial tram and smelter that hauled this exact style of ore down from 11,500+ ft.\n\nHand-selected during modern exploration on the active Tomboy Claim, this specimen is pristine and untouched – a direct survivor from the veins that built one of Colorado's greatest mining fortunes.\n\nWeight: 361.7 grams  \nSize: approx. 3 × 3 × 1.75 inches  \nHighlight: Prominent visible free-milling gold vein in galena-sulfide matrix\n\n100% authentic, straight from the Rothschild-era bonanza ground.\n\nSee many more exclusive Tomboy ore specimens and relics (not available on eBay) at my official storefront: https://tomboyrelics.com\n\nTomboy Relics Ore – $450 million of San Juan history you can hold.'",
        sold: false,
        category: 'ore',
        reservedUntil: null,
        reservedBy: null,
        extraImages: [
        '/oreImages/productImages/5.1.jpeg',
        '/oreImages/productImages/5.2.jpeg',
        '/oreImages/productImages/5.3.jpeg',
        '/oreImages/productImages/5.4.jpeg',
        '/oreImages/productImages/5.5.jpeg',
        '/oreImages/productImages/5.6.jpeg',
        ]
        },
      

        {
        id: 6,
        name: 'High-Grade Tomboy Quartz Vein Ore – Chalcopyrite-Rich with Brassy Sulfides from the Rothschild-Era Veins',
        price: 495,
        image: '/oreImages/gridThumbs/6main.jpeg',
        desc: "'A striking slice of high-grade Tomboy quartz vein ore – milky white quartz heavily mineralized with brassy-yellow chalcopyrite and scattered darker sulfide patches, exactly the style of rock that fueled the mine's bonanza pockets.\n\nThis hand-selected 63.1-gram specimen shows dense chalcopyrite coatings and veins running through the quartz matrix, with the classic metallic golden-brassy sheen that geologists recognize as a key carrier in Tomboy's polymetallic system. High-grade shoots like this one assayed far richer than the mine average – up to 5–20+ ounces of gold per ton plus hundreds of ounces of silver – the reason the Rothschild banking family snapped up the Tomboy in 1902 and turned it into a $12 million producer by 1928 (equivalent to roughly $450 million in today's dollars).\n\nTheir massive investment in the iconic aerial tram and smelter extracted every ounce from these chalcopyrite-laced quartz veins at 11,500+ ft, making the Tomboy one of Colorado's most profitable high-altitude operations.\n\nWeight: 63.1 grams \nSize: approx. 3 × 2 × 1.5 inches (ruler in photos for scale) \nMineralization: Prominent brassy chalcopyrite on quartz – pristine natural condition\n\n100% authentic, recovered during modern exploration on the active Tomboy Claim above Telluride.\n\nTomboy Relics Ore – a tangible piece of the $450 million Rothschild gold rush legacy.'",
        sold: false,
        category: 'ore',
        reservedUntil: null,
        reservedBy: null,
        extraImages: [
        '/oreImages/productImages/6.1.jpeg',
        '/oreImages/productImages/6.2.jpeg',
        '/oreImages/productImages/6.3.jpeg',
        '/oreImages/productImages/6.4.jpeg',
        '/oreImages/productImages/6.5.jpeg',
        '/oreImages/productImages/6.6.jpeg',
        ]
        },

        {
        id: 7,
        name: 'High-Grade Tomboy Quartz Ore with Visible Free-Milling Gold – Rothschild-Era Pocket Specimen',
        price: 129.25,
        image: '/oreImages/gridThumbs/7main.jpeg',
        desc: "'A beautiful little high-grade pocket piece from the Tomboy Claim – snow-white quartz richly coated and veined with bright metallic sulfides and unmistakable visible free-milling native gold.\n\nAt just 22.5 grams and roughly 2 × 1.5 × 0.5 inches, this compact specimen packs serious punch: the quartz crystals host prominent patches of buttery-yellow native gold that shines clearly to the naked eye (best seen in the close-up photos). This is classic free-milling gold – the type that early Tomboy miners loved because it liberated easily in the stamp mill and contributed to the bonanza pockets that assayed 5–20+ ounces per ton (far above the mine average of 1–2 oz/ton gold plus 10–15 oz/ton silver).\n\nWhen the Rothschild banking family acquired controlling interest in 1902, they poured capital into expanding the aerial tram and smelter precisely to handle this style of rich quartz-sulfide ore, turning the Tomboy into a $12 million producer by 1928 – equivalent to roughly $450 million in today's dollars.\n\nHand-selected in 2025 from the active Tomboy Claim at 11,500+ ft, still exactly as it came out of the vein.\n\nWeight: 22.5 grams  \nSize: approx. 2 × 1.5 × 0.5 inches  \nHighlight: Visible free-milling native gold on quartz\n\n100% authentic – a direct piece of the Rothschild-era fortune.",
        sold: false,
        category: 'ore',
        reservedUntil: null,
        reservedBy: null,
        extraImages: [
        '/oreImages/productImages/7.1.jpeg',
        '/oreImages/productImages/7.2.jpeg',
        '/oreImages/productImages/7.3.jpeg',
        '/oreImages/productImages/7.4.jpeg',
        '/oreImages/productImages/7.5.jpeg',
        ]
        },

        {   
        id: 8,
        name: 'Rare Tomboy Mine Bornite on Quartz Vein – Impressive High-Grade Ore Specimen from Rothschild-Era Veins',
        price: 595,
        image: '/oreImages/gridThumbs/8main.jpeg',
        desc: "A very rare and impressive high-grade Tomboy ore specimen – a pure piece of metallic bornite (copper-iron sulfide) dramatically coating a milky quartz vein matrix.\n\nThis 47.8-gram beauty (roughly 1.5 × 1.5 × 1 inches) shows the classic brassy-golden bornite with subtle iridescent tones, layered thickly over the translucent quartz – exactly the type of copper-rich pocket that occasionally appeared in the Tomboy's polymetallic veins alongside the main gold-silver tellurides. While the mine was famed for its gold (averaging 1–2 oz/ton, with bonanzas hitting 5–20+ oz/ton), these bornite-quartz associations added valuable copper and boosted overall recovery in the smelter.\n\nThe Rothschild banking family, after acquiring controlling interest in 1902, invested heavily in the iconic aerial tram and expanded smelter to process every ounce from these high-altitude veins, turning the Tomboy into a $12 million producer by 1928 – equivalent to roughly $450 million in today's dollars.\n\nHand-selected in 2025 from the active Tomboy Claim at 11,500+ ft, this specimen is pristine and untouched – a standout example of the mine's rarer copper mineralization.\n\nWeight: 47.8 grams  \nSize: approx. 1.5 × 1.5 × 1 inches  \nHighlight: Pure bornite coating on quartz vein\n\n100% authentic – a unique piece of the Rothschild-era San Juan riches.",
        sold: false,
        category: 'ore',
        reservedUntil: null,
        reservedBy: null,
        extraImages: [
        '/oreImages/productImages/8.1.jpeg',
        '/oreImages/productImages/8.2.jpeg',
        '/oreImages/productImages/8.3.jpeg',
        '/oreImages/productImages/8.4.jpeg',
        '/oreImages/productImages/8.5.jpeg'
        ]
        },

        {
        id: 9,
        name: 'Tomboy Mine Quartz Vein Nugget with Free-Milling Gold, Chalcopyrite & Silver Sulfide – Rothschild-Era High-Grade Specimen',
        price: 97.50,
        image: '/oreImages/gridThumbs/9main.jpeg',
        desc: "A stunning little quartz vein nugget from the Tomboy Claim – translucent white quartz richly veined and coated with brassy chalcopyrite, unmistakable free-milling native gold, and dark silver-bearing sulfide (likely hessite or argentiferous galena).\n\nThis compact 17.5-gram specimen (roughly 1 × 0.75 × 0.75 inches) packs the classic Tomboy polymetallic punch: bright yellow native gold shines directly on the quartz surfaces alongside golden-brassy chalcopyrite and the characteristic dark gray-to-black silver sulfides that carried the mine's bonus silver values. This is exactly the style of high-grade pocket ore that assayed far above average – bonanza shoots running 5–20+ ounces of gold per ton plus hundreds of ounces of silver – the reason the Rothschild banking family acquired controlling interest in 1902 and invested heavily in the aerial tram and smelter.\n\nTheir vision turned the Tomboy into a $12 million producer by 1928 – equivalent to roughly $450 million in today's dollars – by efficiently processing these rich quartz-sulfide veins at 11,500+ ft.\n\nHand-selected in 2025 from the active Tomboy Claim, pristine and untouched – a perfect miniature of the Rothschild-era jackpot ore.\n\nWeight: 17.5 grams  \nSize: approx. 1 × 0.75 × 0.75 inches  \nHighlights: Visible free-milling native gold, chalcopyrite, and silver sulfide on quartz\n\n100% authentic – straight from the veins that built a banking empire.",
        sold: false,
        category: 'ore',
        reservedUntil: null,
        reservedBy: null,
        extraImages: [
        '/oreImages/productImages/9.1.jpeg',
        '/oreImages/productImages/9.2.jpeg',
        '/oreImages/productImages/9.3.jpeg',
        '/oreImages/productImages/9.4.jpeg',
        '/oreImages/productImages/9.5.jpeg'
        ]
        }


      // Add more ore items...
    ],
    cart: []
  }),
  getters: {
    total: (state) => state.cart.reduce((sum, item) => sum + item.price, 0)
  },
  actions: {
    addToCart(item) {
      this.cart.push({ ...item })
    },
    removeFromCart(index) {
      this.cart.splice(index, 1)
    },
    clearCart() {
      this.cart = []
    }
  }
})
<template>
  <div class="min-h-screen bg-stone-50 py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-stone-900">Tomboy Mine Ore Reference</h1>
        <p class="mt-4 text-lg text-stone-600 max-w-3xl mx-auto">
          The Tomboy's ore came from polymetallic quartz veins carrying gold, silver, copper, lead and zinc. Gold occurred both as free-milling native gold
          and as fine grains locked up in sulfides. The veins cut augite-andesite lava and San Juan Formation breccia, with quartz as the main gangue and light-green fluorite unusually common at the Tomboy.
          Below are the main ore and rock types we find on the Tomboy claim. Identifications are visual, not lab assays.
        </p>
      </div>

      <!-- Ore Type Sections -->
      <div class="space-y-24">
        <!-- Quartz Vein Ore -->
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <img 
            data-zoomable
            src="/ore-reference/quartz-ore.jpg" 
            alt="Quartz Vein Ore from Tomboy Mine" 
            class="w-full rounded-xl shadow-lg object-cover hover:opacity-90 transition"
          >
          <div>
            <h2 class="text-3xl font-bold text-stone-900 mb-4">Quartz Vein Ore</h2>
            <p class="text-lg text-stone-700 leading-relaxed mb-6">
              White to clear quartz veins with visible native gold and brassy sulfides. The USGS noted that even the white "bony" quartz, usually barren elsewhere, was rich in gold at the Tomboy and often showed free gold visible to the eye. More than three-quarters of the gold was free-milling and was caught on amalgamation plates in the mill.
            </p>

            <!-- Mineral Composition Table -->
            <div class="overflow-x-auto">
              <table class="min-w-full bg-white border border-stone-300 rounded-lg">
                <thead class="bg-stone-100">
                  <tr>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Mineral</th>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Formula</th>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Role at Tomboy</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-stone-200 text-sm">
                  <tr><td class="px-4 py-2">Quartz</td><td class="px-4 py-2">SiO₂</td><td class="px-4 py-2">Primary vein host</td></tr>
                  <tr><td class="px-4 py-2">Native gold</td><td class="px-4 py-2">Au</td><td class="px-4 py-2">Free-milling gold</td></tr>
                  <tr><td class="px-4 py-2">Chalcopyrite</td><td class="px-4 py-2">CuFeS₂</td><td class="px-4 py-2">Copper sulfide, often with gold</td></tr>
                  <tr><td class="px-4 py-2">Pyrite</td><td class="px-4 py-2">FeS₂</td><td class="px-4 py-2">Common vein sulfide</td></tr>
                  <tr><td class="px-4 py-2">Galena</td><td class="px-4 py-2">PbS</td><td class="px-4 py-2">Silver-bearing lead sulfide</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Oxidized Gossan Sulfide Ore -->
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <img 
            data-zoomable
            src="/ore-reference/gossan-ore.jpg" 
            alt="Oxidized Gossan Sulfide Ore from Tomboy Mine" 
            class="w-full rounded-xl shadow-lg object-cover hover:opacity-90 transition"
          >
          <div>
            <h2 class="text-3xl font-bold text-stone-900 mb-4">Oxidized Gossan Sulfide Ore</h2>
            <p class="text-lg text-stone-700 leading-relaxed mb-6">
              Gossan is the rusty, porous cap that forms where sulfide ore weathers near the surface. The yellow-brown limonite comes from oxidized pyrite and chalcopyrite; fresher sulfides, quartz and green copper staining (malachite) can show underneath, sometimes with specks of gold left behind by the weathering.
            </p>

            <!-- Mineral Composition Table -->
            <div class="overflow-x-auto">
              <table class="min-w-full bg-white border border-stone-300 rounded-lg">
                <thead class="bg-stone-100">
                  <tr>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Mineral</th>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Formula</th>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Role at Tomboy</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-stone-200 text-sm">
                  <tr><td class="px-4 py-2">Limonite</td><td class="px-4 py-2">FeO(OH)·nH₂O</td><td class="px-4 py-2">Rusty oxidation cap</td></tr>
                  <tr><td class="px-4 py-2">Chalcopyrite</td><td class="px-4 py-2">CuFeS₂</td><td class="px-4 py-2">Copper sulfide</td></tr>
                  <tr><td class="px-4 py-2">Pyrite</td><td class="px-4 py-2">FeS₂</td><td class="px-4 py-2">Common vein sulfide</td></tr>
                  <tr><td class="px-4 py-2">Galena</td><td class="px-4 py-2">PbS</td><td class="px-4 py-2">Silver-bearing lead sulfide</td></tr>
                  <tr><td class="px-4 py-2">Quartz</td><td class="px-4 py-2">SiO₂</td><td class="px-4 py-2">Vein host</td></tr>
                  <tr><td class="px-4 py-2">Malachite</td><td class="px-4 py-2">Cu₂CO₃(OH)₂</td><td class="px-4 py-2">Green secondary copper</td></tr>
                  <tr><td class="px-4 py-2">Native gold</td><td class="px-4 py-2">Au</td><td class="px-4 py-2">Free gold left in the cap</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Black Hardrock/Galena Ore — FINAL -->
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <img 
            data-zoomable
            src="/ore-reference/black-galena-ore.jpg" 
            alt="Black Hardrock Galena Ore from Tomboy Mine" 
            class="w-full rounded-xl shadow-lg object-cover hover:opacity-90 transition"
          >
          <div>
            <h2 class="text-3xl font-bold text-stone-900 mb-4">High-Grade Galena Ore</h2>
            <p class="text-lg text-stone-700 leading-relaxed mb-6">
              High-grade galena ore: heavy, steel-gray to black lead sulfide in a quartz vein. Galena was the main silver carrier in the district's veins. At the Tomboy, the USGS recorded galena ore on the neighboring Iron vein carrying about 40 ounces of silver per ton (Ransome, 1901), and an 1883 shipment of high-grade ore from the neighboring Smuggler vein ran 800 ounces of silver and 18 ounces of gold per ton. Fresh galena shows a bright metallic luster and cubic cleavage.
            </p>

            <!-- Mineral Composition Table -->
            <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-stone-300 rounded-lg">
                <thead class="bg-stone-100">
                <tr>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Mineral</th>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Formula</th>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Role at Tomboy</th>
                </tr>
                </thead>
                <tbody class="divide-y divide-stone-200 text-sm">
                  <tr><td class="px-4 py-2">Galena</td><td class="px-4 py-2">PbS</td><td class="px-4 py-2">Lead sulfide, main silver carrier</td></tr>
                  <tr><td class="px-4 py-2">Quartz</td><td class="px-4 py-2">SiO₂</td><td class="px-4 py-2">Vein matrix</td></tr>
                  <tr><td class="px-4 py-2">Sphalerite</td><td class="px-4 py-2">ZnS</td><td class="px-4 py-2">Zinc sulfide</td></tr>
                  <tr><td class="px-4 py-2">Chalcopyrite</td><td class="px-4 py-2">CuFeS₂</td><td class="px-4 py-2">Copper sulfide</td></tr>
                  <tr><td class="px-4 py-2">Pyrite</td><td class="px-4 py-2">FeS₂</td><td class="px-4 py-2">Common vein sulfide</td></tr>
                </tbody>
            </table>
            </div>
          </div>
        </div>

        <!-- Bornite on Quartz Ore — FINAL -->
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <img 
            data-zoomable
            src="/ore-reference/bornite-quartz-ore.jpg" 
            alt="Bornite on Quartz Ore from Tomboy Mine" 
            class="w-full rounded-xl shadow-lg object-cover hover:opacity-90 transition"
          >
          <div>
            <h2 class="text-3xl font-bold text-stone-900 mb-4">Bornite and Chalcopyrite (Peacock Ore)</h2>
            <p class="text-lg text-stone-700 leading-relaxed mb-6">
              Brassy chalcopyrite and bornite with vivid blue, purple and gold tarnish, the colors that give "peacock ore" its name. Copper-rich pockets like this were a minor part of the Tomboy's mostly gold-silver veins, which makes colorful pieces uncommon.
            </p>

            <!-- Mineral Composition Table -->
            <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-stone-300 rounded-lg">
                <thead class="bg-stone-100">
                <tr>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Mineral</th>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Formula</th>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Role at Tomboy</th>
                </tr>
                </thead>
                <tbody class="divide-y divide-stone-200 text-sm">
                  <tr><td class="px-4 py-2">Bornite</td><td class="px-4 py-2">Cu₅FeS₄</td><td class="px-4 py-2">Iridescent copper sulfide</td></tr>
                  <tr><td class="px-4 py-2">Chalcopyrite</td><td class="px-4 py-2">CuFeS₂</td><td class="px-4 py-2">Brassy copper sulfide</td></tr>
                  <tr><td class="px-4 py-2">Quartz</td><td class="px-4 py-2">SiO₂</td><td class="px-4 py-2">Vein matrix</td></tr>
                  <tr><td class="px-4 py-2">Pyrite</td><td class="px-4 py-2">FeS₂</td><td class="px-4 py-2">Common vein sulfide</td></tr>
                </tbody>
            </table>
            </div>
          </div>
        </div>

        <!-- Hard Rock Ore — FINAL -->
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <img 
            data-zoomable
            src="/ore-reference/hard-rock-ore.jpg" 
            alt="Hard Rock Ore from Tomboy Mine" 
            class="w-full rounded-xl shadow-lg object-cover hover:opacity-90 transition"
          >
          <div>
            <h2 class="text-3xl font-bold text-stone-900 mb-4">Altered Andesite Host Rock</h2>
            <p class="text-lg text-stone-700 leading-relaxed mb-6">
              The Tomboy veins cut through augite-andesite lava sitting on San Juan Formation volcanic breccia. Next to the veins, hot fluids altered the andesite to this greenish-gray rock, often crossed by thin white quartz veinlets with fine sulfides (mostly pyrite and chalcopyrite). The same host rock is common across the San Juans, from Savage Basin to Yankee Boy Basin.
            </p>

            <!-- Mineral Composition Table -->
            <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-stone-300 rounded-lg">
                <thead class="bg-stone-100">
                <tr>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Mineral</th>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Formula</th>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Role at Tomboy</th>
                </tr>
                </thead>
                <tbody class="divide-y divide-stone-200 text-sm">
                  <tr><td class="px-4 py-2">Altered andesite</td><td class="px-4 py-2">—</td><td class="px-4 py-2">Volcanic host rock</td></tr>
                  <tr><td class="px-4 py-2">Chlorite / epidote</td><td class="px-4 py-2">—</td><td class="px-4 py-2">Green alteration minerals</td></tr>
                  <tr><td class="px-4 py-2">Quartz</td><td class="px-4 py-2">SiO₂</td><td class="px-4 py-2">White veinlets</td></tr>
                  <tr><td class="px-4 py-2">Pyrite</td><td class="px-4 py-2">FeS₂</td><td class="px-4 py-2">Fine disseminated sulfide</td></tr>
                  <tr><td class="px-4 py-2">Chalcopyrite</td><td class="px-4 py-2">CuFeS₂</td><td class="px-4 py-2">Fine brassy sulfide</td></tr>
                </tbody>
            </table>
            </div>
          </div>
        </div>

        <!-- Quartz Matrix Sulfide Ore — FINAL -->
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <img 
            data-zoomable
            src="/ore-reference/quartz-matrix-ore.jpg" 
            alt="Quartz Matrix Sulfide Ore from Tomboy Mine" 
            class="w-full rounded-xl shadow-lg object-cover hover:opacity-90 transition"
          >
          <div>
            <h2 class="text-3xl font-bold text-stone-900 mb-4">Quartz Matrix Sulfide Ore</h2>
            <p class="text-lg text-stone-700 leading-relaxed mb-6">
              Quartz vein material with patches of sulfides and blue-green copper staining. The darker patches are mainly chalcopyrite and pyrite; the green and blue are secondary copper minerals that formed as the chalcopyrite weathered.
            </p>

            <!-- Mineral Composition Table -->
            <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-stone-300 rounded-lg">
                <thead class="bg-stone-100">
                <tr>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Mineral</th>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Formula</th>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Role at Tomboy</th>
                </tr>
                </thead>
                <tbody class="divide-y divide-stone-200 text-sm">
                  <tr><td class="px-4 py-2">Quartz</td><td class="px-4 py-2">SiO₂</td><td class="px-4 py-2">Vein matrix</td></tr>
                  <tr><td class="px-4 py-2">Chalcopyrite</td><td class="px-4 py-2">CuFeS₂</td><td class="px-4 py-2">Copper sulfide</td></tr>
                  <tr><td class="px-4 py-2">Pyrite</td><td class="px-4 py-2">FeS₂</td><td class="px-4 py-2">Common vein sulfide</td></tr>
                  <tr><td class="px-4 py-2">Galena</td><td class="px-4 py-2">PbS</td><td class="px-4 py-2">Silver-bearing lead sulfide</td></tr>
                  <tr><td class="px-4 py-2">Sphalerite</td><td class="px-4 py-2">ZnS</td><td class="px-4 py-2">Zinc sulfide</td></tr>
                  <tr><td class="px-4 py-2">Malachite / azurite</td><td class="px-4 py-2">—</td><td class="px-4 py-2">Green and blue copper staining</td></tr>
                </tbody>
            </table>
            </div>
          </div>
        </div>

        <!-- Native Gold in Oxidized Black Sulfide Ore — FINAL -->
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <img 
            data-zoomable
            src="/ore-reference/gold-vein-black-ore.jpg" 
            alt="Native Gold in Oxidized Black Sulfide Ore from Tomboy Mine" 
            class="w-full rounded-xl shadow-lg object-cover hover:opacity-90 transition"
          >
          <div>
            <h2 class="text-3xl font-bold text-stone-900 mb-4">Native Gold in Oxidized Black Sulfide Ore</h2>
            <p class="text-lg text-stone-700 leading-relaxed mb-6">
              A bright vein of native gold cutting through dark, weathered sulfide ore. Gold doesn't tarnish, so it stays bright while the sulfides around it darken and rust. Visible gold veins like this are the most valuable Tomboy hand specimens.
            </p>

            <!-- Mineral Composition Table -->
            <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-stone-300 rounded-lg">
                <thead class="bg-stone-100">
                <tr>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Mineral</th>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Formula</th>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Role at Tomboy</th>
                </tr>
                </thead>
                <tbody class="divide-y divide-stone-200 text-sm">
                  <tr><td class="px-4 py-2">Native gold</td><td class="px-4 py-2">Au</td><td class="px-4 py-2">Visible gold vein</td></tr>
                  <tr><td class="px-4 py-2">Galena</td><td class="px-4 py-2">PbS</td><td class="px-4 py-2">Dark lead sulfide matrix</td></tr>
                  <tr><td class="px-4 py-2">Pyrite</td><td class="px-4 py-2">FeS₂</td><td class="px-4 py-2">Common vein sulfide</td></tr>
                  <tr><td class="px-4 py-2">Chalcopyrite</td><td class="px-4 py-2">CuFeS₂</td><td class="px-4 py-2">Copper sulfide</td></tr>
                  <tr><td class="px-4 py-2">Limonite</td><td class="px-4 py-2">FeO(OH)·nH₂O</td><td class="px-4 py-2">Rusty weathering</td></tr>
                </tbody>
            </table>
            </div>
          </div>
        </div>

        <!-- Fractured Quartz with Sulfide Inclusions — FINAL -->
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <img 
            data-zoomable
            src="/ore-reference/fractured-quartz-ore.jpg" 
            alt="Fractured Quartz with Sulfide Inclusions from Tomboy Mine" 
            class="w-full rounded-xl shadow-lg object-cover hover:opacity-90 transition"
          >
          <div>
            <h2 class="text-3xl font-bold text-stone-900 mb-4">Quartz-Sulfide Vein Breccia</h2>
            <p class="text-lg text-stone-700 leading-relaxed mb-6">
              Heavy vein breccia: broken fragments of quartz cemented together by dense sulfides. Its weight comes from fine-grained "steel" galena: the brownish, tarnished sulfide is soft, crumbles to specks rather than breaking into cubes, and leaves a gray-black streak. Thin green malachite staining shows where copper sulfides such as chalcopyrite have started to weather. Breccias like this formed where the vein was repeatedly fractured and re-mineralized.
            </p>

            <!-- Mineral Composition Table -->
            <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-stone-300 rounded-lg">
                <thead class="bg-stone-100">
                <tr>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Mineral</th>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Formula</th>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Role at Tomboy</th>
                </tr>
                </thead>
                <tbody class="divide-y divide-stone-200 text-sm">
                  <tr><td class="px-4 py-2">Quartz</td><td class="px-4 py-2">SiO₂</td><td class="px-4 py-2">Vein fragments and cement</td></tr>
                  <tr><td class="px-4 py-2">Galena (steel galena)</td><td class="px-4 py-2">PbS</td><td class="px-4 py-2">Fine-grained, heavy lead sulfide</td></tr>
                                    <tr><td class="px-4 py-2">Chalcopyrite</td><td class="px-4 py-2">CuFeS₂</td><td class="px-4 py-2">Copper sulfide</td></tr>
                  <tr><td class="px-4 py-2">Pyrite</td><td class="px-4 py-2">FeS₂</td><td class="px-4 py-2">Iron sulfide</td></tr>
                  <tr><td class="px-4 py-2">Malachite</td><td class="px-4 py-2">Cu₂CO₃(OH)₂</td><td class="px-4 py-2">Green copper staining</td></tr>
                </tbody>
            </table>
            </div>
          </div>
        </div>

        <!-- Pyrite-Quartz Vein Ore with Chalcopyrite Inclusions — FINAL -->
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <img 
            data-zoomable
            src="/ore-reference/pyrite-quartz-ore.jpg" 
            alt="Pyrite-Quartz Vein Ore from Tomboy Mine" 
            class="w-full rounded-xl shadow-lg object-cover hover:opacity-90 transition"
          >
          <div>
            <h2 class="text-3xl font-bold text-stone-900 mb-4">Bladed Sulfide Quartz Vein Ore</h2>
            <p class="text-lg text-stone-700 leading-relaxed mb-6">
              White quartz vein heavily coated with brassy, bladed sulfide crystals, many grown in radiating sprays and rosettes rather than cubes. That habit points to marcasite, the bladed form of iron sulfide, rather than cubic pyrite. Identification is visual and not lab-confirmed.
            </p>

            <!-- Mineral Composition Table -->
            <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-stone-300 rounded-lg">
                <thead class="bg-stone-100">
                <tr>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Mineral</th>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Formula</th>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Role at Tomboy</th>
                </tr>
                </thead>
                <tbody class="divide-y divide-stone-200 text-sm">
                  <tr><td class="px-4 py-2">Quartz</td><td class="px-4 py-2">SiO₂</td><td class="px-4 py-2">Vein host</td></tr>
                  <tr><td class="px-4 py-2">Marcasite (likely)</td><td class="px-4 py-2">FeS₂</td><td class="px-4 py-2">Brassy bladed and radiating sulfide</td></tr>
                  <tr><td class="px-4 py-2">Chalcopyrite</td><td class="px-4 py-2">CuFeS₂</td><td class="px-4 py-2">Copper sulfide</td></tr>
                </tbody>
            </table>
            </div>
          </div>
        </div>

        <!-- Heavy Red-Black Oxidized Telluride Ore — FINAL -->
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <img 
            data-zoomable
            src="/ore-reference/red-black-telluride-ore.jpg" 
            alt="Heavy Red-Black Oxidized Telluride Ore from Tomboy Mine" 
            class="w-full rounded-xl shadow-lg object-cover hover:opacity-90 transition"
          >
          <div>
            <h2 class="text-3xl font-bold text-stone-900 mb-4">Heavy Red-Black Oxidized Ore</h2>
            <p class="text-lg text-stone-700 leading-relaxed mb-6">
              Dense, crumbly red-black ore from the weathered part of a vein. The red and brown are iron oxides (hematite and limonite) left as sulfides broke down; the weight comes from the remaining sulfides and iron oxides. Small metallic specks may be gold or unweathered sulfide.
            </p>

            <!-- Mineral Composition Table -->
            <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-stone-300 rounded-lg">
                <thead class="bg-stone-100">
                <tr>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Mineral</th>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Formula</th>
                    <th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Role at Tomboy</th>
                </tr>
                </thead>
                <tbody class="divide-y divide-stone-200 text-sm">
                  <tr><td class="px-4 py-2">Hematite / limonite</td><td class="px-4 py-2">Fe₂O₃ / FeO(OH)</td><td class="px-4 py-2">Red-brown iron oxides</td></tr>
                  <tr><td class="px-4 py-2">Pyrite</td><td class="px-4 py-2">FeS₂</td><td class="px-4 py-2">Remaining sulfide</td></tr>
                  <tr><td class="px-4 py-2">Galena</td><td class="px-4 py-2">PbS</td><td class="px-4 py-2">Lead sulfide</td></tr>
                  <tr><td class="px-4 py-2">Native gold</td><td class="px-4 py-2">Au</td><td class="px-4 py-2">Possible fine specks</td></tr>
                  <tr><td class="px-4 py-2">Quartz</td><td class="px-4 py-2">SiO₂</td><td class="px-4 py-2">Vein remnants</td></tr>
                </tbody>
            </table>
            </div>
          </div>
        </div>

        <!-- Green-Purple Altered Volcanic Rock -->
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <img data-zoomable src="/ore-reference/greenish-purple-ore.jpg" alt="Green-purple altered volcanic rock from the Tomboy claim" class="w-full rounded-xl shadow-lg object-cover hover:opacity-90 transition">
          <div>
            <h2 class="text-3xl font-bold text-stone-900 mb-4">Green-Purple Altered Volcanic Rock</h2>
            <p class="text-lg text-stone-700 leading-relaxed mb-6">
              Fine-grained green to purplish volcanic rock from around the veins, with scattered sulfides (likely chalcopyrite and pyrite). The green comes from alteration minerals such as chlorite and epidote; the purple tint is typical of iron-stained San Juan volcanic rock. Not identified by lab test.
            </p>
            <div class="overflow-x-auto">
              <table class="min-w-full bg-white border border-stone-300 rounded-lg">
                <thead class="bg-stone-100"><tr><th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Mineral</th><th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Formula</th><th class="px-4 py-2 text-left text-sm font-medium text-stone-700">Role</th></tr></thead>
                <tbody class="divide-y divide-stone-200 text-sm">
                  <tr><td class="px-4 py-2">Altered volcanic rock</td><td class="px-4 py-2">—</td><td class="px-4 py-2">Host rock</td></tr>
                  <tr><td class="px-4 py-2">Chlorite / epidote</td><td class="px-4 py-2">—</td><td class="px-4 py-2">Green alteration</td></tr>
                  <tr><td class="px-4 py-2">Chalcopyrite</td><td class="px-4 py-2">CuFeS₂</td><td class="px-4 py-2">Scattered sulfide</td></tr>
                  <tr><td class="px-4 py-2">Pyrite</td><td class="px-4 py-2">FeS₂</td><td class="px-4 py-2">Scattered sulfide</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-20 text-center">
        <router-link to="/shop" class="inline-block bg-copper-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-copper-700">Shop Tomboy ore specimens</router-link>
        <p class="mt-8 text-sm text-stone-500">Geology source: Colorado Geological Survey Open File 75-00 (Tomboy mine), citing Purington (1896) and Ransome (1901); USGS Bulletin 182 (Ransome, 1901), pp. 206–211; Western Mining History, San Miguel County gold production (Smuggler vein 1883 shipment).</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import mediumZoom from 'medium-zoom'

onMounted(() => {
  mediumZoom('[data-zoomable]', {
    margin: 50,
    background: '#000',
    scrollOffset: 0,
    zoom: 10,
    scrollToZoom: true
  })
})
</script>

<style scoped>
.cursor-zoom-in { cursor: zoom-in; }
.medium-zoom-image { cursor: zoom-in !important; }
.medium-zoom-image--opened { cursor: zoom-out !important; }
</style>
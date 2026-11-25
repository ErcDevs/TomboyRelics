<template>
  <div class="min-h-screen bg-stone-50 py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-stone-900">Tomboy Mine Ore Reference</h1>
        <p class="mt-4 text-lg text-stone-600 max-w-3xl mx-auto">
          The Tomboy's ore came from polymetallic quartz veins carrying gold, silver, copper, lead and zinc. Gold occurred both as free-milling native gold
          and locked up in sulfides and tellurides. Below are the main ore types we find on the Tomboy claim and the minerals in each.
          Identifications are visual, not lab assays.
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
              White to clear quartz veins laced with visible gold — the primary ore for Tomboy's legendary free-milling gold. Contains chalcopyrite, pyrite, and tellurides like calaverite. The most sought-after Tomboy specimen.
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
                  <tr><td class="px-4 py-2">Native Gold</td><td class="px-4 py-2">Au</td><td class="px-4 py-2">Free-milling gold</td></tr>
                  <tr><td class="px-4 py-2">Calaverite</td><td class="px-4 py-2">AuTe₂</td><td class="px-4 py-2">Gold telluride</td></tr>
                  <tr><td class="px-4 py-2">Sylvanite</td><td class="px-4 py-2">(Au,Ag)₂Te₄</td><td class="px-4 py-2">Gold-silver telluride</td></tr>
                  <tr><td class="px-4 py-2">Chalcopyrite</td><td class="px-4 py-2">CuFeS₂</td><td class="px-4 py-2">Gold carrier</td></tr>
                  <tr><td class="px-4 py-2">Pyrite</td><td class="px-4 py-2">FeS₂</td><td class="px-4 py-2">"Fool's gold" matrix</td></tr>
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
              Classic Tomboy gossan — a porous limonite cap formed over rich sulfide ore. Beneath the yellow-brown oxidation lies a dark matrix of chalcopyrite, pyrrhotite, galena, and quartz, with visible gold specks and secondary copper minerals (malachite). This is the surface expression of the mine’s deepest, richest veins.
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
                  <tr><td class="px-4 py-2">Limonite Gossan</td><td class="px-4 py-2">FeO(OH)·nH₂O</td><td class="px-4 py-2">Surface oxidation cap</td></tr>
                  <tr><td class="px-4 py-2">Chalcopyrite</td><td class="px-4 py-2">CuFeS₂</td><td class="px-4 py-2">Primary gold & copper carrier</td></tr>
                  <tr><td class="px-4 py-2">Pyrrhotite</td><td class="px-4 py-2">Fe₁₋ₓS</td><td class="px-4 py-2">Most abundant sulfide</td></tr>
                  <tr><td class="px-4 py-2">Galena</td><td class="px-4 py-2">PbS</td><td class="px-4 py-2">Silver-rich lead sulfide</td></tr>
                  <tr><td class="px-4 py-2">Pyrite</td><td class="px-4 py-2">FeS₂</td><td class="px-4 py-2">"Fool's gold" matrix</td></tr>
                  <tr><td class="px-4 py-2">Quartz</td><td class="px-4 py-2">SiO₂</td><td class="px-4 py-2">Vein host rock</td></tr>
                  <tr><td class="px-4 py-2">Malachite</td><td class="px-4 py-2">Cu₂CO₃(OH)₂</td><td class="px-4 py-2">Green secondary copper</td></tr>
                  <tr><td class="px-4 py-2">Visible Gold</td><td class="px-4 py-2">Au</td><td class="px-4 py-2">Free-milling flecks</td></tr>
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
            <h2 class="text-3xl font-bold text-stone-900 mb-4">Black Hardrock Galena Ore</h2>
            <p class="text-lg text-stone-700 leading-relaxed mb-6">
            Deep-level, jet-black ore dominated by massive galena (lead sulfide) in a quartz-pyrrhotite matrix. This is Tomboy's classic silver-rich ore from the lower levels — the "black rock" that made the mine famous for its high silver values. Often shows brilliant metallic luster when freshly broken, with minor chalcopyrite and sphalerite. A true collector's piece from the heart of the deposit.
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
                <tr><td class="px-4 py-2">Galena</td><td class="px-4 py-2">PbS</td><td class="px-4 py-2">Primary silver carrier</td></tr>
                <tr><td class="px-4 py-2">Pyrrhotite</td><td class="px-4 py-2">Fe₁₋ₓS</td><td class="px-4 py-2">Most abundant sulfide, gold host</td></tr>
                <tr><td class="px-4 py-2">Quartz</td><td class="px-4 py-2">SiO₂</td><td class="px-4 py-2">Vein matrix</td></tr>
                <tr><td class="px-4 py-2">Sphalerite</td><td class="px-4 py-2">ZnS</td><td class="px-4 py-2">Zinc sulfide, minor silver</td></tr>
                <tr><td class="px-4 py-2">Chalcopyrite</td><td class="px-4 py-2">CuFeS₂</td><td class="px-4 py-2">Copper & trace gold</td></tr>
                <tr><td class="px-4 py-2">Pyrite</td><td class="px-4 py-2">FeS₂</td><td class="px-4 py-2">Minor "fool's gold"</td></tr>
                <tr><td class="px-4 py-2">Native Silver</td><td class="px-4 py-2">Ag</td><td class="px-4 py-2">Rare wires in galena</td></tr>
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
            <h2 class="text-3xl font-bold text-stone-900 mb-4">Bornite on Quartz Ore</h2>
            <p class="text-lg text-stone-700 leading-relaxed mb-6">
            Iridescent bornite (peacock ore) crystals coating fractured quartz — a rare and beautiful copper ore from Tomboy's hydrothermal veins. The peacock colors come from tarnished bornite (Cu₅FeS₄), a primary copper carrier that often hosted gold and silver at the mine. The quartz matrix shows the vein structure where bornite crystallized. This is one of the ores that gave Tomboy its polymetallic reputation.
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
                <tr><td class="px-4 py-2">Bornite</td><td class="px-4 py-2">Cu₅FeS₄</td><td class="px-4 py-2">Iridescent copper ore, gold host</td></tr>
                <tr><td class="px-4 py-2">Quartz</td><td class="px-4 py-2">SiO₂</td><td class="px-4 py-2">Vein host matrix</td></tr>
                <tr><td class="px-4 py-2">Chalcopyrite</td><td class="px-4 py-2">CuFeS₂</td><td class="px-4 py-2">Associated copper sulfide</td></tr>
                <tr><td class="px-4 py-2">Pyrite</td><td class="px-4 py-2">FeS₂</td><td class="px-4 py-2">Common vein filling</td></tr>
                <tr><td class="px-4 py-2">Native Gold</td><td class="px-4 py-2">Au</td><td class="px-4 py-2">Free-milling in bornite</td></tr>
                <tr><td class="px-4 py-2">Calaverite</td><td class="px-4 py-2">AuTe₂</td><td class="px-4 py-2">Telluride gold</td></tr>
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
            <h2 class="text-3xl font-bold text-stone-900 mb-4">Hard Rock Sulfide Ore</h2>
            <p class="text-lg text-stone-700 leading-relaxed mb-6">
            Dense, dark host rock from Tomboy's deeper levels — the classic "hard rock" matrix loaded with sulfides. This is the ore that required heavy stamping and roasting to liberate its gold and silver. Packed with pyrrhotite (dominant), chalcopyrite, pyrite, arsenopyrite, and minor galena/sphalerite. The brassy flecks are chalcopyrite and pyrite; the steel-gray is pyrrhotite. A true workhorse ore from the heart of the mine.
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
                <tr><td class="px-4 py-2">Pyrrhotite</td><td class="px-4 py-2">Fe₁₋ₓS</td><td class="px-4 py-2">Most abundant sulfide, gold host</td></tr>
                <tr><td class="px-4 py-2">Chalcopyrite</td><td class="px-4 py-2">CuFeS₂</td><td class="px-4 py-2">Brassy gold/copper carrier</td></tr>
                <tr><td class="px-4 py-2">Pyrite</td><td class="px-4 py-2">FeS₂</td><td class="px-4 py-2">"Fool's gold", common matrix</td></tr>
                <tr><td class="px-4 py-2">Arsenopyrite</td><td class="px-4 py-2">FeAsS</td><td class="px-4 py-2">Refractory gold carrier</td></tr>
                <tr><td class="px-4 py-2">Galena</td><td class="px-4 py-2">PbS</td><td class="px-4 py-2">Silver-rich lead sulfide</td></tr>
                <tr><td class="px-4 py-2">Sphalerite</td><td class="px-4 py-2">ZnS</td><td class="px-4 py-2">Zinc sulfide, minor</td></tr>
                <tr><td class="px-4 py-2">Quartz</td><td class="px-4 py-2">SiO₂</td><td class="px-4 py-2">Vein matrix</td></tr>
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
            Beautiful quartz matrix laced with massive sulfide mineralization — the classic Tomboy "spotted" ore. Formed when rich sulfide veins (originally yellowish-black from chalcopyrite and pyrrhotite) were partially oxidized and cemented by later quartz. The dark patches are relict chalcopyrite, pyrrhotite, and arsenopyrite, while the white is pure quartz. This is the ore that made Tomboy famous for its complex, high-grade polymetallic veins.
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
                <tr><td class="px-4 py-2">Quartz</td><td class="px-4 py-2">SiO₂</td><td class="px-4 py-2">Late-stage vein cement</td></tr>
                <tr><td class="px-4 py-2">Chalcopyrite</td><td class="px-4 py-2">CuFeS₂</td><td class="px-4 py-2">Primary gold & copper carrier</td></tr>
                <tr><td class="px-4 py-2">Pyrrhotite</td><td class="px-4 py-2">Fe₁₋ₓS</td><td class="px-4 py-2">Most abundant sulfide, gold host</td></tr>
                <tr><td class="px-4 py-2">Arsenopyrite</td><td class="px-4 py-2">FeAsS</td><td class="px-4 py-2">Refractory gold carrier</td></tr>
                <tr><td class="px-4 py-2">Pyrite</td><td class="px-4 py-2">FeS₂</td><td class="px-4 py-2">Common matrix mineral</td></tr>
                <tr><td class="px-4 py-2">Galena</td><td class="px-4 py-2">PbS</td><td class="px-4 py-2">Silver-rich lead sulfide</td></tr>
                <tr><td class="px-4 py-2">Sphalerite</td><td class="px-4 py-2">ZnS</td><td class="px-4 py-2">Zinc sulfide, minor silver</td></tr>
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
            Exceptional Tomboy specimen showing a bright native gold vein cutting through heavily oxidized black sulfide ore. The gold remained brilliant despite surface weathering — proof of Tomboy's famous free-milling gold. The dark matrix is pyrrhotite-rich with chalcopyrite and arsenopyrite, capped by limonite gossan. One of the most dramatic and valuable ore types from the mine.
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
                <tr><td class="px-4 py-2">Native Gold</td><td class="px-4 py-2">Au</td><td class="px-4 py-2">Visible free-milling gold vein</td></tr>
                <tr><td class="px-4 py-2">Pyrrhotite</td><td class="px-4 py-2">Fe₁₋ₓS</td><td class="px-4 py-2">Dominant black sulfide matrix</td></tr>
                <tr><td class="px-4 py-2">Chalcopyrite</td><td class="px-4 py-2">CuFeS₂</td><td class="px-4 py-2">Gold & copper carrier</td></tr>
                <tr><td class="px-4 py-2">Arsenopyrite</td><td class="px-4 py-2">FeAsS</td><td class="px-4 py-2">Refractory gold host</td></tr>
                <tr><td class="px-4 py-2">Limonite Gossan</td><td class="px-4 py-2">FeO(OH)·nH₂O</td><td class="px-4 py-2">Surface oxidation cap</td></tr>
                <tr><td class="px-4 py-2">Quartz</td><td class="px-4 py-2">SiO₂</td><td class="px-4 py-2">Minor vein matrix</td></tr>
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
            <h2 class="text-3xl font-bold text-stone-900 mb-4">Brecciated Quartz with Sulfide Inclusions</h2>
            <p class="text-lg text-stone-700 leading-relaxed mb-6">
            Heavily fractured quartz vein material packed with dark sulfide inclusions — a textbook example of Tomboy's high-grade quartz-hosted ore. The fractures allowed rich sulfide mineralization (chalcopyrite, pyrrhotite, arsenopyrite) to infiltrate the quartz, creating a "brecciated" texture loaded with free-milling and telluride gold. This is the ore that made Tomboy one of Colorado's richest mines — the fractures are literally filled with gold-bearing sulfides.
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
                <tr><td class="px-4 py-2">Quartz</td><td class="px-4 py-2">SiO₂</td><td class="px-4 py-2">Primary fractured host rock</td></tr>
                <tr><td class="px-4 py-2">Chalcopyrite</td><td class="px-4 py-2">CuFeS₂</td><td class="px-4 py-2">Gold & copper in fractures</td></tr>
                <tr><td class="px-4 py-2">Pyrrhotite</td><td class="px-4 py-2">Fe₁₋ₓS</td><td class="px-4 py-2">Dark sulfide matrix</td></tr>
                <tr><td class="px-4 py-2">Arsenopyrite</td><td class="px-4 py-2">FeAsS</td><td class="px-4 py-2">Refractory gold carrier</td></tr>
                <tr><td class="px-4 py-2">Pyrite</td><td class="px-4 py-2">FeS₂</td><td class="px-4 py-2">Common in fractures</td></tr>
                <tr><td class="px-4 py-2">Visible Gold</td><td class="px-4 py-2">Au</td><td class="px-4 py-2">Free-milling in cracks</td></tr>
                <tr><td class="px-4 py-2">Calaverite</td><td class="px-4 py-2">AuTe₂</td><td class="px-4 py-2">Telluride gold</td></tr>
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
            <h2 class="text-3xl font-bold text-stone-900 mb-4">Pyrite-Quartz Vein Ore with Chalcopyrite Inclusions</h2>
            <p class="text-lg text-stone-700 leading-relaxed mb-6">
            Fractured white quartz vein material studded with brassy pyrite crystals and subtle chalcopyrite flecks — the classic "fool's gold" ore from Tomboy's upper levels. The cubic pyrite often masked free-milling gold and tellurides, making this ore a prospector's dream (and nightmare). The dull luster and heavy weight (82g for 2 inches) confirm it's loaded with sulfides.
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
                <tr><td class="px-4 py-2">Quartz</td><td class="px-4 py-2">SiO₂</td><td class="px-4 py-2">Fractured vein host</td></tr>
                <tr><td class="px-4 py-2">Pyrite</td><td class="px-4 py-2">FeS₂</td><td class="px-4 py-2">Brassy "fool's gold" crystals, gold carrier</td></tr>
                <tr><td class="px-4 py-2">Chalcopyrite</td><td class="px-4 py-2">CuFeS₂</td><td class="px-4 py-2">Yellow metallic flecks, copper & gold</td></tr>
                <tr><td class="px-4 py-2">Native Gold</td><td class="px-4 py-2">Au</td><td class="px-4 py-2">Free-milling in pyrite cracks</td></tr>
                <tr><td class="px-4 py-2">Calaverite</td><td class="px-4 py-2">AuTe₂</td><td class="px-4 py-2">Telluride gold</td></tr>
                <tr><td class="px-4 py-2">Pyrrhotite</td><td class="px-4 py-2">Fe₁₋ₓS</td><td class="px-4 py-2">Minor dark matrix</td></tr>
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
            <h2 class="text-3xl font-bold text-stone-900 mb-4">Heavy Red-Black Oxidized Telluride Ore</h2>
            <p class="text-lg text-stone-700 leading-relaxed mb-6">
            Extremely dense, crumbly red-black ore — the classic Tomboy telluride-rich specimen from the oxidized zone. The deep red is hematite/limonite staining from iron-rich sulfides, while the black is massive pyrrhotite and tellurides. The shiny metallic specks are native gold and calaverite/sylvanite — this is the ore that made Tomboy famous for its refractory gold locked in tellurides. At 137g for a 2-inch piece, this is one of the heaviest Tomboy ores per volume due to its sulfide/telluride content.
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
                <tr><td class="px-4 py-2">Calaverite</td><td class="px-4 py-2">AuTe₂</td><td class="px-4 py-2">Primary gold telluride — shiny specs</td></tr>
                <tr><td class="px-4 py-2">Sylvanite</td><td class="px-4 py-2">(Au,Ag)₂Te₄</td><td class="px-4 py-2">Silver-gold telluride</td></tr>
                <tr><td class="px-4 py-2">Pyrrhotite</td><td class="px-4 py-2">Fe₁₋ₓS</td><td class="px-4 py-2">Black massive sulfide matrix</td></tr>
                <tr><td class="px-4 py-2">Hematite/Limonite</td><td class="px-4 py-2">Fe₂O₃ / FeO(OH)</td><td class="px-4 py-2">Red oxidation staining</td></tr>
                <tr><td class="px-4 py-2">Native Gold</td><td class="px-4 py-2">Au</td><td class="px-4 py-2">Visible free gold flecks</td></tr>
                <tr><td class="px-4 py-2">Chalcopyrite</td><td class="px-4 py-2">CuFeS₂</td><td class="px-4 py-2">Minor brassy inclusions</td></tr>
                <tr><td class="px-4 py-2">Quartz</td><td class="px-4 py-2">SiO₂</td><td class="px-4 py-2">Minor vein remnants</td></tr>
                </tbody>
            </table>
            </div>
          </div>
        </div>
      </div> <!-- ← THIS WAS THE MISSING ONE -->
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
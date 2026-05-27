import DisclaimerBox from '../components/DisclaimerBox';

export default function Safety() {
  return (
    <div className="space-y-8 pb-8">
      <section className="rounded-[2rem] border border-wood/10 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-forest">Biztonságos gyűjtés</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-forest/80">
          A gyűjtésnél a biztonság, a természet tisztelete és a jogi szabályok betartása a legfontosabb. Ez az oldal kizárólag tájékoztató jellegű, nem ad orvosi, botanikai vagy jogi tanácsot.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-[2rem] border border-wood/10 bg-mintleaf/70 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-forest">Azonosítás</h2>
          <p className="mt-3 text-forest/80 leading-7">Csak olyan növényt gyűjts, amelyet teljes bizonyossággal felismertél. Ha bizonytalan vagy, ne gyűjtsd le.</p>
        </section>

        <section className="rounded-[2rem] border border-wood/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-forest">Szennyezett területek kerülése</h2>
          <p className="mt-3 text-forest/80 leading-7">Ne gyűjts forgalmas utak, vasútvonalak, ipari területek, szemétlerakók, permetezett földek vagy szennyezett vízfolyások közelében.</p>
        </section>

        <section className="rounded-[2rem] border border-wood/10 bg-mintleaf/70 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-forest">Védett növények és területek</h2>
          <p className="mt-3 text-forest/80 leading-7">Védett növény gyűjtése tilos lehet. Védett természeti területen, nemzeti park területén, állami erdőben vagy magánterületen külön engedélyre lehet szükség.</p>
        </section>

        <section className="rounded-[2rem] border border-wood/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-forest">Mértékletes gyűjtés</h2>
          <p className="mt-3 text-forest/80 leading-7">Soha ne szedd le az összes növényt egy helyről. Hagyd meg a növényállomány jelentős részét a természetes megújuláshoz és az állatok számára.</p>
        </section>

        <section className="rounded-[2rem] border border-wood/10 bg-mintleaf/70 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-forest">Egészségügyi óvatosság</h2>
          <p className="mt-3 text-forest/80 leading-7">A gyógynövények hatóanyagokat tartalmazhatnak, kölcsönhatásba léphetnek gyógyszerekkel, és allergiás reakciót válthatnak ki.</p>
        </section>

        <section className="rounded-[2rem] border border-wood/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-forest">Gyermekekkel történő gyűjtés</h2>
          <p className="mt-3 text-forest/80 leading-7">Gyermekekkel csak különösen óvatosan gyűjts. Tanítsd meg nekik, hogy semmit ne kóstoljanak meg engedély nélkül.</p>
        </section>

        <section className="rounded-[2rem] border border-wood/10 bg-mintleaf/70 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-forest">Szárítás és tárolás</h2>
          <p className="mt-3 text-forest/80 leading-7">Csak tiszta, egészséges növényi részeket száríts. Penészes, elszíneződött vagy szennyezett növényi részt ne használj.</p>
        </section>
      </div>

      <DisclaimerBox title="Felelősségi nyilatkozat" type="legal">
        <p>Az oldal tájékoztató jellegű. A gyűjtésből, feldolgozásból vagy felhasználásból eredő döntésekért a felhasználó felel.</p>
      </DisclaimerBox>
    </div>
  );
}

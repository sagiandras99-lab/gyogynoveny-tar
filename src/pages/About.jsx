export default function About() {
  return (
    <div className="space-y-8 pb-8">
      <section className="rounded-[2rem] border border-wood/10 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-forest">Az oldalról</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-forest/80">
          A GyógynövényTár egy magyar nyelvű, kezdőbarát weboldal, amely Magyarországon gyakori, gyűjthető gyógynövényeket és vadterméseket mutat be. A cél egy egyszerű, átlátható gyűjtési útmutató készítése, nem pedig egy tudományos lexikon.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-wood/10 bg-mintleaf/70 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-forest">Kinek készült?</h2>
          <p className="mt-4 text-forest/80 leading-7">
            A kezdő gyógynövénygyűjtőknek, természetjáróknak, kertbarátoknak és mindazoknak, akik egyszerű, magyar nyelvű útmutatót keresnek a gyűjthető növényekhez.
          </p>
        </div>
        <div className="rounded-[2rem] border border-wood/10 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-forest">Mit nem vállal az oldal?</h2>
          <p className="mt-4 text-forest/80 leading-7">
            Az oldal nem ad orvosi, gyógyszerészi, botanikai vagy jogi tanácsot. Nem helyettesíti a szakértői véleményt, diagnózist vagy kezelési javaslatot.
          </p>
        </div>
      </section>

      <section className="rounded-[2rem] border border-wood/10 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-forest">A hitelesség és a felelősség</h2>
        <ul className="mt-4 space-y-3 text-forest/80 leading-7 list-disc list-inside">
          <li>Az oldal célja kezdőbarát tájékoztatás, nem orvosi tanácsadás.</li>
          <li>A növények védettségi státusza, gyűjtési szabályai és helyi körülményei változhatnak.</li>
          <li>Mielőtt gyűjtesz, mindig ellenőrizd a helyi szabályokat és a növény pontos azonosítását.</li>
          <li>Törekszünk a felelős, óvatos megfogalmazásra, és a biztonságos gyűjtés hangsúlyozására.</li>
        </ul>
      </section>

      <section className="rounded-[2rem] border border-wood/10 bg-mintleaf/70 p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-forest">Fejlesztési megjegyzés</h2>
        <p className="mt-4 text-forest/80 leading-7">
          A weboldal helyi JavaScript adatokon alapul, és további növényekkel, térképes nézettel vagy gyűjtési naplóval bővíthető a jövőben.
        </p>
      </section>
    </div>
  );
}

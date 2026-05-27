import { Link } from 'react-router-dom';
import { plants } from '../data/plants';
import { getCurrentMonthNumber, isHarvestableNow } from '../utils/dateUtils';
import PlantCard from '../components/PlantCard';
import DisclaimerBox from '../components/DisclaimerBox';

export default function Home() {
  const currentMonth = getCurrentMonthNumber();
  const nowPlants = plants.filter((plant) => isHarvestableNow(plant)).slice(0, 6);
  const beginnerPlants = plants.filter((plant) => plant.beginnerFriendly).slice(0, 4);

  return (
    <div className="space-y-10 py-8">
      <section className="hero-bg rounded-[3rem] border border-wood/10 bg-gradient-to-br from-mintleaf/90 via-softcream to-white p-8 shadow-lg shadow-wood/10 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-forest/20 bg-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-forest/75 shadow-sm">
              GyógynövényTár
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-forest sm:text-5xl">Egyszerű magyar útmutató gyűjthető gyógynövényekhez és vadtermésekhez</h1>
            <p className="max-w-2xl text-base leading-8 text-forest/75 sm:text-lg">
              Fedezd fel Magyarország gyakori gyűjthető növényeit könnyedén, természetes stílusban. Praktikus segítséget kapsz a gyűjtéshez és a környezettudatos tájékozódáshoz.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/plants" className="rounded-full bg-forest px-7 py-3 text-sm font-semibold text-softcream shadow-lg shadow-forest/10 transition hover:bg-wood">
                Növények böngészése
              </Link>
              <Link to="/calendar" className="rounded-full border border-forest bg-white/80 px-7 py-3 text-sm font-semibold text-forest shadow-sm transition hover:bg-mintleaf">
                Gyűjtési naptár
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-wood/10 bg-white/90 p-8 shadow-xl shadow-forest/5">
            <div className="absolute -right-10 top-8 h-24 w-24 rounded-full bg-mintleaf/80 blur-2xl" />
            <div className="absolute -left-10 bottom-10 h-28 w-28 rounded-full bg-sand/60 blur-2xl" />
            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-forest/70">Most gyűjthető</p>
              <p className="mt-4 text-lg font-semibold text-forest">Aktuális hónap: {currentMonth}. hónap</p>
              <div className="mt-6 grid gap-4">
                {nowPlants.map((plant) => (
                  <div key={plant.id} className="rounded-[2rem] bg-softcream p-5 shadow-sm shadow-wood/5">
                    <p className="font-semibold text-forest">{plant.name}</p>
                    <p className="mt-1 text-sm text-forest/70">{plant.partsUsed.join(', ')}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerBox title="Fontos" type="collection">
        <p>A GyógynövényTár tájékoztató jellegű gyűjtési segédlet. Nem helyettesíti a botanikai, orvosi vagy gyógyszerészi szakértői tanácsot.</p>
      </DisclaimerBox>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2.5rem] border border-wood/10 bg-white p-8 shadow-xl shadow-forest/5">
          <h2 className="text-2xl font-semibold text-forest">Kezdőknek ajánlott növények</h2>
          <p className="mt-3 text-forest/80">Olyan növények, amelyek könnyebben felismerhetők és általában kevésbé kockázatosak az első gyűjtésekhez.</p>
          <div className="mt-6 grid gap-4">
            {beginnerPlants.map((plant) => (
              <div key={plant.id} className="rounded-[2rem] border border-wood/10 bg-mintleaf/70 p-5 shadow-sm shadow-wood/5">
                <p className="font-semibold text-forest">{plant.name}</p>
                <p className="mt-1 text-sm text-forest/75">{plant.shortDescription}</p>
              </div>
            ))}
          </div>
        </div>
        <DisclaimerBox title="Biztonsági figyelmeztetés">
          <p>Minden növény esetében fontos a pontos azonosítás. Az oldal tájékoztató jellegű, nem helyettesíti a szakértői vagy orvosi tanácsot.</p>
          <p>Ne gyűjts védett növényt, és kerüld a szennyezett vagy permetezett területeket.</p>
        </DisclaimerBox>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between rounded-[2rem] border border-wood/10 bg-white p-6 shadow-sm">
          <div>
            <h2 className="text-2xl font-semibold text-forest">További segítség a gyűjtéshez</h2>
            <p className="mt-2 text-forest/75">Keresd a részletes adatlapokat, a gyűjtési naptárat és a biztonsági útmutatót.</p>
          </div>
          <Link to="/safety" className="rounded-full bg-wood px-5 py-3 text-sm font-semibold text-softcream transition hover:bg-forest">
            Biztonságos gyűjtés
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {nowPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { monthNames, getPlantsByMonth, getCurrentMonthNumber } from '../utils/dateUtils';
import { plants } from '../data/plants';

export default function Calendar() {
  const currentMonth = getCurrentMonthNumber();

  return (
    <div className="space-y-8 pb-8">
      <section className="rounded-[2rem] border border-wood/10 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-forest">Gyűjtési naptár</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-forest/80">
          Nézd meg hónapról hónapra, mely növények gyűjthetők. Az aktuális hónap külön kiemelve segít gyorsabban megtalálni a most aktuális növényeket.
        </p>
      </section>

      <div className="space-y-6">
        {monthNames.map((monthName, index) => {
          const monthNumber = index + 1;
          const monthPlants = getPlantsByMonth(plants, monthNumber);
          const isCurrent = monthNumber === currentMonth;

          return (
            <section
              key={monthName}
              className={`rounded-[2rem] border p-6 shadow-sm ${isCurrent ? 'border-forest bg-mintleaf/70' : 'border-wood/10 bg-white'}`}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-2xl font-semibold text-forest">{monthName}</h2>
                {isCurrent ? <span className="rounded-full bg-forest px-4 py-2 text-sm font-semibold text-softcream">Aktuális hónap</span> : null}
              </div>
              {monthPlants.length > 0 ? (
                <ul className="mt-5 space-y-3">
                  {monthPlants.map((plant) => (
                    <li key={plant.id} className="rounded-3xl border border-wood/10 bg-mintleaf/50 p-4">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="font-semibold text-forest">{plant.name}</p>
                          <p className="text-sm text-forest/75">Gyűjthető rész: {plant.partsUsed.join(', ')}</p>
                        </div>
                        <Link
                          to={`/plants/${plant.slug}`}
                          className="mt-2 inline-flex rounded-full bg-forest px-4 py-2 text-sm font-semibold text-softcream transition hover:bg-wood sm:mt-0"
                        >
                          Részletek
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-5 text-forest/80">Ebben a hónapban nincs felvett növény a gyűjtési naptárba.</p>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

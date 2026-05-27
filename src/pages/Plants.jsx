import { useMemo, useState } from 'react';
import { plants } from '../data/plants';
import { monthNames } from '../utils/dateUtils';
import PlantCard from '../components/PlantCard';
import FilterBar from '../components/FilterBar';
import DisclaimerBox from '../components/DisclaimerBox';

const parts = ['összes', 'levél', 'virág', 'termés', 'gyökér', 'hajtás'];
const difficulties = ['összes', 'kezdő', 'közepes', 'fokozott figyelmet igényel'];

export default function Plants() {
  const [search, setSearch] = useState('');
  const [month, setMonth] = useState(0);
  const [part, setPart] = useState('összes');
  const [difficulty, setDifficulty] = useState('összes');

  const filteredPlants = useMemo(() => {
    return plants.filter((plant) => {
      const keyword = search.trim().toLowerCase();
      const matchesSearch =
        keyword === '' ||
        plant.name.toLowerCase().includes(keyword) ||
        plant.latinName.toLowerCase().includes(keyword) ||
        plant.shortDescription.toLowerCase().includes(keyword) ||
        plant.category.some((category) => category.toLowerCase().includes(keyword));

      const matchesMonth = month === 0 || plant.harvestMonths.includes(month);
      const matchesPart = part === 'összes' || plant.partsUsed.some((item) => item.toLowerCase().includes(part));
      const matchesDifficulty = difficulty === 'összes' || plant.difficulty === difficulty;

      return matchesSearch && matchesMonth && matchesPart && matchesDifficulty;
    });
  }, [search, month, part, difficulty]);

  return (
    <div className="space-y-8 pb-8">
      <section className="rounded-[2rem] border border-wood/10 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-forest">Növények listája</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-forest/80">
          Böngéssz a gyűjthető gyógynövények és vadtermések között. Használd a keresőt és a szűrőket, hogy könnyen megtaláld a számodra legfontosabb növényeket.
        </p>
      </section>

      <DisclaimerBox title="Figyelem" type="collection">
        <p>A listában szereplő növényeket csak biztos azonosítás után gyűjtsd. A gyűjthetőség helytől, védettségi státusztól és helyi szabályoktól függhet.</p>
      </DisclaimerBox>

      <FilterBar
        search={search}
        onSearch={setSearch}
        month={month}
        onMonthChange={setMonth}
        part={part}
        onPartChange={setPart}
        difficulty={difficulty}
        onDifficultyChange={setDifficulty}
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredPlants.length > 0 ? (
          filteredPlants.map((plant) => <PlantCard key={plant.id} plant={plant} />)
        ) : (
          <div className="rounded-[2rem] border border-wood/10 bg-mintleaf/70 p-10 text-center text-forest/80">
            <h2 className="text-2xl font-semibold">Nincs találat</h2>
            <p className="mt-3">Próbáld meg módosítani a keresési szót vagy a szűrőket.</p>
          </div>
        )}
      </section>
    </div>
  );
}

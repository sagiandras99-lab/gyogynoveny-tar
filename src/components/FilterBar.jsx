import { monthNames } from '../utils/dateUtils';

const partOptions = ['összes', 'levél', 'virág', 'termés', 'gyökér', 'hajtás'];
const difficultyOptions = ['összes', 'kezdő', 'közepes', 'fokozott figyelmet igényel'];

export default function FilterBar({ search, onSearch, month, onMonthChange, part, onPartChange, difficulty, onDifficultyChange }) {
  return (
    <div className="rounded-[2.5rem] border border-wood/10 bg-white p-6 shadow-xl shadow-wood/5">
      <div className="grid gap-4 lg:grid-cols-[1.7fr_1fr]">
        <label className="block">
          <span className="text-sm font-semibold text-forest">Keresés</span>
          <input
            type="search"
            placeholder="Név, latin név vagy leírás"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            className="mt-2 w-full rounded-[1.75rem] border border-wood/20 bg-mintleaf/60 px-4 py-4 text-base text-forest outline-none transition focus:border-forest focus:ring-2 focus:ring-mintleaf"
          />
        </label>
        <div className="grid gap-4 sm:grid-cols-3">
          <label className="block">
            <span className="text-sm font-semibold text-forest">Hónap</span>
            <select
              value={month}
              onChange={(e) => onMonthChange(Number(e.target.value))}
              className="mt-2 w-full rounded-[1.75rem] border border-wood/20 bg-mintleaf/60 px-4 py-4 text-base text-forest outline-none transition focus:border-forest focus:ring-2 focus:ring-mintleaf"
            >
              <option value={0}>összes</option>
              {monthNames.map((name, index) => (
                <option key={name} value={index + 1}>
                  {name}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-forest">Gyűjthető rész</span>
            <select
              value={part}
              onChange={(e) => onPartChange(e.target.value)}
              className="mt-2 w-full rounded-[1.75rem] border border-wood/20 bg-mintleaf/60 px-4 py-4 text-base text-forest outline-none transition focus:border-forest focus:ring-2 focus:ring-mintleaf"
            >
              {partOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-forest">Nehézség</span>
            <select
              value={difficulty}
              onChange={(e) => onDifficultyChange(e.target.value)}
              className="mt-2 w-full rounded-[1.75rem] border border-wood/20 bg-mintleaf/60 px-4 py-4 text-base text-forest outline-none transition focus:border-forest focus:ring-2 focus:ring-mintleaf"
            >
              {difficultyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}

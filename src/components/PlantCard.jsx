import { Link } from 'react-router-dom';
import Badge from './Badge';
import { isHarvestableNow } from '../utils/dateUtils';
import { plantImages } from '../data/plantImages';

function getCategoryIcon(categories) {
  if (categories.some((cat) => cat.includes('virág'))) return '✿';
  if (categories.some((cat) => cat.includes('levél') || cat.includes('hajtás'))) return '🌿';
  if (categories.some((cat) => cat.includes('termés'))) return '🍂';
  return '●';
}

function formatDifficulty(difficulty) {
  if (difficulty === 'kezdő') return 'Kezdő';
  if (difficulty === 'közepes') return 'Közepes';
  return 'Fokozott figyelmet igényel';
}

export default function PlantCard({ plant }) {
  const harvestable = isHarvestableNow(plant);
  const icon = getCategoryIcon(plant.category);
  const difficultyLabel = formatDifficulty(plant.difficulty);
  const imageSrc = plantImages[plant.image];

  return (
    <article className="group flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-wood/10 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="rounded-[1.75rem] bg-mintleaf/60 p-4 shadow-inner shadow-wood/5">
        <div className="flex items-start gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap gap-2">
              {plant.beginnerFriendly && <Badge variant="success">Kezdőknek</Badge>}
              <Badge variant={plant.difficulty === 'fokozott figyelmet igényel' ? 'warning' : plant.difficulty === 'közepes' ? 'info' : 'neutral'}>
                {difficultyLabel}
              </Badge>
            </div>
            <h2 className="mt-3 truncate text-xl font-semibold text-forest">{plant.name}</h2>
            <p className="text-sm italic text-forest/70">{plant.latinName}</p>
          </div>
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-wood/10 bg-wood/5 text-2xl text-forest/70 overflow-hidden">
            {imageSrc ? (
              <img src={imageSrc} alt={plant.name} className="h-full w-full object-cover rounded-full" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-2xl">{icon}</div>
            )}
          </div>
        </div>
        <p className="mt-4 line-clamp-2 text-sm leading-6 text-forest/85">{plant.shortDescription}</p>
      </div>

      <div className="mt-4 grid gap-2 text-xs text-forest/80">
        <div className="rounded-[1.5rem] border border-wood/10 bg-softcream px-3 py-2">
          <span className="font-semibold text-forest">Gyűjthető rész:</span>
          <span className="mt-1 block line-clamp-2">{plant.partsUsed.join(', ')}</span>
        </div>
        <div className="rounded-[1.5rem] border border-wood/10 bg-softcream px-3 py-2">
          <span className="font-semibold text-forest">Időszak:</span>
          <span className="mt-1 block">{plant.harvestPeriod}</span>
        </div>
        <div className="rounded-[1.5rem] border border-wood/10 bg-softcream px-3 py-2">
          <span className="font-semibold text-forest">Élőhely:</span>
          <span className="mt-1 block line-clamp-2">{plant.habitat.join(', ')}</span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {harvestable && <div className="inline-flex min-w-fit items-center justify-center rounded-full bg-forest px-4 py-2 text-sm font-semibold text-softcream">Most gyűjthető</div>}
        <Link to={`/plants/${plant.slug}`} className="ml-auto inline-flex min-w-[96px] items-center justify-center rounded-full bg-forest px-4 py-2 text-sm font-semibold text-softcream transition hover:bg-wood sm:ml-0 sm:px-5">
          Részletek
        </Link>
      </div>
    </article>
  );
}

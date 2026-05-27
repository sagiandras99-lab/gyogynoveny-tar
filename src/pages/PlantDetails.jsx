import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { plants } from '../data/plants';
import DisclaimerBox from '../components/DisclaimerBox';
import Badge from '../components/Badge';
import ImageModal from '../components/ImageModal';
import { plantImages } from '../data/plantImages';

export default function PlantDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { slug } = useParams();
  const plant = plants.find((item) => item.slug === slug);

  if (!plant) {
    return (
      <div className="rounded-[2rem] border border-wood/10 bg-white p-10 shadow-sm">
        <h1 className="text-3xl font-semibold text-forest">A keresett növény nem található.</h1>
        <p className="mt-4 text-forest/75">Ellenőrizd a linket, vagy térj vissza a növények listájához.</p>
        <Link to="/plants" className="mt-6 inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-softcream transition hover:bg-wood">
          Vissza a növényekhez
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-8">
      <section className="rounded-[2rem] border border-wood/10 bg-white p-8 shadow-sm">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <h1 className="text-4xl font-semibold text-forest">{plant.name}</h1>
            <p className="mt-2 text-xl italic text-forest/70">{plant.latinName}</p>
            <p className="mt-5 text-base leading-8 text-forest/80">{plant.shortDescription}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Badge variant={plant.beginnerFriendly ? 'success' : 'info'}>
                {plant.beginnerFriendly ? 'Kezdőknek' : 'Haladó'}
              </Badge>
              <Badge variant="neutral">{plant.difficulty}</Badge>
              {plant.protected ? <Badge variant="warning">Védett lehet</Badge> : null}
            </div>
          </div>
          <div className="space-y-6">
              <div className="rounded-[2rem] border border-wood/10 bg-mintleaf/80 p-6 text-forest">
                <div className="flex h-full flex-col items-center justify-center rounded-[1.75rem] border border-wood/20 bg-white p-4 text-center shadow-sm">
                  {plantImages[plant.image] ? (
                    <>
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="mb-4 h-36 w-full rounded-[1.5rem] overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                        aria-label="Kép nagyítása"
                      >
                        <img src={plantImages[plant.image]} alt={plant.name} className="h-full w-full object-contain" />
                      </button>
                      <ImageModal
                        isOpen={isModalOpen}
                        imageSrc={plantImages[plant.image]}
                        altText={plant.name}
                        onClose={() => setIsModalOpen(false)}
                      />
                    </>
                  ) : (
                    <div className="mb-4 h-36 w-full rounded-[1.5rem] bg-wood/5 flex items-center justify-center text-3xl">🌿</div>
                  )}
                  <p className="text-lg font-semibold text-forest">{plant.name}</p>
                  <p className="mt-2 text-sm text-forest/70">{plant.name} illusztrációja.</p>
                </div>
              </div>
            <div className="rounded-[2rem] border border-wood/10 bg-mintleaf/80 p-6 text-forest">
              <p className="font-semibold">Gyűjthető részek</p>
              <p className="mt-2 text-forest/80">{plant.partsUsed.join(', ')}</p>
              <p className="mt-4 font-semibold">Gyűjtési időszak</p>
              <p className="mt-2 text-forest/80">{plant.harvestPeriod}</p>
              <p className="mt-4 font-semibold">Élőhely</p>
              <p className="mt-2 text-forest/80">{plant.habitat.join(', ')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-wood/10 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-forest">Leírás</h2>
          <p className="mt-4 text-forest/80 leading-8">{plant.description}</p>
          <div className="mt-6 rounded-[2rem] bg-mintleaf/60 p-5">
            <h3 className="text-lg font-semibold text-forest">Felismerési segítség</h3>
            <p className="mt-3 text-forest/80 leading-7">{plant.identification}</p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-wood/10 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-forest">Hagyományos felhasználás</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-forest/80">
              {plant.traditionalUses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm italic text-forest/70">
              A felsorolt felhasználások hagyományos vagy népi felhasználási példák, nem jelentenek orvosi ajánlást.
            </p>
          </div>
          <div className="rounded-[2rem] border border-wood/10 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-forest">Figyelmeztetések</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-forest/80">
              {plant.warnings.map((warning) => (
                <li key={warning}>{warning}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-wood/10 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-forest">Összetéveszthető</h2>
            <p className="mt-4 text-forest/80">{plant.lookalikes.join(', ')}</p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-3">
        <DisclaimerBox title="Orvosi figyelmeztetés" type="medical">
          <p>Az oldalon található információk tájékoztató jellegűek, nem minősülnek orvosi tanácsnak, diagnózisnak vagy kezelési javaslatnak.</p>
          <p>Gyógyszerszedés, várandósság, krónikus betegség vagy más egészségügyi kérdés esetén kérj szakképzett szakember tanácsát.</p>
        </DisclaimerBox>
        <DisclaimerBox title="Gyűjtési óvintézkedések" type="collection">
          <p>Csak olyan növényt gyűjts, amelyet teljes bizonyossággal felismertél. Ne gyűjts szennyezett, permetezett, magán- vagy védett területről.</p>
        </DisclaimerBox>
        <DisclaimerBox title="Jogi figyelmeztetés" type="legal">
          <p>{plant.legalNote}</p>
          <p>Védett területen, állami erdőben vagy magánterületen gyűjtés engedélyhez kötött lehet.</p>
        </DisclaimerBox>
      </div>

      <div className="flex justify-start">
        <Link to="/plants" className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-softcream transition hover:bg-wood">
          Vissza a növények listájához
        </Link>
      </div>
    </div>
  );
}

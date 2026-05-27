import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Főoldal', to: '/' },
  { label: 'Növények', to: '/plants' },
  { label: 'Gyűjtési naptár', to: '/calendar' },
  { label: 'Biztonságos gyűjtés', to: '/safety' },
  { label: 'Az oldalról', to: '/about' }
];

export default function Footer() {
  return (
    <footer className="border-t border-wood/15 bg-white/80 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-lg font-semibold text-forest">GyógynövényTár</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-forest/70">
            A GyógynövényTár tájékoztató jellegű oldal. Nem helyettesít orvosi, gyógyszerészi, botanikai vagy jogi szakértői tanácsot.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-forest/75">
          {footerLinks.map((item) => (
            <Link key={item.to} to={item.to} className="rounded-full bg-mintleaf px-4 py-2 transition hover:bg-wood/10">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

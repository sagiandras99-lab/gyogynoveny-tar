import { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Főoldal', to: '/' },
  { label: 'Növények', to: '/plants' },
  { label: 'Gyűjtési naptár', to: '/calendar' },
  { label: 'Biztonságos gyűjtés', to: '/safety' },
  { label: 'Az oldalról', to: '/about' }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-wood/20 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-semibold tracking-tight text-forest">
          GyógynövényTár
        </Link>
        <button
          type="button"
          className="inline-flex items-center rounded-2xl border border-wood/15 bg-mintleaf px-3 py-2 text-sm font-medium text-forest hover:bg-wood/5 sm:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          Menü
        </button>
        <nav className="hidden gap-4 sm:flex">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-2xl px-3 py-2 text-sm font-medium text-forest transition hover:bg-mintleaf"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      {open ? (
        <div className="space-y-2 border-t border-wood/10 bg-softcream px-4 pb-4 sm:hidden">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block rounded-2xl bg-white px-4 py-3 text-base font-medium text-forest shadow-sm"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}

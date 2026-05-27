import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Plants from './pages/Plants';
import PlantDetails from './pages/PlantDetails';
import Calendar from './pages/Calendar';
import Safety from './pages/Safety';
import About from './pages/About';

function App() {
  return (
    <div className="min-h-screen bg-softcream text-forest">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/plants/:slug" element={<PlantDetails />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<div className="rounded-3xl border border-sand bg-white p-10 shadow-md">
            <h1 className="text-3xl font-semibold">Oldal nem található</h1>
            <p className="mt-4 text-base leading-7 text-forest/75">A keresett oldal nem érhető el. Használd a felső menüt vagy térj vissza a főoldalra.</p>
          </div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

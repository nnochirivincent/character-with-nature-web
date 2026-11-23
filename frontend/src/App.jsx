import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Discovery from './components/Discovery.jsx';
import AgePathways from './components/AgePathways.jsx';
import FourLaws from './components/FourLaws.jsx';
import Resources from './components/Resources.jsx';
import PilotInvite from './components/PilotInvite.jsx';

function Home() {
  return (
    <>
      <Hero />
      <Discovery />
      <AgePathways />
      <FourLaws />
      <Resources />
      <PilotInvite />
    </>
  );
}

function ComingSoon({ title }) {
  return (
    <section className="wrap" style={{ padding: '96px 24px' }}>
      <h1>{title}</h1>
      <p>This page is coming soon.</p>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programmes" element={<ComingSoon title="Programmes" />} />
          <Route path="/programmes/ages-3-5" element={<ComingSoon title="Ages 3–5" />} />
          <Route path="/programmes/ages-6-8" element={<ComingSoon title="Ages 6–8" />} />
          <Route path="/programmes/ages-9-12" element={<ComingSoon title="Ages 9–12" />} />
          <Route path="/approach" element={<ComingSoon title="Our Approach" />} />
          <Route path="/guidance" element={<ComingSoon title="Parent & Educator Guidance" />} />
          <Route path="/pilot" element={<ComingSoon title="The First Pilot" />} />
          <Route path="/pilot-access" element={<ComingSoon title="Pilot Access" />} />
          <Route path="/login" element={<ComingSoon title="Log In" />} />
          <Route path="*" element={<ComingSoon title="Page not found" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LawnMowing from './pages/LawnMowing';
import Landscaping from './pages/Landscaping';
import Fertilization from './pages/Fertilization';
import SodInstallation from './pages/SodInstallation';
import PropertyMaintenance from './pages/PropertyMaintenance';
import CleaningServices from './pages/CleaningServices';
import About from './pages/About';
import Contact from './pages/Contact';
import ServiceAreas from './pages/ServiceAreas';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lawn-mowing" element={<LawnMowing />} />
          <Route path="/landscaping" element={<Landscaping />} />
          <Route path="/fertilization" element={<Fertilization />} />
          <Route path="/sod-installation" element={<SodInstallation />} />
          <Route path="/property-maintenance" element={<PropertyMaintenance />} />
          <Route path="/cleaning-services" element={<CleaningServices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

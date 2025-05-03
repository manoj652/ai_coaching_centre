import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Programs } from './components/Programs';
import { SpecializedAreas } from './components/SpecializedAreas';
import { Methodology } from './components/Methodology';
import { SuccessStories } from './components/SuccessStories';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Programs />
        <SpecializedAreas />
        <Methodology />
        <SuccessStories />
        <Pricing />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
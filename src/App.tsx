import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  const [animateCallIcon, setAnimateCallIcon] = useState(false);

  const handleContactClick = () => {
    setAnimateCallIcon(true);
    setTimeout(() => setAnimateCallIcon(false), 7000); // Reset after 3 seconds
  };

  return (
    <div className="min-h-screen">
      <Navbar onContactClick={handleContactClick} />
      <Hero />
      <About />
      <Products />
      <Services />
      <Partners />
      <Contact />
      <Footer animateCallIcon={animateCallIcon} />
    </div>
  );
}

export default App;
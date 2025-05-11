import { useEffect, useState } from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import HowItWorks from './HowItWorks.jsx';
import WhyChooseUS from './WhyChooseUs.jsx';
import Testimonals from './Testimonals.jsx';
import ContactForm from './ContactForm.jsx';
import Footer from './Footer.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []);

  // Apply theme to <html> element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <HowItWorks />
      <WhyChooseUS />
      <Testimonals />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;

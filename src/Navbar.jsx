import { useState } from "react";
import { Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="text-2xl font-semibold italic text-blue-600 dark:text-blue-400">
        SoftSell
      </div>

      <ul className="hidden md:flex gap-8 text-lg font-medium text-black dark:text-white">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">How It Works</li>
        <li className="hover:text-blue-600 cursor-pointer">Why Choose Us</li>
        <li className="hover:text-blue-600 cursor-pointer">Testimonials</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>

      <div className="flex items-center gap-4">
        <Switch checked={darkMode} onChange={toggleDarkMode} />

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <CloseIcon fontSize="large" className="text-black dark:text-white" /> : <MenuIcon fontSize="large" className="text-black dark:text-white" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 flex flex-col items-center gap-6 py-6 shadow-md md:hidden text-black dark:text-white">
          <li onClick={toggleMenu} className="hover:text-blue-600 cursor-pointer">Home</li>
          <li onClick={toggleMenu} className="hover:text-blue-600 cursor-pointer">How It Works</li>
          <li onClick={toggleMenu} className="hover:text-blue-600 cursor-pointer">Why Choose Us</li>
          <li onClick={toggleMenu} className="hover:text-blue-600 cursor-pointer">Testimonials</li>
          <li onClick={toggleMenu} className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
}

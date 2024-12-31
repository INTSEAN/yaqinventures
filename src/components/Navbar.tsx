import React from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from '../assets/logo.jpg';
type NavbarProps = {
  onContactClick: () => void;
};

export default function Navbar({ onContactClick }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-x-4">
            <a href="#">
              <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
            </a>
            <span className="text-xl text-slate-950">Yaqin Ventures</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#partners" className="nav-link">Partners</a>
            <a href="#contact" className="nav-link" onClick={onContactClick}>Contact</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-green-700 hover:underline">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-700">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-green-700">About</a>
            <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-green-700">Products</a>
            <a href="#partners" className="block px-3 py-2 text-gray-700 hover:text-green-700">Partners</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-green-700" onClick={onContactClick}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
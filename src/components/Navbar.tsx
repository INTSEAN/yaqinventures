import React from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

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
              <img src="data:image/png;base64,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" alt="Logo" className="w-12 h-12 rounded-full" />
            </a>
            <span className="text-2xl text-slate-950">Yaqin Ventures</span>
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
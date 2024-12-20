import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './navigation/Logo';
import { images } from '../data/images';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Logo src={images.logo} alt="Shree-Bhairab Logo" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-amber-500 transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-amber-500 transition-colors">About</a>
            <a href="#events" className="text-white hover:text-amber-500 transition-colors">Events</a>
            <a href="#gallery" className="text-white hover:text-amber-500 transition-colors">Gallery</a>
            <a href="#contact" className="text-white hover:text-amber-500 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-white hover:text-amber-500 transition-colors">Home</a>
            <a href="#about" className="block px-3 py-2 text-white hover:text-amber-500 transition-colors">About</a>
            <a href="#events" className="block px-3 py-2 text-white hover:text-amber-500 transition-colors">Events</a>
            <a href="#gallery" className="block px-3 py-2 text-white hover:text-amber-500 transition-colors">Gallery</a>
            <a href="#contact" className="block px-3 py-2 text-white hover:text-amber-500 transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

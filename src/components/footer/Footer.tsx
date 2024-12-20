import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import FooterLogo from './FooterLogo';
import { images } from '../../data/images';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand and Social */}
          <div className="space-y-6">
            <FooterLogo src={images.footerLogo} alt="Shree Bhairab Logo" />
            <p className="text-gray-400">Experience the power of instrumental music that transcends boundaries and touches souls.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61554835328090" className="hover:text-amber-500 transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Twitter /></a>
              <a href="https://www.instagram.com/shree_bhairab/" className="hover:text-amber-500 transition-colors"><Instagram /></a>
              <a href="https://www.youtube.com/@shreebhairab" className="hover:text-amber-500 transition-colors"><Youtube /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors">About</a></li>
              <li><a href="#events" className="hover:text-amber-500 transition-colors">Events</a></li>
              <li><a href="#gallery" className="hover:text-amber-500 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Ta:nani-12, Kathmandu, Nepal</li>
              <li>Phone: +977 9863689662</li>
              <li>Email: shreebhairabsmail@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Shree Bhairab Band. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed by Pritam Maharjan</p>
        </div>
      </div>
    </footer>
  );
}

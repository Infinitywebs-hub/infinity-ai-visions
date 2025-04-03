
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-infinity-600 to-ai-600 bg-clip-text text-transparent">Infinity AI</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-10">
            <a href="#about" className="text-base font-medium text-gray-700 hover:text-infinity-600 transition-colors">
              About
            </a>
            <a href="#services" className="text-base font-medium text-gray-700 hover:text-infinity-600 transition-colors">
              Services
            </a>
            <a href="#features" className="text-base font-medium text-gray-700 hover:text-infinity-600 transition-colors">
              Features
            </a>
            <a href="#team" className="text-base font-medium text-gray-700 hover:text-infinity-600 transition-colors">
              Team
            </a>
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#contact" className="btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full inset-x-0 p-4 bg-white shadow-lg md:hidden rounded-b-lg transition-all duration-200 ease-in-out">
          <div className="flex flex-col space-y-4 py-2">
            <a href="#about" className="text-base font-medium text-gray-700 hover:text-infinity-600 transition-colors py-2 px-4 rounded-md hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <a href="#services" className="text-base font-medium text-gray-700 hover:text-infinity-600 transition-colors py-2 px-4 rounded-md hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
              Services
            </a>
            <a href="#features" className="text-base font-medium text-gray-700 hover:text-infinity-600 transition-colors py-2 px-4 rounded-md hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
              Features
            </a>
            <a href="#team" className="text-base font-medium text-gray-700 hover:text-infinity-600 transition-colors py-2 px-4 rounded-md hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>
              Team
            </a>
            <a href="#contact" className="btn-primary w-full text-center" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

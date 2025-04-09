
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center">
              <span className="text-primary font-bold text-xl">SimpleSite</span>
            </a>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors duration-200">
              Features
            </a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors duration-200">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors duration-200">
              Contact
            </a>
            <Button>Get Started</Button>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a
              href="#features"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-50"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <div className="px-3 py-2">
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

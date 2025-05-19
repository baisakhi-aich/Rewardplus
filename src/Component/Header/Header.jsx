// src/components/Header.jsx
import React, { useState } from 'react';
import log from "../../assets/Logo/logo.png";
import { Menu, X } from 'lucide-react'; // Icons (install lucide-react or use any other library)

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-gradient-to-b from-blue-500 to-blue-800 text-white px-6 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={log} alt="Logo" className="h-10 w-auto mr-3" />
          {/* <span className="text-2xl font-bold">Rewards+</span> */}
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <div className="cursor-pointer hover:underline">Features</div>
          <div className="cursor-pointer hover:underline">Why Rewards+</div>
          <a href="#Walk-Through" className="hover:underline">Walk-Through</a>
          <a href="#About" className="hover:underline">About</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-white text-[rgb(74,89,223)] text-sm font-semibold px-4 py-2 rounded-full hover:bg-blue-100 transition">
            Get Apps
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <X size={20} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center font-medium">
          <div className="cursor-pointer hover:underline">Features</div>
          <div className="cursor-pointer hover:underline">Why Rewards+</div>
          <a href="#Walk-Through" className="block hover:underline">Walk-Through</a>
          <a href="#About" className="block hover:underline">About</a>
          <a href="#pricing" className="block hover:underline">Pricing</a>
          <button className="mt-2 bg-white text-[rgb(74,89,223)] text-sm font-semibold px-4 py-2 rounded-full hover:bg-blue-100 transition">
            Get Apps
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

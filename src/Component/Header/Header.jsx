// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/" className="flex items-center">
      <img src={log} alt="Logo" className="h-10 w-auto mr-3" />
    </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <div className="cursor-pointer hover:underline">Features</div>
         <div className="cursor-pointer hover:underline">
  <a href="#why">Why Rewards+</a>
</div>

          <a href="#Walk-Through" className="hover:underline">Walk-Through</a>
      <Link to="/about"><a href="#" className="hover:underline">About</a></Link>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a   
    href="https://merchants.rewardsplus.io/lms/auth/login "
    target="_blank"
    rel="noopener noreferrer"
  className="hover:underline">merchant login</a>
        </nav>

        {/* CTA Button */}
  <div className="hidden md:flex items-center space-x-4">
  <a
    href="https://apps.apple.com/in/app/rewardsplus-rewards-more/id6737422630"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="bg-white text-[rgb(74,89,223)] text-sm font-semibold px-4 py-2 rounded-full hover:bg-pink-500 transition">
      Get Apps
    </button>
  </a>
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
          <Link to="/about"><a href="#" className="hover:underline">About</a></Link>
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

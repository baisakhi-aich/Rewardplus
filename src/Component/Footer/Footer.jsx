import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import footerplaystore from "../../assets/App/1728646283_Mobile app store badge-CakwQpZx.svg";
import footermicrosoft from "../../assets/App/1728646283_Mobile app store badge-1-DQ_exAEs.svg";
import footerlogo from "../../assets/Logo/logo.png";
import { ChevronUp, ChevronDown, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-500 text-white py-6 px-4 md:px-10">
      {/* Expand/Collapse for mobile */}
      <div className="md:hidden flex justify-center">
        <button
          className="flex items-center gap-2 text-sm font-medium text-white"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              Collapse Footer <ChevronUp size={10} />
            </>
          ) : (
            <>
              Expand Footer <ChevronDown size={10} />
            </>
          )}
        </button>
      </div>

      {/* Main Footer Content */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isExpanded ? "max-h-[2000px] mt-6" : "max-h-0 md:max-h-full"
        } md:max-h-full md:mt-0`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Rewardplus+ Links */}
          <div>
            <h4 className="font-semibold text-base mb-4">Rewardplus+</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Rewardplus+ App</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Enterprise</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
                <div className="mt-4">
              <img src={footerlogo} alt="Logo" className="w-20" />
            </div>
      
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-base mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Webinar Demo</a></li>
              <li><a href="#" className="hover:underline">Case Studies</a></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Ebooks & Guides</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-base mb-4">Top Industries</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Cafes & Restaurants</a></li>
              <li><a href="#" className="hover:underline">Beauty Salons</a></li>
              <li><a href="#" className="hover:underline">Retail</a></li>
              <li><a href="#" className="hover:underline">Community & Tourism</a></li>
            </ul>
          </div>

          {/* Socials & App Badges */}
          <div>
            <h4 className="font-semibold text-base mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-blue-300"><Facebook size={18} /></a>
              <a href="#" className="hover:text-blue-300"><Twitter size={18} /></a>
              <a href="https://www.youtube.com/watch?v=i6eAEWgwdtA" className="hover:text-blue-300"><Linkedin size={18} /></a>
               <a href="https://www.youtube.com/watch?v=i6eAEWgwdtA" className="hover:text-blue-300"><Youtube size={18} /></a>
            </div>
            <div className="flex flex-wrap items-center gap-3">
               <a href="https://play.google.com/store/apps/details?id=com.wtm.rewardsplus.rewards.more&hl=en" target="_blank" rel="noopener noreferrer">
              <img src={footerplaystore} alt="Play Store" className="w-24 h-auto rounded  p-1" />
              </a>
              <img src={footermicrosoft} alt="Microsoft Store" className="w-24 h-auto rounded p-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom (Always Visible) */}
      <div className="border-t border-white/30 mt-10 pt-4 text-center text-sm space-y-2">
        <p>© 2025. All Rights Reserved By WT Makers</p>
        <div className="space-x-4">
          <Link to="/privacy">
          <a href="#" className="hover:underline">Privacy Policy</a>
          </Link>
          <Link to="/user"><a href="#" className="hover:underline">User Terms</a></Link>
          <Link to="/contact">
          <a href="#" className="hover:underline">Contact</a>
          </Link>
        </div>
        </div>
    </footer>
  );
};

export default Footer;

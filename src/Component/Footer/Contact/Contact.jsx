import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ArrowLeftCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-6 py-10 sm:px-10 sm:py-12"
      style={{ backgroundImage: `url('../../footer.jpeg')` }} // Update path as needed
    >
      {/* Contact Us heading with gradient */}
      <h2
        className="text-5xl sm:text-7xl md:text-8xl font-bold mb-10 text-center"
        style={{
         backgroundImage: 'linear-gradient(to right, #6b46c1, #9f7aea)', /* purple to pink */

          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          display: 'inline-block',
        }}
      >
        <Typewriter
          words={['Contact Rewardplus']}
          loop={false}
          typeSpeed={50}
          deleteSpeed={0}
          delaySpeed={1000}
        />
      </h2>

      {/* Two boxes container */}
      <div className="flex flex-col md:flex-row gap-3 w-full max-w-6xl backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-10">
        
        {/* Left Side */}
        <div className="bg-purple-700 text-white p-6 rounded-xl flex flex-col justify-between space-y-6 md:w-1/2">
          <div>
            <h4 className="text-sm uppercase tracking-wide mb-1">Contact Us </h4>
            <h3 className="text-xl md:text-2xl font-bold leading-snug mb-4">
              Whether you're having a support question, application issue or an application query, please get in touch.
            </h3>
            
              <a href="mailto:contacts@esbnyc.com" className="underline hover:text-purple-300">
                support@rewardsplus.io
              </a>
            
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Follow us</h3>
            <div className="flex gap-5 text-2xl mb-6">
              <a href="#" aria-label="Facebook" className="hover:text-purple-400"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter" className="hover:text-purple-400"><FaTwitter /></a>
              <a href="#" aria-label="Instagram" className="hover:text-purple-400"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-purple-400"><FaLinkedinIn /></a>
              <a href="#" aria-label="Pinterest" className="hover:text-purple-400"><FaPinterestP /></a>
            </div>
            <p className="text-xs">&copy; 2025<a href="#" className="underline hover:text-purple-400">Privacy policy</a></p>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 bg-white rounded-xl p-6 shadow-md">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="email"
              placeholder="Enter a valid email address"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              rows="4"
              placeholder="Enter your message"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-purple-600 text-white font-semibold hover:bg-pink-700 transition rounded-full w-16 h-16 flex items-center justify-center text-sm"
                style={{ padding: 0 }}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Back Button */}
      <Link
        to="/"
        className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-purple-700 hover:bg-purple-600 transition duration-300 shadow-lg z-50"
        title="Back to Home"
        aria-label="Back to Home"
      >
        <ArrowLeftCircle className="w-6 h-6 text-white" />
      </Link>
    </div>
  );
};

export default Contact;


import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      {/* Top Title and Back Arrow */}
      <div className="text-center mb-10 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-100 to-blue-200">
          Contact Us
        </h1>
        <div className="mt-4">
          <Link
            to="/"
            className="inline-flex items-center text-white hover:text-gray-200 text-base sm:text-lg"
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white/80 rounded-2xl p-6 sm:p-8 shadow-2xl">
        {/* Left Side - Contact Info */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-sm text-gray-700 mb-2">Contact</h2>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">How Can We Help You?</h1>
          <div className="space-y-3 text-base sm:text-lg text-gray-800">
            <p>📍 GautingerStr. 24a, 82152, Krailling</p>
            <p>
              🔗{" "}
              <a
                href="https://www.linkedin.com/company/rewardsplus"
                className="text-blue-800 underline font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/company/rewardsplus
              </a>
            </p>
            <p>📧 support@rewardsplus.io</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full">
          <form className="space-y-4 text-gray-900">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="p-2 rounded border w-full" />
              <input type="text" placeholder="Last Name" className="p-2 rounded border w-full" />
            </div>
            <input type="text" placeholder="Organization" className="w-full p-2 rounded border" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Job Title" className="p-2 rounded border w-full" />
              <input type="email" placeholder="Email" className="p-2 rounded border w-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Country" className="p-2 rounded border w-full" />
              <input type="text" placeholder="Telephone Number" className="p-2 rounded border w-full" />
            </div>
            <textarea
              placeholder="How can we help you?"
              rows="4"
              className="w-full p-2 rounded border"
            />
            <button
              type="submit"
              className="w-3/12 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold px-6 py-3 rounded hover:opacity-90"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftCircle } from 'lucide-react'; // optional icon lib

const PrivacyPolicy = () => {
  return (
<div className="relative text-white min-h-screen bg-gradient-to-r from-purple-900 via-blue-900 to-blue-900">

      {/* Page Heading */}
<header className="relative text-center py-10 overflow-hidden bg-gray-900">
  {/* Bubbly Shape */}
  <div className="absolute inset-0 z-0">
    <div className="absolute top-[-50%] left-1/2 transform -translate-x-1/2 w-[140%] h-[200%] rounded-full bg-gradient-to-r from-purple-800 via-blue-800 to-blue-400 blur-3xl opacity-30 animate-pulse" />
  </div>

  {/* Text */}
  <div className="relative z-10">
    <h1 className="text-4xl font-bold text-white">Our Privacy Policy</h1>
    <p className="text-sm mt-2 text-white/70">Your trust is our priority</p>
  </div>


       
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-20 py-12 text-white">
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-2">Introduction</h2>
          <p className="text-gray-300">
       World Technology Makers (WT Makers) is committed to protecting the privacy of its users. This Privacy Policy explains how we collect, use, and disclose personal information in connection with the Rewardsplus app.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-2">Collection of Personal Information</h2>
          <p className="text-gray-300">
         When you register for Rewardsplus app, we collect personal information such as your name, email address, and phone number. We may also collect information about your transactions, including purchases and rewards earned. In addition, we may collect information about your device, including device type and operating system.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-2">Use of Personal Information</h2>
          <p className="text-gray-300">
   We use the personal information we collect to provide you with the Rewardsplus app and its features. This includes processing your transactions, sending you promotional offers, and improving the app's functionality. We may also use your personal information for research and analysis purposes to improve our products and services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-2">Disclosure of Personal Information</h2>
          <p className="text-gray-300">
          We do not sell, rent, or otherwise disclose your personal information to third parties, except as described in this Privacy Policy. We may disclose your personal information to our service providers, who help us with app development, hosting, and maintenance. We may also disclose your personal information to comply with legal requirements or to protect our rights and property.
          </p> We d
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-2">Security of Personal Information</h2>
          <p className="text-gray-300">
         We retain your personal information for as long as necessary to provide you with the Rewardsplus app and its features. We may also retain your personal information for research and analysis purposes, to comply with legal requirements, or to protect our rights and property.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-2">Children’s Privacy</h2>
          <p className="text-gray-300">
            Rewardsplus app is not intended for children under the age of 18. We do not knowingly collect personal information from children under the age of 18.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-2">Changes to Privacy Policy</h2>
          <p className="text-gray-300">
           WT Makers reserves the right to change this Privacy Policy at any time without prior notice. Users are responsible for regularly reviewing this Privacy Policy for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-300">
          If you have any questions or concerns about this Privacy Policy, please contact us at support@rewardsplus.com.

Disclaimer: By using Rewardsplus app, you agree to this Privacy Policy. If you have concerns about our Privacy Policy or cannot agree to it, we kindly ask that you refrain from using the Rewardsplus app. We appreciate your understanding and hope to offer you a positive experience in the future.
          </p>
        </section>
      </main>

      {/* Smooth Back to Home Dot */}
      <Link
        to="/"
        className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-purple-700 hover:bg-purple-600 transition duration-300 shadow-lg"
        title="Back to Home"
      >
        <ArrowLeftCircle className="w-6 h-6 text-white" />
      </Link>
    </div>
  );
};

export default PrivacyPolicy;

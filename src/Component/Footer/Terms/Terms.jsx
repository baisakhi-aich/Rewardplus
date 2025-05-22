import React from 'react'
import { Link } from 'react-router-dom';
import { ArrowLeftCircle } from 'lucide-react';

const Terms = () => {
  return (
    <div className="relative text-white min-h-screen bg-gradient-to-r from-purple-900 via-blue-900 to-blue-900">
      
      {/* Header with Bubble Background */}
      <header className="relative text-center py-16 overflow-hidden">
        <div className="absolute top-[-60%] left-1/2 transform -translate-x-1/2 w-[140%] h-[200%] rounded-full bg-gradient-to-r from-purple-800 via-blue-800 to-blue-400 blur-3xl opacity-30 animate-pulse z-0" />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white">Terms Users</h1>
          <p className="text-sm mt-2 text-white/70">Your trust is our priority</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-20 py-12 text-white space-y-12">
        <section>
          <h2 className="text-3xl font-semibold mb-2">Introduction and Acceptance of Terms</h2>
          <p className="text-gray-300">
            Rewardsplus app is a product developed by World Technology Makers (WT Makers). By using the app, you agree to comply...
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-2">Description of the Rewardsplus App</h2>
          <p className="text-gray-300">
            Rewardsplus is a rewards platform where users can earn REWARDS+ Tokens as rewards for shopping, spending, and playing...
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-2">Earning and Redeeming REWARDS+ Tokens</h2>
          <p className="text-gray-300">
            The REWARDS+ Tokens earned through the Rewardsplus app can be redeemed only on the platform...
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-2">User Eligibility</h2>
          <p className="text-gray-300">
            Users of the Rewardsplus app must be at least 18 years old or the age of majority...
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-2">User Conduct</h2>
          <p className="text-gray-300">
            Users of the Rewardsplus app must comply with all applicable laws and regulations...
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-2">Limitations of Liability</h2>
          <p className="text-gray-300">
            WT Makers will not be liable for any damages, whether direct, indirect, incidental...
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-2">Changes to Terms and Conditions</h2>
          <p className="text-gray-300">
            Rewardsplus app is not intended for children under the age of 18...
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-2">Changes to Privacy Policy</h2>
          <p className="text-gray-300">
            WT Makers reserves the right to change the terms and conditions of the Rewardsplus app...
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-2">Termination</h2>
          <p className="text-gray-300">
            As Rewardsplus app is in beta version, WT Makers reserves the right to terminate the Rewardsplus app...
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-2">Disclaimer</h2>
          <p className="text-gray-300">
            We want to let you know that Rewardsplus is a brand-new startup...
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-2">Intellectual Property</h2>
          <p className="text-gray-300">
            All intellectual property rights in and to Rewardsplus app are owned by WT Makers.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-2">Governing Law</h2>
          <p className="text-gray-300">
            These terms and conditions shall be governed by and construed in accordance with the laws...
            <br />
            <strong>Disclaimer:</strong> By using Rewardsplus app, you agree to this Privacy Policy...
          </p>
        </section>
      </main>

      {/* Back Button */}
      <Link
        to="/"
        className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-purple-700 hover:bg-purple-600 transition duration-300 shadow-lg"
        title="Back to Home"
      >
        <ArrowLeftCircle className="w-6 h-6 text-white" />
      </Link>
    </div>
  )
}

export default Terms;

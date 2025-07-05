import React from "react";

const Pricing = () => {
  return (
    <div id="pricing" className="min-h-screen bg-gradient-to-r from-blue-200 to-sky-900 text-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-2">Choose Your Plan</h2>
      <p className="text-center text-lg mb-12">Unlock endless possibilities with RewardsPlus</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Starter Plan */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-500 p-8 rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-purple-600">
          <h3 className="text-2xl font-bold mb-2">🔥 Starter</h3>
          <p className="font-semibold mb-1">Plan – Free Forever</p>
          <p className="mb-6">Everything you need to get started - ideal for up to 100 customers</p>
          <h4 className="text-3xl font-bold mb-6">0 USD</h4>
          <ul className="space-y-3 mb-6">
            <li><span className="text-green-300">✔️</span> Mobile app for customers (Android & IOS)</li>
            <li><span className="text-green-300">✔️</span> RewardsPlus web for customers</li>
            <li><span className="text-green-300">✔️</span> Mobile app for merchant</li>
            <li><span className="text-green-300">✔️</span> Merchant dashboard</li>
            <li><span className="text-green-300">✔️</span> Reward overview within label RewardsPlus app</li>
            <li><span className="text-green-300">✔️</span> End of day settlement</li>
            <li><span className="text-green-300">✔️</span> POS integration</li>
          </ul>
          <button className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600">Get Started</button>
        </div>

        {/* Growth Plan */}
        <div className="bg-gradient-to-r from-pink-600 to-purple-500 p-8 rounded-3xl shadow-lg relative transition-transform duration-300 hover:scale-105 hover:bg-pink-700">
          <span className="absolute top-0 right-0 bg-red-400 text-white px-2 py-1 text-xs rounded-bl-lg">MOST POPULAR</span>
          <h3 className="text-2xl font-bold mb-2">Growth Plan</h3>
          <p className="font-semibold mb-1">For Expanding Brands</p>
          <p className="mb-6">Optimized tools for scaling businesses in a single currency</p>
          <h4 className="text-3xl font-bold mb-6">Custom Pricing</h4>
          <ul className="space-y-3 mb-6">
            <li><span className="text-green-300">✔️</span> Mobile app for customers (A IOS)</li>
            <li><span className="text-green-300">✔️</span> RewardsPlus web for customers</li>
            <li><span className="text-green-300">✔️</span> Mobile app for merchant</li>
            <li><span className="text-green-300">✔️</span> Merchant dashboard</li>
            <li><span className="text-green-300">✔️</span> Reward overview within label RewardsPlus app</li>
            <li><span className="text-green-300">✔️</span> Digital Marketlement</li>
            <li><span className="text-green-300">✔️</span> POS integration</li>
          </ul>
          <button className="bg-purple-800 text-white px-5 py-2 rounded-lg hover:bg-purple-900">Contact Sales</button>
        </div>

        {/* Scale Plan */}
        <div className="bg-gradient-to-r from-sky-900 to-purple-500 p-8 rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-cyan-800">
          <h3 className="text-2xl font-bold mb-2">📁 Scale Plan</h3>
          <p className="font-semibold mb-1">Multi-Currency Power</p>
          <p className="mb-6">All-in-one tools unlimited in multi-currency support</p>
          <h4 className="text-3xl font-bold mb-6">Custom Pricing</h4>
          <ul className="space-y-3 mb-6">
            <li><span className="text-green-300">✔️</span> Mobile app for customers (A IOS)</li>
            <li><span className="text-green-300">✔️</span> RewardsPlus web for customers</li>
            <li><span className="text-green-300">✔️</span> Mobile app for merchant</li>
            <li><span className="text-green-300">✔️</span> Reward overview within RewardsPlus app</li>
            <li><span className="text-green-300">✔️</span> Real-time settlement</li>
            <li><span className="text-green-300">✔️</span> Digital Marketing</li>
            <li><span className="text-green-300">✔️</span> Multi-branch support/multi-currency</li>
          </ul>
          <button className="bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-950">Contact Sales</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

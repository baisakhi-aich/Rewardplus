import React, { useEffect, useState } from "react";
import playstore from "../../assets/App/play (3).png";
import microsoft from "../../assets/App/app.png";

import rewardlogo from "../../assets/Logo/logo.png";

const Home = () => {
  const [stats, setStats] = useState({
    totalCustomers: 0,
    totalMerchants: 0,
    totalPointsDistributed: 0,
  });

  const [animatedStats, setAnimatedStats] = useState({
    totalCustomers: 0,
    totalMerchants: 0,
    totalPointsDistributed: 0,
  });

  const duration = 4000; // total animation duration (ms)
  const intervalDelay = 50; // controls speed of each count update
  const totalFrames = Math.floor(duration / intervalDelay);

  useEffect(() => {
    fetch("https://sit-validator.rewardsplus.io:9082/Neoteric/v1/stats/counts")
      .then((response) => response.json())
      .then((data) => {
        if (data.status.code === "0000") {
          setStats(data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching stats:", error);
      });
  }, []);

  useEffect(() => {
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      setAnimatedStats({
        totalCustomers: Math.round((stats.totalCustomers * frame) / totalFrames),
        totalMerchants: Math.round((stats.totalMerchants * frame) / totalFrames),
        totalPointsDistributed: Math.round((stats.totalPointsDistributed * frame) / totalFrames),
      });

      if (frame >= totalFrames) clearInterval(interval);
    }, intervalDelay);

    return () => clearInterval(interval);
  }, [stats]);

  return (
    <div id="home" className="bg-gradient-to-r from-pink-500 to-sky-700 px-6 py-10 max-w-full mx-auto">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 break-words text-balance">
            Shop <span className="text-purple-800">Smarter.</span><br />
            Earn <span className="text-orange-500">Better Rewards.</span>
          </h2>
          <p className="mt-4 text-gray-700 text-lg">
            Join thousands of savvy shoppers earning crypto-backed rewards on every purchase.
            Get your 500 token welcome bonus today.
          </p>

          {/* <div className="flex mt-6 space-x-4">
  <a href="https://play.google.com/store/apps/details?id=com.wtm.rewardsplus.rewards.more&hl=en" target="_blank" rel="noopener noreferrer">
    <img src={playstore} alt="Google Play" className="w-28" />
  </a>
  <a href="https://apps.apple.com/in/app/rewardsplus-rewards-more/id6737422630" target="_blank" rel="noopener noreferrer">
    <img src={microsoft} alt="Microsoft Store" className="w-28" />
  </a>
</div> */}

        </div>

        <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
          <img src={rewardlogo} alt="Rewards+ App" className="w-38 md:w-64 shadow-sm" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-12 mx-auto max-w-5xl bg-indigo-50 rounded-xl p-4 md:p-6 flex flex-col sm:flex-row justify-around text-center gap-6">
        <div>
          <h3 className="text-2xl font-bold text-purple-700">
            {animatedStats.totalCustomers.toLocaleString()}+
          </h3>
          <p className="text-gray-600">Happy Members</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-purple-700">
            {animatedStats.totalMerchants}
          </h3>
          <p className="text-gray-600">Partner Brands</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-purple-700">
            {(animatedStats.totalPointsDistributed / 1000).toFixed(1)}K
          </h3>
          <p className="text-gray-600">Tokens Earned</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

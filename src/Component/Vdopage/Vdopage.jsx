import React from 'react';

const Vdopage = () => {
  return (
    <div className="py-12 bg-gradient-to-r from-blue-200 to-sky-900 text-center px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">What is Rewardplus+ ?</h2>
      
      <p className="text-white text-sm font-light md:text-lg max-w-3xl mx-auto mb-8">
        The REWARDS+ are assets which can be earned via rewards on Rewardsplus app, and they're stored in a REWARDS+ wallet in the Rewardsplus app. It is a custom-made virtual token. The REWARDS+ token is mainly used as loyalty points. It’s sponsored by the retailer, and it’s a special incentive as a way to attract and retain customers.
      </p>

      <div className="flex justify-center">
        <div className="rounded-xl shadow-xl overflow-hidden w-full max-w-3xl border border-gray-300">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/i6eAEWgwdtA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vdopage;

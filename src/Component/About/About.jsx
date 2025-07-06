import React from 'react';
import aboutlogo from "../../assets/Work/about1.png";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-pink-500 py-12">
   <div className="max-w-full mx-auto pl-0 pr-9 sm:pr-6 lg:pr-8">

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          
          {/* Left side - Image */}
          <div className="md:w-1/2">
            <div className="ml-0 rounded-lg overflow-hidden h-[500px] w-full">
              <img 
                src={aboutlogo}
                alt="REWARDS+ App" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Text content */}
        <div className="md:w-1/2 text-white">
  <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-orange-600">
    What is REWARDS+?
  </h1>
  
  {/* Increased size here */}
  <p className="text-xl sm:text-2xl font-medium mb-4">
    The <strong className="font-semibold">REWARDS+</strong> is a rewards point or token developed on a decentralized Solana blockchain network.
  </p>
  
  <p className="text-lg">
    The REWARDS+ are assets which can be earned via rewards on Rewardsplus app, and they're stored in a REWARDS+ wallet. It’s a custom-made virtual token used mainly as loyalty points. Sponsored by retailers, it attracts and retains customers.
  </p>
</div>

        </div>
      </div>
    </div>
  );
};

export default About;

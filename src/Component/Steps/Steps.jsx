import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

import how1 from "../../assets/Work/how4.png"
import how2 from "../../assets/Work/how5.png"
import how3 from "../../assets/Work/how6.png"
import how4 from "../../assets/Work/how7.png"

const Steps = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-200 to-sky-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Heading Section - aligned with boxes */}
          <div className="text-left mb-12">
            <h2 className="text-yellow-500 text-2xl font-semibold">How Does It Work</h2>
<h1 className="text-3xl md:text-5xl font-bold mt-2 leading-tight">
  <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
    <Typewriter
      words={['Follow Few Simple Steps']}
      loop={1}
      typeSpeed={50}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
  <br />
  <span className="bg-gradient-to-r from-blue-500 to-purple-900 bg-clip-text text-transparent">
    <Typewriter
      words={['To Earn REWARDS+']}
      loop={1}
      cursor
      cursorStyle="."
      typeSpeed={50}
      deleteSpeed={50}
      delaySpeed={3000}
    />
  </span>
</h1>


          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Box 1 */}
         <div className="bg-[#111859] hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 p-6 rounded-xl text-center shadow-gray-400 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
  <img src={how1} alt="Install App" className="mx-auto w-16 h-16 mb-4" />
  <h3 className="text-xl font-semibold mb-2 text-white">Install Beta App</h3>
  <button className="mt-2 px-6 py-2 bg-gradient-to-r from-blue-100 to-purple-500 text-blue-800 font-medium rounded-full shadow-md transition duration-300 hover:scale-105">
    Download →
  </button>
</div>


            {/* Box 2 */}
          < div className="bg-[#111859] hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-300 p-6 rounded-xl text-center shadow-gray-400 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <img src={how2} alt="Signup" className="mx-auto w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Signup</h3>
              <p className="text-sm text-gray-300">Register & complete the verification.</p>
            </div>

            {/* Box 3 */}
          < div className="bg-[#111859] hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-700 p-6 rounded-xl text-center shadow-gray-400 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <img src={how3} alt="Joining Rewards" className="mx-auto w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Joining Rewards</h3>
              <p className="text-sm text-gray-300">Get REWARDS+ Tokens on KYC and Referral Bonus.</p>
            </div>

            {/* Box 4 */}
       <  div className="bg-[#111859] hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-200 p-6 rounded-xl text-center shadow-gray-400 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <img src={how4} alt="Get Rewarded" className="mx-auto w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Get Rewarded</h3>
              <p className="text-sm text-gray-300">Start Shopping to Earn more Rewards.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Steps

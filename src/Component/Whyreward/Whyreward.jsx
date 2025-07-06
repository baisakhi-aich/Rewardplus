import React from 'react'

const Whyreward = () => {
  return (
    <section id="why"className="bg-gradient-to-r from-pink-500 to-sky-900 py-12 px-4 text-center">
     <h2 className="text-orange-500 text-sm sm:text-base font-semibold mb-3 tracking-wide leading-snug">
  Why Reward Plus
</h2>
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#f1f1f4] mb-4 leading-tight tracking-tight">
  Learn Why Rewardplus is the <br className="hidden md:block" />
  Right rewards platform for you
</h1>
















      <p className="text-[rgb(243,243,247)] mb-10 text-base md:text-lg">
        Built by team who has over 25 years of experience in technology
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {/* Secure Payments */}
        <div className="flex flex-col items-center rounded-2xl p-6 w-44 shadow-lg bg-transparent">
          <span className="mb-3 rounded-full p-4 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 animate-gradient-xy drop-shadow-lg inline-block">
            <svg
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8l-4 1 1-4A8.96 8.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </span>
          <span className="text-white font-medium text-base mt-1">Secure Payments</span>
        </div>
        {/* Quick Cash Withdrawals */}
        <div className="flex flex-col items-center rounded-2xl p-6 w-44 shadow-lg bg-transparent">
          <span className="mb-3 rounded-full p-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate-gradient-xy drop-shadow-lg inline-block">
            <svg
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="text-white"
            >
              <rect
                x="2"
                y="7"
                width="20"
                height="10"
                rx="2"
                strokeWidth={2}
                stroke="currentColor"
              />
              <circle cx="12" cy="12" r="3" strokeWidth={2} stroke="currentColor" />
            </svg>
          </span>
          <span className="text-white font-medium text-base mt-1">Quick Cash Withdrawals</span>
        </div>
        {/* Easy Investment */}
        <div className="flex flex-col items-center rounded-2xl p-6 w-44 shadow-lg bg-transparent">
          <span className="mb-3 rounded-full p-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-gradient-xy drop-shadow-lg inline-block">
            <svg
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="text-white"
            >
              <rect
                x="6"
                y="4"
                width="12"
                height="16"
                rx="2"
                strokeWidth={2}
                stroke="currentColor"
              />
              <path d="M9 8h6M9 12h6M9 16h2" strokeWidth={2} stroke="currentColor" />
            </svg>
          </span>
          <span className="text-white font-medium text-base mt-1">Easy Investment</span>
        </div>
        {/* No Hidden Charges */}
        <div className="flex flex-col items-center rounded-2xl p-6 w-44 shadow-lg bg-transparent">
          <span className="mb-3 rounded-full p-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 animate-gradient-xy drop-shadow-lg inline-block">
            <svg
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="text-white"
            >
              <rect
                x="7"
                y="4"
                width="10"
                height="16"
                rx="2"
                strokeWidth={2}
                stroke="currentColor"
              />
              <path d="M9 8h6M9 12h6M9 16h2" strokeWidth={2} stroke="currentColor" />
            </svg>
          </span>
          <span className="text-white font-medium text-base mt-1">No Hidden Charges</span>
        </div>
        {/* Shop To Earn */}
        <div className="flex flex-col items-center rounded-2xl p-6 w-44 shadow-lg bg-transparent">
          <span className="mb-3 rounded-full p-4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 animate-gradient-xy drop-shadow-lg inline-block">
            <svg
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="text-white"
            >
              <path
                d="M12 4l8 4-8 4-8-4 8-4zm0 8l8 4-8 4-8-4 8-4z"
                strokeWidth={2}
                stroke="currentColor"
              />
            </svg>
          </span>
          <span className="text-white font-medium text-base mt-1">Shop To Earn</span>
        </div>
      </div>
    </section>
  )
}

export default Whyreward

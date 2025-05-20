import React from "react";

const pricingData = [
  {
    title: "Free",
    subtitle: "The basics version for small scale merchants up to 100 customers",
    price: "0 USD",
    period: "Per month & forever",
    features: [
      "Mobile app for customer(Android & iOS): RewardsPlus: Rewards & More",
      "Mobile app for merchant(Android & iOS): RewardsPlus for merchant",
      "Merchant dashboard",
      "Merchant themed white label RewardsPlus App",
      "Payment Gateway Integration",
      "End of the day settlement",
      "Digital Marketing",
      "POS Integration",
    ],
    availability: [true, true, true, false, false, true, false, false],
  },
  {
    title: "Enterprise",
    subtitle: "Advanced version for medium scale merchants in one currency",
    price: "Custom Pricing",
    period: "",
    features: [
      "Mobile app for customer(Android & iOS): RewardsPlus: Rewards & More",
      "Mobile app for merchant(Android & iOS): RewardsPlus for merchant",
      "Advanced merchant dashboard",
      "Merchant themed white label RewardsPlus App",
      "Payment Gateway Integration",
      "Real-time settlement",
      "Digital Marketing",
      "POS Integration",
    ],
    availability: [true, true, true, false, false, true, true, true],
  },
  {
    title: "Enterprise Plus",
    subtitle: "Advanced version for large scale merchants in multiple currencies",
    price: "Custom Pricing",
    period: "",
    features: [
      "Mobile app for customer(Android & iOS): RewardsPlus: Rewards & More",
      "Mobile app for merchant(Android & iOS): RewardsPlus for merchant",
      "Advanced merchant dashboard",
      "Merchant themed white label RewardsPlus App",
      "Payment Gateway Integration",
      "Real-time settlement",
      "Multi-branch support (domestic/international)",
      "Merchant coupon",
      "Merchant online shopping",
    ],
    availability: [true, true, true, true, true, true, true, true, true],
  },
];

const CheckboxIcon = ({ checked }) => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke={checked ? "#34D399" : "#EF4444"}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {checked ? (
      <>
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" fill="#34D399" />
        <path stroke="#fff" strokeWidth="2" d="M7 13l3 3 7-7" />
      </>
    ) : (
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" fill="#EF4444" />
    )}
  </svg>
);

const PricingCard = ({ plan, isPopular }) => (
  <div className="relative bg-gradient-to-b from-[rgba(120,120,236,0.53)] to-[#0e0ed9] text-white rounded-3xl p-6 w-full max-w-sm shadow-lg border border-white flex flex-col items-center transition-all hover:scale-105 duration-300">
    {isPopular && (
      <span className="absolute top-4 right-4 bg-pink-600 text-white text-xs px-2 py-1 rounded-full">
        Popular
      </span>
    )}
    <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
    <p className="text-sm text-gray-300 mb-3">{plan.subtitle}</p>
    <p className="text-3xl font-extrabold text-pink-500 mb-1">{plan.price}</p>
    {plan.period && <p className="text-xs text-gray-400 mb-4">{plan.period}</p>}
    <ul className="w-full text-left space-y-2">
      {plan.features.map((feature, idx) => (
        <li
          key={idx}
          className="flex justify-between items-center bg-white bg-opacity-10 p-2 rounded-md text-sm"
        >
          <span>{feature}</span>
          <span className="font-bold">
            <CheckboxIcon checked={plan.availability[idx]} />
          </span>
        </li>
      ))}
    </ul>
    <button className="mt-6 px-6 py-2 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700">
      {plan.title === "Enterprise" || plan.title === "Enterprise Plus"
        ? "Contact Sales"
        : "Get Started"}
    </button>
  </div>
);

const PricingPage = () => (
 <div className="relative min-h-screen text-white py-12 px-4 bg-gradient-to-r from-blue-200 to-sky-900">
    <style>{`
      @keyframes moveDots {
        0% {
          background-position: 0 0, 0 0;
        }
        100% {
          background-position: 0 0, 40px 40px;
        }
      }
    `}</style>

    <div className="text-center mb-12">
      <h1 className="text-4xl font-extrabold text-black">Choose Your Plan</h1>
      <p className="text-black mt-2 text-lg">Unlock endless possibilities with RewardsPlus</p>
    </div>

    <div className="flex flex-wrap justify-center gap-8">
      {pricingData.map((plan, idx) => (
        <PricingCard key={idx} plan={plan} isPopular={idx === 1} />
      ))}
    </div>
  </div>
);

export default PricingPage;

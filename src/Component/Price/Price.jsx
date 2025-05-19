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
      "Merchant themed white level RewardsPlus App for both customers & Merchant",
      "Payment Gateway Integration",
      "End of the day settlement",
      "Digital Marketing",
      "POS Integration"
    ],
    availability: ["Y", "Y", "Y", "N", "N", "Y", "N", "N"]
  },
  {
    title: "Enterprise",
    subtitle: "Advance version for medium scale merchants in one currency",
    price: "Depends on number of users",
    period: "",
    features: [
      "Mobile app for customer(Android & iOS): RewardsPlus: Rewards & More",
      "Mobile app for merchant(Android & iOS): RewardsPlus for merchant",
      "Advanced merchant dashboard",
      "Merchant themed white level RewardsPlus App for both customers & Merchant",
      "Payment Gateway Integration",
      "Real-time settlement",
      "Digital Marketing",
      "POS Integration"
    ],
    availability: ["Y", "Y", "Y", "N", "N", "Y", "Y", "Y"]
  },
  {
    title: "Enterprise Plus",
    subtitle:
      "Advance version for large scale merchants in multiple currency",
    price: "Depends on number of users & branches",
    period: "",
    features: [
      "Mobile app for customer(Android & iOS): RewardsPlus: Rewards & More",
      "Mobile app for merchant(Android & iOS): RewardsPlus for merchant",
      "Advanced merchant dashboard",
      "Merchant themed white level RewardsPlus App for both customers & Merchant",
      "Payment Gateway Integration",
      "Real-time settlement",
      "Multiple branch support for merchant in domestic or international market",
      "Merchant coupon",
      "Merchant online shopping"
    ],
    availability: ["Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y"]
  }
];

const PricingCard = ({ plan }) => {
  return (
    <div id="pricing" className="bg-gradient-to-b from-blue-500 to-blue-800 rounded-[36px] p-6 w-full max-w-sm shadow-xl flex flex-col items-center text-center border-4 border-gradient-to-r from-blue-900 to-sky-400">
      
      <h2 className="text-xl font-bold mb-1">{plan.title}</h2>
      <p className="text-sm mb-2">{plan.subtitle}</p>
      <p className="text-lg font-semibold mb-1">{plan.price}</p>
 
      {plan.period && <p className="text-sm mb-4">{plan.period}</p>}
      <ul className="space-y-2">
        {plan.features.map((feature, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center bg-black text-white bg-opacity-20 p-2 rounded-md"
          >
            <span className="text-sm">{feature}</span>
            <span className="font-bold text-lg">{plan.availability[idx]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const PricingPage = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Choose Your Plan</h1>
        <p className="text-gray-600 mt-2">
          Internal Only - RewardsPlus Pricing
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {pricingData.map((plan, idx) => (
          <PricingCard key={idx} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;

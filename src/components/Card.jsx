import React, {useState} from "react";
import ToggleButton from "./Toggle";

function Card() {
  const [yearly , setyearly]= useState(false)
  const [views , setViews]= useState(1)

  const toggleHandler =()=>{
    setyearly(!yearly)
  }

  const pricingData = {
    1: {
      pageviews: "10K",
      monthly: 8,
      yearly: 72,
    },
    2: {
      pageviews: "50k",
      monthly: 12,
      yearly: 108,
    },
    3: {
      pageviews: "100K",
      monthly: 16,
      yearly: 144,
    },
    4: {
      pageviews: "500k",
      monthly: 24,
      yearly: 216,
    },
    5: {
      pageviews: "1M",
      monthly: 36,
      yearly: 324,
    },
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-[550px] w-full">
        <div className="mt-8">
          <div className="flex justify-between">
            <span className="text-paracustom font-bold mt-3">{pricingData[views]?.pageviews} PAGEVIEWS</span>
            {yearly ? (
            <span className="text-4xl font-bold text-headcustom ">
              ${pricingData[views]?.yearly} <span className="text-paracustom text-xl">/ year</span>
            </span>
            ):(
            <span className="text-4xl font-bold text-headcustom ">
              ${pricingData[views]?.monthly} <span className="text-paracustom text-xl">/ month</span>
            </span>
            )}
          </div>
          <input
            type="range"
            min="1"
            max="5"
            value={views}
            onChange={(e) => setViews(Number(e.target.value))}
            className="appearance-none w-full h-4 mt-10 rounded-full outline-none cursor-pointer z-10"
            style={{
              backgroundImage: `linear-gradient(to right, ${
                yearly ? "hsl(174, 77%, 80%)" : "hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%)"
              } ${Math.max((views - 1) * 25, 0)}%, #d3d3d3 ${Math.max((views - 1) * 25, 0)}%, #d3d3d3 100%)`,
            }}
          />
        </div>
        <div className="flex justify-between items-center mt-10">
          <div className="flex ml-12">
            <div className="text-paracustom mr-4">Monthly Billing</div>
            <div className={`toggle-container mr-4 relative w-12 h-7 rounded-full p-1 ${yearly ? 'bg-sliderbg' : 'bg-gray-400'}`} onClick={toggleHandler}>
              <div className={`toggle-switch absolute  left-1 w-5 h-5 bg-white rounded-full transition-transform transform ${yearly ? 'translate-x-full' : ''}`}></div>
            </div>  
            <div className="text-paracustom mr-4">Yearly Billing</div>
            <div className="ml-2 text-discountext " >25% discount</div>
          </div>
        </div>
        <div className="mt-8">
          <ul className="list-none space-y-2">
            <li className="flex items-center">
              <CheckIcon className="text-[#10b981] mr-2" />
              <span className="text-paracustom">Unlimited websites</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-[#10b981] mr-2" />
              <span className="text-paracustom">100% data ownership</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-[#10b981] mr-2" />
              <span className="text-paracustom">Email reports</span>
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <button className="w-full bg-headcustom text-white rounded-full py-3">Start my trial</button>
        </div>
      </div>
    </div>
  );
}

export default Card


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}




import React from "react";

function Card() {
  return (
    <div className="h-screen flex items-center justify-center ">
    <div className="bg-white p-10 rounded-lg shadow-lg max-w-[550px] w-full">
      <div className="mt-8">
        <div className="flex justify-between ">
          <span className="text-paracustom font-bold">100K PAGEVIEWS</span>
          <span className="text-3xl font-bold text-headcustom ">
            $16.00 <span className="text- text-paracustom">/ month</span>
          </span>
        </div>
        <input
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-6"
          max="100"
          min="1"
          type="range"
          value="50"
        />
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <div className=" text-paracustom mr-4">Monthly Billing</div>
          <button>Toggle</button>
          <div className=" text-paracustom">Yearly Billing</div>
          <div className="ml-2" variant="secondary">
            25% discount
          </div>
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
        <button className="w-full bg-headcustom text-white">Start my trial</button>
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




import React, { Fragment, useState } from "react";

import { useDispatch } from "react-redux";
import { userTrial } from "../store/userSlice";
import { Toaster, toast } from 'sonner'

function Card() {
  const [yearly, setYearly] = useState(false);
  const [views, setViews] = useState(1)
  const [startTrial , setStartTrial]= useState(false)
  const dispatch = useDispatch()


  const toggleHandler = () => {
    setYearly(!yearly)
  }

  const handleStartTrial = ()=>{
    setStartTrial(true)
    toast.success('Trial Started')
    dispatch(userTrial({ yearly:yearly , views:pricingData[views]?.pageviews}))
  }

  const pricingData = {
    1: {
      pageviews: "10K",
      monthly: 8,
    },
    2: {
      pageviews: "50k",
      monthly: 12,
    },
    3: {
      pageviews: "100K",
      monthly: 16,
    },
    4: {
      pageviews: "500k",
      monthly: 24,
    },
    5: {
      pageviews: "1M",
      monthly: 36,
    },
  };

  return (
    <Fragment>
    <div className="flex justify-center   m-3 ">
      <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-lg shadow-lg max-w-lg w-full ">
        <div className="mt-4 md:mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <span className="text-paracustom font-bold mt-3">
              {pricingData[views]?.pageviews} PAGEVIEWS
            </span>
            <span className="text-4xl font-bold text-headcustom dark:text-white mt-2 md:mt-0 ">
              ${yearly ? ((pricingData[views]?.monthly *12) * 0.75)
              : (pricingData[views]?.monthly)}
              <span className="text-paracustom text-xl">
                {yearly ? "/ year" : "/ month"}
              </span>
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            value={views}
            onChange={(e) => setViews(e.target.value)}
            className="appearance-none w-full h-4 mt-6 md:mt-10 rounded-full outline-none cursor-pointer z-10"
            style={{
              backgroundImage: `linear-gradient(to right, ${
                yearly
                  ? "hsl(174, 77%, 80%)"
                  : "hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%)"
              } ${Math.max((views - 1) * 25, 0)}%, #d3d3d3 ${
                Math.max((views - 1) * 25, 0)
              }%, #d3d3d3 100%)`,
            }}
          />
        </div>
        <div className="flex justify-between items-center mt-10">
          <div className="flex ml-12">
            <div className="text-paracustom mr-4 ">Monthly Billing</div>
            <div className={`toggle-container mr-4 relative w-12 h-7 rounded-full p-1 ${yearly ? "bg-sliderbg" : "bg-slidebar"}`} onClick={toggleHandler}>
              <div className={`toggle-switch absolute left-1 w-5 h-5 bg-white rounded-full transition-transform transform ${yearly ? "translate-x-full" : ""}`}></div>
            </div>
            <div className="text-paracustom mr-4">Yearly Billing</div>
            <div className="ml-1 text-red-500 bg-discountbg rounded-full ">
              25% discount
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-8">
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
        <div className="mt-6 md:mt-8">
          {startTrial ? (
            <button disabled className="w-full bg-green-500 text-white cursor-not-allowed  rounded-full py-3" onClick={handleStartTrial}>
              Trial Started
            </button>

          ):(
            <button className="w-full bg-headcustom text-white rounded-full py-3" onClick={handleStartTrial}>
              Start my trial
            </button>
          )}
        </div>
      </div>
    </div>
    <Toaster position='bottom-center'/>
    </Fragment>
  )
}

export default Card;

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
  );
}





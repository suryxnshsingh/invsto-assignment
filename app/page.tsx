'use client'
import { useState } from "react";

export default function Home() {
  return (
    <div className="bg-[#f9faff] h-screen relative manrope">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="449" className="absolute">
        <path fill="#F1F5FE" fillRule="evenodd" d="M0 0h1600v449H191.5C85.737 449 0 363.263 0 257.5V0z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="146" height="145" className="absolute left-0 right-0 mx-auto my-16 w-fit">
        <g fill="none" fillRule="evenodd" stroke="#e5e9f4">
          <circle cx="63" cy="82" r="62.5"/>
          <circle cx="105" cy="41" r="40.5"/>
        </g>
      </svg>
      <div className="relative z-20 pt-14 text-center">
        <h1 className="text-3xl text-[#2c3655] mt-[3.5rem] font-extrabold">Simple, traffic-based pricing</h1>
        <div className="flex justify-center mt-3 sm:flex-row flex-col">
          <p className="text-[#a6abba]  font-semibold">Sign-up for our 30-day trial.</p>
          <p className="text-[#a6abba]  font-semibold">No credit card required.</p> 
        </div>
        <Card />
      </div>
    </div>
  );
}

const Card = () => {
  const [pageViews, setPageViews] = useState(2);
  const [isYearly, setIsYearly] = useState(false);

  const pricingTiers = [
    { views: "10K", price: 8 },
    { views: "50K", price: 12 },
    { views: "100K", price: 16 },
    { views: "500K", price: 24 },
    { views: "1M", price: 36 }
  ];

  const getPrice = () => {
    const basePrice = pricingTiers[pageViews].price;
    return isYearly ? basePrice * 0.75 : basePrice;
  };

  return (
    <div className="md:w-2/5 w-4/5 h-[50%] mx-auto mt-20 bg-white rounded-lg shadow-lg">
      <div className="p-10">
        <div className="flex justify-center md:justify-between md:flex-row flex-col items-center">
          <div className="">
            <p className="uppercase font-bold text-[#858fad]">{pricingTiers[pageViews].views} Pageviews</p>
          </div>
          <div className="text-right flex items-center pt-2 md:pt-0 ">
            <span className="text-4xl font-extrabold text-[#293356]">
              ${getPrice().toFixed(2)}
            </span>
            <span className="text-[#858fad] ml-2">/ month</span>
          </div>
        </div>
        <div className="mb-5 md:mb-10 relative py-5">
          <input
            type="range"
            min="0"
            max="4"
            value={pageViews}
            onChange={(e) => setPageViews(parseInt(e.target.value))}
            className="w-full  h-2 bg-[#eaeefb] rounded-lg appearance-none cursor-pointer
                      [&::-webkit-slider-thumb]:appearance-none
                      [&::-webkit-slider-thumb]:w-9
                      [&::-webkit-slider-thumb]:h-9
                      [&::-webkit-slider-thumb]:rounded-full
                      [&::-webkit-slider-thumb]:bg-[#10d5c2]
                      [&::-webkit-slider-thumb]:shadow-[0_15px_30px_rgba(0,255,231,0.6)]
                      [&::-webkit-slider-thumb]:cursor-pointer
                      [&::-webkit-slider-thumb]:hover:bg-[#7aeadf]
                      [&::-webkit-slider-thumb]:relative
                      [&::-moz-range-thumb]:w-9
                      [&::-moz-range-thumb]:h-9
                      [&::-moz-range-thumb]:border-0
                      [&::-moz-range-thumb]:rounded-full
                      [&::-moz-range-thumb]:bg-[#10d5c2]
                      [&::-moz-range-thumb]:shadow-[0_15px_30px_rgba(0,255,231,0.6)]
                      [&::-moz-range-thumb]:cursor-pointer
                      [&::-moz-range-thumb]:hover:bg-[#7aeadf]
                      [&::-moz-range-thumb]:relative"
            style={{
              background: `linear-gradient(to right, 
                #a5f3eb 0%, 
                #a5f3eb ${(pageViews / 4) * 100}%, 
                #eaeefb ${(pageViews / 4) * 100}%, 
                #eaeefb 100%)`
            }}
          />
          <div 
            className="absolute pointer-events-none"
            style={{
              left: `calc(${(pageViews / 4) * 100}% - 0.7rem)`,
              top: '50%',
              transform: 'translateY(-35%)'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="13">
              <g fill="#80FFF3" fillRule="evenodd">
                <path d="M16 2.558v7.884a1 1 0 001.735.679l3.639-3.943a1 1 0 000-1.356l-3.64-3.943A1 1 0 0016 2.558zM6 2.558v7.884a1 1 0 01-1.735.679L.626 7.178a1 1 0 010-1.356l3.64-3.943A1 1 0 016 2.558z"/>
              </g>
            </svg>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 text-sm text-[#858fad]">
          <span>Monthly Billing</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-[#cdd7ee] peer-focus:outline-none rounded-full peer 
                          peer-checked:after:translate-x-full peer-checked:after:border-white 
                          after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                          after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all
                          hover:bg-[#7aeadf] peer-checked:bg-[#7aeadf]">
            </div>
          </label>
          <span>Yearly Billing</span>
          <span className="bg-[#feede8] text-[#ff8d68] px-2 py-0.5 rounded-full text-xs font-bold">
            25% discount
          </span>
        </div>
      </div>
      <hr></hr>
      <div className="px-10 py-8 flex md:justify-between justify-center md:flex-row flex-col">
        <div className="text-[#a6abba] ">
          <ul className="space-y-3 mb-8 md:mb-0">
            <li className="flex items-center gap-4 text-[#858fad]">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8"><path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1"/></svg>
              Unlimited websites
            </li>
            <li className="flex items-center gap-4 text-[#858fad]">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8"><path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1"/></svg>
              100% data ownership
            </li>
            <li className="flex items-center gap-4 text-[#858fad]">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8"><path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1"/></svg>
              Email reports
            </li>    
          </ul>
        </div>
        <div className="flex items-center">
          <button className="bg-[#283255] text-white px-8 py-2 font-semibold rounded-3xl flex justify-center items-center ">Start my trial</button>
        </div>
      </div>
    </div>
  )
}
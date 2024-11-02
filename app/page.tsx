'use client'
import { useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <div className={`min-h-screen relative manrope transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-[#f9faff]'}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="449" className="absolute">
        <path fill={isDarkMode ? '#1a1a2e' : '#F1F5FE'} fillRule="evenodd" d="M0 0h1600v449H191.5C85.737 449 0 363.263 0 257.5V0z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="146" height="145" className="absolute left-0 right-0 mx-auto my-16 w-fit">
        <g fill="none" fillRule="evenodd" stroke={isDarkMode ? '#2a2a3f' : '#e5e9f4'}>
          <circle cx="63" cy="82" r="62.5"/>
          <circle cx="105" cy="41" r="40.5"/>
        </g>
      </svg>
      
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="relative p-2 m-2 rounded-lg transition-colors duration-300 cursor-pointer hover:bg-gray-100"
      >
        {isDarkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>

      <div className="relative z-20 pt-14 text-center">
        <h1 className={`text-3xl  font-extrabold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-[#2c3655]'}`}>
          Simple, traffic-based pricing
        </h1>
        <div className="flex justify-center mt-3 sm:flex-row flex-col">
          <p className={`text-[#a6abba] font-semibold ${isDarkMode ? 'text-gray-400' : ''}`}>Sign-up for our 30-day trial.</p>
          <p className={`text-[#a6abba] font-semibold ${isDarkMode ? 'text-gray-400' : ''}`}>No credit card required.</p> 
        </div>
        <Card isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

interface CardProps {
  isDarkMode: boolean;
}

const Card = ({ isDarkMode }: CardProps) => {
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
    <div className={`md:w-2/5 w-4/5 h-[50%] mx-auto mt-20 rounded-lg shadow-lg transition-colors duration-300 
      ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="p-10">
        <div className="flex justify-center md:justify-between md:flex-row flex-col items-center">
          <div>
            <p className={`uppercase font-bold ${isDarkMode ? 'text-gray-300' : 'text-[#858fad]'}`}>
              {pricingTiers[pageViews].views} Pageviews
            </p>
          </div>
          <div className="text-right flex items-center pt-2 md:pt-0">
            <span className={`text-4xl font-extrabold transition-colors duration-300 
              ${isDarkMode ? 'text-white' : 'text-[#293356]'}`}>
              ${getPrice().toFixed(2)}
            </span>
            <span className={`ml-2 ${isDarkMode ? 'text-gray-400' : 'text-[#858fad]'}`}>/ month</span>
          </div>
        </div>
        <div className="mb-5 md:mb-10 relative py-5">
          <input
            type="range"
            min="0"
            max="4"
            value={pageViews}
            onChange={(e) => setPageViews(parseInt(e.target.value))}
            className={`w-full h-2 rounded-lg appearance-none cursor-pointer
                      [&::-webkit-slider-thumb]:appearance-none
                      [&::-webkit-slider-thumb]:w-7
                      [&::-webkit-slider-thumb]:h-7
                      [&::-webkit-slider-thumb]:rounded-full
                      [&::-webkit-slider-thumb]:bg-[#10d5c2]
                      [&::-webkit-slider-thumb]:shadow-[0_15px_30px_rgba(0,255,231,0.9)]
                      [&::-webkit-slider-thumb]:cursor-pointer
                      [&::-webkit-slider-thumb]:hover:bg-[#7aeadf]
                      [&::-webkit-slider-thumb]:relative
                      [&::-moz-range-thumb]:w-7
                      [&::-moz-range-thumb]:h-7
                      [&::-moz-range-thumb]:border-0
                      [&::-moz-range-thumb]:rounded-full
                      [&::-moz-range-thumb]:bg-[#10d5c2]
                      [&::-moz-range-thumb]:shadow-[0_15px_30px_rgba(0,255,231,0.9)]
                      [&::-moz-range-thumb]:cursor-pointer
                      [&::-moz-range-thumb]:hover:bg-[#7aeadf]
                      [&::-moz-range-thumb]:relative
                      ${isDarkMode ? 'bg-gray-700' : 'bg-[#eaeefb]'}`}
            style={{
              background: `linear-gradient(to right, 
                #a5f3eb 0%, 
                #a5f3eb ${(pageViews / 4) * 100}%, 
                ${isDarkMode ? '#374151' : '#eaeefb'} ${(pageViews / 4) * 100}%, 
                ${isDarkMode ? '#374151' : '#eaeefb'} 100%)`
            }}
          />
        </div>
        <div className={`flex justify-center items-center gap-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-[#858fad]'}`}>
          <span>Monthly Billing</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
              className="sr-only peer"
            />
            <div className={`w-11 h-6 peer-focus:outline-none rounded-full peer 
                          peer-checked:after:translate-x-full peer-checked:after:border-white 
                          after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                          after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all
                          hover:bg-[#7aeadf] peer-checked:bg-[#7aeadf]
                          ${isDarkMode ? 'bg-gray-600' : 'bg-[#cdd7ee]'}`}>
            </div>
          </label>
          <span>Yearly Billing</span>
          <span className={`px-2 py-0.5 rounded-full text-xs font-bold
            ${isDarkMode ? 'bg-gray-700 text-orange-400' : 'bg-[#feede8] text-[#ff8d68]'}`}>
            25% <p className="hidden md:inline">discount</p>
          </span>
        </div>
      </div>
      <hr className={isDarkMode ? 'border-gray-700' : ''} />
      <div className="px-10 py-8 flex md:justify-between justify-center md:flex-row flex-col">
        <div className={isDarkMode ? 'text-gray-400' : 'text-[#a6abba]'}>
          <ul className="space-y-3 mb-8 md:mb-0">
            <li className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                <path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1"/>
              </svg>
              Unlimited websites
            </li>
            <li className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                <path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1"/>
              </svg>
              100% data ownership
            </li>
            <li className="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                <path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1"/>
              </svg>
              Email reports
            </li>    
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <button className={`px-8 py-2 font-semibold rounded-3xl flex justify-center items-center transition-colors duration-300
            ${isDarkMode ? 'bg-[#10d5c2] text-gray-900 hover:bg-[#7aeadf]' : 'bg-[#283255] text-white hover:bg-[#434c78]'}`}>
            Start my trial
          </button>
        </div>
      </div>
    </div>
  );
};

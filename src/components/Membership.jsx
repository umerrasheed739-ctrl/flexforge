import React from 'react';
import FadeIn from './FadeIn'; // ← Animation wrapper imported securely

const Membership = ({ onChoosePlan }) => {
  return (
    <section id="membership" className="w-full min-h-screen bg-[#0a0a0a] text-white px-6 md:px-12 pt-32 pb-24 relative">
      
      {/* Heading Container wrapped in FadeIn */}
      <FadeIn>
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center mb-24">
          <div className="flex items-center gap-2">
            <span className="w-12 h-[2px] bg-red-600"></span>
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Pricing Plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">CHOOSE YOUR MEMBERSHIP</h2>
          <p className="text-gray-400 max-w-xl">No hidden fees. Choose a plan that fits your goals and start forging your dream physique today.</p>
        </div>
      </FadeIn>

      {/* Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch pt-6">
        
        {/* 1. Basic Plan Card wrapped in FadeIn with delay */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col justify-between rounded-2xl p-8 border border-zinc-800 bg-zinc-950 hover:border-zinc-700 transition duration-300 h-full">
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-200">Basic Plan</h3>
              <div className="flex items-baseline gap-1 my-6">
                <span className="text-5xl font-black text-white">$29</span>
                <span className="text-gray-400 font-medium">/month</span>
              </div>
              <ul className="flex flex-col gap-4 my-8 border-t border-zinc-800 pt-6">
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <span className="text-red-600 font-bold">✓</span> Standard Gym Floor Access
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <span className="text-red-600 font-bold">✓</span> Locker Room Access
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <span className="text-red-600 font-bold">✓</span> 1 Free Fitness Assessment
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <span className="text-red-600 font-bold">✓</span> Free Wi-Fi
                </li>
              </ul>
            </div>
            <button 
              onClick={() => onChoosePlan('Basic Plan', '29')}
              className="w-full py-3 rounded-xl font-bold border border-white bg-transparent text-white hover:bg-white hover:text-black transition duration-300 uppercase text-xs tracking-wider cursor-pointer"
            >
              CHOOSE PLAN
            </button>
          </div>
        </FadeIn>

        {/* 2. Premium Plan Card wrapped in FadeIn with secondary delay */}
        <FadeIn delay={0.25}>
          <div className="flex flex-col justify-between rounded-2xl p-8 border-2 border-red-600 bg-zinc-900 shadow-2xl shadow-red-600/10 md:scale-105 relative z-10 h-full">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[11px] font-black px-4 py-1 rounded-full uppercase tracking-widest whitespace-nowrap shadow-md block">
              Most Popular
            </span>

            <div className="pt-2">
              <h3 className="text-xl font-bold mb-2 text-gray-200">Premium Plan</h3>
              <div className="flex items-baseline gap-1 my-6">
                <span className="text-5xl font-black text-white">$49</span>
                <span className="text-gray-400 font-medium">/month</span>
              </div>
              <ul className="flex flex-col gap-4 my-8 border-t border-zinc-800 pt-6">
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="text-red-600 font-bold">✓</span> 24/7 Global Access
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="text-red-600 font-bold">✓</span> All Group Fitness Classes
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="text-red-600 font-bold">✓</span> Customized Workout Plans
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="text-red-600 font-bold">✓</span> Personal Trainer (2 Sessions/mo)
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="text-red-600 font-bold">✓</span> Premium Locker & Sauna
                </li>
              </ul>
            </div>
            <button 
              onClick={() => onChoosePlan('Premium Plan', '49')}
              className="w-full py-3 rounded-xl font-bold bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-red-600/30 transition duration-300 uppercase text-xs tracking-wider cursor-pointer"
            >
              CHOOSE PLAN
            </button>
          </div>
        </FadeIn>

        {/* 3. Elite Plan Card wrapped in FadeIn with third delay */}
        <FadeIn delay={0.4}>
          <div className="flex flex-col justify-between rounded-2xl p-8 border border-zinc-800 bg-zinc-950 hover:border-zinc-700 transition duration-300 h-full">
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-200">Elite Plan</h3>
              <div className="flex items-baseline gap-1 my-6">
                <span className="text-5xl font-black text-white">$79</span>
                <span className="text-gray-400 font-medium">/month</span>
              </div>
              <ul className="flex flex-col gap-4 my-8 border-t border-zinc-800 pt-6">
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <span className="text-red-600 font-bold">✓</span> All Premium Features
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <span className="text-red-600 font-bold">✓</span> Unlimited Personal Training
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <span className="text-red-600 font-bold">✓</span> Customized Nutrition Support
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <span className="text-red-600 font-bold">✓</span> Free Gym Merchandise
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <span className="text-red-600 font-bold">✓</span> Massage & Cryotherapy Access
                </li>
              </ul>
            </div>
            <button 
              onClick={() => onChoosePlan('Elite Plan', '79')}
              className="w-full py-3 rounded-xl font-bold border border-white bg-transparent text-white hover:bg-white hover:text-black transition duration-300 uppercase text-xs tracking-wider cursor-pointer"
            >
              CHOOSE PLAN
            </button>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Membership;
import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-12 pt-28 pb-12 overflow-hidden bg-[#111111]">
      {/* Background Gradients & Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 opacity-70"></div>
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-red-600 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl text-center md:text-left flex flex-col items-center md:items-start gap-6">
        <p className="text-red-500 font-bold tracking-widest text-sm uppercase bg-red-500/10 px-4 py-1.5 rounded-full">
          Shape Your Perfect Body
        </p>
    
        {/* Hero Main Heading Container */}
        <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter text-center md:text-left leading-tight">
          <div>UNLEASH YOUR</div>
          <div>
            <span className="text-red-600">INNER</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">BEAST</span>
          </div>
        </h1>
        
        <p className="text-gray-400 text-base md:text-lg max-w-xl">
          Premium gym facilities, world-class trainers, and customized nutrition plans. Everything you need to forge your ultimate physique.
        </p>
        
        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          
          {/* GET STARTED - Scrolls smoothly to Fitness Calculator */}
          <a 
            href="#calculator" 
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-md transition duration-300 tracking-wide text-center uppercase block text-sm select-none cursor-pointer"
          >
            Get Started
          </a>

          {/* WATCH PROMO - 100% Open Access Public Video Link */}
<a 
  href="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0ee273d26ebf9a73da0e6983ffb2d87&profile_id=165&oauth2_token_id=57447761" 
  target="_blank" 
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-3 border border-white hover:bg-white hover:text-black text-white font-bold px-8 py-4 rounded-md transition duration-300 tracking-wide uppercase text-sm select-none cursor-pointer"
>
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg> 
  Watch Promo
</a>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
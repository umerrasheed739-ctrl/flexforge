import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Fixed Main Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-zinc-900 px-6 md:px-12 py-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-white font-black text-2xl tracking-tighter">
            <span className="text-red-600">⚡</span> FLEXFORGE
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-semibold tracking-wide">
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">About</a></li>
            <li><a href="#membership" className="text-gray-400 hover:text-white transition duration-300">Membership</a></li>
            <li><a href="#trainers" className="text-gray-400 hover:text-white transition duration-300">Trainers</a></li>
            <li><a href="/member-portal" className="text-red-500 hover:text-white transition duration-300 border-l border-zinc-800 pl-6">Member Portal</a></li>
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a href="#membership" className="inline-block px-5 py-2.5 rounded-xl font-bold border border-white bg-transparent text-white hover:bg-white hover:text-black transition duration-300 uppercase text-xs tracking-wider cursor-pointer text-center">
              JOIN NOW
            </a>
          </div>

          {/* Hamburger Icon */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none cursor-pointer z-50 p-2">
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span className={`w-full h-[2px] bg-white rounded transition-all duration-300 origin-left ${isOpen ? 'rotate-45 translate-x-[2px] translate-y-[-1px]' : ''}`}></span>
              <span className={`w-full h-[2px] bg-white rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-[2px] bg-white rounded transition-all duration-300 origin-left ${isOpen ? '-rotate-45 translate-x-[2px] translate-y-[1px]' : ''}`}></span>
            </div>
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-screen w-[75%] max-w-xs bg-zinc-950 border-l border-zinc-900 p-8 pt-28 flex flex-col gap-8 transition-transform duration-300 ease-in-out z-40 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col gap-6 text-xl font-bold tracking-wide">
          <li><a href="#" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-red-600 transition block py-2">Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-red-600 transition block py-2">About</a></li>
          <li><a href="#membership" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-red-600 transition block py-2">Membership</a></li>
          <li><a href="#trainers" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-red-600 transition block py-2">Trainers</a></li>
          <li className="border-t border-zinc-800 pt-4"><a href="/member-portal" onClick={() => setIsOpen(false)} className="text-red-500 hover:text-white transition block py-2">Member Portal</a></li>
        </ul>

        <div className="mt-4">
          <a href="#membership" 
             onClick={() => setIsOpen(false)} 
             className="inline-block w-full px-5 py-3 rounded-xl font-bold border border-red-600 bg-red-600 text-white text-center uppercase tracking-wider cursor-pointer">
             JOIN NOW
          </a>
        </div>
      </div>

      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"></div>}
    </>
  );
};

export default Navbar;
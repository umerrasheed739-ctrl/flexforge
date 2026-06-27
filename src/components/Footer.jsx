import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] text-gray-400 border-t border-zinc-900 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-white font-black text-2xl tracking-tighter">
            <span className="text-red-600">⚡</span> FLEXFORGE
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Pakistan's premium fitness ecosystem. Forge your body, sharpen your mind, and unleash your inner beast with world-class environments.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider">Explore</h4>
          <ul className="flex flex-col gap-2 text-sm">
            {/* FIXED: Changed from #home to # for instant top scroll */}
            <li><a href="#" className="hover:text-red-600 transition duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-red-600 transition duration-300">About Us</a></li>
            <li><a href="#membership" className="hover:text-red-600 transition duration-300">Membership</a></li>
            <li><a href="#trainers" className="hover:text-red-600 transition duration-300">Our Trainers</a></li>
          </ul>
        </div>

        
        {/* Gym Timings Column */}
     <div className="flex flex-col gap-4">
     <h4 className="text-white font-bold text-sm uppercase tracking-wider">Staff & Gym Hours</h4>
     <ul className="flex flex-col gap-2 text-sm text-gray-400">
    <li><span className="text-gray-200 font-medium">Mon - Sat:</span> 24 Hours Open</li>
    <li><span className="text-gray-200 font-medium">Sunday:</span> 24 Hours (Biometric Only)</li>
    <li className="text-[11px] text-red-600 font-bold tracking-wider mt-2 uppercase">
      ⚡ Front Desk Staff: 8 AM - 10 PM
    </li>
  </ul>
</div>

        {/* Contact/Location Column */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider">Contact</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="text-gray-500">📍 Islamabad & Rawalpindi Branches</li>
            <li><a href="mailto:info@flexforge.com" className="hover:text-red-600 transition duration-300 text-gray-400">✉ info@flexforge.com</a></li>
            <li className="text-gray-400">📞 +92 300 1234567</li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Strip */}
      <div className="max-w-6xl mx-auto border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} FLEXFORGE Pakistan. All Rights Reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-gray-400 cursor-pointer transition">Privacy Policy</span>
          <span className="hover:text-gray-400 cursor-pointer transition">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
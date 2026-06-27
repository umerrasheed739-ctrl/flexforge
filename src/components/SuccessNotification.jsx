import React, { useEffect } from 'react';

const SuccessNotification = ({ message, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // 3 seconds baad bina kisi delay ke notification khud close ho jaye
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[100] bg-zinc-950 border border-red-600/50 rounded-xl px-6 py-4 shadow-2xl flex items-center gap-3">
      {/* Icon */}
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-600 text-white font-bold text-xs select-none">
        ✓
      </div>
      
      {/* Content */}
      <div>
        <p className="text-white text-xs font-bold uppercase tracking-wider">Success</p>
        <p className="text-gray-400 text-xs mt-0.5 font-medium">{message}</p>
      </div>

      {/* Close Button */}
      <button 
        onClick={onClose} 
        className="ml-4 text-gray-500 hover:text-white text-xs transition duration-200 cursor-pointer"
      >
        ✕
      </button>
    </div>
  );
};

export default SuccessNotification;
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import axios from 'axios'; // Axios import kiya

const CheckoutModal = ({ isOpen, onClose, selectedPlan, onSuccess }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  // Form state manage karne ke liye
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, ease: 'power2.out' });
      gsap.fromTo(modalRef.current, 
        { scale: 0.9, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.5)' }
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(modalRef.current, { scale: 0.9, opacity: 0, y: 20, duration: 0.3, ease: 'power2.in' });
    gsap.to(overlayRef.current, { 
      opacity: 0, 
      duration: 0.3, 
      ease: 'power2.in',
      onComplete: onClose 
    });
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Data backend ko bhej rahe hain (selectedPlan ka naam bhi add kiya)
      const dataToSave = { ...formData, plan: selectedPlan?.name };
      await axios.post('http://localhost:5000/api/membership', dataToSave);

      // Success logic
      handleClose();
      if (onSuccess) {
        onSuccess(`Welcome to the Forge! Your ${selectedPlan?.name || 'Plan'} is successfully activated 💪`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to join. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div ref={overlayRef} onClick={handleClose} className="absolute inset-0 bg-black/80 backdrop-blur-md opacity-0 transition-opacity"></div>

      <div ref={modalRef} className="bg-zinc-950 border border-zinc-800 w-full max-w-md rounded-2xl p-8 shadow-2xl relative z-10 opacity-0 transform">
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-white text-xl transition duration-200 cursor-pointer">✕</button>

        <div className="text-center mb-6">
          <span className="text-red-600 font-bold uppercase tracking-widest text-[10px] bg-red-600/10 px-3 py-1 rounded-full">Secure Checkout</span>
          <h3 className="text-xl font-black text-white uppercase tracking-tight mt-3">Join FlexForge</h3>
          <p className="text-gray-400 text-xs mt-1">
            You are subscribing to the <span className="text-red-500 font-bold">{selectedPlan?.name}</span> (${selectedPlan?.price}/month)
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1.5">Full Name</label>
            <input type="text" required placeholder="e.g. Umer Rasheed" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition duration-300 font-medium" />
          </div>

          <div>
            <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1.5">Email Address</label>
            <input type="email" required placeholder="name@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition duration-300 font-medium" />
          </div>

          <div>
            <label className="block text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1.5">Phone Number</label>
            <input type="tel" required pattern="^03[0-9]{9}$" title="e.g., 03001234567" placeholder="e.g. 03001234567" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition duration-300 font-medium" />
          </div>

          <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl transition duration-300 uppercase text-xs tracking-wider cursor-pointer text-center mt-2 shadow-lg shadow-red-600/20">
            Confirm & Activate Plan
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;
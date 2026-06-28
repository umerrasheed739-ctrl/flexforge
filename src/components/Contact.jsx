import React, { useState } from 'react';
import axios from 'axios';
import SuccessNotification from './SuccessNotification'; // Yakeeni banayein ke ye file sahi path par ho

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [phoneError, setPhoneError] = useState('');
  const [isSuccessOpen, setIsSuccessOpen] = useState(false); // Success popup state

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, '');
    
    if (numericValue.length <= 11) {
      setFormData({ ...formData, phone: numericValue });
      if (numericValue.length === 11 && numericValue.startsWith('03')) {
        setPhoneError('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneRegex = /^03\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      setPhoneError('Please enter a valid 11-digit phone number starting with 03.');
      return;
    }
    setPhoneError('');

    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setIsSuccessOpen(true); // Popup open hoga
      setFormData({ name: '', email: '', phone: '', message: '' }); // Form clear
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit. Check your backend server!");
    }
  };

  return (
    <section id="contact" className="w-full min-h-screen bg-black text-white px-6 md:px-12 py-24 flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
        
        {/* Left Side: Info */}
        <div className="flex flex-col justify-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-12 h-[2px] bg-red-600"></span>
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase leading-none">
            Are You Ready To <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              Start Your Journey?
            </span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            Leave your details below. Our certified fitness consultants will reach out within 24 hours to guide you with the perfect plan tailored for your goals.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">Full Name</label>
              <input type="text" required placeholder="e.g. Umer Rasheed" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-600 transition" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">Email Address</label>
              <input type="email" required placeholder="name@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-600 transition" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">Phone Number</label>
              <input type="text" required placeholder="e.g. 03001234567" value={formData.phone} onChange={handlePhoneChange} className={`w-full bg-zinc-900/50 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition ${phoneError ? 'border-red-600' : 'border-zinc-800'}`} />
              {phoneError && <span className="text-xs text-red-500 font-medium">⚠️ {phoneError}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">Message (Optional)</label>
              <textarea rows="4" placeholder="Tell us about your fitness goals..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-600 transition resize-none"></textarea>
            </div>

            <button type="submit" className="w-full py-4 rounded-xl font-bold bg-red-600 text-white hover:bg-red-700 transition uppercase text-xs tracking-widest mt-2 cursor-pointer shadow-lg shadow-red-600/10">
              Submit Application
            </button>
          </form>
        </div>
      </div>

      {/* Success Notification Component */}
      <SuccessNotification 
        message="Your application has been submitted successfully! We will contact you soon." 
        isOpen={isSuccessOpen} 
        onClose={() => setIsSuccessOpen(false)} 
      />
    </section>
  );
};

export default Contact;
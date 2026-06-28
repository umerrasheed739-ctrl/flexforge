import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MemberPortal = () => {
  const [email, setEmail] = useState('');
  const [data, setData] = useState(null);

  // Browser title set karne ke liye
  useEffect(() => {
    document.title = "FlexForge - Member Portal";
  }, []);

  const handleLogin = async () => {
    try {
      // trim() extra spaces ko remove kar dega
      const cleanEmail = email.trim();
      const res = await axios.get(`http://localhost:5000/api/member/${cleanEmail}`);
      setData(res.data);
    } catch (err) {
      alert("Member not found! Please check your email address.");
    }
  };

  return (
    <div className="p-10 bg-zinc-950 min-h-screen text-white pt-28">
      {/* Header */}
      <h1 className="text-4xl font-black mb-10 text-white">
        Member <span className="text-red-600">Portal</span>
      </h1>
      
      {!data ? (
        // Login View
        <div className="bg-zinc-900 p-8 rounded-lg max-w-md border border-zinc-800">
          <h2 className="text-2xl mb-4 font-bold">Login to your account</h2>
          <input 
            className="bg-zinc-800 w-full p-3 mb-4 rounded text-white border border-zinc-700 focus:outline-none focus:border-red-600" 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your registered email" 
          />
          <button 
            className="bg-red-600 w-full p-3 rounded font-bold hover:bg-red-700 transition" 
            onClick={handleLogin}
          >
            View Status
          </button>
        </div>
      ) : (
        // Data Display View
        <div className="bg-zinc-900 p-8 rounded-lg max-w-lg border border-zinc-800">
          <h2 className="text-3xl font-black mb-6 text-white">Welcome, {data.name}</h2>
          <div className="space-y-4 text-lg">
            <p className="text-gray-400">Email: <span className="text-white font-semibold">{data.email}</span></p>
            <p className="text-gray-400">Phone: <span className="text-white font-semibold">{data.phone}</span></p>
            <p className="text-gray-400">Plan: <span className="text-red-500 font-bold">{data.plan}</span></p>
            <p className="text-gray-400">Status: <span className="text-green-500 font-bold">Active</span></p>
          </div>
          <button 
            className="mt-8 text-sm text-gray-400 underline hover:text-white" 
            onClick={() => setData(null)}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default MemberPortal;
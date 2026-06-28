import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [memberships, setMemberships] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    document.title = "FlexForge - Admin";
    const fetchData = async () => {
      try {
        const memRes = await axios.get('http://localhost:5000/api/memberships');
        const conRes = await axios.get('http://localhost:5000/api/contacts');
        setMemberships(memRes.data);
        setContacts(conRes.data);
      } catch (error) {
        console.error("Data Fetch Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-10 bg-zinc-950 min-h-screen text-white">
      <h1 className="text-3xl font-black mb-10 pt-10">Admin Dashboard</h1>
      
      {/* Membership Table */}
      <h2 className="text-xl mb-4 text-red-500">Recent Memberships ({memberships.length})</h2>
     {/* Memberships Table */}
<table className="w-full text-left border-collapse mb-10 bg-zinc-900 rounded-lg overflow-hidden">
  <thead>
    <tr className="bg-zinc-800">
      <th className="p-3">Name</th>
      <th className="p-3">Email</th>
      <th className="p-3">Phone</th> 
      <th className="p-3">Plan</th>
    </tr>
  </thead>
  <tbody>
    {memberships.map((m, i) => (
      <tr key={i} className="border-b border-zinc-800">
        <td className="p-3">{m.name}</td>
        <td className="p-3">{m.email}</td>
        <td className="p-3">{m.phone}</td> {/* Yahan data show hoga */}
        <td className="p-3 text-red-500 font-bold">{m.plan}</td>
      </tr>
    ))}
  </tbody>
</table>

      {/* Inquiries Table */}
      <h2 className="text-xl mb-4 text-red-500">Recent Inquiries ({contacts.length})</h2>
      <table className="w-full text-left border-collapse bg-zinc-900 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-zinc-800">
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c, i) => (
            <tr key={i} className="border-b border-zinc-800 text-sm">
              <td className="p-3 font-bold text-white">{c.name}</td>
              <td className="p-3 text-red-400">{c.email}</td>
              <td className="p-3 text-gray-300">{c.phone}</td>
              <td className="p-3 text-gray-400">{c.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
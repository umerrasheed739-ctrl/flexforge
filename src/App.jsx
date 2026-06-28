import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // 1. Router import karo
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AdminDashboard from './components/AdminDashboard'; // 2. Admin file import karo
import MemberPortal from './components/MemberPortal';


function App() {
  return (
  // App.jsx
<Router>
  <Routes>
    {/* Admin Portal (No Navbar) */}
    <Route path="/admin" element={<AdminDashboard />} />
    <Route path="/member-portal" element={<MemberPortal />} />

    {/* Website Pages (With Navbar) */}
    <Route path="/" element={
      <>
        <Navbar />
        <Home />
      </>
    } />
  </Routes>
</Router>
  );
}

export default App;
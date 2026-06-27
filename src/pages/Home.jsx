import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import FitnessCalculator from '../components/FitnessCalculator';
import Membership from '../components/Membership';
import Trainers from '../components/Trainers';
import Reviews from '../components/Reviews'; 
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import CheckoutModal from '../components/CheckoutModal'; 
import SuccessNotification from '../components/SuccessNotification';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // 1. Success Notification ki state yahan banti hai
  const [notification, setNotification] = useState({ isOpen: false, message: '' });

  useEffect(() => {
    const sections = document.querySelectorAll('section, header, div[id]');
    
    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (!sectionId || sectionId === 'home') {
            document.title = 'FlexForge | Home';
          } else {
            const pageName = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
            document.title = `FlexForge - ${pageName}`;
          }
        }
      });
    }, {
      root: null,
      threshold: 0.3,
      rootMargin: "-10% 0px -10% 0px"
    });

    sections.forEach((section) => {
      if (section.id) {
        titleObserver.observe(section);
      }
    });

    return () => titleObserver.disconnect();
  }, []);

  // Function to trigger modal from any component
  const openCheckout = (planName, planPrice) => {
    setSelectedPlan({ name: planName, price: planPrice });
    setIsModalOpen(true);
  };

  // 2. Notification trigger karne ka functional logic
  const triggerNotification = (msg) => {
    setNotification({ isOpen: true, message: msg });
  };

  return (
    <div className="bg-black min-h-screen w-full relative">
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <FitnessCalculator /> 
      
      {/* Pass the openCheckout function to Membership cards */}
      <div id="membership">
        <Membership onChoosePlan={openCheckout} />
      </div>
      
      <div id="trainers"><Trainers /></div>
      <div id="reviews"><Reviews /></div>
      <FAQ /> 
      
      {/* 3. Contact Form ko bhi notification ka access de dete hain agar chahiye ho */}
      <div id="contact border-b border-zinc-950">
        <Contact windowAlertReplacement={triggerNotification} />
      </div>
      
      <Footer />

      {/* Global Checkout Modal - Isme onSuccess ka prop bhej rahe hain */}
      <CheckoutModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedPlan={selectedPlan} 
        onSuccess={triggerNotification}
      />

      {/* 4. Global Custom Success Notification Screen link */}
      <SuccessNotification 
        isOpen={notification.isOpen} 
        message={notification.message} 
        onClose={() => setNotification({ ...notification, isOpen: false })} 
      />
    </div>
  );
};

export default Home;
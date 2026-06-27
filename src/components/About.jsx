import React from 'react';
import FadeIn from './FadeIn'; // ← Sirf animation import ki

const About = () => {
  return (
    <section id="about" className="w-full min-h-screen bg-black text-white px-6 md:px-12 pt-32 pb-20 flex flex-col md:flex-row items-center gap-12">
      
      {/* Left Side: Images Grid wrapped in FadeIn */}
      <div className="w-full md:w-1/2">
        <FadeIn direction="right">
          <div className="grid grid-cols-2 gap-4">
            {/* Image 1 - Modern Equipment */}
            <div className="h-64 md:h-80 rounded-2xl overflow-hidden relative group border border-zinc-800">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop" 
                alt="Gym Equipment" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
              <div className="absolute bottom-4 left-4 z-20">
                <p className="text-primary font-bold text-sm tracking-wider">MODERN EQUIPMENT</p>
              </div>
            </div>

            {/* Image 2 - Expert Trainers */}
            <div className="h-64 md:h-80 rounded-2xl overflow-hidden relative mt-8 group border border-zinc-800">
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop" 
                alt="Trainer" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
              <div className="absolute bottom-4 left-4 z-20">
                <p className="text-primary font-bold text-sm tracking-wider">EXPERT TRAINERS</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Right Side: Content wrapped in FadeIn */}
      <div className="w-full md:w-1/2">
        <FadeIn direction="left" delay={0.2}>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="w-12 h-[2px] bg-primary"></span>
              <span className="text-primary font-bold uppercase tracking-widest text-sm">About FlexForge</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              WE ARE HERE TO <span className="text-primary">FORGE</span> YOUR ULTIMATE PHYSIQUE
            </h2>
            
            <p className="text-gray-400 leading-relaxed text-lg">
              At FlexForge, we believe fitness is not a destination, it's a lifestyle. Our state-of-the-art facility is designed to provide the perfect environment for transformation, combining elite coaching with a motivating community.
            </p>

            {/* Features Minimal List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">✓</div>
                <span className="font-medium text-gray-200">24/7 Gym Access</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">✓</div>
                <span className="font-medium text-gray-200">Free Fitness Consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">✓</div>
                <span className="font-medium text-gray-200">Personalized Workout Plans</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">✓</div>
                <span className="font-medium text-gray-200">Premium Locker Rooms</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

    </section>
  );
};

export default About;
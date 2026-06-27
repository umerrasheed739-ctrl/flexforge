import React from 'react';
import FadeIn from './FadeIn'; // ← Sirf animation wrapper import kiya

const Trainers = () => {
  const trainers = [
    {
      name: "Captain Bilal Ahmad",
      role: "Strength & Conditioning",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Zainab Khan",
      role: "Cardio & Weight Loss Expert",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Maria Khan",
      role: "Diet & Nutrition Specialist",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section id="trainers" className="w-full min-h-screen bg-black text-white px-6 md:px-12 pt-32 pb-24">
      
      {/* Heading Container wrapped in FadeIn */}
      <FadeIn>
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center mb-24">
          <div className="flex items-center gap-2">
            <span className="w-12 h-[2px] bg-red-600"></span>
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Expert Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">MEET OUR EXPERT TRAINERS</h2>
          <p className="text-gray-400 max-w-xl">Our certified professionals are dedicated to pushing you past your limits and achieving your peak performance.</p>
        </div>
      </FadeIn>

      {/* Trainers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {trainers.map((trainer, index) => (
          /* Har individual card ko FadeIn mein wrap kiya aur delay lagaya */
          <FadeIn key={index} delay={index * 0.15}>
            <div className="group flex flex-col bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden hover:border-zinc-700 hover:scale-[1.02] transition-all duration-300 h-full">
              
              {/* Image Container with Zoom effect */}
              <div className="w-full h-96 overflow-hidden relative">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                {/* Dark overlay that fades out on hover */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition duration-300"></div>
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col gap-1 bg-gradient-to-b from-zinc-950 to-black mt-auto">
                <span className="text-red-600 text-xs font-bold uppercase tracking-wider">{trainer.role}</span>
                <h3 className="text-xl font-bold tracking-tight text-white">{trainer.name}</h3>
                
                {/* Simple Social Links Look */}
                <div className="flex gap-4 mt-4 text-xs text-gray-500">
                  <span className="hover:text-white cursor-pointer transition">INSTAGRAM</span>
                  <span className="hover:text-white cursor-pointer transition">TWITTER</span>
                </div>
              </div>

            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Trainers;
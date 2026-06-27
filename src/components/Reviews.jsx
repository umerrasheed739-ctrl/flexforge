import React from 'react';
import FadeIn from './FadeIn'; // ← Import Animation Wrapper

const Reviews = () => {
  const clientReviews = [
    {
      id: 1,
      name: "Hammad Khan",
      role: "Premium Member",
      location: "Islamabad",
      text: "FLEXFORGE is easily the best gym in Islamabad. The 24/7 biometric access is a lifesaver for my busy schedule, and the equipment is top-of-the-line. Highly recommended!",
      rating: "⭐⭐⭐⭐•"
    },
    {
      id: 2,
      name: "Ayesha Malik",
      role: "VIP Client",
      location: "Rawalpindi",
      text: "The female trainers here are exceptionally professional. They customized my nutrition and workout plan from scratch, and I've seen massive changes in just 3 months.",
      rating: "⭐⭐⭐⭐•"
    },
    {
      id: 3,
      name: "Zain Ahmed",
      role: "Elite Member",
      location: "Islamabad",
      text: "Unbelievable environment! The trainers actually know their science and don't just give random advices. The premium dark aesthetic keeps you focused during heavy lifts.",
      rating: "⭐⭐⭐⭐•"
    }
  ];

  return (
    <section id="reviews" className="w-full bg-[#050505] text-white px-6 md:px-12 py-24 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        
        {/* Animated Heading */}
        <FadeIn>
          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="w-12 h-[2px] bg-red-600"></span>
              <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Beasts</span> Say
            </h2>
          </div>
        </FadeIn>

        {/* Animated Grid Items with Staggered Delays */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientReviews.map((review, index) => (
            <FadeIn key={review.id} delay={index * 0.15}> {/* Har card thoda thoda ruk kar aayega */}
              <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-8 h-full flex flex-col justify-between relative overflow-hidden group hover:border-zinc-800 transition duration-300">
                <span className="absolute right-6 top-4 text-8xl text-zinc-900/30 font-serif select-none pointer-events-none group-hover:text-red-600/5 transition duration-500">
                  “
                </span>

                <div className="flex flex-col gap-4 z-10">
                  <div className="text-amber-500 text-sm tracking-wide">{review.rating}</div>
                  <p className="text-gray-400 text-sm italic leading-relaxed">
                    "{review.text}"
                  </p>
                </div>

                <div className="mt-8 border-t border-zinc-900/80 pt-4 flex flex-col gap-0.5 z-10">
                  <h4 className="text-white font-bold text-base tracking-tight">{review.name}</h4>
                  <div className="flex justify-between items-center text-xs text-gray-500 font-medium">
                    <span>{review.role}</span>
                    <span className="text-zinc-600">📍 {review.location}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
import React, { useState } from 'react';

const faqData = [
  {
    question: "What are the gym timings?",
    answer: "We are open 24/7 for Premium and Elite members! For Basic plan holders, gym access is available from 6:00 AM to 11:00 PM every day."
  },
  {
    question: "Can I freeze or cancel my membership?",
    answer: "Yes, absolutely! You can freeze your membership for up to 30 days per year through your dashboard or by visiting the front desk. Cancellations require a 5-day notice before the next billing cycle."
  },
  {
    question: "Are personal training sessions included?",
    answer: "The Premium Plan includes 2 personal training sessions per month, while the Elite Plan gives you unlimited access to personal trainers and customized nutrition support."
  },
  {
    question: "Is there a separate section or timing for ladies?",
    answer: "We offer completely dedicated premium zones and special group fitness classes tailored specifically for women, led by our certified female trainers."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-black text-white px-6 md:px-12 py-24 border-t border-zinc-900 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Static Heading (No FadeIn) */}
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <div className="flex items-center gap-2">
            <span className="w-12 h-[2px] bg-red-600"></span>
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Have Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">Frequently Asked Questions</h2>
        </div>

        {/* Static Accordion List (No FadeIn inside loop) */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className="border border-zinc-800 bg-zinc-950 rounded-xl overflow-hidden hover:border-zinc-700 transition duration-200"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none select-none"
                >
                  <span className={`font-bold text-sm md:text-base tracking-wide ${isOpen ? 'text-red-500' : 'text-zinc-200'}`}>
                    {faq.question}
                  </span>
                  
                  <span className="text-xl font-medium text-zinc-400 select-none">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {/* Instant Content Render */}
                {isOpen && (
                  <div className="p-6 pt-0 border-t border-zinc-900/50 text-gray-400 text-sm leading-relaxed font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
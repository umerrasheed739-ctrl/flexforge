import React, { useState } from 'react';

const FitnessCalculator = () => {
  const [weight, setWeight] = useState('');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [score, setScore] = useState(null);
  const [status, setStatus] = useState('');
  const [statusColor, setStatusColor] = useState('');

  const calculateFitness = (e) => {
    e.preventDefault();

    if (!weight || !feet) {
      alert('Please enter your weight and height (feet)!');
      return;
    }

    // 1 foot = 12 inches. Total inches nikalem
    const totalInches = (parseInt(feet) * 12) + (parseInt(inches) || 0);
    
    // Inches ko meters mein convert karne ka formula (1 inch = 0.0254 meters)
    const heightInMeters = totalInches * 0.0254;
    
    // Formula: Weight (kg) / Height (m)^2
    const calculatedScore = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setScore(calculatedScore);

    if (calculatedScore < 18.5) {
      setStatus('Underweight Bone');
      setStatusColor('text-blue-400');
    } else if (calculatedScore >= 18.5 && calculatedScore <= 24.9) {
      setStatus('Healthy Weight Smooth');
      setStatusColor('text-green-500');
    } else if (calculatedScore >= 25 && calculatedScore <= 29.9) {
      setStatus('Overweight Warning');
      setStatusColor('text-yellow-500');
    } else {
      setStatus('Obese / Heavily Overweight Alert');
      setStatusColor('text-red-500');
    }
  };

  const clearForm = () => {
    setWeight('');
    setFeet('');
    setInches('');
    setScore(null);
    setStatus('');
  };

  return (
    <section id="calculator"  className="py-20 bg-zinc-950 border-t border-b border-zinc-900 px-6 md:px-12">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Info */}
        <div>
          <span className="text-red-600 font-bold uppercase tracking-widest text-xs">Fitness Tool</span>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mt-2 mb-4">
            Check Your <span className="text-red-600">Fitness Status</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Enter your weight and height to instantly calculate your health index score. This metrics-driven score helps you understand your optimal range so you can align your fitness targets perfectly with your body's needs!
          </p>
          
          <div className="border border-zinc-800 rounded-xl overflow-hidden bg-black/40 text-xs">
            <div className="grid grid-cols-2 bg-zinc-900 p-3 font-bold text-white uppercase">
              <div>Health Index Range</div>
              <div>Weight Status</div>
            </div>
            <div className="grid grid-cols-2 p-3 border-b border-zinc-900 text-gray-400">
              <div>Below 18.5</div>
              <div className="text-blue-400">Underweight</div>
            </div>
            <div className="grid grid-cols-2 p-3 border-b border-zinc-900 text-gray-400">
              <div>18.5 – 24.9</div>
              <div className="text-green-500">Normal / Healthy</div>
            </div>
            <div className="grid grid-cols-2 p-3 text-gray-400">
              <div>25.0 and Above</div>
              <div className="text-red-500">Overweight / Obese</div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-black border border-zinc-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
          <form onSubmit={calculateFitness} className="space-y-6">
            <div>
              <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                Your Weight (KG)
              </label>
              <input
                type="number"
                placeholder="e.g. 70"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition duration-300 font-semibold"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                Your Height (Feet & Inches)
              </label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  placeholder="Feet (e.g. 5)"
                  value={feet}
                  onChange={(e) => setFeet(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition duration-300 font-semibold"
                />
                <input
                  type="number"
                  placeholder="Inches (e.g. 9)"
                  value={inches}
                  onChange={(e) => setInches(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-600 transition duration-300 font-semibold"
                />
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <button
                type="submit"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl transition duration-300 uppercase text-xs tracking-wider cursor-pointer text-center shadow-lg shadow-red-600/20"
              >
                Calculate Now
              </button>
              {score && (
                <button
                  type="button"
                  onClick={clearForm}
                  className="px-4 bg-zinc-900 border border-zinc-800 text-gray-400 hover:text-white rounded-xl transition duration-300 text-xs font-bold uppercase tracking-wider"
                >
                  Reset
                </button>
              )}
            </div>
          </form>

          {score && (
            <div className="mt-8 pt-6 border-t border-zinc-900 text-center">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">Your Score</div>
              <div className="text-5xl font-black text-white tracking-tighter my-2">
                {score} <span className="text-xs text-gray-500 font-normal">Points</span>
              </div>
              <div className={`text-sm font-black uppercase tracking-wider ${statusColor}`}>
                {status}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default FitnessCalculator;
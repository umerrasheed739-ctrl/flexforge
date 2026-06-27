import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const FadeIn = ({ children, delay = 0, direction = 'up', duration = 1.0 }) => { // Duration 0.8 se 1.0 kar di taake thoda aram se aaye
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          
          let xOffset = 0;
          let yOffset = 0;

          // Offset values ko 50 se kam karke 30 kar diya taake achanak lamba jump na lage
          if (direction === 'up') yOffset = 30;
          if (direction === 'down') yOffset = -30;
          if (direction === 'left') xOffset = 30;
          if (direction === 'right') xOffset = -30;

          // Jhatka khatam karne ke liye pehle instantly state set karein
          gsap.set(element, { opacity: 0, x: xOffset, y: yOffset });

          // Smooth animation trigger karein
          gsap.to(element, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: duration,
            delay: delay,
            ease: 'power2.out', // 'power2.out' shuruat ko bohot soft aur smooth banata hai
            overwrite: 'auto'
          });

          setHasAnimated(true);
        }
      },
      { 
        threshold: 0.1, // Thoda jaldi trigger hoga taake user ko wait na karna pare
        rootMargin: "0px 0px -20px 0px"
      }
    );

    if (element) observer.observe(element);

    const handleNavbarReset = () => {
      setHasAnimated(false);
    };

    window.addEventListener('click', handleNavbarReset);

    return () => {
      if (element) observer.unobserve(element);
      window.removeEventListener('click', handleNavbarReset);
    };
  }, [hasAnimated, delay, direction, duration]);

  // CSS standard setup taake browser rendering smoothly kare
  return (
    <div ref={elementRef} style={{ willChange: 'transform, opacity' }}>
      {children}
    </div>
  );
};

export default FadeIn;
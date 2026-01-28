import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMaximize2, FiX } from 'react-icons/fi';
import Section from './Section';

gsap.registerPlugin(ScrollTrigger);

// Generate mock data
const portfolioItems = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  src: `https://picsum.photos/seed/${i + 100}/800/${i % 2 === 0 ? 1000 : 600}`,
  title: `Project ${i + 1}`,
  category: i % 2 === 0 ? 'Photography' : 'Design',
}));

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      itemsRef.current.forEach((el, index) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
          y: 100,
          opacity: 0,
          duration: 1,
          delay: (index % 3) * 0.1, // Stagger based on column position roughly
          ease: 'power3.out',
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="portfolio" ref={containerRef} className="bg-dark px-6 py-20 md:py-32">
      <div className="max-w-7xl w-full">
        <h2
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold mb-12 md:mb-20 text-center text-primary"
        >
          作品集 & 画廊
        </h2>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (itemsRef.current[index] = el)}
              className="break-inside-avoid relative group rounded-sm overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-auto object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                <span className="text-accent text-[10px] md:text-xs font-mono tracking-widest uppercase mb-2">
                  {item.category}
                </span>
                <h3 className="text-base md:text-lg font-medium text-white flex justify-between items-center">
                  {item.title}
                  <FiMaximize2 className="text-accent opacity-70" />
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-secondary hover:text-white transition-colors p-2"
            onClick={() => setSelectedImage(null)}
          >
            <FiX size={24} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full view" 
            className="max-w-full max-h-[85vh] md:max-h-[90vh] shadow-2xl rounded-sm"
          />
        </div>
      )}
    </Section>
  );
}

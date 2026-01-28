import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Section from './Section';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Left Column Animation
      tl.from(leftColRef.current, {
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      })
        // Right Column Animation
        .from(
          rightColRef.current,
          {
            x: 50,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
          },
          '-=1'
        )
        // Scroll Indicator Animation
        .from(
          scrollRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.5'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 md:px-20 md:py-0"
    >
      <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
        {/* Left Column: Introduction */}
        <div
          ref={leftColRef}
          className="z-10 flex flex-col justify-center text-left md:col-span-7"
        >
          <span className="text-accent mb-4 font-mono text-xs uppercase tracking-[0.2em] opacity-80 md:text-sm">
            Portfolio 2024
          </span>
          <h1 className="text-primary mb-4 text-4xl font-bold leading-tight sm:text-5xl md:mb-6 md:text-7xl">
            陈建茹
          </h1>
          <h2 className="text-secondary mb-6 text-xl font-light sm:text-2xl md:mb-8 md:text-3xl">
            新媒体运营 & <br className="hidden md:block" />
            <span className="mt-1 block md:mt-0 md:inline">内容创作者</span>
          </h2>
          <p className="text-secondary/70 border-accent/30 mb-8 max-w-lg border-l pl-4 text-base leading-relaxed md:mb-10 md:pl-6 md:text-lg">
            用激情与策略打造爆款内容。擅长情感叙事、视觉表达与数据驱动的运营策略。
          </p>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row md:gap-6">
            <button
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-primary text-dark w-full rounded-sm px-6 py-3 text-center font-medium transition-colors duration-300 hover:bg-white sm:w-auto"
            >
              联系我
            </button>
            <button
              onClick={() =>
                document
                  .getElementById('portfolio')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="border-secondary/30 text-secondary hover:border-primary hover:text-primary w-full rounded-sm border px-6 py-3 text-center font-medium transition-all duration-300 sm:w-auto"
            >
              查看作品
            </button>
          </div>
        </div>

        {/* Right Column: Visual Element */}
        <div
          ref={rightColRef}
          className="relative mt-8 h-[30vh] md:col-span-5 md:mt-0 md:h-[60vh]"
        >
          <div className="bg-surface/30 absolute inset-0 overflow-hidden rounded-sm border border-white/5 backdrop-blur-sm">
            {/* Abstract Geometric Pattern */}
            <div className="bg-accent/5 absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 transform rounded-full blur-3xl"></div>
            <div className="bg-secondary/5 absolute bottom-0 left-0 h-48 w-48 -translate-x-1/3 translate-y-1/3 transform rounded-full blur-2xl"></div>

            {/* Center Content / Placeholder for Photo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-64 w-48 border border-white/10">
                <div className="border-accent/50 absolute -right-4 -top-4 h-12 w-12 border-r border-t"></div>
                <div className="border-accent/50 absolute -bottom-4 -left-4 h-12 w-12 border-b border-l"></div>
                <div className="bg-surface/50 absolute inset-4 flex items-center justify-center">
                  <span className="text-secondary/20 rotate-90 font-mono text-xs tracking-widest">
                    CREATOR
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="text-secondary/50 hover:text-primary absolute bottom-12 left-8 flex cursor-pointer items-center gap-4 transition-colors duration-300 md:left-20"
        onClick={() =>
          document
            .getElementById('about')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        <span className="origin-left translate-x-8 -rotate-90 transform text-xs uppercase tracking-[0.2em]">
          Scroll
        </span>
        <div className="bg-secondary/30 relative ml-2 h-16 w-[1px] overflow-hidden">
          <div className="bg-accent animate-movedown absolute left-0 top-0 h-1/2 w-full"></div>
        </div>
      </div>
    </Section>
  );
}

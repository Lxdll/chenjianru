import React, { ReactNode, forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ children, className, id }, ref) => {
  return (
    <section
      ref={ref}
      id={id}
      className={twMerge('min-h-screen w-full px-6 py-20 relative overflow-hidden flex flex-col items-center', className)}
    >
      {children}
    </section>
  );
});

Section.displayName = 'Section';

export default Section;

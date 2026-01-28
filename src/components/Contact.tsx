import React from 'react';
import { FiMail } from 'react-icons/fi';
import Section from './Section';

export default function Contact() {
  return (
    <Section
      id="contact"
      className="bg-surface/10 min-h-[50vh] justify-center border-t border-white/5 px-6 py-20 md:py-32"
    >
      <div className="max-w-2xl text-center w-full">
        <h2 className="mb-6 md:mb-8 text-3xl md:text-4xl font-bold text-primary">联系我</h2>
        <p className="mb-8 md:mb-12 text-base md:text-lg text-secondary font-light px-4">
          期待与您的合作！ <br />
          无论是工作机会还是交流探讨，随时欢迎联系。
        </p>

        <a
          href="mailto:1513964079@qq.com"
          className="mb-12 md:mb-16 inline-block rounded-full border border-white/10 bg-surface/50 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-medium text-primary transition-all duration-300 hover:bg-surface hover:border-white/20 hover:scale-105 active:scale-95"
        >
          1513964079@qq.com
        </a>

        <div className="flex justify-center gap-6 md:gap-8">
          {[{ icon: FiMail, href: 'mailto:1513964079@qq.com' }].map(
            (social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transform text-secondary transition-all duration-300 hover:text-primary hover:scale-110 p-2"
              >
                <social.icon size={24} className="w-6 h-6 md:w-8 md:h-8" />
              </a>
            )
          )}
        </div>

        <div className="mt-16 md:mt-24 text-[10px] md:text-xs text-secondary opacity-50 tracking-wider uppercase">
          © {new Date().getFullYear()} Chen Jianru. All rights reserved.
        </div>
      </div>
    </Section>
  );
}

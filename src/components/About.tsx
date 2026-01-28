import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from './Section';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    year: '2022.06 - 至今',
    title: '小红书账号运营 / 线上内容创作',
    company: '小红书',
    description: (
      <ul className="list-inside list-disc space-y-1 text-gray-300">
        <li>独立打造情感、旅行 Vlog、生活 Vlog、情感短片等爆款内容；</li>
        <li>始终坚持有立场的深度写作，持续输出高质量内容；</li>
        <li>独立负责内容创意、文案、拍摄、剪辑后期制作等全过程；</li>
        <li>
          独立制定粉丝互动营销方案，社群运营计划方案自媒体矩阵搭建计划，共输出内容篇幅400+；
        </li>
        <li>
          根据后台数据展现，结合内容热点进行内容优化调整，为保持用户粘度负责。
        </li>
        <li className="text-neon-blue mt-2 font-semibold">作品表现：</li>
        <li className="pl-4">
          独立制作内容《与朋友聊天记录》单月阅读量破30w+，点赞互动量10w+；
        </li>
        <li className="pl-4">
          与“像素莉莉”品牌合作独立制作视频《拼图拼好破碎的你》阅读量66w，点赞互动量1.5w+；
        </li>
        <li className="pl-4">
          与“佐依唇膏”品牌合作完成商务笔记《我曾一万次庆幸有这样的朋友》，阅读量6w，点赞互动量5000+；
        </li>
        <li className="pl-4">
          与网易云旗下“MUSapp”项目合作完成商务笔记《女孩子一定不要让自己受委屈》，阅读量30w+，点赞互动7000+；
        </li>
        <li className="pl-4">
          与“soluAPP”合作笔记《素未谋面的SOULMOATE成了我的精神支柱》，阅读量15W，互动量3000+。
        </li>
      </ul>
    ),
  },
  {
    year: '2022.03 - 2023.02',
    title: '内容编辑',
    company: '天涯明月刀官方公众号',
    description:
      '负责公众号次条推文撰写以及排版，完成推文近200条。开创“次条模板”，持续输出高质量内容。',
  },
  {
    year: '2022.05 - 2022.09',
    title: '新媒体撰稿',
    company: '自由撰稿人',
    description: (
      <ul className="list-inside list-disc space-y-1 text-gray-300">
        <li>
          独立撰写新媒体文《抵抗焦虑最好的方法》上稿公众号“樊登读书”，浏览量2w+；
        </li>
        <li>
          独立撰写新媒体文《人民日报推荐的9个方法》上稿公众号“读者”，阅读量3w+；
        </li>
        <li>独立撰写新媒体文《致八月》上稿公众号“读书有范”，阅读量10w+。</li>
      </ul>
    ),
  },
];

const education = [
  {
    year: '2023.09 - 2025.06',
    school: '四川轻化工大学',
    major: '市场营销 / 本科',
  },
  {
    year: '2020.10 - 2023.06',
    school: '成都纺织高等专科学校',
    major: '纺织品检验与贸易专业 / 专科',
  },
];

const skills = [
  '内容创作',
  '视频剪辑',
  '脚本撰写',
  '社群运营',
  '数据分析',
  '摄影',
  '文案策划',
  'Final Cut Pro',
  'Adobe Premiere',
  '剪映',
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
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

      // Timeline Animation
      timelineRefs.current.forEach((el, index) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          x: index % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 1,
          delay: index * 0.2,
          ease: 'power3.out',
        });
      });

      // Skills Animation
      gsap.from(skillsRef.current?.children || [], {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 85%',
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="about" ref={containerRef} className="bg-surface/30 backdrop-blur-sm px-6 py-20 md:py-32">
      <div className="max-w-5xl w-full">
        <h2
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-primary"
        >
          个人经历 & 技能
        </h2>

        <div className="space-y-12 md:space-y-16 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => (timelineRefs.current[index] = el)}
              className="relative p-6 md:p-8 rounded-sm border border-white/5 hover:border-white/10 transition-all duration-300 bg-surface/20 hover:bg-surface/30"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                <h3 className="text-lg md:text-xl font-bold text-primary group-hover:text-accent transition-colors order-2 md:order-1 mt-2 md:mt-0">
                  {exp.title}
                </h3>
                <span className="text-secondary text-xs font-mono tracking-wider order-1 md:order-2 block bg-white/5 px-2 py-1 rounded w-fit md:bg-transparent md:px-0 md:py-0">
                  {exp.year}
                </span>
              </div>
              
              <h4 className="text-secondary mb-4 md:mb-6 text-sm font-medium border-l-2 border-accent pl-3">
                {exp.company}
              </h4>
              
              <div className="text-secondary text-sm leading-relaxed opacity-80 pl-3">
                {exp.description}
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-20 md:mt-24">
          <h3 className="text-2xl font-bold text-center mb-8 md:mb-12 text-primary">教育背景</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="p-6 md:p-8 rounded-sm border border-white/5 hover:border-white/10 transition-colors duration-300 bg-surface/20">
                <span className="text-secondary text-xs font-mono mb-3 block">{edu.year}</span>
                <h4 className="text-base md:text-lg font-bold text-primary mb-2">{edu.school}</h4>
                <p className="text-secondary text-sm">{edu.major}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 md:mt-24">
          <h3 className="text-2xl font-bold text-center mb-8 md:mb-12 text-primary">专业技能</h3>
          <div ref={skillsRef} className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 md:px-5 md:py-2 rounded-full bg-surface border border-white/5 text-secondary text-xs md:text-sm hover:text-primary hover:border-white/20 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

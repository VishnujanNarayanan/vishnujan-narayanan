'use client'

import { ArrowRightIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { Github, Linkedin, Mail, Cpu, Share2, Briefcase, Code, User, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-[#030712] text-white pt-12 lg:pt-0 lg:h-screen">
      
      {/* 1. ENHANCED BACKGROUND WITH RANDOM TECH PATTERN (from second version) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-cyan-900/10"></div>
        
        {/* Random circuit pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="random-circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Random circuit lines */}
              <path d="M20 40 L80 40 L80 120 L140 120" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" strokeDasharray="2,2" />
              <path d="M160 60 L160 140 L40 140" fill="none" stroke="rgba(34, 211, 238, 0.1)" strokeWidth="1" strokeDasharray="2,2" />
              <path d="M60 20 L120 20 L120 160" fill="none" stroke="rgba(37, 99, 235, 0.1)" strokeWidth="1" />
              {/* Random dots */}
              <circle cx="40" cy="40" r="1.5" fill="rgba(59, 130, 246, 0.3)" />
              <circle cx="160" cy="80" r="1.5" fill="rgba(34, 211, 238, 0.3)" />
              <circle cx="80" cy="160" r="1.5" fill="rgba(37, 99, 235, 0.3)" />
              <circle cx="120" cy="100" r="1.5" fill="rgba(59, 130, 246, 0.3)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#random-circuit)" />
          
          {/* Glowing orbs */}
          <circle cx="15%" cy="20%" r="40" fill="rgba(59, 130, 246, 0.03)" filter="blur(40px)" />
          <circle cx="85%" cy="70%" r="60" fill="rgba(34, 211, 238, 0.03)" filter="blur(60px)" />
          <circle cx="50%" cy="90%" r="80" fill="rgba(37, 99, 235, 0.02)" filter="blur(80px)" />
        </svg>
      </div>

      {/* 2. BACKGROUND WATERMARK (original) */}
      <div className="absolute bottom-4 left-0 w-full select-none pointer-events-none z-0">
        <h1 className="text-[20vw] font-black leading-none text-white/[0.02] text-center tracking-tighter uppercase">
          Vishnujan
        </h1>
      </div>

      {/* 3. REPLACED BADGE WITH NEXT.js INFO */}
      <div className="absolute top-4 right-4 lg:top-8 lg:right-8 z-30">
        <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg border border-white/20 flex items-center gap-2">
          <span className="text-[12px] lg:text-[13px] font-medium text-gray-300">
            Built with Next.js
          </span>
          <a 
            href="https://github.com/VishnujanNarayanan/vishnujan-narayanan" 
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={12} />
          </a>
        </div>
      </div>

      {/* MOBILE: PHOTO AT TOP */}
      <div className="block lg:hidden w-full pt-6">
        <div className="relative p-2 rounded-full border-[2px] border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.25)] bg-cyan-400/5 mx-auto w-48 h-48 md:w-64 md:h-64">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#030712]">
            <Image
              src="/profile.jpg"
              alt="Vishnujan Narayanan"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full px-4 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center lg:-mt-8">
        
        {/* LEFT COLUMN: IMAGE + "BUILDING INTELLIGENT SYSTEMS" TEXT + DOWNLOAD CV */}
        <div className="hidden lg:flex flex-col items-end w-[30%] max-w-sm">
          {/* Image on far left */}
          <div className="relative p-1.5 rounded-full border-[1.5px] border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.2)] bg-cyan-400/5">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border border-[#030712]">
              <Image
                src="/profile.jpg"
                alt="Vishnujan Narayanan"
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* "Building intelligent systems" text UNDER the image - BIGGER SIZE */}
          <div className="mt-6 w-full text-right">
            <div className="space-y-0">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent tracking-tight leading-tight">
                Building intelligent<br />systems
              </h2>
              <h2 className="text-3xl font-bold text-gray-400 tracking-tight leading-tight">
                with real-world<br />impact
              </h2>
            </div>
          </div>

          {/* Download CV UNDER the text */}
          <a 
            href="https://drive.google.com/file/d/1e6nA8vGph-R66XYy-tDq1943vfBeEemQ/view?usp=drive_link" 
            target="_blank"
            className="group inline-flex items-center justify-end gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white bg-white/5 border border-white/10 px-5 py-2.5 rounded hover:bg-white hover:text-black transition-all mt-6"
          >
            <ArrowDownTrayIcon className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-1" />
            Download CV
          </a>
        </div>

        {/* MIDDLE COLUMN: MAIN TEXT CONTENT */}
        <div className="flex-1 lg:w-[50%] order-2 lg:order-1 lg:pl-8 lg:-mt-4">
          
          <div className="space-y-4 lg:space-y-6">
            {/* "Hi, I'm" and Name */}
            <div className="text-center lg:text-left">
              <h2 className="text-lg lg:text-xl font-medium text-gray-300 mb-2">
                Hi, I&apos;m
              </h2>
                            
              {/* Mobile version (from second script) */}
              <h1 className="text-3xl md:text-5xl lg:text-[85px] font-bold tracking-tight block lg:hidden">
                <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent block">
                  <span className="block text-4xl md:text-6xl lg:inline lg:text-[85px]">Vishnujan</span>
                  <span className="block text-4xl md:text-6xl mt-1 lg:mt-0 lg:inline lg:text-[85px] lg:ml-2">Narayanan</span>
                </span>
              </h1>
              
              {/* PC version (with line break like first script) */}
              <h1 className="text-4xl md:text-6xl lg:text-[85px] font-bold tracking-tight leading-[0.85] hidden lg:block">
                <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Vishnujan <br /> 
                  <span className="text-[75px]">Narayanan</span>
                </span>
              </h1>
            </div>

            {/* "AI Engineer" */}
            <div className="text-center lg:text-left -mt-2">
              <p className="text-lg md:text-xl lg:text-4xl font-medium text-white tracking-tight">
                AI Engineer & Software Developer
              </p>
            </div>

            {/* Horizontal line divider */}
            <div className="hidden lg:block w-14 h-px bg-gray-600 mt-3 mb-4"></div>

            {/* "I architect..." text - FIXED: Mobile normal, desktop with line breaks */}
            <div className="text-center lg:text-left max-w-lg mx-auto lg:mx-0">
              {/* Mobile version (no line breaks) */}
              <p className="text-base text-gray-300 leading-relaxed block lg:hidden px-2">
                I architect end-to-end AI systems and robust data pipelines, 
                specialized in translating complex data into production software.
              </p>
              
              {/* Desktop version (with line breaks) */}
              <p className="text-base text-gray-300 leading-relaxed hidden lg:block">
                I architect end-to-end AI<br />
                systems and robust data pipelines,<br />
                specialized in translating complex<br />
                data into production<br /> 
                software.
              </p>
            </div>

            {/* CTA BUTTON */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 lg:gap-4 pt-4">
              <Link 
                href="#projects" 
                className="group relative inline-flex items-center justify-center lg:justify-start gap-3 bg-blue-600 hover:bg-white hover:text-blue-600 pl-4 pr-6 py-2.5 lg:pl-3 lg:pr-7 lg:py-2.5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                <div className="h-9 w-9 rounded-full bg-white flex items-center justify-center transition-transform group-hover:rotate-45">
                  <ArrowRightIcon className="h-4 w-4 text-blue-600" />
                </div>
                <span className="font-bold uppercase tracking-widest text-[10px]">Explore My Work</span>
              </Link>

              {/* MOBILE: CV BUTTON AND SOCIAL */}
              <div className="flex flex-col sm:flex-row items-center gap-3 lg:hidden">
                <a 
                  href="https://drive.google.com/file/d/1e6nA8vGph-R66XYy-tDq1943vfBeEemQ/view?usp=drive_link" 
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white bg-white/5 border border-white/20 px-4 py-2 rounded hover:bg-white hover:text-black transition-all"
                >
                  <ArrowDownTrayIcon className="h-3.5 w-3.5" />
                  Download CV
                </a>

                <div className="flex items-center gap-0.5 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                  <SocialIcon href="https://github.com/VishnujanNarayanan" icon={<Github size={14} />} />
                  <SocialIcon href="https://www.linkedin.com/in/vishnujan-narayanan" icon={<Linkedin size={14} />} />
                  <SocialIcon href="mailto:narayanan.vishnujan@gmail.com" icon={<Mail size={14} />} />
                </div>
              </div>

              {/* DESKTOP SOCIAL DOCK */}
              <div className="hidden lg:flex items-center gap-0.5 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <SocialIcon href="https://github.com/VishnujanNarayanan" icon={<Github size={16} />} />
                <SocialIcon href="https://www.linkedin.com/in/vishnujan-narayanan" icon={<Linkedin size={16} />} />
                <SocialIcon href="mailto:narayanan.vishnujan@gmail.com" icon={<Mail size={16} />} />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: QUICK LINKS BUTTONS */}
        <div className="hidden lg:flex flex-col items-end w-[20%] order-2 lg:pl-12 lg:-mt-4">
          <div className="w-full space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 text-right">
              Quick Links
            </h3>
            
            <div className="space-y-2.5">
              <SideButton href="#projects" icon={<Code size={14} />} text="Projects" />
              <SideButton href="#experience" icon={<Briefcase size={14} />} text="Work Experience" />
              <SideButton href="#skills" icon={<User size={14} />} text="Skills" />
              <SideButton href="#contact" icon={<Phone size={14} />} text="Contact" />
            </div>
          </div>
        </div>
      </div>

      {/* 6. CORNER DECORATION (original) - Hidden on mobile */}
      <div className="absolute bottom-10 right-10 hidden lg:block opacity-20">
        <Share2 size={40} className="text-blue-500 animate-pulse" />
      </div>

    </section>
  )
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all"
    >
      {icon}
    </a>
  )
}

function SideButton({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-end gap-2 text-white bg-white/5 border border-white/10 px-3 py-2 rounded-lg hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 text-xs"
    >
      <span className="font-medium uppercase tracking-widest text-[10px]">{text}</span>
      <div className="p-1.5 rounded-full bg-white/10 group-hover:bg-cyan-400/20 transition-colors">
        {icon}
      </div>
    </Link>
  )
}
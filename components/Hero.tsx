'use client'

import { ArrowRightIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { Github, Linkedin, Mail, Cpu } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030712] text-white pt-20 lg:pt-0">
      
      {/* ENHANCED BACKGROUND - WORKS ON MOBILE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-cyan-900/10"></div>
        
        {/* Simplified mobile-friendly pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mobile-circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M0 40 L40 40 L40 80" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="1" fill="rgba(34, 211, 238, 0.2)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mobile-circuit)" />
        </svg>
      </div>

      {/* BACKGROUND WATERMARK - SUBTLE */}
      <div className="absolute bottom-2 left-0 w-full select-none pointer-events-none z-0 opacity-10 lg:opacity-20">
        <h1 className="text-[15vw] lg:text-[20vw] font-black leading-none text-white/[0.03] text-center tracking-tighter uppercase">
          Vishnujan
        </h1>
      </div>

      {/* TOP RIGHT BADGE - MOBILE OPTIMIZED */}
      <div className="absolute top-4 right-4 lg:top-8 lg:right-8 z-30">
        <div className="bg-blue-600/90 backdrop-blur-sm px-3 py-1 lg:px-4 lg:py-1 rounded lg:rounded-full border border-blue-400/30">
          <span className="text-[8px] lg:text-[9px] font-semibold lg:font-black uppercase tracking-[0.15em] lg:tracking-[0.2em] text-white">
            Open for roles
          </span>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-6 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-10">
        
        {/* MOBILE: PHOTO AT TOP */}
        <div className="block lg:hidden w-full order-1">
          {/* Circular Profile - SIMPLIFIED, NO WEIRD SYMBOL */}
          <div className="relative p-1 rounded-full border border-cyan-400/40 shadow-[0_0_30px_rgba(34,211,238,0.15)] bg-cyan-400/5 mx-auto w-48 h-48 md:w-56 md:h-56">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#030712]">
              <Image
                src="/profile.jpg"
                alt="Vishnujan Narayanan"
                width={224}
                height={224}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* TEXT CONTENT - MOBILE ORDERING */}
        <div className="flex-1 order-2 lg:order-1">
          {/* Mobile: Centered, Desktop: Left aligned */}
          <div className="text-center lg:text-left space-y-4 lg:space-y-6">
            {/* Hi, I'm */}
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-[90px] font-bold tracking-tight leading-[0.9]">
                <span className="text-white">Hi, I&apos;m</span> <br />
                <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Vishnujan <br className="hidden lg:block" /> Narayanan
                </span>
              </h1>
              
              {/* AI Engineer Title */}
              <p className="text-lg md:text-xl lg:text-2xl font-medium text-white tracking-tight">
                AI Engineer & Software Developer
              </p>
            </div>

            {/* Building intelligent systems - MOBILE OPTIMIZED */}
            <div className="space-y-1 lg:space-y-1 pt-2">
              <h2 className="text-xl md:text-2xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent tracking-tight">
                Building intelligent systems
              </h2>
              <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-400 tracking-tight">
                with real-world impact
              </h2>
            </div>

            {/* Bio - MOBILE: Show after text, DESKTOP: Right side */}
            <div className="block lg:hidden pt-4">
              <p className="text-sm text-gray-300 leading-relaxed text-center max-w-md mx-auto">
                I architect <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent font-bold">end-to-end AI systems</span> and robust 
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent font-bold"> data pipelines</span>, specialized in translating 
                complex data into production software.
              </p>
            </div>

            {/* CTA BUTTONS - MOBILE STACKED */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6 pt-6 lg:pt-8">
              <Link 
                href="#projects" 
                className="group relative inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-white hover:text-blue-600 pl-4 pr-6 py-3 lg:pl-2 lg:pr-8 lg:py-2 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] w-full sm:w-auto"
              >
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center transition-transform group-hover:rotate-45">
                  <ArrowRightIcon className="h-5 w-5 text-blue-600" />
                </div>
                <span className="font-bold lg:font-black uppercase tracking-widest text-xs lg:text-[10px]">Explore My Work</span>
              </Link>

              {/* CV Button - Mobile only */}
              <a 
                href="https://drive.google.com/file/d/1e6nA8vGph-R66XYy-tDq1943vfBeEemQ/view?usp=drive_link" 
                target="_blank"
                className="group inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-white/10 border border-white/20 px-5 py-3 rounded-lg hover:bg-white hover:text-black transition-all w-full sm:w-auto lg:hidden"
              >
                <ArrowDownTrayIcon className="h-4 w-4" />
                Download CV
              </a>

              {/* Social Links - Mobile */}
              <div className="flex items-center justify-center gap-2 p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md lg:hidden">
                <SocialIcon href="https://github.com/VishnujanNarayanan" icon={<Github size={16} />} />
                <SocialIcon href="https://www.linkedin.com/in/vishnujan-narayanan" icon={<Linkedin size={16} />} />
                <SocialIcon href="mailto:narayanan.vishnujan@gmail.com" icon={<Mail size={16} />} />
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP: RIGHT SIDE - IMAGE AND BIO */}
        <div className="hidden lg:flex lg:w-[450px] flex-col items-end gap-8 order-2">
          {/* Circular Profile - DESKTOP - NO WEIRD SYMBOL */}
          <div className="relative p-2 rounded-full border border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.25)] bg-cyan-400/5">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-[#030712]">
              <Image
                src="/profile.jpg"
                alt="Vishnujan Narayanan"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* NO TECH ICON OVERLAY - REMOVED */}
          </div>

          {/* Bio - Desktop */}
          <div className="text-right space-y-6 max-w-[320px]">
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              I architect <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent font-bold tracking-tight">end-to-end AI systems</span> and robust 
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent font-bold tracking-tight"> data pipelines</span>, specialized in translating 
              complex data into production software.
            </p>

            {/* Desktop CV Button & Social */}
            <div className="flex flex-col items-end gap-4">
              <a 
                href="https://drive.google.com/file/d/1e6nA8vGph-R66XYy-tDq1943vfBeEemQ/view?usp=drive_link" 
                target="_blank"
                className="group inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-white bg-white/5 border border-white/10 px-6 py-3 rounded hover:bg-white hover:text-black transition-all"
              >
                <ArrowDownTrayIcon className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
                Download CV
              </a>

              {/* Desktop Social Links */}
              <div className="flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <SocialIcon href="https://github.com/VishnujanNarayanan" icon={<Github size={18} />} />
                <SocialIcon href="https://www.linkedin.com/in/vishnujan-narayanan" icon={<Linkedin size={18} />} />
                <SocialIcon href="mailto:narayanan.vishnujan@gmail.com" icon={<Mail size={18} />} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE: Bottom padding for better spacing */}
      <div className="h-10 lg:hidden"></div>

    </section>
  )
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      className="p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all"
    >
      {icon}
    </a>
  )
}
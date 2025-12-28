'use client'

import { ArrowRightIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { Github, Linkedin, Mail, Cpu, Share2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden bg-[#030712] text-white">
      
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

      {/* 3. TOP RIGHT BADGE (original) */}
      <div className="absolute top-8 right-8 z-30 hidden md:block">
        <div className="bg-blue-600/90 backdrop-blur-sm px-4 py-1 rounded border border-blue-400/30">
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white">
            Open for machine learning & data roles
          </span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* 4. LEFT CONTENT - Shifted up with ALL requested changes */}
        <div className="flex-1 space-y-6 -mt-20 md:-mt-24"> {/* SHIFTED UP MORE */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-[90px] font-bold tracking-tight leading-[0.9]"> {/* Reduced size */}
              <span className="text-white">Hi, I&apos;m </span> <br />
              <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Vishnujan <br /> Narayanan
              </span>
            </h1>
            
            {/* CHANGED TO WHITE */}
            <p className="text-xl md:text-2xl font-medium text-white tracking-tight"> {/* White and NOT italic */}
              AI Engineer & Software Developer
            </p>
          </div>

          {/* ADDED BACK: Building intelligent systems part - NOW BLUE */}
          <div className="space-y-1 pt-2">
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent tracking-tight">
              Building intelligent systems
            </h2>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-400 tracking-tight">
              with real-world impact
            </h2>
          </div>

          {/* INSTANTLY VISIBLE CTA */}
          <div className="flex items-center gap-6 pt-6">
            <Link 
              href="#projects" 
              className="group relative inline-flex items-center gap-4 bg-blue-600 hover:bg-white hover:text-blue-600 pl-2 pr-8 py-2 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.4)]"
            >
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center transition-transform group-hover:rotate-45">
                <ArrowRightIcon className="h-5 w-5 text-blue-600" />
              </div>
              <span className="font-black uppercase tracking-widest text-[10px]">Explore My Work</span>
            </Link>

            {/* INTEGRATED SOCIAL DOCK (Ensuring visibility) */}
            <div className="flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <SocialIcon href="https://github.com/VishnujanNarayanan" icon={<Github size={18} />} />
              <SocialIcon href="https://www.linkedin.com/in/vishnujan-narayanan" icon={<Linkedin size={18} />} />
              <SocialIcon href="mailto:narayanan.vishnujan@gmail.com" icon={<Mail size={18} />} />
            </div>
          </div>
        </div>

        {/* 5. RIGHT CONTENT: CIRCLE IMAGE & DATA BIO (original) */}
        <div className="w-full lg:w-[450px] flex flex-col items-center lg:items-end gap-8">
          {/* Circular Profile with Cyan Glow */}
          <div className="relative p-2 rounded-full border-[2px] border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.25)] bg-cyan-400/5">
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
            {/* Tech Icon Overlay */}
            <div className="absolute top-4 right-4 h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <Cpu className="h-6 w-6 text-cyan-400" />
            </div>
          </div>

          {/* Targeted Bio - NOW WITH BLUE TEXT */}
          <div className="text-center lg:text-right space-y-6">
            <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-[320px] ml-auto">
              I architect <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent font-bold tracking-tight">end-to-end AI systems</span> and robust 
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent font-bold tracking-tight"> data pipelines</span>, specialized in translating 
              complex data into production software.
            </p>

            <a 
              href="https://drive.google.com/file/d/1e6nA8vGph-R66XYy-tDq1943vfBeEemQ/view?usp=drive_link" 
              target="_blank"
              className="group inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-white bg-white/5 border border-white/10 px-6 py-3 rounded hover:bg-white hover:text-black transition-all"
            >
              <ArrowDownTrayIcon className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* 6. CORNER DECORATION (original) */}
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
      className="p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all"
    >
      {icon}
    </a>
  )
}
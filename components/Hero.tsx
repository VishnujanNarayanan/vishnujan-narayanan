import { ArrowDownTrayIcon, EnvelopeIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { 
  Github, 
  Linkedin, 
  FileText, 
  Mail, 
  Phone 
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="lg:w-7/12">
            {/* Title Badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
                <SparklesIcon className="h-5 w-5 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-blue-700">
                AI Application Engineer
              </span>
            </div>

            {/* Name & Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <span className="text-gray-900">Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Vishnujan
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Building Intelligent Systems with
              <span className="block text-gray-900">
                Real-World Impact
              </span>
            </h2>
            
            {/* Description */}
            <div className="space-y-4 mb-8">
              <p className="text-lg text-gray-600">
                I specialize in creating <span className="font-semibold text-blue-700">end-to-end applications</span> with integrated machine learning features that solve real business problems.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  <span className="text-gray-700">Backend APIs & Real-time Data Pipelines</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  <span className="text-gray-700">NLP/Time-series Models & Production Deployment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  <span className="text-gray-700">MLOps & Scalable AI Infrastructure</span>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all shadow-md hover:shadow-lg border border-blue-500"
              >
                <span>Explore My Work</span>
                <ArrowDownTrayIcon className="ml-2 h-4 w-4" />
              </Link>
              
              <a
                href="mailto:narayanan.vishnujan@gmail.com"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-lg border border-gray-300 text-gray-800 hover:border-blue-400 hover:text-blue-700 hover:bg-blue-50 transition-all"
              >
                <span>Get In Touch</span>
                <EnvelopeIcon className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column - Medium-sized Profile Photo with Social Links */}
          <div className="lg:w-5/12">
            <div className="relative mx-auto">
              {/* Medium-sized Profile Photo */}
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-88 lg:h-88 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/profile.jpg"
                  alt="Vishnujan Narayanan - AI Application Engineer"
                  width={352}  // 88 * 4 = 352 (perfect for 88 = between 64 and 96)
                  height={352}
                  className="w-full h-full object-cover"
                  priority
                  unoptimized={true}
                />
              </div>
              
              {/* Social Links */}
              <div className="mt-6">
                {/* Top Row - Main Links */}
                <div className="flex justify-center items-center gap-2">
                  {/* GitHub */}
                  <a
                    href="https://github.com/VishnujanNarayanan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
                  >
                    <Github className="h-4 w-4 text-gray-700 group-hover:text-blue-700" />
                    <span className="text-xs font-medium text-gray-600 group-hover:text-blue-700">GitHub</span>
                  </a>
                  
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/vishnujan-narayanan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
                  >
                    <Linkedin className="h-4 w-4 text-gray-700 group-hover:text-blue-700" />
                    <span className="text-xs font-medium text-gray-600 group-hover:text-blue-700">LinkedIn</span>
                  </a>
                  
                  {/* Resume */}
                  <a
                    href="https://drive.google.com/file/d/1e6nA8vGph-R66XYy-tDq1943vfBeEemQ/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
                  >
                    <FileText className="h-4 w-4 text-gray-700 group-hover:text-blue-700" />
                    <span className="text-xs font-medium text-gray-600 group-hover:text-blue-700">Resume</span>
                  </a>
                </div>
                
                {/* Bottom Row - Contact Links */}
                <div className="flex justify-center items-center gap-2 mt-2">
                  {/* Email */}
                  <a
                    href="mailto:narayanan.vishnujan@gmail.com"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
                  >
                    <Mail className="h-4 w-4 text-gray-700 group-hover:text-blue-700" />
                    <span className="text-xs font-medium text-gray-600 group-hover:text-blue-700">Email</span>
                  </a>
                  
                  {/* Phone */}
                  <a
                    href="tel:+918129688626"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
                  >
                    <Phone className="h-4 w-4 text-gray-700 group-hover:text-blue-700" />
                    <span className="text-xs font-medium text-gray-600 group-hover:text-blue-700">Call</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
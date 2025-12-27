'use client'

import { useState, useEffect, useRef } from 'react'
import { experiences } from '@/lib/data'
import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
  BoltIcon,
  CalendarIcon,
  MapPinIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

// EXACTLY same as ProjectCard
const colorClasses = {
  blue: {
    bg: 'bg-blue-900/10',
    border: 'border-blue-800',
    text: 'text-blue-400',
    gradient: 'from-blue-500 to-blue-600',
    hover: 'hover:border-blue-600'
  },
  purple: {
    bg: 'bg-purple-900/10',
    border: 'border-purple-800',
    text: 'text-purple-400',
    gradient: 'from-purple-500 to-purple-600',
    hover: 'hover:border-purple-600'
  },
  cyan: {
    bg: 'bg-cyan-900/10',
    border: 'border-cyan-800',
    text: 'text-cyan-400',
    gradient: 'from-cyan-500 to-cyan-600',
    hover: 'hover:border-cyan-600'
  },
  green: {
    bg: 'bg-green-900/10',
    border: 'border-green-800',
    text: 'text-green-400',
    gradient: 'from-green-500 to-green-600',
    hover: 'hover:border-green-600'
  },
  orange: {
    bg: 'bg-orange-900/10',
    border: 'border-orange-800',
    text: 'text-orange-400',
    gradient: 'from-orange-500 to-orange-600',
    hover: 'hover:border-orange-600'
  },
  pink: {
    bg: 'bg-pink-900/10',
    border: 'border-pink-800',
    text: 'text-pink-400',
    gradient: 'from-pink-500 to-pink-600',
    hover: 'hover:border-pink-600'
  }
} as const

type ColorKey = keyof typeof colorClasses

export default function ExperienceSection() {
  const [selectedExpIndex, setSelectedExpIndex] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentColor, setCurrentColor] = useState<ColorKey>('blue')
  const [hoveredExpIndex, setHoveredExpIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

  const selectedExp = experiences[selectedExpIndex]
  const colors = colorClasses[currentColor]

  // Cycle through colors based on experience ID - SAME as ProjectCard
  useEffect(() => {
    const colorKeys: ColorKey[] = ['blue', 'purple', 'cyan', 'green', 'orange', 'pink']
    const colorIndex = (selectedExp.id - 1) % colorKeys.length // Use ID not index
    setCurrentColor(colorKeys[colorIndex])
  }, [selectedExp.id]) // Depend on selectedExp.id

  const nextExperience = () => {
    setSelectedExpIndex((prev) => (prev + 1) % experiences.length)
  }

  const prevExperience = () => {
    setSelectedExpIndex((prev) => (prev - 1 + experiences.length) % experiences.length)
  }

  const handleTimelineHover = (index: number) => {
    setHoveredExpIndex(index)
    setSelectedExpIndex(index)
  }

  const handleTimelineLeave = () => {
    setHoveredExpIndex(null)
  }

  const handleTimelineClick = (index: number) => {
    setSelectedExpIndex(index)
    setIsDialogOpen(true)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isDialogOpen) return
      
      if (e.key === 'ArrowRight') {
        nextExperience()
      } else if (e.key === 'ArrowLeft') {
        prevExperience()
      } else if (e.key === 'Escape') {
        setIsDialogOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isDialogOpen])

  // Close dialog when clicking outside (mobile)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isDialogOpen && dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
        setIsDialogOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isDialogOpen])

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Matching Project section style */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-gray-700"></div>
              <span className="text-sm font-medium text-gray-400 tracking-widest uppercase">
                Career Journey
              </span>
              <div className="h-px w-8 bg-gray-700"></div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work Experience
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            My professional journey in AI, Data Science, and Engineering
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs text-gray-400">
              Hover timeline cards • Click for details • Use arrows to navigate
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Timeline with smaller boxes */}
          <div className="lg:w-2/5">
            <div className="relative">
              {/* Timeline line with all 6 colors gradient */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 via-cyan-500 via-green-500 via-orange-500 to-pink-500"></div>
              
              <div className="space-y-4">
                {experiences.map((exp, index) => {
                  // EXACTLY same logic as ProjectCard: (id - 1) % 6
                  const colorKeys: ColorKey[] = ['blue', 'purple', 'cyan', 'green', 'orange', 'pink']
                  const colorIndex = (exp.id - 1) % colorKeys.length
                  const expColor = colorClasses[colorKeys[colorIndex]]
                  const isActive = hoveredExpIndex === index || selectedExpIndex === index
                  
                  return (
                    <div 
                      key={exp.id}
                      className="relative pl-12 group"
                      onMouseEnter={() => handleTimelineHover(index)}
                      onMouseLeave={handleTimelineLeave}
                      onClick={() => handleTimelineClick(index)}
                    >
                      {/* Timeline dot - smaller */}
                      <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all duration-150 ${
                        isActive
                          ? `${expColor.bg} ${expColor.border} scale-110` 
                          : 'bg-gray-800 border-gray-700 group-hover:border-blue-500'
                      }`}>
                        {isActive && (
                          <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75"></div>
                        )}
                      </div>
                      
                      {/* Timeline card - SMALLER with colored top line */}
                      <div className={`bg-gray-900 rounded-xl border transition-all duration-150 card-transition overflow-hidden cursor-pointer min-h-[180px] ${
                        isActive
                          ? `${expColor.border} scale-[1.02] shadow-lg`
                          : 'border-gray-800 shadow-sm group-hover:scale-[1.02] group-hover:shadow-lg'
                      }`}>
                        {/* Colored top line for timeline boxes */}
                        <div className={`h-1 bg-gradient-to-r ${expColor.gradient}`} />
                        
                        <div className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-2">
                              {/* Constant blue lightning icon like ProjectCard */}
                              <div className="p-1.5 rounded-lg bg-gradient-to-br from-blue-900/20 to-cyan-900/20">
                                <BoltIcon className="h-4 w-4 text-blue-400" />
                              </div>
                              <div>
                                <h3 className="font-bold text-white text-sm">{exp.title}</h3>
                                <p className={`${expColor.text} font-medium text-xs`}>{exp.company}</p>
                              </div>
                            </div>
                            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-800 text-gray-300 text-[10px]">
                              {exp.id}/{experiences.length}
                            </span>
                          </div>
                          
                          <div className="space-y-1 mb-3">
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                              <CalendarIcon className="h-3 w-3" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                              <MapPinIcon className="h-3 w-3" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                          
                          {/* Preview of first bullet point - smaller */}
                          <p className="text-gray-300 text-xs leading-relaxed line-clamp-2 mb-3">
                            {exp.description[0]}
                          </p>
                          
                          {/* Technologies - smaller */}
                          <div className="flex flex-wrap gap-1">
                            {exp.technologies.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className={`px-2 py-1 text-[10px] font-medium rounded-full ${expColor.bg} ${expColor.text} border ${expColor.border}`}
                              >
                                {tech}
                              </span>
                            ))}
                            {exp.technologies.length > 3 && (
                              <span className="px-2 py-1 text-[10px] font-medium rounded-full bg-gray-800 text-gray-300 border border-gray-700">
                                +{exp.technologies.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right: Dialog Box (Desktop) - Shows on hover */}
          <div className="lg:w-3/5">
            <div className={`sticky top-24 transition-all duration-150 ${
              (hoveredExpIndex !== null || selectedExpIndex !== null) ? 'opacity-100' : 'opacity-0 lg:opacity-100'
            }`}>
              {/* Dialog Box - matching Project card expanded style */}
              <div 
                ref={dialogRef}
                className="bg-gray-900 rounded-2xl border shadow-2xl card-transition overflow-hidden"
                style={{ borderColor: colors.border }}
              >
                {/* Dialog header with gradient top - matching timeline boxes */}
                <div className={`h-1.5 bg-gradient-to-r ${colors.gradient}`} />
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1 pr-8">
                      <div className="flex items-center gap-3 mb-4">
                        {/* Constant blue lightning icon like ProjectCard */}
                        <div className="p-2 rounded-xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20">
                          <BoltIcon className="h-5 w-5 text-blue-400" />
                        </div>
                        <h3 className="font-bold text-white text-2xl">{selectedExp.title}</h3>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-gray-300">
                        <span className={`font-medium ${colors.text}`}>{selectedExp.company}</span>
                        <div className="flex items-center gap-2 text-sm">
                          <CalendarIcon className="h-4 w-4" />
                          <span>{selectedExp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPinIcon className="h-4 w-4" />
                          <span>{selectedExp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-white mb-4 text-lg">Responsibilities & Achievements</h4>
                    <div className="space-y-4">
                      {selectedExp.description.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-900/30 text-green-400 mt-0.5">
                            <span className="text-xs font-bold">✓</span>
                          </div>
                          <p className="text-gray-300 flex-1">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div className="pt-6 border-t border-gray-700/50">
                    <h4 className="font-semibold text-white mb-4 text-lg">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedExp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1.5 text-xs font-medium rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certificate link - SAME COLOR as the box */}
                  {selectedExp.certificateUrl && (
                    <div className="mb-8">
                      <a
                        href={selectedExp.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl ${colors.bg} ${colors.text} hover:opacity-80 transition-all hover:scale-110 border ${colors.border}`}
                        title="View Certificate"
                      >
                        <DocumentTextIcon className="h-5 w-5" />
                        <span className="font-medium">View Certificate</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}

                  {/* Navigation buttons */}
                  <div className="pt-6 border-t border-gray-700/50 flex justify-between items-center">
                    <button
                      onClick={prevExperience}
                      className={`flex items-center gap-2 px-5 py-3 rounded-xl ${colors.bg} ${colors.text} hover:opacity-80 transition-all flex items-center justify-center gap-2 bg-gray-800/50 border ${colors.border}`}
                    >
                      <ChevronLeftIcon className="h-4 w-4" />
                      <span className="text-sm font-medium">Previous</span>
                    </button>
                    
                    <div className="flex items-center gap-2">
                      {experiences.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedExpIndex(index)
                            setHoveredExpIndex(index)
                          }}
                          className={`h-2 rounded-full transition-all ${
                            selectedExpIndex === index 
                              ? `w-8 ${colors.bg}` 
                              : 'w-2 bg-gray-700 hover:bg-gray-600'
                          }`}
                          aria-label={`Go to experience ${index + 1}`}
                        />
                      ))}
                    </div>
                    
                    <button
                      onClick={nextExperience}
                      className={`flex items-center gap-2 px-5 py-3 rounded-xl ${colors.bg} ${colors.text} hover:opacity-80 transition-all flex items-center justify-center gap-2 bg-gray-800/50 border ${colors.border}`}
                    >
                      <span className="text-sm font-medium">Next</span>
                      <ChevronRightIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Show hint on desktop when nothing is hovered */}
              {hoveredExpIndex === null && selectedExpIndex === 0 && (
                <div className="mt-6 p-4 rounded-xl bg-gray-800/50 border border-gray-700 text-center">
                  <p className="text-gray-400 text-sm">
                    Hover over any timeline card to view details
                  </p>
                </div>
              )}
              
              {/* Mobile dialog trigger */}
              <div className="lg:hidden mt-8 text-center">
                <button
                  onClick={() => setIsDialogOpen(!isDialogOpen)}
                  className={`px-6 py-3 rounded-xl border ${colors.border} text-sm font-medium ${colors.text} hover:opacity-80 transition-all flex items-center justify-center gap-2 bg-gray-800/50 mx-auto`}
                >
                  {isDialogOpen ? 'Close Details' : 'View Full Details'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dialog Overlay */}
        {isDialogOpen && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 lg:hidden flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setIsDialogOpen(false)}
          >
            <div 
              ref={dialogRef}
              className="bg-gray-900 rounded-2xl border w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
              style={{ borderColor: colors.border }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Same dialog content as above but for mobile */}
              <div className={`h-1.5 bg-gradient-to-r ${colors.gradient}`} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">{selectedExp.title}</h3>
                  <button
                    onClick={() => setIsDialogOpen(false)}
                    className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* Mobile dialog content (same structure as desktop) */}
                <div className="space-y-6">
                  <div>
                    <p className={`font-medium ${colors.text} text-lg mb-2`}>{selectedExp.company}</p>
                    <div className="flex flex-wrap gap-4 text-gray-300 text-sm">
                      <span className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4" />
                        {selectedExp.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPinIcon className="h-4 w-4" />
                        {selectedExp.location}
                      </span>
                    </div>
                  </div>
                  
                  {/* Responsibilities */}
                  <div>
                    <h4 className="font-semibold text-white mb-3">Responsibilities & Achievements</h4>
                    <div className="space-y-3">
                      {selectedExp.description.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-green-900/30 text-green-400 mt-0.5">
                            <span className="text-xs">✓</span>
                          </div>
                          <p className="text-gray-300 text-sm">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="pt-4 border-t border-gray-700/50">
                    <h4 className="font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1.5 text-xs font-medium rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Certificate link - SAME COLOR as the box */}
                  {selectedExp.certificateUrl && (
                    <div className="pt-4 border-t border-gray-700/50">
                      <a
                        href={selectedExp.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl ${colors.bg} ${colors.text} border ${colors.border} text-sm`}
                      >
                        <DocumentTextIcon className="h-4 w-4" />
                        View Certificate
                      </a>
                    </div>
                  )}
                  
                  {/* Navigation buttons for mobile */}
                  <div className="pt-6 border-t border-gray-700/50 flex justify-between">
                    <button
                      onClick={prevExperience}
                      className={`px-4 py-2 rounded-xl ${colors.bg} ${colors.text} border ${colors.border} text-sm`}
                    >
                      ← Previous
                    </button>
                    <button
                      onClick={nextExperience}
                      className={`px-4 py-2 rounded-xl ${colors.bg} ${colors.text} border ${colors.border} text-sm`}
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
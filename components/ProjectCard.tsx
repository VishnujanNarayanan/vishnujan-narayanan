'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  ArrowTopRightOnSquareIcon, 
  CodeBracketIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  BoltIcon,
  EyeIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { Project } from '@/lib/data'

interface ProjectCardProps {
  project: Project
  index: number
  totalCards: number
  row?: number
  // Make these props optional with defaults
  isMobileExpanded?: boolean
  onMobileTap?: () => void
  resetExpandedMobile?: () => void
  // Add new props for single expanded state
  expandedCardId?: number | null
  onCardExpand?: (projectId: number | null) => void
}

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

export default function ProjectCard({ 
  project, 
  index, 
  totalCards = 3, 
  row = 0,
  // Make these props optional
  isMobileExpanded,
  onMobileTap,
  resetExpandedMobile,
  // New props for single expanded state
  expandedCardId,
  onCardExpand
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isMobileDialogOpen, setIsMobileDialogOpen] = useState(false)
  const [primaryColor, setPrimaryColor] = useState<ColorKey>('blue')
  const [localMobileExpanded, setLocalMobileExpanded] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const mobileCardRef = useRef<HTMLDivElement>(null)
  
  // Determine if mobile card is expanded
  // Use expandedCardId prop if provided, otherwise check local state
  const isCardExpanded = expandedCardId !== undefined 
    ? expandedCardId === project.id 
    : (isMobileExpanded !== undefined ? isMobileExpanded : localMobileExpanded)
  
  useEffect(() => {
    const colors: ColorKey[] = ['blue', 'purple', 'cyan', 'green', 'orange', 'pink']
    const colorIndex = (project.id - 1) % colors.length
    setPrimaryColor(colors[colorIndex])
  }, [project.id])

  const colors = colorClasses[primaryColor]

  const handleToggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    
    const newExpandedState = !isExpanded
    setIsExpanded(newExpandedState)
    
    if (newExpandedState) {
      setIsHovering(true)
      document.body.classList.add('card-expanded')
    } else {
      setIsHovering(false)
      document.body.classList.remove('card-expanded')
    }
  }

  const handleMobileTap = () => {
    if (onCardExpand) {
      // Use global single-expanded state
      if (isCardExpanded) {
        onCardExpand(null) // Collapse current card
      } else {
        onCardExpand(project.id) // Expand this card
      }
    } else if (onMobileTap) {
      // Use parent-controlled state (backward compatibility)
      onMobileTap()
    } else {
      // Use local state
      setLocalMobileExpanded(!localMobileExpanded)
    }
  }

  const handleOpenMobileDialog = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMobileDialogOpen(true)
  }

  const handleMouseLeaveExpanded = () => {
    if (isExpanded) {
      setIsExpanded(false)
      setIsHovering(false)
      document.body.classList.remove('card-expanded')
    }
  }

  const getExpansionStyles = () => {
    if (!isExpanded) return {}
    
    const isLeftEdge = index === 0
    const isRightEdge = index === totalCards - 1
    
    const baseStyles: any = {
      position: 'relative',
      zIndex: 200,
    }
    
    if (totalCards === 3) {
      if (isLeftEdge) {
        return {
          ...baseStyles,
          width: '180%',
          marginLeft: '0%',
          marginRight: '-80%',
        }
      }
      
      if (isRightEdge) {
        return {
          ...baseStyles,
          width: '180%',
          marginLeft: '-80%',
          marginRight: '0%',
        }
      }
      
      return {
        ...baseStyles,
        width: '190%',
        marginLeft: '-45%',
        marginRight: '-45%',
      }
    }
    
    if (totalCards === 2) {
      if (isLeftEdge) {
        return {
          ...baseStyles,
          width: '160%',
          marginLeft: '0%',
          marginRight: '-60%',
        }
      }
      
      return {
        ...baseStyles,
        width: '160%',
        marginLeft: '-60%',
        marginRight: '0%',
      }
    }
    
    return baseStyles
  }

  const getCardHeight = () => {
    if (isExpanded) return 'auto'
    if (isHovering) return '360px'
    return '240px'
  }

  useEffect(() => {
    if (isExpanded && cardRef.current) {
      const cardRect = cardRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      if (cardRect.bottom > viewportHeight - 50) {
        cardRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'nearest'
        })
      }
    }
    
    return () => {
      document.body.classList.remove('card-expanded')
    }
  }, [isExpanded])

  // Close mobile dialog when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMobileDialogOpen && dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
        setIsMobileDialogOpen(false)
      }
    }

    if (isMobileDialogOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileDialogOpen])

  // Scroll to expanded card on mobile
  useEffect(() => {
    if (isCardExpanded && mobileCardRef.current) {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        mobileCardRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        })
      }, 100)
    }
  }, [isCardExpanded])

  return (
    <>
      <div 
        className={`relative card-wrapper ${isExpanded ? 'expanded' : ''} ${row > 0 ? 'bottom-row' : 'top-row'}`}
        onMouseEnter={() => !isExpanded && setIsHovering(true)}
        onMouseLeave={() => !isExpanded && setIsHovering(false)}
        data-row={row}
      >
        {/* Desktop Card (unchanged for PC) */}
        <div 
          ref={cardRef}
          className={`hidden lg:block bg-gray-900 rounded-2xl border ${colors.border} transition-all duration-300 card-transition ${
            isExpanded 
              ? 'scale-105 shadow-2xl' 
              : isHovering 
              ? 'scale-[1.02] shadow-lg' 
              : 'shadow-sm'
          }`}
          style={{
            ...getExpansionStyles(),
            minHeight: getCardHeight(),
            overflow: 'hidden',
          }}
          onMouseLeave={handleMouseLeaveExpanded}
        >
          <div className={`h-1.5 rounded-t-2xl bg-gradient-to-r ${colors.gradient}`} />
          
          <div className={`p-6 ${isExpanded ? 'px-10' : ''}`}>
            <div className="flex justify-between items-start mb-4">
              <div className={`flex-1 ${isExpanded ? 'pr-12' : 'pr-4'}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20">
                    <BoltIcon className="h-5 w-5 text-blue-400" />
                  </div>
                  <h3 className={`font-bold text-white ${
                    isHovering || isExpanded ? 'line-clamp-none' : 'line-clamp-1'
                  }`}>
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-col gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gray-800 text-gray-300 hover:bg-gray-700 transition-all hover:scale-110"
                  title="View Code"
                >
                  <CodeBracketIcon className="h-5 w-5" />
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 text-blue-400 hover:from-blue-800/50 hover:to-cyan-800/50 transition-all hover:scale-110"
                    title="Live Demo"
                  >
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>

            {!isExpanded && isHovering && (
              <div className="mb-6 animate-fade-in">
                <h4 className="font-semibold text-white mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {isExpanded && (
              <div className="space-y-6 animate-slide-up">
                <div>
                  <h4 className="font-semibold text-white mb-3">
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.metrics && (
                  <div>
                    <div className="p-4 rounded-xl bg-gradient-to-r from-blue-900/10 to-cyan-900/10 border border-blue-800/50">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-white">Key Results</span>
                      </div>
                      <div className="space-y-1">
                        {project.metrics.map((metric, index) => (
                          <p key={index} className="text-sm text-gray-400">
                            • {metric}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-gray-700/50">
                  <h4 className="font-semibold text-white mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {project.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-900/30 text-green-400 mt-0.5">
                          <span className="text-xs font-bold">✓</span>
                        </div>
                        <span className="text-sm text-gray-300 flex-1">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {!isExpanded && isHovering && (
              <div className="mt-6">
                <button
                  onClick={handleToggleExpand}
                  onMouseEnter={(e) => e.stopPropagation()}
                  className={`w-full py-3 rounded-xl border ${colors.border} text-sm font-medium ${colors.text} hover:opacity-80 transition-all flex items-center justify-center gap-2 bg-gray-800/50 animate-fade-in`}
                >
                  <ChevronDownIcon className="h-4 w-4" />
                  <span>View Full Details</span>
                </button>
              </div>
            )}
          </div>

          {isExpanded && (
            <div className="px-10 pb-6">
              <button
                onClick={handleToggleExpand}
                onMouseEnter={(e) => e.stopPropagation()}
                className={`w-full py-3 rounded-xl border ${colors.border} text-sm font-medium ${colors.text} hover:opacity-80 transition-all flex items-center justify-center gap-2 bg-gray-800/50 animate-fade-in`}
              >
                <ChevronUpIcon className="h-4 w-4" />
                <span>Collapse</span>
              </button>
            </div>
          )}
        </div>

        {/* MOBILE CARD - SIMPLIFIED AND FIXED */}
        <div 
          ref={mobileCardRef}
          className={`lg:hidden bg-gray-900 rounded-2xl border transition-all duration-300 relative ${
            isCardExpanded 
              ? `${colors.border} shadow-xl scale-[1.02] z-50 mb-6` 
              : 'border-gray-800 shadow-sm z-10'
          }`}
          style={{
            minHeight: isCardExpanded ? '360px' : '240px',
            overflow: 'hidden',
            width: '100%',
          }}
          onClick={handleMobileTap}
        >
          <div className={`h-1.5 rounded-t-2xl bg-gradient-to-r ${colors.gradient}`} />
          
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1 pr-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20">
                    <BoltIcon className="h-5 w-5 text-blue-400" />
                  </div>
                  <h3 className="font-bold text-white line-clamp-1">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Show technologies when expanded */}
            {isCardExpanded && (
              <>
                <div className="mb-6 animate-fade-in">
                  <h4 className="font-semibold text-white mb-3 text-sm">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Details Button - Only shows when expanded */}
                <button
                  onClick={handleOpenMobileDialog}
                  className={`w-full py-3 rounded-xl border ${colors.border} text-sm font-medium ${colors.text} hover:opacity-80 transition-all flex items-center justify-center gap-2 bg-gray-800/50 animate-fade-in`}
                >
                  <ChevronDownIcon className="h-4 w-4" />
                  <span>View Full Details</span>
                </button>
              </>
            )}
          </div>

          {/* Simple hint when not expanded */}
          {!isCardExpanded && (
            <div className="px-6 pb-4 text-center">
              <div className="flex items-center justify-center gap-1 text-xs text-gray-400">
                <EyeIcon className="h-3 w-3" />
                <span>Tap to view tools</span>
              </div>
            </div>
          )}
        </div>

        {/* Hover Indicator - Desktop only */}
        {!isExpanded && !isHovering && (
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-24px] animate-fade-in hover-indicator pointer-events-none hidden lg:block">
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-800 border border-gray-700 text-gray-300 text-xs font-medium shadow-lg whitespace-nowrap backdrop-blur-sm">
              <EyeIcon className="h-3 w-3" />
              <span>Hover to view tools</span>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Dialog Overlay */}
      {isMobileDialogOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 lg:hidden flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setIsMobileDialogOpen(false)}
        >
          <div 
            ref={dialogRef}
            className="bg-gray-900 rounded-2xl border w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
            style={{ borderColor: colors.border }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Dialog header */}
            <div className={`h-1.5 bg-gradient-to-r ${colors.gradient}`} />
            
            <div className="p-6">
              {/* Header with close button */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20">
                    <BoltIcon className="h-5 w-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                <button
                  onClick={() => setIsMobileDialogOpen(false)}
                  className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Project description */}
              <p className="text-gray-300 mb-6">
                {project.description}
              </p>

              {/* Action buttons */}
              <div className="flex gap-3 mb-8">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-gray-800 text-gray-300 hover:bg-gray-700 transition-all"
                >
                  <CodeBracketIcon className="h-5 w-5" />
                  <span className="font-medium">View Code</span>
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-blue-900/30 to-cyan-900/30 text-blue-400 hover:opacity-90 transition-all"
                  >
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    <span className="font-medium">Live Demo</span>
                  </a>
                )}
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="font-semibold text-white mb-3">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              {project.metrics && (
                <div className="mb-8">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-900/10 to-cyan-900/10 border border-blue-800/50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-semibold text-white">Key Results</span>
                    </div>
                    <div className="space-y-1">
                      {project.metrics.map((metric, index) => (
                        <p key={index} className="text-sm text-gray-400">
                          • {metric}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Features */}
              <div className="pt-4 border-t border-gray-700/50">
                <h4 className="font-semibold text-white mb-3">Key Features</h4>
                <div className="space-y-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-green-900/30 text-green-400 mt-0.5">
                        <span className="text-xs font-bold">✓</span>
                      </div>
                      <span className="text-sm text-gray-300 flex-1">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Close button at bottom */}
              <div className="pt-6 border-t border-gray-700/50">
                <button
                  onClick={() => setIsMobileDialogOpen(false)}
                  className={`w-full py-3 rounded-xl border ${colors.border} text-sm font-medium ${colors.text} hover:opacity-80 transition-all flex items-center justify-center gap-2 bg-gray-800/50`}
                >
                  <XMarkIcon className="h-4 w-4" />
                  <span>Close Details</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
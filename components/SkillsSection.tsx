'use client'

import { useState } from 'react'
import { skills } from '@/lib/data'
import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  WrenchIcon,
  ChartBarIcon,
  SparklesIcon,
  BoltIcon
} from '@heroicons/react/24/outline'

const skillCategories = [
  {
    icon: CodeBracketIcon,
    title: 'Programming',
    items: skills.programming,
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: CpuChipIcon,
    title: 'Machine Learning',
    items: skills.ml,
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: WrenchIcon,
    title: 'Tools & Platforms',
    items: skills.tools,
    color: 'green',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: ChartBarIcon,
    title: 'Methodologies',
    items: skills.methodologies,
    color: 'orange',
    gradient: 'from-orange-500 to-red-500'
  }
] as const

type ColorKey = 'blue' | 'purple' | 'green' | 'orange'

const colorClasses = {
  blue: {
    bg: 'bg-blue-900/10',
    border: 'border-blue-800',
    text: 'text-blue-400',
    gradient: 'from-blue-500 to-cyan-500',
    light: 'bg-blue-50 dark:bg-blue-900/20'
  },
  purple: {
    bg: 'bg-purple-900/10',
    border: 'border-purple-800',
    text: 'text-purple-400',
    gradient: 'from-purple-500 to-pink-500',
    light: 'bg-purple-50 dark:bg-purple-900/20'
  },
  green: {
    bg: 'bg-green-900/10',
    border: 'border-green-800',
    text: 'text-green-400',
    gradient: 'from-green-500 to-emerald-500',
    light: 'bg-green-50 dark:bg-green-900/20'
  },
  orange: {
    bg: 'bg-orange-900/10',
    border: 'border-orange-800',
    text: 'text-orange-400',
    gradient: 'from-orange-500 to-red-500',
    light: 'bg-orange-50 dark:bg-orange-900/20'
  }
} as const

// Get experience info for each skill
const getSkillExperience = (skill: string, index: number) => {
  // Simulated data - base years + skill-based variation
  const baseYears = 3
  const baseProjects = 8
  
  // Generate consistent numbers based on skill name
  const yearVariation = (skill.length % 4) + 1
  const projectVariation = (skill.charCodeAt(0) % 5) + 1
  
  return {
    years: baseYears + yearVariation,
    projects: baseProjects + projectVariation,
    level: ['Expert', 'Advanced', 'Intermediate'][index % 3] as 'Expert' | 'Advanced' | 'Intermediate'
  }
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  // Determine display category - hovered category takes precedence
  const displayCategory = hoveredCategory !== null ? hoveredCategory : activeCategory
  const currentCategory = skillCategories[displayCategory]
  const colors = colorClasses[currentCategory.color]
  const CurrentIcon = currentCategory.icon // Store the icon component

  const handleCategoryHover = (index: number) => {
    setHoveredCategory(index)
  }

  const handleCategoryLeave = () => {
    // Set the active category to the last hovered category when leaving
    if (hoveredCategory !== null) {
      setActiveCategory(hoveredCategory)
    }
    setHoveredCategory(null)
  }

  const handleSkillHover = (index: number) => {
    setHoveredSkill(index)
  }

  const handleSkillLeave = () => {
    setHoveredSkill(null)
  }

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 mb-6 shadow-lg">
            <SparklesIcon className="h-5 w-5 text-yellow-500 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Technical Expertise
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Hover over categories to preview, hover over skills for details
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs text-gray-600 dark:text-gray-400">
              Hover categories to preview • Hover skills for experience details
            </span>
          </div>
        </div>

        {/* Skills Tabs - Hoverable with last-hovered-becomes-active */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            const isDisplayed = displayCategory === index
            const isActive = activeCategory === index
            
            return (
              <button
                key={category.title}
                onMouseEnter={() => handleCategoryHover(index)}
                onMouseLeave={handleCategoryLeave}
                className={`group relative flex items-center gap-3 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isDisplayed
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg scale-105`
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {/* Hover preview indicator */}
                {hoveredCategory === index && hoveredCategory !== activeCategory && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                )}
                
                <div className={`p-1.5 rounded-lg transition-all duration-300 ${
                  isDisplayed 
                    ? 'bg-white/20' 
                    : `${colorClasses[category.color as ColorKey].light}`
                }`}>
                  <Icon className={`h-4 w-4 transition-all duration-300 ${
                    isDisplayed 
                      ? 'text-white' 
                      : colorClasses[category.color as ColorKey].text
                  }`} />
                </div>
                
                <span className="transition-all duration-300">
                  {category.title}
                </span>
                
                <span className={`text-xs px-2 py-0.5 rounded-full transition-all duration-300 ${
                  isDisplayed
                    ? 'bg-white/20'
                    : 'bg-gray-100 dark:bg-gray-700'
                }`}>
                  {category.items.length}
                </span>
              </button>
            )
          })}
        </div>

        {/* Skills Grid with Hover Details */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {currentCategory.items.map((skill, index) => {
            const isHovered = hoveredSkill === index
            const experience = getSkillExperience(skill, index)
            
            return (
              <div
                key={skill}
                className="group relative"
                onMouseEnter={() => handleSkillHover(index)}
                onMouseLeave={handleSkillLeave}
              >
                <div className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  isHovered
                    ? `${colors.border} ${colors.bg} scale-105 shadow-xl`
                    : `border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700`
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900 dark:text-white">{skill}</span>
                    <BoltIcon className={`h-4 w-4 transition-all duration-300 ${
                      isHovered ? colors.text : 'text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100'
                    }`} />
                  </div>
                  
                  {/* Progress line like in your example */}
                  <div className="mt-3 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 bg-gradient-to-r ${colors.gradient}`}
                      style={{ width: `${Math.min(80 + (index * 5), 95)}%` }}
                    />
                  </div>

                  {/* Experience details shown on hover */}
                  {isHovered && (
                    <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700 animate-fadeIn">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-center">
                          <div className="text-xs text-gray-500 dark:text-gray-400">Experience</div>
                          <div className={`text-sm font-bold ${colors.text}`}>
                            {experience.years} years
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 dark:text-gray-400">Projects</div>
                          <div className={`text-sm font-bold ${colors.text}`}>
                            {experience.projects}+
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 text-center">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          experience.level === 'Expert' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : experience.level === 'Advanced'
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        }`}>
                          {experience.level}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Category Summary */}
        <div className="text-center">
          <div className={`inline-flex items-center gap-4 p-6 rounded-2xl border shadow-lg ${
            hoveredCategory !== null 
              ? `${colors.border} ${colors.bg}`
              : 'bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700'
          }`}>
            <div className={`p-3 rounded-xl ${
              hoveredCategory !== null 
                ? 'bg-white/10' 
                : 'bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30'
            }`}>
              <CurrentIcon className={`h-8 w-8 ${
                hoveredCategory !== null 
                  ? colors.text 
                  : 'text-blue-600 dark:text-blue-400'
              }`} />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                {currentCategory.title}
                {hoveredCategory !== null && (
                  <span className="ml-2 text-xs font-normal text-blue-500 animate-pulse">
                    (Preview)
                  </span>
                )}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                {currentCategory.items.length} skills • 
                Hover over skills for experience details
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
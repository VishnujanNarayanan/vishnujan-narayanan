'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
// Remove ThemeToggle import since we don't need it anymore
// import ThemeToggle from '@/components/ThemeToggle'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800/50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-white">
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              VISHNUJAN
            </span>
            <span className="text-gray-300">.dev</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors px-2 py-1 rounded-lg hover:bg-gray-800"
            >
              {item.name}
            </Link>
          ))}
          
          {/* Contact Button */}
          <a
            href="#contact"
            className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg text-blue-400 border border-blue-800 hover:bg-blue-900/30 transition-all"
          >
            <EnvelopeIcon className="h-4 w-4" />
            <span>Contact</span>
          </a>
          
          {/* Remove ThemeToggle component */}
          {/* <ThemeToggle /> */}
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-4">
          <a
            href="#contact"
            className="p-2 text-blue-400"
            aria-label="Contact"
          >
            <EnvelopeIcon className="h-5 w-5" />
          </a>
          {/* Remove ThemeToggle from mobile too */}
          {/* <ThemeToggle /> */}
          <button
            type="button"
            className="text-gray-300 p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-900 animate-slide-up">
          <div className="px-4 py-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 px-3 text-sm font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="flex items-center gap-2 py-3 px-3 text-sm font-medium text-blue-400 hover:bg-blue-900/30 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <EnvelopeIcon className="h-4 w-4" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
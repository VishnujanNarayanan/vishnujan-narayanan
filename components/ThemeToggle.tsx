'use client'

import { SunIcon } from '@heroicons/react/24/outline'

export default function ThemeToggle() {
  return (
    <button
      className="p-2 rounded-lg bg-gray-800 text-gray-200 cursor-default opacity-75"
      aria-label="Dark mode enabled"
      disabled
      title="Dark mode only"
    >
      <SunIcon className="h-5 w-5" />
    </button>
  )
}
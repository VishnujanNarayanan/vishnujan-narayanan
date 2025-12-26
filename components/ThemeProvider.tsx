'use client'

import { ReactNode } from 'react'

export function ThemeProvider({ children }: { children: ReactNode }) {
  // No need for useEffect - dark mode is forced via CSS
  return <>{children}</>
}
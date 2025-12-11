import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Full-Stack ML Engineer | Building Intelligent Systems',
  description: 'Full-Stack ML Engineer skilled in building end-to-end apps with integrated ML features. Experienced in backend APIs, real-time data pipelines, and deploying production AI systems.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Header />
        
        <main className="min-h-screen">
          {children}
        </main>
        
        <footer className="border-t border-gray-200 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
            <p>© {new Date().getFullYear()} — Built with Next.js 15 & Tailwind CSS</p>
            <p className="mt-2 text-sm">Designed to showcase engineering excellence</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
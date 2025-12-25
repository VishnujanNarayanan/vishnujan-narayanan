import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vishnujan Narayanan | Full-Stack Machine Learning Engineer',
  description:
    'Vishnujan Narayanan is a Full-Stack Machine Learning Engineer specializing in AI systems, data pipelines, and intelligent applications.',
  metadataBase: new URL('https://vishnujan-narayanan.vercel.app'),
  openGraph: {
    title: 'Vishnujan Narayanan | Full-Stack ML Engineer',
    description:
      'Building intelligent systems, scalable data pipelines, and applied machine learning solutions.',
    url: 'https://vishnujan-narayanan.vercel.app/',
    siteName: 'Vishnujan Narayanan',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vishnujan Narayanan",
              url: "https://vishnujan-narayanan.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/vishnujan-narayanan",
                "https://github.com/VishnujanNarayanan"
              ],
              jobTitle: "Full-Stack Machine Learning Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Independent / Open Source"
              }
            }),
          }}
        />
      </head>

      <body className={`${inter.className} bg-white text-gray-900`}>
        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        {/* ✅ SEO + Identity Footer */}
        <footer className="border-t border-gray-200 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
            <p className="font-medium">
              © {new Date().getFullYear()} Vishnujan Narayanan
            </p>

            <p className="mt-2 text-sm">
              Full-Stack Machine Learning Engineer · AI · Data · Systems
            </p>

            <div className="mt-3 flex justify-center gap-6 text-sm">
              <a
                href="https://github.com/VishnujanNarayanan"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/vishnujan-narayanan"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

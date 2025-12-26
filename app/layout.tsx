import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vishnujan Narayanan | Full-Stack Machine Learning Engineer',
  description:
    'Vishnujan Narayanan is a Full-Stack Machine Learning Engineer specializing in AI systems, data pipelines, and intelligent applications.',
  metadataBase: new URL('https://vishnujan-narayanan.vercel.app'),
  alternates: {
    canonical: 'https://vishnujan-narayanan.vercel.app',
  },
  openGraph: {
    title: 'Vishnujan Narayanan | Full-Stack ML Engineer',
    description:
      'Building intelligent systems, scalable data pipelines, and applied machine learning solutions.',
    url: 'https://vishnujan-narayanan.vercel.app',
    siteName: 'Vishnujan Narayanan',
    images: [
      {
        url: 'https://vishnujan-narayanan.vercel.app/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Vishnujan Narayanan – Full-Stack Machine Learning Engineer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishnujan Narayanan | Full-Stack ML Engineer',
    description:
      'Building intelligent systems, scalable data pipelines, and applied machine learning solutions.',
    images: ['https://vishnujan-narayanan.vercel.app/profile.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <ThemeProvider>
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

          <Header />
          
          <main className="min-h-screen">
            {children}
          </main>
          
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
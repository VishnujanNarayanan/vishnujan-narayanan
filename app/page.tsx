import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import ExperienceSection from '@/components/ExperienceSection' // Add this import
import SkillsSection from '@/components/SkillsSection'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      {/* SEO Identity Anchor */}
      <section style={{ display: 'none' }}>
        <h1>Vishnujan Narayanan</h1>
        <p>
          Full-Stack Machine Learning Engineer specializing in data systems,
          AI models, and scalable applications.
        </p>
        <a href="https://www.linkedin.com/in/vishnujan-narayanan">
          LinkedIn Profile
        </a>
      </section>

      <Hero />
      <FeaturedProjects />
      <ExperienceSection /> {/* Add this line */}
      <SkillsSection />
      <Contact />
    </>
  )
}
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/data'

export default function ProjectsPage() {
  const cardsPerRow = 3
  
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            All Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive portfolio of AI/ML applications, data pipelines, and production systems
          </p>
        </div>

        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const row = Math.floor(index / cardsPerRow)
            const col = index % cardsPerRow
            
            return (
              <div key={project.id} className="min-h-[320px]">
                <ProjectCard 
                  project={project}
                  index={col}
                  totalCards={cardsPerRow}
                  row={row}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
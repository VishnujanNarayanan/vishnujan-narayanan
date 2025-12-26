import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/data'

export default function ProjectsPage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            All Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive portfolio of AI/ML applications, data pipelines, and production systems
          </p>
        </div>

        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              index={index % 3} // Position in 3-column grid
              totalCards={3} // Total columns in the grid
            />
          ))}
        </div>
      </div>
    </section>
  )
}
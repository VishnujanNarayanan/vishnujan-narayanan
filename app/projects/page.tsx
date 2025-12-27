import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/data'

export default function ProjectsPage() {
  const cardsPerRow = 3
  
  return (
    <section className="section-padding min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2">
              <div className="h-px w-8 bg-gray-700"></div>
              <span className="text-sm font-medium text-gray-400 tracking-widest uppercase">
                Portfolio
              </span>
              <div className="h-px w-8 bg-gray-700"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            All Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive portfolio of AI/ML applications, data pipelines, and production systems
          </p>
        </div>

        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative pb-12">
          {projects.map((project, index) => {
            const row = Math.floor(index / cardsPerRow)
            const col = index % cardsPerRow
            
            return (
              <div 
                key={project.id} 
                className="relative min-h-[240px] transition-all duration-300"
                style={{
                  marginTop: row > 0 ? '0' : 'auto',
                }}
              >
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
        
        {/* Stats */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-white mb-2">{projects.length}</div>
              <div className="text-gray-400">Total Projects</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-white mb-2">
                {projects.filter(p => p.liveUrl).length}
              </div>
              <div className="text-gray-400">Live Demos</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-white mb-2">
                {Array.from(new Set(projects.flatMap(p => p.technologies))).length}
              </div>
              <div className="text-gray-400">Technologies</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400">Open Source</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
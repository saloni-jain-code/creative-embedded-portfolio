import { ChevronRight } from 'lucide-react';

export default function ProjectCard({ project, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer bg-black/40 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400"
      style={{
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.4), 0 0 60px rgba(0, 255, 255, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '';
      }}
    >
      <div className="aspect-video overflow-hidden bg-black">
        <img 
          src={project.heroImage} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-90"
        />
      </div>
      <div className="p-6">
        <h3 
          className="text-xl font-semibold text-cyan-400 mb-2 transition-all font-mono"
          style={{
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            if (e.currentTarget.closest('.group:hover')) {
              e.currentTarget.style.textShadow = '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.6)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.textShadow = '';
          }}
        >
          <span className="text-fuchsia-500">&gt;</span> {project.title}
        </h3>
        <p className="text-green-400 text-sm leading-relaxed font-mono">
          {project.shortDescription}
        </p>
        <div className="mt-4">
          <div className="inline-flex items-center text-yellow-400 text-sm font-medium font-mono border border-yellow-400 px-3 py-1.5 rounded group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">
            view_project() <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}

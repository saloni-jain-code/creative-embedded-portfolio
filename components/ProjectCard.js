import { ChevronRight } from 'lucide-react';

export default function ProjectCard({ project, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer bg-[#1b4332] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#52b788]/50 transition-all duration-300 border border-[#2d6a4f] hover:border-[#52b788]"
      style={{
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 0 30px rgba(82, 183, 136, 0.6), 0 0 60px rgba(82, 183, 136, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '';
      }}
    >
      <div className="aspect-video overflow-hidden bg-[#0a0e0d]">
        <img 
          src={project.heroImage} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 
          className="text-xl font-semibold text-[#52b788] mb-2 group-hover:text-[#74c69d] transition-colors font-mono"
          style={{
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            if (e.currentTarget.closest('.group:hover')) {
              e.currentTarget.style.textShadow = '0 0 10px rgba(82, 183, 136, 0.8), 0 0 20px rgba(82, 183, 136, 0.6)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.textShadow = '';
          }}
        >
          {project.title}
        </h3>
        <p className="text-[#95d5b2] text-sm leading-relaxed font-mono">
          {project.shortDescription}
        </p>
        <div className="mt-4">
          <div className="inline-flex items-center text-[#52b788] text-sm font-medium font-mono border border-[#52b788] px-3 py-1.5 rounded group-hover:bg-[#52b788] group-hover:text-[#0a0e0d] transition-all duration-300">
            view_project() <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}

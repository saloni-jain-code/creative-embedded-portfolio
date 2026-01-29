import { ChevronRight } from 'lucide-react';

export default function ProjectDetail({ project, onBack }) {
  return (
    <div className="animate-fadeIn">
      <button 
        onClick={onBack}
        className="mb-8 inline-flex items-center text-fuchsia-500 font-mono border border-fuchsia-500 px-3 py-1.5 rounded hover:bg-fuchsia-500 hover:text-black transition-all duration-300"
      >
        <ChevronRight className="w-5 h-5 rotate-180 mr-2" />
        back()
      </button>
      
      <h1 className="text-4xl font-bold text-cyan-400 mb-4 font-mono">
        <span className="text-fuchsia-500">&gt;</span> {project.title}
      </h1>
      <p className="text-lg text-green-400 mb-8 font-mono">
        <span className="text-yellow-400"></span> {project.shortDescription}
      </p>
      
      <div className="rounded-lg overflow-hidden shadow-lg shadow-cyan-500/20 mb-8 border border-cyan-500/30">
        <img 
          src={project.heroImage} 
          alt={project.title}
          className="w-full h-auto opacity-90"
        />
      </div>

      <div className="bg-black/40 rounded-lg p-8 border border-cyan-500/30 mb-8">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4 font-mono">
          <span className="text-fuchsia-500"></span> reflection()
        </h2>
        <p className="text-green-400 leading-relaxed text-base font-mono">
          {project.reflection}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {project.detailImages.map((img, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden shadow-md shadow-cyan-500/20 border border-cyan-500/30 aspect-square">
            <img 
              src={img} 
              alt={`${project.title} detail ${idx + 1}`}
              className="w-full h-auto object-cover opacity-90"
            />
          </div>
        ))}
      </div>
      
    </div>
  );
}

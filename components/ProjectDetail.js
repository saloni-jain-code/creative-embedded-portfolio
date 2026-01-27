import { ChevronRight } from 'lucide-react';

export default function ProjectDetail({ project, onBack }) {
  return (
    <div className="animate-fadeIn">
      <button 
        onClick={onBack}
        className="mb-8 inline-flex items-center text-[#52b788] font-mono border border-[#52b788] px-3 py-1.5 rounded hover:bg-[#52b788] hover:text-[#0a0e0d] transition-all duration-300"
      >
        <ChevronRight className="w-5 h-5 rotate-180 mr-2" />
        back()
      </button>
      
      <h1 className="text-4xl font-bold text-[#52b788] mb-4 font-mono">{project.title}</h1>
      <p className="text-lg text-[#95d5b2] mb-8 font-mono">// {project.shortDescription}</p>
      
      <div className="rounded-lg overflow-hidden shadow-lg shadow-[#52b788]/10 mb-8 border border-[#2d6a4f]">
        <img 
          src={project.heroImage} 
          alt={project.title}
          className="w-full h-auto"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {project.detailImages.map((img, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden shadow-md shadow-[#52b788]/10 border border-[#2d6a4f]">
            <img 
              src={img} 
              alt={`${project.title} detail ${idx + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
      
      <div className="bg-[#1b4332] rounded-lg p-8 border border-[#2d6a4f]">
        <h2 className="text-2xl font-semibold text-[#52b788] mb-4 font-mono">reflection()</h2>
        <p className="text-[#95d5b2] leading-relaxed text-base font-mono">
          {project.reflection}
        </p>
      </div>
    </div>
  );
}

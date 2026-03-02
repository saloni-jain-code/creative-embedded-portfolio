import { ChevronRight, Github } from 'lucide-react';

export default function ProjectDetail({ project, onBack }) {
  const heroImages = Array.isArray(project.heroImage) ? project.heroImage : [project.heroImage];

  return (
    <div className="animate-fadeIn">
      <div className="flex items-center gap-3 mb-8">
        <button 
          onClick={onBack}
          className="inline-flex items-center text-fuchsia-500 font-mono border border-fuchsia-500 px-3 py-1.5 rounded hover:bg-fuchsia-500 hover:text-black transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5 rotate-180 mr-2" />
          back()
        </button>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-fuchsia-500 font-mono border border-fuchsia-500 px-3 py-1.5 rounded hover:bg-fuchsia-500 hover:text-black transition-all duration-300"
          >
            <Github className="w-4 h-4" /> github
          </a>
        )}
      </div>
      <h1 className="text-4xl font-bold text-cyan-400 mb-4 font-mono">
        <span className="text-fuchsia-500">&gt;</span> {project.title}
      </h1>
      <p className="text-lg text-green-400 mb-8 font-mono">
        <span className="text-yellow-400"></span> {project.shortDescription}
      </p>
      
      <div className={`grid gap-4 mb-8 ${heroImages.length > 1 ? 'grid-cols-2' : 'grid-cols-1 max-w-2xl mx-auto'}`}>
        {heroImages.map((src, idx) => {
          const isVid = src.endsWith('.mp4') || src.endsWith('.mov') || src.endsWith('.webm');
          return (
            <div key={idx} className="rounded-lg overflow-hidden shadow-lg shadow-cyan-500/20 border border-cyan-500/30">
              {isVid ? (
                <video
                  src={src}
                  className="w-full h-full object-cover opacity-80"
                  autoPlay loop muted playsInline
                />
              ) : (
                <img src={src} alt={`${project.title} hero ${idx + 1}`} className="w-full h-full object-cover opacity-80" />
              )}
            </div>
          );
        })}
      </div>

      {project.reflection != "" && 
      <div className="bg-black/40 rounded-lg p-8 border border-cyan-500/30 mb-8">
      <h2 className="text-2xl font-semibold text-yellow-400 mb-4 font-mono">
        <span className="text-fuchsia-500">def</span> describe()
      </h2>
        {project.reflection.split('\n\n').map((paragraph, idx) => (
          <p key={idx} className="text-green-400 leading-relaxed text-base font-mono mb-4 last:mb-0">
            {paragraph.trim()}
          </p>
      ))}
    </div>
      }
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {project.detailImages.map((img, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden shadow-md shadow-cyan-500/20 border border-cyan-500/30 aspect-square">
            {img.endsWith('.mov') ?  
            <video 
              src={img}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-90"
              autoPlay
              loop
              muted
              playsInline
            />
            : (<img 
              src={img} 
              alt={`${project.title} detail ${idx + 1}`}
              className="w-full h-auto object-cover opacity-90"
            />)
            }
            
          </div>
        ))}
      </div>
      
    </div>
  );
}

'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import ProjectDetail from '@/components/ProjectDetail';
import { projects, Project } from '@/data/projects';

type View = 'projects' | 'project';

export default function Portfolio() {
  const [currentView, setCurrentView] = useState<View>('projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentView('project');
  };

  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-hidden">
      {/* Scanline effect */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-scanline"></div>
      </div>
      
      <Header currentView={currentView} setCurrentView={setCurrentView} />

      <main className="max-w-6xl mx-auto px-6 py-16 flex-grow relative z-10">
        {currentView === 'projects' && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-bold mb-10 font-mono tracking-tight">
              <span className="text-fuchsia-500">&lt;</span> <span className="text-cyan-400">Projects</span> <span className="text-fuchsia-500"> /&gt;</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(project => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onClick={() => handleProjectClick(project)}
                />
              ))}
              
              {/* {[...Array(Math.max(0, 5 - projects.length))].map((_, idx) => (
                <div 
                  key={`placeholder-${idx}`}
                  className="bg-black/40 rounded-lg overflow-hidden border-2 border-dashed border-cyan-500/30 flex items-center justify-center aspect-[4/3]"
                >
                  <p className="text-cyan-400 font-mono text-sm">
                    <span className="text-yellow-400">//</span> Coming Soon
                  </p>
                </div>
              ))} */}
            </div>
          </div>
        )}

        {currentView === 'project' && selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onBack={() => setCurrentView('projects')}
          />
        )}
      </main>

      <Footer />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        
        body {
          font-family: 'JetBrains Mono', monospace;
          background: #000;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-scanline {
          animation: scanline 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
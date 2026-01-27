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
    <div className="min-h-screen bg-[#0a0e0d] flex flex-col">
      <Header currentView={currentView} setCurrentView={setCurrentView} />

      <main className="max-w-6xl mx-auto px-6 py-16 flex-grow">{currentView === 'projects' && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-bold text-[#52b788] mb-10 font-mono tracking-tight">&lt;Projects /&gt;</h2>
            
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
                  className="bg-[#1b4332]/20 rounded-lg overflow-hidden border-2 border-dashed border-[#2d6a4f] flex items-center justify-center aspect-[4/3]"
                >
                  <p className="text-[#52b788] font-mono text-sm">// Coming Soon</p>
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
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
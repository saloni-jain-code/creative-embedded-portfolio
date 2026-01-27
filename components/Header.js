import { Folder } from 'lucide-react';

export default function Header({ currentView, setCurrentView }) {
  return (
    <header className="bg-[#1b4332] border-b border-[#2d6a4f] sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#52b788] rounded flex items-center justify-center">
            <span className="text-[#0a0e0d] font-bold text-lg font-mono">&lt;/&gt;</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-[#52b788] font-mono">Creative Embedded Systems Portfolio</h1>
            <p className="text-xs text-[#74c69d] font-mono">Saloni Jain</p>
          </div>
        </div>
        <nav className="flex items-center space-x-6">
          <button 
            onClick={() => setCurrentView('projects')}
            className={`flex items-center space-x-2 transition-colors font-mono ${
              currentView === 'projects' || currentView === 'project' ? 'text-[#52b788]' : 'text-[#74c69d] hover:text-[#52b788]'
            }`}
          >
            <Folder className="w-5 h-5" />
            <span className="font-medium">projects</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

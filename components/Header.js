import { Folder, Terminal } from 'lucide-react';

export default function Header({ currentView, setCurrentView }) {
  return (
    <header className="bg-black border-b border-cyan-500/30 sticky top-0 z-10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-fuchsia-500 rounded flex items-center justify-center">
            <Terminal className="w-6 h-6 text-black" />
          </div>
          <div>
            <h1 className="text-lg font-mono">
                <span className="text-green-400 font-bold">saloni@columbia</span>
                <span className="text-white">:</span>
                <span className="text-cyan-400 font-bold">~/creative_embedded_systems</span>
                <span className="text-yellow-400">$</span>
            </h1>
            <p className="text-xs text-gray-500 font-mono mt-0.5">
                # Saloni Jain
            </p>
            </div>

        </div>
        <nav className="flex items-center space-x-6">
          <button 
            onClick={() => setCurrentView('projects')}
            className={`flex items-center space-x-2 transition-colors font-mono ${
              currentView === 'projects' || currentView === 'project' 
                ? 'text-cyan-400' 
                : 'text-green-400 hover:text-cyan-400'
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

import React, { useState } from 'react';
import { SECTIONS } from './constants';
import { 
  Menu, 
  X, 
  ChevronRight, 
  GraduationCap,
  Sparkles
} from 'lucide-react';

const App: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('foundations');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const activeSection = SECTIONS.find(s => s.id === activeTabId) || SECTIONS[0];
  
  // Vibrant gradients for the background based on active section
  const getGradient = (sectionId: string) => {
      switch(sectionId) {
          case 'foundations': return 'bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-slate-900';
          case 'algorithms': return 'bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-slate-900';
          case 'computer-vision': return 'bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-slate-900';
          case 'applications': return 'bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-slate-900';
          case 'ethics': return 'bg-gradient-to-br from-rose-500/10 via-red-500/5 to-slate-900';
          default: return 'bg-slate-900';
      }
  }

  return (
    <div className={`min-h-screen ${getGradient(activeTabId)} text-slate-100 flex flex-col md:flex-row font-sans transition-colors duration-1000`}>
      
      {/* Background Ambience - Animated Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-blob"></div>
         <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-purple-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
         <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-cyan-600/20 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden glass-panel p-4 flex justify-between items-center sticky top-0 z-50">
         <div className="flex items-center gap-2 font-bold text-xl text-white tracking-tighter">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <GraduationCap className="text-white w-5 h-5" />
            </div>
            NeuralNexus
         </div>
         <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-300">
            {isMobileMenuOpen ? <X /> : <Menu />}
         </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed md:sticky md:top-0 h-[calc(100vh-65px)] md:h-screen w-full md:w-80 glass-panel border-r-0 md:border-r border-white/5 flex flex-col z-40 transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0 top-[65px]' : '-translate-x-full md:translate-x-0 top-0'}
      `}>
        <div className="p-8 hidden md:flex items-center gap-3 font-bold text-2xl text-white tracking-tighter">
             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <GraduationCap className="text-white w-6 h-6" />
             </div>
             NeuralNexus
        </div>
        
        <nav className="flex-1 px-4 py-6 md:py-2 space-y-1 overflow-y-auto">
            {SECTIONS.map((section) => {
                const Icon = section.icon;
                const isActive = activeTabId === section.id;
                return (
                    <button
                        key={section.id}
                        onClick={() => {
                            setActiveTabId(section.id);
                            setIsMobileMenuOpen(false);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`
                            w-full text-left flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 group relative overflow-hidden
                            ${isActive 
                                ? 'bg-white/10 text-white shadow-lg backdrop-blur-sm border border-white/10' 
                                : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'}
                        `}
                    >
                        {isActive && (
                            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${section.color}`}></div>
                        )}
                        <Icon size={20} className={`transition-colors ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`} />
                        <span className="font-medium tracking-wide text-sm">{section.title}</span>
                        {isActive && <ChevronRight size={16} className="ml-auto opacity-60" />}
                    </button>
                )
            })}
        </nav>

        <div className="p-6">
            <div className="glass-card rounded-xl p-5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2 text-yellow-300">
                        <Sparkles size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">Concept Lab</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                        Explore the visualizations to understand the math behind the magic.
                    </p>
                </div>
            </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-12 max-w-7xl mx-auto w-full relative z-10">
        <header className="mb-12 animate-fade-in relative">
             {/* Header Background Glow */}
            <div className={`absolute -top-20 -left-20 w-64 h-64 rounded-full blur-[80px] opacity-40 bg-gradient-to-r ${activeSection.color}`}></div>
            
            <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-mono mb-6 backdrop-blur-md">
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeSection.color}`}></span>
                    Module: {activeSection.id.toUpperCase()}
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tight mb-4 drop-shadow-sm">
                    {activeSection.title}
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl">
                    {activeSection.subtitle}
                </p>
            </div>
        </header>

        <article className="prose prose-invert prose-lg max-w-none">
            {activeSection.content}
        </article>

        <footer className="mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
            <p className="font-mono">© 2024 NeuralNexus Education</p>
            <div className="flex items-center gap-6">
                 <span className="hover:text-white transition-colors cursor-pointer">References</span>
                 <span className="hover:text-white transition-colors cursor-pointer">Glossary</span>
                 <span className="hover:text-white transition-colors cursor-pointer">About</span>
            </div>
        </footer>
      </main>

    </div>
  );
};

export default App;
import Hero from './sections/Hero';
import MetricsBar from './sections/MetricsBar';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import SecurityCenter from './sections/SecurityCenter';
import Process from './sections/Process';
import Footer from './sections/Footer';

function App() {
  return (
    <main className="bg-background text-primary-accent selection:bg-secondary-accent/20 selection:text-primary-accent">
      {/* Slim Navigation Overlay */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="pointer-events-auto bg-white/40 backdrop-blur-md px-5 py-2.5 rounded-xl border border-black/5 flex items-center gap-3 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary-accent" />
            <span className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-primary-accent/50">VP_CORE_v3.0</span>
          </div>
          
          <div className="hidden md:flex gap-4 pointer-events-auto">
            {['Experience', 'Skills', 'Projects', 'Security', 'Process'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="bg-white/40 backdrop-blur-md px-5 py-2.5 rounded-xl border border-black/5 text-[9px] font-bold uppercase tracking-[0.2em] text-primary-accent/40 hover:text-secondary-accent hover:border-secondary-accent/20 transition-all shadow-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <Hero />
      <MetricsBar />
      <div id="experience"><Experience /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="security"><SecurityCenter /></div>
      <div id="process"><Process /></div>
      <Footer />
    </main>
  );
}

export default App;

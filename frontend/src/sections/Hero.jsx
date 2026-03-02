import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import profilePic from '../assets/me.jpeg';
import resumeFile from '../assets/MyResume.pdf';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 25]);

  return (
    <section 
      ref={containerRef}
      className="min-h-[85vh] flex items-center justify-center pt-20 pb-12 px-6 relative overflow-hidden bg-white"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[10%] left-[5%] w-[35%] h-[35%] bg-secondary-accent/5 rounded-full blur-[100px]" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[10%] right-[5%] w-[35%] h-[35%] bg-secondary-accent/5 rounded-full blur-[100px]" 
        />
        
        {/* Decorative Technical Elements */}
        <div className="absolute inset-0 opacity-[0.02] select-none pointer-events-none hidden md:block">
          <div className="absolute top-[20%] left-[10%] rotate-12 text-5xl font-mono">{"{ }"}</div>
          <div className="absolute bottom-[25%] left-[15%] -rotate-12 text-6xl font-mono">{"< >"}</div>
          <div className="absolute top-[15%] right-[15%] rotate-45 text-4xl font-mono">{"#"}</div>
          <div className="absolute bottom-[20%] right-[10%] -rotate-45 text-7xl font-mono">{"/"}</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Text Content */}
        <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 border border-black/5 mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-secondary-accent"></span>
              </span>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-accent">Available for Hire</span>
            </div>

            <h2 className="text-secondary-accent font-serif italic text-xl md:text-2xl mb-3 tracking-wide">
              Hi, I'm Vishal Prajapati
            </h2>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-primary-accent tracking-tighter leading-[1.05]">
              Passionate <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent via-secondary-accent to-primary-accent bg-[length:200%_auto] animate-gradient-x">
                Full-Stack
              </span> <br />
              & Security Expert
            </h1>

            <p className="text-muted text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              1 year of desktop app development & 1 year as a dedicated web app developer, 
              fusing <span className="text-primary-accent font-bold">technical precision</span> with 
              <span className="text-secondary-accent font-bold italic"> creative vision</span>.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -10px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8 py-4 text-sm shadow-xl"
              >
                Explore Portfolio
              </motion.button>
              <motion.a 
                href={resumeFile}
                download="Vishal_Prajapati_Resume.pdf"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline px-8 py-4 text-sm inline-flex items-center justify-center cursor-pointer"
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Profile Visual */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Decorative Geometric Frames */}
            <motion.div 
              style={{ rotate }}
              className="absolute -inset-3 border-2 border-dashed border-secondary-accent/20 rounded-2xl -z-10" 
            />
            <div className="absolute -inset-6 border border-black/5 rounded-[2rem] -z-20 hidden md:block" />
            
            {/* Main Image Container */}
            <div className="relative group">
              <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-xl overflow-hidden border-[6px] border-white shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15)] relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                <img 
                  src={profilePic} 
                  alt="Vishal Prajapati" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://via.placeholder.com/600?text=VP";
                  }}
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Stats/Floating Pill (Optional high-fidelity touch) */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute -right-4 bottom-10 bg-white p-3 rounded-xl shadow-2xl border border-black/5 z-20 hidden md:block"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary-accent/10 flex items-center justify-center text-secondary-accent text-sm font-black">
                    2+
                  </div>
                  <div>
                    <div className="text-[9px] font-black uppercase tracking-tighter text-muted">Years of</div>
                    <div className="text-[11px] font-black text-primary-accent">Experience</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-muted rotate-90 mb-3 origin-left">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-secondary-accent to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;

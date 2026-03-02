import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experiences = [
    {
      company: "QACA",
      role: "VAPT Specialist",
      period: "Nov 2024 - Present",
      description: "Leading Vulnerability Assessment and Penetration Testing for high-profile enterprise clients. Implementing Zabbix monitoring and Flowable BPMN automation.",
      skills: ["VAPT", "Zabbix", "Flowable BPMN", "Security"]
    },
    {
      company: "RMSI",
      role: "Corporate Web Maintenance",
      period: "Jan 2024 - Sep 2024",
      description: "Focused on corporate web maintenance, SEO optimization, and collaborating on UI/UX improvements to enhance digital visibility.",
      skills: ["Web Maintenance", "SEO", "UI/UX"]
    },
    {
      company: "QSpiders",
      role: "Full Stack Development Trainee",
      period: "Jul 2023 - Dec 2023",
      description: "Completed intensive 5-month training covering Java, PHP, and Agile methodologies, building a strong foundation in modern dev practices.",
      skills: ["Java", "PHP", "Agile", "Full Stack"]
    }
  ];

  return (
    <section id="experience" className="py-16 px-6 max-w-6xl mx-auto overflow-hidden">
      <div className="text-center mb-24">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary-accent mb-2">Career Journey</h2>
        <h3 className="text-3xl md:text-4xl font-black text-primary-accent tracking-tighter">My Professional Roadmap</h3>
        <p className="text-muted text-xs mt-3 font-medium italic">Hover over the points on the road to see my experience</p>
      </div>

      <div className="relative max-w-4xl mx-auto min-h-[1000px]">
        {/* The 3D Perspective Road (Smoothed Curves & No Shadow) */}
        <div className="absolute inset-0 hidden md:block pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1000 1200" preserveAspectRatio="none" fill="none" style={{ overflow: 'visible' }}>
            {/* Road Outer Border (Light Bluish Grey) */}
            <path 
              d="M 500 0 C 800 200, 200 400, 500 600 S 800 1000, 500 1200" 
              stroke="#e2e8f0" 
              strokeWidth="140" 
              strokeLinecap="round"
            />
            
            {/* Main Road Surface (Dark Navy) */}
            <path 
              d="M 500 0 C 800 200, 200 400, 500 600 S 800 1000, 500 1200" 
              stroke="#1e293b" 
              strokeWidth="120" 
              strokeLinecap="round"
            />
            
            {/* Center Dashed Line */}
            <path 
              d="M 500 0 C 800 200, 200 400, 500 600 S 800 1000, 500 1200" 
              stroke="#cbd5e1" 
              strokeWidth="3" 
              strokeDasharray="30 50"
              strokeLinecap="round"
              className="opacity-40"
            />
          </svg>
        </div>

        {/* Vertical Mobile Line fallback */}
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-secondary-accent/10 md:hidden" />

        <div className="relative z-10 pt-24 pb-24">
          {experiences.map((exp, index) => {
            // Precise Marker positions for the new S-curve path
            // Point 1: (650, 300) -> 65% left
            // Point 2: (350, 600) -> 35% left
            // Point 3: (650, 900) -> 65% left
            const markerPositions = [
              "md:left-[65%]", 
              "md:left-[35%]", 
              "md:left-[65%]"
            ];

            const pinColors = [
              "#f87171", // Red
              "#2dd4bf", // Teal
              "#fbbf24"  // Orange
            ];
            
            return (
              <div key={index} className="relative w-full h-[240px] md:h-[280px] flex items-center">
                
                {/* Milestone Marker - Map Pin Style */}
                <motion.div 
                  className={`absolute left-4 ${markerPositions[index]} w-12 h-12 -translate-x-1/2 z-30 top-1/2 -translate-y-[95%] cursor-pointer hidden md:flex items-center justify-center`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ scale: 1.15, y: -6 }}
                >
                  <svg width="40" height="50" viewBox="0 0 100 125" className="filter drop-shadow-lg">
                    <path 
                      d="M50,0 C22.4,0,0,22.4,0,50 c0,35,50,75,50,75 s50-40,50-75 C100,22.4,77.6,0,50,0 z" 
                      fill={pinColors[index]}
                    />
                    <circle cx="50" cy="50" r="18" fill="white" />
                  </svg>
                  
                  {/* Glowing effect on hover */}
                  {hoveredIndex === index && (
                    <motion.div 
                      layoutId="glow"
                      className="absolute inset-0 rounded-full blur-2xl opacity-40"
                      style={{ backgroundColor: pinColors[index] }}
                    />
                  )}
                </motion.div>

                {/* Mobile Marker */}
                <div className="absolute left-4 w-8 h-8 rounded-full border-[2px] border-secondary-accent bg-white shadow-lg flex items-center justify-center -translate-x-1/2 z-20 md:hidden top-1/2 -translate-y-1/2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary-accent animate-pulse" />
                </div>

                {/* Content Card - Positioned far outward to let the road be the hero */}
                <div className={`absolute w-full md:w-[32%] left-10 md:left-auto ${index % 2 === 0 ? 'md:right-0' : 'md:left-0'} z-40 pointer-events-none`}>
                  <AnimatePresence>
                    {(hoveredIndex === index || (typeof window !== 'undefined' && window.innerWidth < 768)) && (
                      <motion.div 
                        initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: index % 2 === 0 ? 30 : -30, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="card-base p-5 md:p-6 relative overflow-hidden group shadow-2xl pointer-events-auto"
                        style={{ borderTop: `4px solid ${pinColors[index]}` }}
                      >
                        <div className="absolute -top-2 -right-2 text-6xl md:text-7xl font-black text-black/[0.03] select-none pointer-events-none group-hover:text-secondary-accent/[0.06] transition-all duration-700">
                          0{index + 1}
                        </div>

                        <div className="relative z-10">
                          <span className="badge-tag mb-2 inline-block">{exp.period}</span>
                          <h4 className="text-xl md:text-2xl font-black text-primary-accent group-hover:text-secondary-accent transition-colors leading-tight">{exp.company}</h4>
                          <p className="text-muted font-bold text-xs md:text-sm mt-1 mb-4">{exp.role}</p>

                          <p className="text-muted text-[13px] leading-relaxed mb-6">
                            {exp.description}
                          </p>

                          <div className="flex flex-wrap gap-1.5">
                            {exp.skills.map((skill, sIdx) => (
                              <span key={sIdx} className="px-2 py-0.5 bg-black/[0.02] text-black/40 text-[9px] font-bold uppercase tracking-wider rounded-md border border-black/5">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -600;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;

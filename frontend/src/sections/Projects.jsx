import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      title: "QacaShield",
      tag: "Security App",
      description: "A Node.js/React safety tracking system featuring helmet verification via selfie uploads and geofencing.",
      color: "#4ade80",
      background: "linear-gradient(135deg,#f9e4c5,#e1c086,#b37a3c)",
      icon: "🛡️",
      stats: "Real-time AI",
      techStack: ["Java", "Spring Boot", "React", "MySQL"],
      caseStudy: "I focused on secure user verification, geofenced workflow logic, and a clean mobile-first experience for field teams."
    },
    {
      title: "Workflow Automation",
      tag: "Enterprise Tool",
      description: "A system using Flowable BPMN and Spring Boot that reduced manual operational effort by 60%.",
      color: "#fb923c",
      background: "linear-gradient(135deg,#f8e0c5,#e3b07a,#c07433)",
      icon: "⚙️",
      stats: "60% Efficiency",
      techStack: ["Java", "Spring Boot", "Flowable", "PostgreSQL"],
      caseStudy: "I mapped repetitive approval flows into a BPMN-driven process and streamlined operations to cut manual effort significantly."
    },
    {
      title: "IT Metrics Dashboard",
      tag: "Monitoring",
      description: "A Flask-based monitor with real-time Chart.js visualizations for system health metrics.",
      color: "#60a5fa",
      background: "linear-gradient(135deg,#f5e4c8,#dcba7f,#aa7637)",
      icon: "📊",
      stats: "Zero Latency",
      techStack: ["Python", "Flask", "Chart.js", "PostgreSQL"],
      caseStudy: "I built a lightweight monitoring layer that brought system health into one clear operational view for faster decisions."
    },
    {
      title: "Smart Shoe IoT",
      tag: "IoT Solution",
      description: "An assistive wearable for the visually impaired with obstacle detection and GPS tracking.",
      color: "#f472b6",
      background: "linear-gradient(135deg,#f7ddc6,#e09a6d,#b2623a)",
      icon: "👟",
      stats: "Assistive Tech",
      techStack: ["IoT", "GPS", "Embedded", "React"],
      caseStudy: "I combined sensing, location tracking, and a simple interface to create a practical assistive experience for everyday use."
    }
  ];

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-24 px-6 overflow-hidden relative projects-antique-bg">
      <div className="absolute top-20 right-[-5%] text-[15vw] font-black text-black/[0.02] pointer-events-none select-none tracking-tighter uppercase leading-none">
        PROJECTS
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-secondary-accent mb-4"
            >
              <div className="w-8 h-[2px] bg-secondary-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Selected Work</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-primary-accent tracking-tighter leading-tight font-serif"
            >
              Building <span className="text-secondary-accent italic">Digital</span> Solutions <br />
              From Desktop to Web
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-base max-w-xs font-medium"
          >
            A diverse portfolio showcasing expertise in full-stack development, security, and automation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-full"
            >
              <div
                className="relative h-full rounded-[22px] border border-black/40 shadow-[0_26px_60px_rgba(0,0,0,0.45)] overflow-hidden group"
                style={{
                  backgroundImage: project.background,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div 
                  className="absolute inset-[8px] rounded-[18px] border border-black/40 pointer-events-none opacity-80"
                />

                <div className="absolute w-3 h-3 rounded-full border border-black/50 bg-black/30 top-3 left-3 shadow-[0_0_6px_rgba(0,0,0,0.6)]" />
                <div className="absolute w-3 h-3 rounded-full border border-black/50 bg-black/30 top-3 right-3 shadow-[0_0_6px_rgba(0,0,0,0.6)]" />
                <div className="absolute w-3 h-3 rounded-full border border-black/50 bg-black/30 bottom-3 left-3 shadow-[0_0_6px_rgba(0,0,0,0.6)]" />
                <div className="absolute w-3 h-3 rounded-full border border-black/50 bg-black/30 bottom-3 right-3 shadow-[0_0_6px_rgba(0,0,0,0.6)]" />

                <div className="relative z-10 px-8 py-7 md:px-10 md:py-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <span 
                      className="px-3 py-1 text-[9px] font-black uppercase tracking-wider rounded-md border"
                      style={{ 
                        color: project.color, 
                        borderColor: `${project.color}40`,
                        backgroundColor: `${project.color}10`
                      }}
                    >
                      {project.tag}
                    </span>
                    <span className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-500">
                      {project.icon}
                    </span>
                  </div>

                  <h4 className="text-2xl md:text-3xl font-black mb-4 text-primary-accent tracking-tight">
                    {project.title}
                  </h4>
                  
                  <p className="text-primary-accent/80 text-[14px] md:text-[15px] leading-relaxed mb-4 flex-grow font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 rounded-full bg-white/70 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-accent/80 border border-black/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-black/30 text-primary-accent">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.color }} />
                      <span className="text-[10px] font-bold uppercase tracking-wider">
                        {project.stats}
                      </span>
                    </div>
                    
                    <motion.button
                      type="button"
                      whileHover={{ x: 5 }}
                      onClick={() => toggleProject(index)}
                      className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]"
                    >
                      {expandedProject === index ? "Hide Case Study" : "View Case Study"}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </motion.button>
                  </div>

                  {expandedProject === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 rounded-2xl border border-black/10 bg-white/70 p-4"
                    >
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary-accent mb-2">
                        Case Study
                      </p>
                      <p className="text-sm text-primary-accent/80 leading-relaxed">
                        {project.caseStudy}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Corner Decorative Element */}
                <div 
                  className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                  style={{ backgroundColor: project.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black/5 border border-black/5 cursor-default">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-accent">
              Loading More Projects...
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

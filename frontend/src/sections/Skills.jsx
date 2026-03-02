import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Creating engaging and mobile-friendly websites with modern frameworks.",
      skills: ["React.js", "Tailwind CSS", "Framer Motion", "JavaScript", "Chart.js"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 21l3-1 3 1-.75-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Backend & Systems",
      description: "Delivering customized web solutions to meet your architectural needs.",
      skills: ["Node.js", "Python/Django", "Spring Boot", "MySQL", "PostgreSQL"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      title: "Security Operations",
      description: "Proficient in various security protocols, frameworks, and monitoring tools.",
      skills: ["VAPT", "Zabbix", "Posture Hardening", "Flowable BPMN", "Network Monitoring"],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary-accent mb-4">Building Innovative Web Solutions</h2>
          <p className="text-muted text-sm">Experienced in Desktop and Web App Development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-base h-full p-7 md:p-8 flex flex-col hover:-translate-y-1 hover:shadow-2xl group"
            >
              <div className="w-11 h-11 rounded-2xl bg-secondary-accent/10 text-secondary-accent flex items-center justify-center shadow-[0_12px_30px_rgba(0,0,0,0.04)] mb-5 group-hover:bg-secondary-accent group-hover:text-white transition-all">
                {cat.icon}
              </div>

              <h4 className="text-lg md:text-xl font-black mb-2 text-primary-accent tracking-tight">
                {cat.title}
              </h4>
              <p className="text-muted text-[13px] leading-relaxed mb-6 flex-grow">
                {cat.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-3 border-t border-black/5">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-full bg-white text-primary-accent/70 text-[10px] font-semibold tracking-wide border border-black/5 shadow-[0_6px_18px_rgba(15,23,42,0.03)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

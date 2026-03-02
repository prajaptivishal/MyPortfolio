import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    {
      id: "01",
      title: "Conceptualization and Planning",
      description: "As our company, we believe a streamlined development process to ensure precision and efficiency in executing your projects.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: "02",
      title: "Design and Development",
      description: "Our expert team of designers and developers work together to create user-centered web and app solutions, prioritizing usability.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: "03",
      title: "Testing and Deployment",
      description: "To ensure the reliability and functionality of your project, our dedicated QA team conducts rigorous automated testing.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-accent mb-4">
          From Concept to Deployment My <span className="text-secondary-accent">Seamless Development Process</span>
        </h2>
        <p className="text-muted text-sm max-w-2xl mx-auto leading-relaxed">
          I systematically bring your ideas to life through planning, design, development, testing, and deployment. 
          With my expertise, we ensure successful project delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-2xl bg-surface border border-black/5 flex items-center justify-center text-primary-accent mb-6 group-hover:bg-secondary-accent group-hover:text-white transition-all shadow-sm">
              {step.icon}
            </div>
            <h4 className="text-lg font-bold mb-3 text-primary-accent group-hover:text-secondary-accent transition-colors">{step.title}</h4>
            <p className="text-muted text-[13px] leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;

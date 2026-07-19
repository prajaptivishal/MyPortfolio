import { motion } from 'framer-motion';

const MetricsBar = () => {
  const metrics = [
    { value: "8.01/10", label: "B.Tech CGPA", sub: "Academic Excellence" },
    { value: "60%", label: "Effort Reduction", sub: "Operational Impact" },
    { value: "Full-Stack", label: "Developer", sub: "Engineering Core" },
    { value: "VAPT", label: "Specialist", sub: "Security Focus" }
  ];

  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="dotted-container p-12 bg-surface/50"
      >
        <div className="text-center mb-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-secondary-accent mb-2">My Performance</h2>
          <h3 className="text-3xl font-bold text-primary-accent">Track Record of Success</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl font-black text-secondary-accent mb-2 group-hover:scale-110 transition-transform">
                {metric.value}
              </div>
              <div className="text-sm font-bold text-primary-accent uppercase tracking-tighter mb-1">
                {metric.label}
              </div>
              <div className="text-[10px] text-muted font-medium uppercase tracking-widest">
                {metric.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MetricsBar;

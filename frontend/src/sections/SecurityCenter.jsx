import { motion } from 'framer-motion';

const SecurityCenter = () => {
  const points = [
    {
      title: "Certified And Professional Expert",
      desc: "For Business To Have A Successful Defense Against Cyber attacks, The People, Processes, And Technology.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Security On A Global Scale",
      desc: "Leveraging advanced threat intelligence to power security solutions across diverse digital landscapes.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "24/7 Advanced Monitoring",
      desc: "Continuous real-time tracking using Zabbix and custom automated task management systems.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="security-bg py-16 px-6 overflow-hidden relative">
      {/* Background Cyber Title exactly like Image 1 */}
      <div className="absolute top-8 left-8 text-[8vw] font-black text-white/5 pointer-events-none select-none tracking-tighter uppercase leading-none">
        CYBER SECURITY
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 text-security-green mb-5">
            <div className="status-indicator-green" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Why Choose Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
            PROVIDE <span className="text-security-green">ADVANCED SECURITY</span> FOR ADVANCED THREAT
          </h2>
          <p className="text-white/40 text-base mb-10 leading-relaxed max-w-lg">
            Multiple layers of security are dispersed across the computers, networks, programs, or data that one wants to keep secure.
          </p>

          <div className="space-y-6">
            {points.map((point, index) => (
              <div key={index} className="flex gap-5 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-security-green/10 text-security-green flex items-center justify-center border border-security-green/20 group-hover:bg-security-green group-hover:text-black transition-all">
                  <div className="scale-90">{point.icon}</div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-security-green mb-1">{point.title}</h4>
                  <p className="text-white/40 text-[13px] leading-relaxed max-w-md">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Animated Shield Shield exactly like Image 1 */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 border-[1px] border-security-green/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-3 border-[1px] border-dashed border-security-green/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-8 border-[1px] border-security-green/30 rounded-full animate-[spin_10s_linear_infinite]" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Glow centered behind the shield */}
              <div className="absolute w-24 h-24 md:w-36 md:h-36 bg-security-green/10 rounded-full blur-[50px]" />
              
              <div className="relative z-10 text-security-green drop-shadow-[0_0_12px_rgba(74,222,128,0.5)] flex items-center justify-center">
                <svg className="w-20 h-20 md:w-28 md:h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                {/* Keyhole detail like Image 1 */}
                <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-3 h-5 bg-black rounded-t-full rounded-b-lg border border-security-green/40 shadow-[0_0_8px_rgba(74,222,128,0.3)]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default SecurityCenter;

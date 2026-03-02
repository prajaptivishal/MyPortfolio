import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-white/20 border-t border-primary-accent/5 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-accent tracking-tight">
            Ready to collaborate?
          </h2>
          <p className="text-secondary-accent/60 text-lg font-serif italic">Let's build something exceptional.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <motion.a 
            whileHover={{ y: -2 }}
            href="https://linkedin.com/in/vishal-prajapati-6559391a5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-white/40 border border-primary-accent/5 rounded-xl shadow-sm hover:shadow-md hover:border-secondary-accent/20 transition-all"
          >
            <div className="p-2 rounded-lg bg-secondary-accent/5 text-secondary-accent group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
            <span className="text-primary-accent/80 font-medium text-sm">LinkedIn</span>
          </motion.a>
          
          <motion.a 
            whileHover={{ y: -2 }}
            href="mailto:prajapativishal1708@gmail.com" 
            className="group flex items-center gap-3 px-6 py-3 bg-white/40 border border-primary-accent/5 rounded-xl shadow-sm hover:shadow-md hover:border-secondary-accent/20 transition-all"
          >
            <div className="p-2 rounded-lg bg-primary-accent/5 text-primary-accent group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-primary-accent/80 font-medium text-sm">Email</span>
          </motion.a>
        </div>

        <div className="text-center">
          <p className="text-primary-accent/20 text-[10px] font-mono tracking-[0.2em] uppercase mb-2">
            {`© 2026 VISHAL_PRAJAPATI // CORE_V2`}
          </p>
          <a
            href="https://github.com/prajaptivishal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-medium text-primary-accent/50 hover:text-secondary-accent transition-colors"
          >
            github.com/prajaptivishal
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Zap } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[75vh] flex items-center justify-center overflow-hidden py-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1604011237320-8e0506614fdf"
          alt="Technology Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-obo-dark/90 via-obo-darker/85 to-obo-secondary/70"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-10">
        <div className="w-full h-full opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#079BB9" strokeWidth="1" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-obo-primary rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-obo-accent rounded-full"
          animate={{
            y: [0, 15, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-obo-primary rounded-full"
          animate={{
            y: [0, -25, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-30 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center space-x-2 text-obo-primary text-sm font-medium tracking-wider uppercase"
          >
            <Code2 size={16} />
            <span></span>
            <Zap size={16} />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight"
          >
            <span className="block bg-gradient-to-r from-obo-primary via-obo-accent to-obo-primary bg-clip-text text-transparent">
              OneByteOne
            </span>
          </motion.h1>

          {/* Company Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-4"
          >
            {/* Main Description */}
            <p className="text-base md:text-lg text-gray-200 font-light leading-relaxed">
              OneByteOne is a dual-focus technology firm dedicated to closing the gap between demand and capability.
            </p>
            
            {/* Mission Statement - Highlighted */}
            <div className="bg-gradient-to-r from-obo-primary/10 to-obo-accent/10 border-l-4 border-obo-primary rounded-r-lg p-3 backdrop-blur-sm">
              <p className="text-sm md:text-base text-gray-100 font-light leading-relaxed">
                <span className="text-obo-accent font-medium">Our Mission:</span> To democratize access to high-quality engineering expertise and transform careers by offering a practical, affordable, and results-driven path into the tech industry.
              </p>
            </div>
            
            {/* Two Pillars - Side by Side */}
            <div className="grid md:grid-cols-2 gap-3 text-left">
              <div className="bg-obo-darker/50 border border-obo-primary/30 rounded-lg p-4 hover:border-obo-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-obo-primary/10">
                <div className="flex items-start space-x-2">
                  <Code2 size={18} className="text-obo-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-obo-primary font-medium mb-1.5 text-base">Consulting</h3>
                    <p className="text-gray-300 text-sm font-light leading-relaxed">
                      We deliver high-performance, custom engineering solutions that help businesses modernize and scale.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-obo-darker/50 border border-obo-accent/30 rounded-lg p-4 hover:border-obo-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-obo-accent/10">
                <div className="flex items-start space-x-2">
                  <Zap size={18} className="text-obo-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-obo-accent font-medium mb-1.5 text-base">Education</h3>
                    <p className="text-gray-300 text-sm font-light leading-relaxed">
                      We offer alternative, project-based training to turn aspiring coders into interview-ready engineers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tagline */}
            <div className="pt-1">
              <p className="text-gray-400 text-sm md:text-base font-light italic">
                We don't just write code; we build the ecosystem around it.
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4"
          >
            <motion.button
              onClick={scrollToQuiz}
              className="group bg-gradient-to-r from-obo-primary to-obo-accent hover:from-obo-accent hover:to-obo-primary text-white font-medium text-base py-3 px-7 rounded-full transition-all duration-300 shadow-lg hover:shadow-obo-primary/25 hover:shadow-2xl transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="discover-tech-path-button"
            >
              <span className="flex items-center space-x-2">
                <span>Discover Your Tech Path</span>
                <ArrowDown className="group-hover:translate-y-1 transition-transform duration-300" size={18} />
              </span>
            </motion.button>

            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group border-2 border-obo-primary text-obo-primary hover:bg-obo-primary hover:text-white font-medium text-base py-3 px-7 rounded-full transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="get-in-touch-button"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-obo-primary rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-obo-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
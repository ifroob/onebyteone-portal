import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Brain, Zap, Users, FileBadge } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Scalable CRM System",
      description: "A comprehensive customer relationship management system built with modern web technologies. Features include customer tracking, sales pipeline management, and advanced analytics.",
      image: "https://brianawsbucket12.s3.us-east-1.amazonaws.com/proj1.PNG",
      technologies: ["React", "Node.js", "MongoDB", "Python, FastAPI"],
      features: ["Customer Management", "Sales Pipeline", "Analytics Dashboard", "Real-time Updates"],
      icon: <Database className="w-8 h-8" />,
      gradient: "from-obo-secondary to-obo-primary"
    },
    {
      id: 2,
      title: "BusiDocs",
      description: "Helps businesses easily generate invoices, bid/proposal, contracts, customer agreement PDFs.",
      image: "https://brianawsbucket12.s3.us-east-1.amazonaws.com/Proj2.PNG",
      technologies: ["React", "Next.js", "JavaScript", "Python"],
      features: ["Comprehensive document generation", "Customizable parameters", "Payments integration"],
      icon: <FileBadge className="w-8 h-8" />,
      gradient: "from-obo-primary to-obo-accent"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-obo-dark via-obo-darker to-obo-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            <span className="bg-gradient-to-r from-obo-primary to-obo-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto font-light">
            Assisting clients with fast software products that can help their business.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative bg-obo-darker/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-obo-primary/50 transition-all duration-500 shadow-2xl hover:shadow-obo-primary/10">
                
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  
                  {/* Project Icon */}
                  <div className="absolute top-4 left-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white shadow-lg`}>
                      {project.icon}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                      data-testid={`project-${project.id}-external`}
                    >
                      <ExternalLink size={18} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                      data-testid={`project-${project.id}-github`}
                    >
                      <Github size={18} />
                    </motion.button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-obo-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-5 leading-relaxed text-sm font-light">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-5">
                    <h4 className="text-xs font-medium text-obo-primary mb-2 uppercase tracking-wider">Technologies</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2.5 py-0.5 bg-obo-secondary/30 rounded-full text-xs text-gray-300 border border-obo-secondary/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-xs font-medium text-obo-primary mb-2 uppercase tracking-wider">Key Features</h4>
                    <div className="grid grid-cols-2 gap-1.5">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-1.5 text-xs text-gray-300"
                        >
                          <Zap size={12} className="text-obo-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`mt-5 w-full py-2.5 bg-gradient-to-r ${project.gradient} text-white font-medium text-sm rounded-xl hover:shadow-lg transition-all duration-300`}
                    data-testid={`project-${project.id}-learn-more`}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-obo-primary text-obo-primary hover:bg-obo-primary hover:text-white font-medium py-3 px-6 rounded-full transition-all duration-300 text-sm"
            data-testid="view-all-projects-button"
          >
            <span className="flex items-center space-x-2">
              <span>View All Projects</span>
              <ExternalLink size={16} />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
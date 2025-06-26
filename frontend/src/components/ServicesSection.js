import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Smartphone, Database, Zap, ArrowRight, CheckCircle, PhoneCall } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Custom Software Development",
      description: "Software solutions tailored to your business needs. From concept to deployment, we build applications that help with your company.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      icon: <Code className="w-8 h-8" />,
      features: [
        "Web Application Development",
        "API Design & Integration",
        "Database Architecture",
        "Performance Optimization",
        "Testing & Quality Assurance",
        "Maintenance & Support"
      ],
      technologies: ["React", "Node.js", "Python", "JavaScript", "TypeScript", "MongoDB"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Cloud Engineering / Integration",
      description: "Transform your infrastructure with expert cloud solutions. We help businesses migrate, optimize, and scale their operations in the cloud efficiently and securely.",
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f",
      icon: <Cloud className="w-8 h-8" />,
      features: [
        "Cloud Migration Strategy",
        "Infrastructure as Code",
        "DevOps Implementation",
        "Cost Optimization",
        "Security & Compliance",
        "24/7 Monitoring & Support"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
      gradient: "from-purple-500 to-pink-500"
    },    
    {
      id: 3,
      title: "General Consulting Services",
      description: "Not sure yet? Book a consultation where we can figure out what you need.",
      image: "",
      icon: <PhoneCall className="w-8 h-8" />,
      features: [
        "Discovery call",
        "Requirements gathering",
        "Determine what is needed for your purposes"
      ],
      technologies: ["Microsoft Teams", "Zoom", "FaceTime", "Google Meets", "iMessage", "Email"],
      gradient: "from-purple-500 to-pink-500"
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
    <section id="services" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From custom software development to cloud consulting, we provide comprehensive solutions that drive your business forward.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}
            >
              {/* Service Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-40`}></div>
                    
                    {/* Floating Icon */}
                    <div className="absolute top-6 left-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${service.gradient} text-white shadow-lg`}>
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-cyan-400">What We Offer:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle size={16} className="text-cyan-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700/50 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-gray-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group bg-gradient-to-r ${service.gradient} text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-500/25`}
                  >
                    <span className="flex items-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Additional Expertise
            </h3>
            <p className="text-gray-300">
              We also offer specialized services to meet your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: "Mobile Development",
                description: "Native and cross-platform mobile applications"
              },
              {
                icon: <Database className="w-6 h-6" />,
                title: "Data Analytics",
                description: "Transform data into actionable business insights"
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "API Integration",
                description: "Seamless third-party service integrations"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-3">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
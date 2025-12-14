import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code, Cloud, Zap, Shield, Smartphone, Database, Cpu, Globe, BookOpen, Phone } from 'lucide-react';

const CollapsibleServices = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Custom Software Development',
      icon: <Code className="w-6 h-6" />,
      shortDesc: 'Tailored software solutions that solve your unique business challenges',
      fullDesc: 'We build custom web and mobile applications from the ground up, designed specifically for your business needs. Whether you need a customer portal, internal tool, or a complete platform, we handle everything from architecture to deployment.',
      offerings: [
        'Full-stack Web Applications (React, Node.js, Python)',
        'Progressive Web Apps (PWAs)',
        'RESTful API Design & Development',
        'Database Design & Optimization (SQL & NoSQL)',
        'Real-time Features (WebSockets, Live Updates)',
        'Payment Gateway Integration (Stripe, PayPal)',
        'Third-party API Integrations',
        'Automated Testing & CI/CD Setup'
      ],
      pricing: 'Starting at $5,000 per project',
      timeline: '4-12 weeks depending on complexity',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      id: 2,
      title: 'Cloud Engineering & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      shortDesc: 'Scalable, secure, and cost-effective cloud infrastructure',
      fullDesc: 'Transform your infrastructure with modern cloud solutions. We help you migrate to the cloud, optimize costs, implement DevOps practices, and ensure your systems are secure, scalable, and reliable.',
      offerings: [
        'AWS/Azure/GCP Cloud Architecture',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Container Orchestration (Docker, Kubernetes)',
        'CI/CD Pipeline Setup (GitHub Actions, Jenkins)',
        'Cloud Migration Strategy & Execution',
        'Auto-scaling & Load Balancing',
        'Monitoring & Alerting (DataDog, CloudWatch)',
        'Cost Optimization & Resource Management'
      ],
      pricing: 'Starting at $3,000/month retainer',
      timeline: 'Ongoing support with 2-4 week initial setup',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Business Process Automation',
      icon: <Zap className="w-6 h-6" />,
      shortDesc: 'Automate repetitive tasks and streamline operations',
      fullDesc: 'Eliminate manual work and reduce errors by automating your business processes. From data entry to report generation, we identify automation opportunities and implement solutions that save time and money.',
      offerings: [
        'Workflow Automation (Zapier, Make, Custom)',
        'Data Processing & ETL Pipelines',
        'Email Automation & Notification Systems',
        'Report Generation & Scheduling',
        'Document Processing & OCR',
        'CRM & Marketing Automation',
        'Inventory & Order Management',
        'Custom Internal Tools & Dashboards'
      ],
      pricing: 'Starting at $2,000 per automation project',
      timeline: '1-6 weeks per project',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      title: 'AI & Machine Learning Integration',
      icon: <Cpu className="w-6 h-6" />,
      shortDesc: 'Add intelligence to your applications with AI',
      fullDesc: 'Leverage cutting-edge AI technology to enhance your products. From chatbots to predictive analytics, we integrate AI solutions that provide real value to your business and customers.',
      offerings: [
        'AI Chatbots & Virtual Assistants',
        'Natural Language Processing (NLP)',
        'Computer Vision & Image Recognition',
        'Predictive Analytics & Forecasting',
        'Recommendation Systems',
        'Sentiment Analysis',
        'LLM Integration (GPT, Claude, Gemini)',
        'Custom ML Model Training & Deployment'
      ],
      pricing: 'Starting at $4,000 per integration',
      timeline: '3-8 weeks depending on complexity',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'Technical Consulting & Strategy',
      icon: <Globe className="w-6 h-6" />,
      shortDesc: 'Expert guidance for your technology decisions',
      fullDesc: 'Not sure what you need? We provide strategic technical consulting to help you make informed decisions about technology investments, architecture choices, and development roadmaps.',
      offerings: [
        'Technology Stack Assessment & Recommendations',
        'System Architecture Review',
        'Code Audits & Performance Analysis',
        'Security Audits & Vulnerability Assessment',
        'Scalability Planning',
        'Technical Due Diligence for M&A',
        'Team Training & Knowledge Transfer',
        'Project Scoping & Estimation'
      ],
      pricing: '$150-250/hour or project-based pricing',
      timeline: 'Flexible, typically 1-4 weeks',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'Mobile App Development',
      icon: <Smartphone className="w-6 h-6" />,
      shortDesc: 'Native and cross-platform mobile applications',
      fullDesc: 'Build powerful mobile apps that delight users. We develop both iOS and Android applications using modern frameworks, ensuring high performance and seamless user experience.',
      offerings: [
        'Cross-platform Development (React Native, Flutter)',
        'Native iOS Development (Swift)',
        'Native Android Development (Kotlin)',
        'Mobile UI/UX Design',
        'App Store Optimization & Publishing',
        'Push Notifications & In-App Messaging',
        'Offline-First Architecture',
        'Mobile Backend & API Development'
      ],
      pricing: 'Starting at $8,000 per platform',
      timeline: '8-16 weeks depending on features',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 7,
      title: 'Data Analytics & Business Intelligence',
      icon: <Database className="w-6 h-6" />,
      shortDesc: 'Transform data into actionable business insights',
      fullDesc: 'Make data-driven decisions with powerful analytics solutions. We build custom dashboards, reports, and data pipelines that help you understand your business and identify opportunities.',
      offerings: [
        'Custom Dashboard Development',
        'Data Warehouse Design & Implementation',
        'ETL Pipeline Development',
        'Business Intelligence (BI) Tools Setup',
        'Data Visualization (Charts, Graphs, Maps)',
        'KPI Tracking & Reporting',
        'Real-time Analytics',
        'Data Migration & Integration'
      ],
      pricing: 'Starting at $4,000 per project',
      timeline: '4-10 weeks depending on scope',
      gradient: 'from-teal-500 to-blue-500'
    },
    {
      id: 8,
      title: 'Security & Compliance',
      icon: <Shield className="w-6 h-6" />,
      shortDesc: 'Protect your business with robust security measures',
      fullDesc: 'Ensure your applications and infrastructure are secure and compliant. We implement security best practices, conduct audits, and help you meet regulatory requirements.',
      offerings: [
        'Security Audits & Penetration Testing',
        'GDPR & CCPA Compliance Implementation',
        'Authentication & Authorization (OAuth, SAML)',
        'Data Encryption (At Rest & In Transit)',
        'SSL/TLS Certificate Management',
        'Security Monitoring & Incident Response',
        'Vulnerability Scanning & Remediation',
        'Security Training for Teams'
      ],
      pricing: 'Starting at $3,000 per audit',
      timeline: '2-6 weeks depending on scope',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      id: 9,
      title: 'Mentorship & Training Programs',
      icon: <BookOpen className="w-6 h-6" />,
      shortDesc: 'Personalized coding education for youth and adults',
      fullDesc: 'Whether you are a student exploring tech or an adult switching careers, we offer personalized mentorship and training programs designed to help you succeed in software development.',
      offerings: [
        'One-on-one Coding Mentorship (Youth 12-18)',
        'Career Transition Bootcamps (Adults)',
        'Project-based Learning Programs',
        'Interview Preparation & Resume Review',
        'Portfolio Development Guidance',
        'Programming Fundamentals (Python, JavaScript)',
        'Web Development (HTML, CSS, React)',
        'Problem-solving & Algorithm Training'
      ],
      pricing: '$75-150/hour or package pricing',
      timeline: 'Flexible scheduling, ongoing programs',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      id: 10,
      title: 'Free Discovery Consultation',
      icon: <Phone className="w-6 h-6" />,
      shortDesc: 'Not sure what you need? Let us figure it out together',
      fullDesc: 'Book a free 30-minute consultation where we will discuss your goals, challenges, and explore how technology can help your business or career. No obligations, just honest advice.',
      offerings: [
        'Requirements Gathering & Analysis',
        'Technology Recommendations',
        'Project Scoping & Estimation',
        'Roadmap Planning',
        'Q&A Session',
        'Next Steps Discussion'
      ],
      pricing: 'FREE',
      timeline: '30-minute call',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="w-full bg-slate-800/50 rounded-2xl border border-slate-700 p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Our Service Offerings
          </span>
        </h3>
        <p className="text-slate-400">Click on any service to learn more about what we offer</p>
      </div>

      <div className="space-y-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="border border-slate-700 rounded-xl overflow-hidden bg-slate-900/50"
          >
            {/* Service Header */}
            <button
              onClick={() => toggleService(service.id)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-800/50 transition-colors duration-300"
              data-testid={`service-toggle-${service.id}`}
            >
              <div className="flex items-center space-x-4 flex-1">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${service.gradient} text-white`}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-1">{service.title}</h4>
                  <p className="text-sm text-slate-400">{service.shortDesc}</p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: expandedService === service.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-slate-400" size={24} />
              </motion.div>
            </button>

            {/* Service Details */}
            <AnimatePresence>
              {expandedService === service.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-slate-700"
                >
                  <div className="p-5 space-y-6">
                    {/* Full Description */}
                    <p className="text-slate-300 leading-relaxed">{service.fullDesc}</p>

                    {/* Offerings List */}
                    <div>
                      <h5 className="text-white font-semibold mb-3">What is Included:</h5>
                      <div className="grid md:grid-cols-2 gap-2">
                        {service.offerings.map((offering, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-start space-x-2"
                          >
                            <div className="mt-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                            </div>
                            <span className="text-sm text-slate-400">{offering}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing and Timeline */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-700">
                      <div className="flex-1">
                        <h5 className="text-emerald-400 font-semibold mb-1">Pricing</h5>
                        <p className="text-slate-300">{service.pricing}</p>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-teal-400 font-semibold mb-1">Timeline</h5>
                        <p className="text-slate-300">{service.timeline}</p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`inline-block px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-full transition-all duration-300 shadow-lg`}
                      data-testid={`service-cta-${service.id}`}
                    >
                      Get Started with {service.title}
                    </motion.a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollapsibleServices;

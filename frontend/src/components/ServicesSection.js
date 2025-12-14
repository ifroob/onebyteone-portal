import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const ServicesSection = () => {
  const [expandedRows, setExpandedRows] = useState({});

  const academyServices = [
    {
      id: 'tech-clarity-b2c',
      name: 'Tech Clarity Session',
      price: '$0 · 30 Min.',
      value: 'Zero-friction initial consultation to triage leads and map out the user\'s best path.',
      icon: '🎯'
    },
    {
      id: 'tech-jumpstart',
      name: 'The 7-Day Tech Jumpstart',
      price: '$149',
      value: 'Structured 7-day custom action checklist and curated resources to kickstart their tech journey fast.',
      icon: '🚀'
    },
    {
      id: 'shiplab',
      name: 'Project ShipLab Accelerator',
      price: '$249',
      value: 'Portfolio Builder. Includes hosted GitHub Repo, live kickoff, and interview-ready video walkthrough for a real project.',
      icon: '🎨'
    },
    {
      id: 'career-sprint',
      name: 'Career Launch 6-Week SPRINT',
      price: '$499',
      value: 'Premium, personalized 6-week career launch plan with weekly check-ins, job hunt strategy, and mock interviews.',
      icon: '💼'
    },
    {
      id: 'power-hour-b2c',
      name: 'Developer Power Hour Bundle',
      price: '$75/hr · Bundle: 3 sessions for $179',
      value: 'On-demand access to a senior engineer for code review, career advice, and project planning.',
      icon: '⚡'
    }
  ];

  const consultingServices = [
    {
      id: 'tech-clarity-b2b',
      name: 'Tech Clarity Session',
      price: '$0 · 30 Min.',
      value: 'Zero-friction initial consultation to qualify business needs and scope potential projects.',
      icon: '🎯'
    },
    {
      id: 'power-hour-b2b',
      name: 'Developer Power Hour Bundle',
      price: '$75/hr · Bundle: 3 sessions for $179',
      value: 'Quick, budget-friendly access for founders/managers needing one-off technical advice or strategy validation.',
      icon: '⚡'
    },
    {
      id: 'launchpad-discovery',
      name: 'LaunchPad: Technical Scope & Discovery',
      price: '$699 (Fixed Fee)',
      value: 'The Plan, Not the Build. A fixed-scope deliverable providing a complete Technical Spec, Architecture Diagram, and Risk Assessment.',
      icon: '📋'
    },
    {
      id: 'launchpad-mvp',
      name: 'LaunchPad: MVP Build & Deployment',
      price: 'Starting at $3,500+ (Project/Quote Based)',
      value: 'The custom build service for Minimal Viable Products (MVPs), designed for clients who successfully completed the Discovery Phase.',
      icon: '🏗️'
    },
    {
      id: 'retainer',
      name: 'Strategic Retainer Partnership',
      price: 'Starting at $2,500+ / Month',
      value: 'Ongoing technical partnership providing dedicated fractional CTO/Engineering Lead support and capacity.',
      icon: '🤝'
    }
  ];

  const toggleRow = (id) => {
    setExpandedRows(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const ServiceTable = ({ title, services, icon: Icon, gradient }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-3 rounded-xl bg-gradient-to-r ${gradient} shadow-lg`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-white">{title}</h3>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`bg-gradient-to-r ${gradient}`}>
                <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                  Product Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                  Core Value Proposition
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold text-white uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {services.map((service, index) => (
                <motion.tr
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="hover:bg-slate-700/50 transition-colors duration-300"
                  data-testid={`service-row-${service.id}`}
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{service.icon}</span>
                      <span className="font-semibold text-white">{service.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-cyan-400 font-bold whitespace-nowrap">{service.price}</span>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-slate-300 leading-relaxed">{service.value}</p>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${gradient} text-white font-semibold rounded-full text-sm transition-all duration-300 shadow-lg hover:shadow-xl`}
                      data-testid={`service-cta-${service.id}`}
                    >
                      Get Started
                      <ExternalLink size={14} />
                    </motion.a>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-4">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden"
            data-testid={`service-card-${service.id}`}
          >
            {/* Card Header */}
            <button
              onClick={() => toggleRow(service.id)}
              className="w-full p-5 flex items-center justify-between hover:bg-slate-700/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 flex-1">
                <span className="text-2xl">{service.icon}</span>
                <div className="text-left">
                  <h4 className="font-semibold text-white text-sm mb-1">{service.name}</h4>
                  <p className="text-cyan-400 font-bold text-sm">{service.price}</p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: expandedRows[service.id] ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {expandedRows[service.id] ? (
                  <ChevronUp className="text-slate-400" size={20} />
                ) : (
                  <ChevronDown className="text-slate-400" size={20} />
                )}
              </motion.div>
            </button>

            {/* Card Content */}
            {expandedRows[service.id] && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-slate-700 p-5 space-y-4"
              >
                <div>
                  <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Core Value Proposition
                  </h5>
                  <p className="text-slate-300 text-sm leading-relaxed">{service.value}</p>
                </div>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r ${gradient} text-white font-semibold rounded-full text-sm transition-all duration-300 shadow-lg`}
                >
                  Get Started
                  <ExternalLink size={14} />
                </motion.a>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Whether you are launching your tech career or scaling your business, we have the right solution for you.
          </p>
        </motion.div>

        {/* Academy Services Table */}
        <ServiceTable
          title="📈 OneByteOne ACADEMY (B2C Focus)"
          services={academyServices}
          icon={GraduationCap}
          gradient="from-violet-500 to-purple-600"
        />

        {/* Consulting Services Table */}
        <ServiceTable
          title="🛠️ OneByteOne CONSULTING (B2B Focus)"
          services={consultingServices}
          icon={Briefcase}
          gradient="from-cyan-500 to-blue-600"
        />

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-violet-500/10 to-cyan-500/10 rounded-2xl border border-violet-500/30 p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Not Sure Which Service Is Right for You?
            </h3>
            <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">
              Book a free Tech Clarity Session and let us help you find the perfect solution for your goals.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-500 to-cyan-500 text-white font-bold rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Schedule Free Consultation
              <ExternalLink size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
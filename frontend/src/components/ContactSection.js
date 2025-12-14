import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check, ExternalLink, PersonStanding, Instagram } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Project details are required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide more details (at least 10 characters)';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', message: '' });
    setErrors({});
  };

  const contactInfo = [
    {
      icon: <PersonStanding className="w-6 h-6" />,
      label: "Founder",
      value: "Brian Ta",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "onebyteone.solutions.llc@gmail.com",
      href: "mailto:onebyteone.solutions.llc@gmail.com"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Follow us on Instagram!",
      value: "@one.byte.one",
      href: ""
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Fort Worth, TX",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-obo-dark via-obo-darker to-obo-dark relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643"
          alt="Contact Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-obo-dark/95 to-obo-darker/95"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Get In Touch
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto font-light">
            Ready to transform your ideas into reality? Let's discuss your project and see how we can help your business grow.
          </p>
        </motion.div>

        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="hidden">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Start Your Project
                </h3>
                <p className="text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 bg-obo-darker/50 backdrop-blur-sm border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.name 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                          : 'border-slate-600 focus:border-obo-primary focus:ring-obo-primary/20'
                      }`}
                      placeholder="John Doe"
                      data-testid="contact-name-input"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 bg-obo-darker/50 backdrop-blur-sm border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                          : 'border-slate-600 focus:border-obo-primary focus:ring-obo-primary/20'
                      }`}
                      placeholder="john@company.com"
                      data-testid="contact-email-input"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-obo-darker/50 backdrop-blur-sm border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-obo-primary focus:ring-2 focus:ring-obo-primary/20 transition-all duration-300"
                    placeholder="Your Company"
                    data-testid="contact-company-input"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 bg-obo-darker/50 backdrop-blur-sm border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                      errors.message 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                        : 'border-slate-600 focus:border-obo-primary focus:ring-obo-primary/20'
                    }`}
                    placeholder="Tell us about your project, goals, and timeline..."
                    data-testid="contact-message-input"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-obo-primary to-obo-accent hover:from-obo-accent hover:to-obo-primary text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-obo-primary/25 flex items-center justify-center space-x-2"
                  disabled={isSubmitted}
                  data-testid="contact-submit-button"
                >
                  {isSubmitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Contact Information
              </h3>
              <p className="text-gray-300 text-sm font-light">
                Prefer to reach out directly? Use any of the methods below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-center space-x-4 p-4 bg-obo-darker/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-obo-primary/50 transition-all duration-300"
                  data-testid={`contact-info-${index}`}
                >
                  <div className="text-obo-primary group-hover:text-obo-accent transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-light">{item.label}</div>
                    <div className="text-white font-medium text-sm group-hover:text-obo-accent transition-colors duration-300">
                      {item.value}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-5 bg-gradient-to-r from-obo-primary/10 to-obo-accent/10 backdrop-blur-sm rounded-xl border border-obo-primary/20">
              <h4 className="text-base font-semibold text-white mb-3">
                Why Choose onebyteone?
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <Check size={14} className="text-obo-accent flex-shrink-0" />
                  <span className="text-sm font-light">24/7 Support & Maintenance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check size={14} className="text-obo-accent flex-shrink-0" />
                  <span className="text-sm font-light">Agile Development Process</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check size={14} className="text-obo-accent flex-shrink-0" />
                  <span className="text-sm font-light">Transparent Communication</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check size={14} className="text-obo-accent flex-shrink-0" />
                  <span className="text-sm font-light">Scalable Solutions</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      
      
      </div>
    </section>
  );
};

export default ContactSection;
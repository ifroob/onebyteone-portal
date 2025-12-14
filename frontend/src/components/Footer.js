import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Team', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' }
    ],
    services: [
      { name: 'Custom Development', href: '#services' },
      { name: 'Cloud Consulting', href: '#services' },
      { name: 'API Integration', href: '#services' },
      { name: 'Support', href: '#contact' }
    ],
    projects: [
      { name: 'CRM System', href: '#projects' },
      { name: 'AI Health App', href: '#projects' },
      { name: 'Portfolio', href: '#projects' },
      { name: 'Case Studies', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/onebyteone', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/onebyteone', label: 'LinkedIn' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:onebyteone.solutions.llc@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gradient-to-br from-obo-dark via-obo-darker to-obo-dark border-t border-slate-700/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold bg-gradient-to-r from-obo-primary to-obo-accent bg-clip-text text-transparent mb-3">
                OneByteOne
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-md text-sm font-light">
                Helping people and businesses with software solutions one byte at a time. 
                We transform ideas into scalable, innovative applications that drive success.
              </p>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-base font-semibold text-white">Stay Updated</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm bg-obo-darker/50 backdrop-blur-sm border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-obo-primary focus:ring-2 focus:ring-obo-primary/20 transition-all duration-300"
                  data-testid="newsletter-email-input"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 text-sm bg-gradient-to-r from-obo-primary to-obo-accent text-white font-medium rounded-lg hover:from-obo-accent hover:to-obo-primary transition-all duration-300"
                  data-testid="newsletter-subscribe-button"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-base font-semibold text-white">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-obo-darker/50 backdrop-blur-sm rounded-lg border border-slate-700/50 text-gray-300 hover:text-obo-accent hover:border-obo-primary/50 transition-all duration-300"
                    data-testid={`social-link-${social.label.toLowerCase()}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-base font-semibold text-white capitalize">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 text-sm font-light hover:text-obo-accent transition-colors duration-300 hover:underline"
                      data-testid={`footer-link-${category}-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700/50 bg-obo-dark/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © 2025 OneByteOne. All rights reserved. Made with ❤️ for the future of software.
            </motion.div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group p-3 bg-gradient-to-r from-obo-primary to-obo-accent text-white rounded-full shadow-lg hover:shadow-obo-primary/25 transition-all duration-300"
              aria-label="Back to top"
              data-testid="back-to-top-button"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
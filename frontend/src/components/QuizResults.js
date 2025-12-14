import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Sparkles, ArrowRight } from 'lucide-react';

const QuizResults = ({ result, onRetake }) => {
  // Determine recommended services based on quiz type
  const getRecommendedServices = () => {
    if (result.quiz_type === 'youth') {
      return [
        {
          name: 'Tech Clarity Session',
          price: 'FREE',
          description: 'Start with a free 30-min session to map out your tech journey',
          link: '#contact'
        },
        {
          name: 'The 7-Day Tech Jumpstart',
          price: '$149',
          description: 'Get a structured action plan to kickstart your coding journey',
          link: '#contact'
        },
        {
          name: 'Project ShipLab Accelerator',
          price: '$249',
          description: 'Build a portfolio project with GitHub repo and video walkthrough',
          link: '#contact'
        }
      ];
    } else if (result.quiz_type === 'adult') {
      return [
        {
          name: 'Tech Clarity Session',
          price: 'FREE',
          description: 'Explore your best path into tech in a free 30-min consultation',
          link: '#contact'
        },
        {
          name: 'Career Launch 6-Week SPRINT',
          price: '$499',
          description: 'Personalized career launch with weekly check-ins and interview prep',
          link: '#contact'
        },
        {
          name: 'Developer Power Hour Bundle',
          price: '3 sessions for $179',
          description: 'Get expert guidance on your code and career strategy',
          link: '#contact'
        }
      ];
    } else {
      // business quiz
      return [
        {
          name: 'Tech Clarity Session',
          price: 'FREE',
          description: 'Free 30-min consultation to qualify your business needs',
          link: '#contact'
        },
        {
          name: 'LaunchPad: Technical Discovery',
          price: '$699',
          description: 'Get a complete technical spec and architecture diagram',
          link: '#contact'
        },
        {
          name: 'Strategic Retainer Partnership',
          price: 'From $2,500/month',
          description: 'Ongoing fractional CTO/Engineering support for your business',
          link: '#contact'
        }
      ];
    }
  };

  const recommendedServices = getRecommendedServices();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      {/* Results Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-obo-darker to-obo-dark rounded-3xl p-6 md:p-8 border border-obo-primary/30 shadow-2xl mb-8"
      >
        {/* Trophy Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-gradient-to-r from-obo-primary to-obo-accent p-4 rounded-full">
            <Trophy className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        {/* Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-6"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">
            {result.total_score}/{result.max_score}
          </h2>
          <p className="text-slate-400 text-lg">Assessment Score</p>
        </motion.div>

        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-6"
        >
          <div className="inline-block px-6 py-3 bg-obo-primary/20 border-2 border-obo-primary rounded-full">
            <h3 className="text-2xl md:text-3xl font-bold text-obo-accent">
              {result.result_category}
            </h3>
          </div>
        </motion.div>

        {/* Result Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-lg text-slate-300 leading-relaxed mb-6 max-w-2xl mx-auto">
            {result.result_message}
          </p>
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-6"
        >
          <div className="bg-gradient-to-r from-obo-primary/10 to-obo-accent/10 rounded-xl p-6 border border-obo-primary/30 mb-6">
            <div className="flex items-center justify-center mb-3">
              <Sparkles className="text-obo-accent mr-2" size={24} />
              <h4 className="text-obo-accent font-bold text-lg">Your Next Step</h4>
            </div>
            <p className="text-white font-semibold text-base mb-4">
              {result.cta_message}
            </p>
            <p className="text-gray-100 text-sm mb-5 max-w-lg mx-auto">
              Message me your results and see if you'd like to explore this avenue further. Let's discuss how we can help you achieve your goals!
            </p>
            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-obo-primary to-obo-accent hover:from-obo-accent hover:to-obo-primary text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-obo-primary/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="book-consultation-button"
            >
              <Calendar size={20} />
              Book Free Tech Clarity Session
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Recommended Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mb-8"
      >
        <h3 className="text-2xl font-bold text-white mb-4 text-center">
          Recommended for You
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {recommendedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="bg-obo-darker/50 backdrop-blur-sm rounded-xl border border-slate-700 p-5 hover:border-obo-primary/50 transition-all duration-300"
            >
              <div className="mb-3">
                <h4 className="text-white font-semibold mb-1">{service.name}</h4>
                <p className="text-obo-accent font-bold text-lg">{service.price}</p>
              </div>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <motion.a
                href={service.link}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToContact();
                }}
                className="inline-flex items-center gap-2 text-obo-primary hover:text-obo-accent font-semibold text-sm transition-colors"
                whileHover={{ x: 5 }}
              >
                Learn More
                <ArrowRight size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* View All Services Link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mb-6"
      >
        <button
          onClick={scrollToServices}
          className="text-slate-400 hover:text-obo-accent transition-colors font-medium"
        >
          View All Academy & Consulting Services →
        </button>
      </motion.div>

      {/* Retake Quiz */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="text-center"
      >
        <button
          onClick={onRetake}
          className="text-slate-500 hover:text-slate-400 transition-colors text-sm underline"
          data-testid="retake-quiz-button"
        >
          Take a different quiz
        </button>
      </motion.div>
    </div>
  );
};

export default QuizResults;
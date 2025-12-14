import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Mail, Send, CheckCircle, XCircle } from 'lucide-react';
import axios from 'axios';

const QuizResults = ({ result, onRetake }) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const backendUrl = process.env.REACT_APP_BACKEND_URL || '';

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await axios.post(`${backendUrl}/api/contact`, {
        ...formData,
        quiz_id: result.id
      });
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent(`Following up on ${result.result_category} Quiz Result`);
    const body = encodeURIComponent(`Hi,\n\nI just completed the ${result.quiz_type} quiz and received the "${result.result_category}" result.\n\nI'd love to discuss next steps!\n\nBest regards`);
    window.location.href = `mailto:brian@onebyteone.dev?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      {/* Results Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 md:p-10 border border-emerald-500/30 shadow-2xl mb-8"
      >
        {/* Trophy Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-4 rounded-full">
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
            {result.total_score} Points
          </h2>
          <p className="text-slate-400">Your Assessment Score</p>
        </motion.div>

        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-6"
        >
          <div className="inline-block px-6 py-3 bg-emerald-500/20 border-2 border-emerald-500 rounded-full">
            <h3 className="text-2xl md:text-3xl font-bold text-emerald-400">
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
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
            {result.result_message}
          </p>
          <div className="bg-slate-700/50 rounded-xl p-6 border border-emerald-500/30">
            <p className="text-base md:text-lg text-emerald-400 font-semibold">
              {result.cta_message}
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
        >
          <motion.button
            onClick={() => setShowContactForm(!showContactForm)}
            className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="show-contact-form-button"
          >
            <Send className="mr-2" size={20} />
            {showContactForm ? 'Hide Contact Form' : 'Get in Touch'}
          </motion.button>

          <motion.button
            onClick={handleEmailClick}
            className="flex items-center justify-center px-8 py-4 border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-semibold rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="email-direct-button"
          >
            <Mail className="mr-2" size={20} />
            Email Directly
          </motion.button>
        </motion.div>

        {/* Retake Quiz */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <button
            onClick={onRetake}
            className="text-slate-400 hover:text-emerald-400 transition-colors underline"
            data-testid="retake-quiz-button"
          >
            Take a different quiz
          </button>
        </motion.div>
      </motion.div>

      {/* Contact Form */}
      {showContactForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Let's Connect!
          </h3>

          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-emerald-500/20 border border-emerald-500 rounded-lg flex items-center"
            >
              <CheckCircle className="text-emerald-400 mr-3" size={24} />
              <span className="text-emerald-400 font-semibold">
                Message sent successfully! We'll be in touch soon.
              </span>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg flex items-center"
            >
              <XCircle className="text-red-400 mr-3" size={24} />
              <span className="text-red-400 font-semibold">
                Something went wrong. Please try again or email directly.
              </span>
            </motion.div>
          )}

          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <label className="block text-slate-400 mb-2 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
                placeholder="Your name"
                data-testid="contact-name-input"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
                placeholder="your@email.com"
                data-testid="contact-email-input"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-2 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                placeholder="Tell us about your goals and how we can help..."
                data-testid="contact-message-input"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                isSubmitting
                  ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-lg'
              }`}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              data-testid="contact-submit-button"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default QuizResults;

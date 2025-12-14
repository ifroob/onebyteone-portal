import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Gamepad2, Briefcase, ArrowRight } from 'lucide-react';

const QuizSelector = ({ onSelectQuiz }) => {
  const quizOptions = [
    {
      id: 'youth',
      title: '🎮 Gamer or Game Changer?',
      subtitle: 'Ages 12-18',
      description: 'Perfect for teens exploring their tech potential',
      icon: Gamepad2,
      color: 'from-obo-secondary to-obo-primary',
      hoverColor: 'hover:from-obo-primary hover:to-obo-accent'
    },
    {
      id: 'adult',
      title: '🧠 Developer Potential Test',
      subtitle: 'Career Switchers',
      description: 'Assess your readiness for a tech career transition',
      icon: Brain,
      color: 'from-obo-primary to-obo-accent',
      hoverColor: 'hover:from-obo-accent hover:to-obo-primary'
    },
    {
      id: 'business',
      title: '💼 Business Efficiency Scorecard',
      subtitle: 'Business Leaders',
      description: 'Evaluate your tech infrastructure and growth potential',
      icon: Briefcase,
      color: 'from-obo-accent to-obo-primary',
      hoverColor: 'hover:from-obo-primary hover:to-obo-secondary'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Choose Your Assessment
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Select the quiz that best matches your situation and discover your personalized tech path
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {quizOptions.map((quiz, index) => {
          const Icon = quiz.icon;
          return (
            <motion.div
              key={quiz.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group"
            >
              <motion.button
                onClick={() => onSelectQuiz(quiz.id)}
                className={`w-full bg-obo-darker/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700 hover:border-obo-primary/50 transition-all duration-300 text-left h-full flex flex-col`}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                data-testid={`quiz-selector-${quiz.id}`}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${quiz.color} mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-obo-accent transition-colors">
                  {quiz.title}
                </h3>
                
                <p className="text-obo-accent text-sm font-semibold mb-3">
                  {quiz.subtitle}
                </p>
                
                <p className="text-slate-400 text-base mb-6 flex-grow">
                  {quiz.description}
                </p>
                
                <div className="flex items-center text-obo-accent font-semibold">
                  <span>Start Assessment</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
                </div>
              </motion.button>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-12"
      >
        <p className="text-slate-500 text-sm">
          Each assessment takes approximately 3-5 minutes to complete
        </p>
      </motion.div>
    </div>
  );
};

export default QuizSelector;
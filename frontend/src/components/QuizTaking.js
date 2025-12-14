import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const QuizTaking = ({ quiz, onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = {
        question_index: currentQuestion,
        selected_option: String.fromCharCode(65 + selectedOption), // A, B, C
        points: quiz.questions[currentQuestion].options[selectedOption].points
      };
      setAnswers(newAnswers);

      if (currentQuestion < quiz.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        onComplete(newAnswers);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1] ? 
        quiz.questions[currentQuestion - 1].options.findIndex(
          opt => opt.points === answers[currentQuestion - 1].points
        ) : null
      );
    }
  };

  const question = quiz.questions[currentQuestion];
  const isLastQuestion = currentQuestion === quiz.questions.length - 1;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <button
          onClick={onBack}
          className="flex items-center text-slate-400 hover:text-emerald-400 transition-colors mb-6"
          data-testid="quiz-back-button"
        >
          <ChevronLeft size={20} />
          <span className="ml-1">Back to Quiz Selection</span>
        </button>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {quiz.title}
        </h2>
        <p className="text-slate-400">{quiz.subtitle}</p>
      </motion.div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-slate-400 mb-2">
          <span>Question {currentQuestion + 1} of {quiz.questions.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700 mb-8"
        >
          <div className="mb-2">
            <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
              {question.category}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-8 leading-relaxed">
            {question.question}
          </h3>

          <div className="space-y-4">
            {question.options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={`w-full p-4 md:p-5 rounded-xl text-left transition-all duration-300 border-2 ${
                  selectedOption === index
                    ? 'bg-emerald-500/20 border-emerald-500 text-white'
                    : 'bg-slate-700/30 border-slate-600 text-slate-300 hover:border-emerald-500/50 hover:bg-slate-700/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-testid={`quiz-option-${index}`}
              >
                <div className="flex items-start">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 mt-0.5 ${
                    selectedOption === index
                      ? 'border-emerald-500 bg-emerald-500'
                      : 'border-slate-500'
                  }`}>
                    {selectedOption === index && (
                      <Check size={16} className="text-white" />
                    )}
                  </div>
                  <span className="flex-1 text-base md:text-lg">{option.text}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center">
        <motion.button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            currentQuestion === 0
              ? 'bg-slate-700/30 text-slate-500 cursor-not-allowed'
              : 'bg-slate-700 text-white hover:bg-slate-600'
          }`}
          whileHover={currentQuestion > 0 ? { scale: 1.05 } : {}}
          whileTap={currentQuestion > 0 ? { scale: 0.95 } : {}}
          data-testid="quiz-previous-button"
        >
          <ChevronLeft size={20} />
          <span className="ml-1">Previous</span>
        </motion.button>

        <motion.button
          onClick={handleNext}
          disabled={selectedOption === null}
          className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            selectedOption === null
              ? 'bg-slate-700/30 text-slate-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-400 hover:to-teal-500 shadow-lg'
          }`}
          whileHover={selectedOption !== null ? { scale: 1.05 } : {}}
          whileTap={selectedOption !== null ? { scale: 0.95 } : {}}
          data-testid="quiz-next-button"
        >
          <span className="mr-1">{isLastQuestion ? 'Get Results' : 'Next'}</span>
          {isLastQuestion ? <Check size={20} /> : <ChevronRight size={20} />}
        </motion.button>
      </div>
    </div>
  );
};

export default QuizTaking;

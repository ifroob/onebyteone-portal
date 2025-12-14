import React, { useState } from 'react';
import { motion } from 'framer-motion';
import QuizSelector from './QuizSelector';
import QuizTaking from './QuizTaking';
import QuizResults from './QuizResults';
import { quizzes } from '../data/quizData';
import { calculateQuizResult } from '../utils/quizCalculator';

const QuizSection = () => {
  const [stage, setStage] = useState('selection'); // 'selection', 'taking', 'results'
  const [selectedQuizId, setSelectedQuizId] = useState(null);
  const [quizResult, setQuizResult] = useState(null);

  const handleSelectQuiz = (quizId) => {
    setSelectedQuizId(quizId);
    setStage('taking');
  };

  const handleQuizComplete = (answers) => {
    try {
      // Calculate results locally without backend
      const result = calculateQuizResult(selectedQuizId, answers);
      setQuizResult(result);
      setStage('results');
    } catch (error) {
      console.error('Error calculating quiz results:', error);
      alert('There was an error calculating your results. Please try again.');
    }
  };

  const handleRetake = () => {
    setStage('selection');
    setSelectedQuizId(null);
    setQuizResult(null);
  };

  const handleBackToSelection = () => {
    setStage('selection');
    setSelectedQuizId(null);
  };

  const selectedQuiz = selectedQuizId ? quizzes[selectedQuizId] : null;

  return (
    <section id="quiz" className="relative min-h-screen bg-gradient-to-b from-obo-darker to-obo-dark py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(7, 155, 185, 0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10">
        {stage === 'selection' && (
          <QuizSelector onSelectQuiz={handleSelectQuiz} />
        )}

        {stage === 'taking' && selectedQuiz && (
          <QuizTaking
            quiz={selectedQuiz}
            onComplete={handleQuizComplete}
            onBack={handleBackToSelection}
          />
        )}

        {stage === 'results' && quizResult && (
          <QuizResults result={quizResult} onRetake={handleRetake} />
        )}
      </div>
    </section>
  );
};

export default QuizSection;

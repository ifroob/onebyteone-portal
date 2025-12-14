import React, { useState } from 'react';
import { motion } from 'framer-motion';
import QuizSelector from './QuizSelector';
import QuizTaking from './QuizTaking';
import QuizResults from './QuizResults';
import { quizzes } from '../data/quizData';
import axios from 'axios';

const QuizSection = () => {
  const [stage, setStage] = useState('selection'); // 'selection', 'taking', 'results'
  const [selectedQuizId, setSelectedQuizId] = useState(null);
  const [quizResult, setQuizResult] = useState(null);

  const backendUrl = process.env.REACT_APP_BACKEND_URL || '';

  const handleSelectQuiz = (quizId) => {
    setSelectedQuizId(quizId);
    setStage('taking');
  };

  const handleQuizComplete = async (answers) => {
    try {
      const response = await axios.post(`${backendUrl}/api/quiz/submit`, {
        quiz_type: selectedQuizId,
        user_name: 'Anonymous',
        user_email: 'anonymous@quiz.com',
        answers: answers
      });

      setQuizResult(response.data);
      setStage('results');
    } catch (error) {
      console.error('Error submitting quiz:', error);
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
    <section id="quiz" className="relative min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.4) 1px, transparent 0)`,
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

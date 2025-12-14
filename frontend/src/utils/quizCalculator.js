// Quiz result calculation logic

const resultCategories = {
  youth: {
    low: {
      category: 'Gamer',
      range: [7, 11],
      message: 'You love gaming and tech, but you might prefer enjoying the final product over building it. That is totally cool! Keep exploring what excites you.',
      ctaMessage: 'Want to explore tech in a fun way? Let us chat about beginner-friendly coding workshops!'
    },
    medium: {
      category: 'Emerging Tech Explorer',
      range: [12, 16],
      message: 'You have solid potential! You show curiosity and problem-solving skills. With the right guidance and practice, you could become a strong developer.',
      ctaMessage: 'Ready to level up your tech skills? Book a free consultation to discuss personalized mentorship!'
    },
    high: {
      category: 'Game Changer',
      range: [17, 21],
      message: 'Wow! You have an exceptional mindset for technology and development. You think like a developer already. With proper training, you could build amazing things!',
      ctaMessage: 'You are a natural! Let us discuss advanced coding programs tailored for young innovators like you!'
    }
  },
  adult: {
    low: {
      category: 'Explorer',
      range: [7, 11],
      message: 'A tech career is possible, but it will require significant effort and mindset shifts. Consider starting with no-code tools or product management roles first.',
      ctaMessage: 'Not sure where to start? Book a free consultation to explore the best tech path for you!'
    },
    medium: {
      category: 'Adapter',
      range: [12, 16],
      message: 'You have good potential for a tech career! You show logical thinking and problem-solving abilities. With structured learning and dedication, you can succeed in development.',
      ctaMessage: 'Ready to transition into tech? Let us create a personalized roadmap for your career switch!'
    },
    high: {
      category: 'Natural Coder',
      range: [17, 21],
      message: 'Excellent! You have the perfect mindset for software development. Your systematic thinking and problem-solving approach will serve you well. You are ready to start your tech journey!',
      ctaMessage: 'You are ready to code! Book a free consultation to fast-track your developer career!'
    }
  },
  business: {
    low: {
      category: 'Optimized',
      range: [7, 11],
      message: 'Your tech infrastructure is in good shape! You have solid systems and processes. Focus on continuous improvement and staying updated with emerging technologies.',
      ctaMessage: 'Stay ahead of the curve! Let us discuss how emerging tech like AI can give you a competitive edge.'
    },
    medium: {
      category: 'Growing',
      range: [12, 16],
      message: 'You have room for improvement! Some processes could be streamlined, and certain systems might need upgrades. Strategic tech investments could significantly boost your efficiency.',
      ctaMessage: 'Ready to optimize your operations? Book a free consultation to identify quick wins and long-term improvements!'
    },
    high: {
      category: 'Opportunity Rich',
      range: [17, 21],
      message: 'Significant opportunity for improvement! Your business is likely losing time, money, and competitive advantage due to outdated systems. But that is great news - small improvements could have massive impact!',
      ctaMessage: 'Let us transform your business! Book a free consultation to discuss immediate efficiency gains and automation opportunities!'
    }
  }
};

export const calculateQuizResult = (quizType, answers) => {
  // Calculate total score
  const totalScore = answers.reduce((sum, answer) => sum + answer.points, 0);
  
  // Determine result category based on score
  const categories = resultCategories[quizType];
  let resultData;
  
  if (totalScore >= categories.high.range[0] && totalScore <= categories.high.range[1]) {
    resultData = categories.high;
  } else if (totalScore >= categories.medium.range[0] && totalScore <= categories.medium.range[1]) {
    resultData = categories.medium;
  } else {
    resultData = categories.low;
  }
  
  return {
    quiz_type: quizType,
    total_score: totalScore,
    max_score: 21,
    result_category: resultData.category,
    result_message: resultData.message,
    cta_message: resultData.ctaMessage,
    percentage: Math.round((totalScore / 21) * 100)
  };
};

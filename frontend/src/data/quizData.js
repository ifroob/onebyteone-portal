export const quizzes = {
  youth: {
    id: 'youth',
    title: '🎮 Gamer or Game Changer?',
    subtitle: 'Ages 12-18',
    description: 'Discover if you have what it takes to become a future tech star!',
    questions: [
      {
        category: 'Patience/Grit',
        question: 'You are stuck on a difficult level in a game for an hour. What do you do?',
        options: [
          { text: 'Watch a YouTube tutorial to get the immediate answer', points: 1 },
          { text: 'Experiment with every possible move until something finally works', points: 3 },
          { text: 'Quit and play a different, easier game', points: 2 }
        ]
      },
      {
        category: 'Logic & Structure',
        question: 'When using a large set of new tools (like in a workshop or digital art software), how do you start?',
        options: [
          { text: 'Just start building and figure out the tools as needed', points: 2 },
          { text: 'Spend 30 minutes organizing the tools so you know what everything is', points: 3 },
          { text: 'Find a blueprint for something easy and copy it exactly', points: 1 }
        ]
      },
      {
        category: 'Problem Solving',
        question: 'Your favorite app crashes during a huge update. What is your reaction?',
        options: [
          { text: 'Find out why it crashed—was it a network or code issue?', points: 3 },
          { text: 'Immediately restart my device and hope it fixes itself', points: 2 },
          { text: 'Delete the app and leave a bad review', points: 1 }
        ]
      },
      {
        category: 'System Thinking',
        question: 'If you could add a feature to your favorite social media app, what would it be?',
        options: [
          { text: 'A new way to sort your friends by activity level', points: 3 },
          { text: 'More fun filters and visual effects', points: 1 },
          { text: 'A different profile color scheme', points: 2 }
        ]
      },
      {
        category: 'Curiosity',
        question: 'When you use a cool, new website, are you more interested in...?',
        options: [
          { text: 'How they got the images to look so good', points: 2 },
          { text: 'How they built the menus and user interface', points: 3 },
          { text: 'How fast the page loaded', points: 1 }
        ]
      },
      {
        category: 'Motivation',
        question: 'Which sounds like the ultimate achievement?',
        options: [
          { text: 'Winning a competition with a huge cash prize', points: 2 },
          { text: 'Building a piece of software that everyone uses', points: 3 },
          { text: 'Getting a lot of followers on social media', points: 1 }
        ]
      },
      {
        category: 'Final Check',
        question: 'You have $100. Do you spend it on...?',
        options: [
          { text: 'A new accessory for your gaming setup', points: 1 },
          { text: 'A course to learn a new digital skill', points: 3 },
          { text: 'Cool new clothes and shoes', points: 2 }
        ]
      }
    ]
  },
  adult: {
    id: 'adult',
    title: '🧠 Your Developer Potential Test',
    subtitle: 'Career Switchers',
    description: 'Assess your readiness for a successful career transition into tech!',
    questions: [
      {
        category: 'Process Thinking',
        question: 'Describe how you would fix a squeaky door hinge:',
        options: [
          { text: 'Ask someone else to handle it, or just live with the squeak', points: 1 },
          { text: 'Inspect the hinge tightness and material before applying lubricant', points: 3 },
          { text: 'Immediately spray WD-40 or oil and hope it works', points: 2 }
        ]
      },
      {
        category: 'Debugging Mindset',
        question: 'You are trying to follow a complex set of instructions for a DIY project and get stuck. What do you do?',
        options: [
          { text: 'Stop, take the project apart, and restart from the beginning', points: 3 },
          { text: 'Get frustrated and throw the instructions away', points: 1 },
          { text: 'Ask a friend who has done it before for the answer', points: 2 }
        ]
      },
      {
        category: 'Risk/Comfort',
        question: 'When learning a new skill, do you prefer to...?',
        options: [
          { text: 'Follow a proven, step-by-step course with clear deadlines', points: 3 },
          { text: 'Jump in and learn only when a problem arises', points: 2 },
          { text: 'Watch hours of free videos until you feel confident enough to start', points: 1 }
        ]
      },
      {
        category: 'Problem Formulation',
        question: 'Which of these business problems sounds most interesting to you?',
        options: [
          { text: 'Finding a way to get more customers', points: 1 },
          { text: 'Building a system that automatically calculates payroll taxes for a small business', points: 3 },
          { text: 'Designing a beautiful marketing campaign', points: 2 }
        ]
      },
      {
        category: 'Learning Style',
        question: 'When starting a complex new task, do you prefer to:',
        options: [
          { text: 'Find an expert and hire them to do it for you', points: 1 },
          { text: 'Jump in and figure things out as you go, using manuals only when stuck', points: 2 },
          { text: 'Read the manual/documentation cover-to-cover first', points: 3 }
        ]
      },
      {
        category: 'Motivation',
        question: 'The primary reason you are considering a career in tech is:',
        options: [
          { text: 'I love solving puzzles and seeing my work immediately functional', points: 3 },
          { text: 'I heard the work-life balance and salary are the best in the job market', points: 1 },
          { text: 'My current industry is declining and I need a change', points: 2 }
        ]
      },
      {
        category: 'Consistency',
        question: 'If you commit to an exercise routine, you are most likely to stick to it by:',
        options: [
          { text: 'Working out at different times each day, whenever you have a moment', points: 1 },
          { text: 'Blocking out the same specific 60 minutes every single day', points: 3 },
          { text: 'Only working out when a friend is available to go with you', points: 2 }
        ]
      }
    ]
  },
  business: {
    id: 'business',
    title: '💼 The Business Efficiency Scorecard',
    subtitle: 'Consulting Leads',
    description: 'Evaluate your business tech infrastructure and identify growth opportunities!',
    questions: [
      {
        category: 'Process Bottlenecks',
        question: 'When a new client is signed, how many different people/systems do you have to manually update or notify?',
        options: [
          { text: '5 or more different hand-offs', points: 3 },
          { text: 'Just one system, and it updates automatically', points: 1 },
          { text: '2-4 hand-offs across different departments', points: 2 }
        ]
      },
      {
        category: 'Tech Debt Risk',
        question: 'If your key business application went down, could you confidently point to a recent backup from the last 24 hours?',
        options: [
          { text: 'We are 100% cloud-hosted and have automated backups', points: 1 },
          { text: "I honestly don't know, I'd have to ask the vendor", points: 3 },
          { text: "Maybe, I'd have to check with our IT manager", points: 2 }
        ]
      },
      {
        category: 'Data Visibility',
        question: 'How long does it take your team to generate a critical, cross-departmental sales report?',
        options: [
          { text: '1-3 business days', points: 2 },
          { text: 'Real-time / Under 1 hour', points: 1 },
          { text: 'We spend a week compiling data from different sources', points: 3 }
        ]
      },
      {
        category: 'Automation',
        question: "What percentage of your team's routine, administrative work is currently automated by software?",
        options: [
          { text: 'Less than 25%', points: 3 },
          { text: '75%+', points: 1 },
          { text: '25-75%', points: 2 }
        ]
      },
      {
        category: 'Integration',
        question: 'Which of these statements about your internal software is true?',
        options: [
          { text: 'All our key systems (CRM, Accounting) talk to each other flawlessly', points: 1 },
          { text: "We have different teams using different software that don't communicate", points: 3 },
          { text: 'We use a few integrations, but they constantly break', points: 2 }
        ]
      },
      {
        category: 'Future Readiness',
        question: 'If you needed to integrate a new major technology (e.g., an AI tool) into your platform, how long would the initial integration take?',
        options: [
          { text: 'A few weeks', points: 1 },
          { text: "We'd probably have to rebuild everything", points: 3 },
          { text: '3-6 months due to legacy system architecture', points: 2 }
        ]
      },
      {
        category: 'Risk Exposure',
        question: 'How many critical business processes rely on a complex spreadsheet only one person in the company knows how to fix?',
        options: [
          { text: 'None or one', points: 1 },
          { text: 'Two to three critical spreadsheets', points: 2 },
          { text: 'Four or more spreadsheets that keep us running', points: 3 }
        ]
      }
    ]
  }
};

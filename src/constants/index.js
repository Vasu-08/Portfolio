import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  azure,
  cplusplus,
  express,
  tailwind,
  nodejs,
  mongodb,
  git,
  priceTracker,
  incomeTracker,
  threejs,
  sob,
  uptroop
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work Experience'
  },
  {
    id: 'projects',
    title: 'Projects'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
];

const services = [
  {
    title: 'Open Source Developer',
    icon: web
  },
  {
    title: 'Frontend Developer',
    icon: mobile
  },
  {
    title: 'Backend Developer',
    icon: backend
  },
  {
    title: 'Bitcoin Developer',
    icon: sob
  }
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Express JS',
    icon: express
  },
  {
    name: 'Redux Toolkit',
    icon: redux
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'Three JS',
    icon: threejs
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'c++',
    icon: cplusplus
  },
  {
    name: 'azure',
    icon: azure
  }
];

const experiences = [
  {
    title: 'Engineering Intern',
    company_name: 'UpTroop',
    icon: uptroop,
    iconBg: '#383E56',
    date: 'March 2023 - May 2023',
    points: [
      'Developed and integrated APIs for advanced statistical analysis, enabling real-time insights for decision-making',
      'Developed and implemented frontend dashboard components using Recharts library, showcasing visualizations tools such as bar and pie charts; improved data analysis capabilities and facilitated decision-making process for the clients.',
      'Skills - Nodejs, ReactJs, Azure, CosmosDB, Javascript, Recharts, Material-UI'
    ]
  },
  {
    title: 'Software Developer',
    company_name: 'Summer of Bitcoin (Bcoin)',
    icon: sob,
    iconBg: '#E6DEDD',
    date: 'May 2023 - Aug 2023',
    points: [
      '45 out of 10k+ applicants chosen for 24 open-source bitcoin organizations all over the world',
      'Spearheaded the integration of output script descriptors within the bcoin organization, successfully rolling out vital RPCs: getdescriptorinfo and deriveaddresses.',
      'Leveraged the bmocha testing framework to conduct rigorous unit testing on both the descriptor module and RPCs, achieving an impressive code coverage of over 90%',
      'Skills - Javascript, Nodejs, Git.'
    ]
  }
];

const projects = [
  {
    name: 'Amazon Price Tracking Chatbot with Whatsapp',
    description:
      'Developed a backend system for tracking and notifying users of price drops for Amazon products. Integrated a WhatsApp chatbot using Twilio API allowing users to submit product URLs for price monitoring.Leveraged the Node-Cron module to update product prices daily at 12 am and notify all users tracking specific products of price reductions.',
    tags: [
      {
        name: 'nodejs',
        color: 'green-text-gradient'
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient'
      },
      {
        name: 'expressjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'nodecron',
        color: 'green-text-gradient'
      }
    ],
    image: priceTracker,
    source_code_link: 'https://github.com/Vasu-08/E-Commerce-Price-Tracker'
  },
  {
    name: 'Income and Expenses Tracker',
    description:
      'Developed a financial tracking application to monitor daily incomes and expenses. Enabled user registration for diverse account types: savings, investments, travel, etc. Each account type supports detailed transaction entries, noting transaction type, amount, category, and date. Provided users with a summarized view of their overall financial status across all account types.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient'
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient'
      }
    ],
    image: incomeTracker,
    source_code_link: 'https://github.com/Vasu-08/income-expenses-project'
  }
];

export {services, technologies, experiences, projects};

// mock data for testing
 
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
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
    icon: creator
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
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
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
    name: 'docker',
    icon: docker
  }
];

const experiences = [
  {
    title: 'Engineering Intern',
    company_name: 'UpTroop',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'March 2023 - May 2023',
    points: [
      'Developed and integrated APIs for advanced statistical analysis, enabling real-time insights for decision-making',
      'Developed and implemented frontend dashboard components using Recharts library, showcasing visualizations tools such as bar and pie charts; improved data analysis capabilities and facilitated decision-making process for the clients.',
      'Skills - Nodejs, ReactJs, Azure, CosmosDB, Javascript, Recharts, Material-UI',
    ]
  },
  {
    title: 'Software Developer',
    company_name: 'Summer of Bitcoin (Bcoin)',
    icon: tesla,
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

const testimonials = [
  {
    testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Vasu proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Vasu does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    testimonial: "After Vasu optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg'
  }
];

const projects = [
  {
    name: 'Amazon Price Tracking Chatbot',
    description: 'Developed a backend system for tracking and notifying users of price drops for Amazon products.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: carrent,
    source_code_link: 'https://github.com/Vasu-08/E-Commerce-Price-Tracker'
  },
  {
    name: 'Job IT',
    description: 'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'restapi',
        color: 'green-text-gradient'
      },
      {
        name: 'twilio',
        color: 'pink-text-gradient'
      }
    ],
    image: jobit,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Trip Guide',
    description: 'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'supabase',
        color: 'green-text-gradient'
      },
      {
        name: 'css',
        color: 'pink-text-gradient'
      }
    ],
    image: tripguide,
    source_code_link: 'https://github.com/'
  }
];

export {services, technologies, experiences, testimonials, projects};

import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'IMG_2908.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://learn.co/alpha-convention-4182/resume', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'a8acc83630561e13abeadbe29416c4de.jpg',
    title: 'Fitness Overload',
    info: 'Web application to create different workouts for everyone to see.',
    info2:
      'UI created and designed with Javascript,HTML and CSS. Developed back-end and API built with Ruby on Rails.',
    url: 'https://thefitnessoverload.netlify.app/',
    repo: 'https://github.com/jokale/workout-js-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'image.jpg',
    title: 'On the Rag',
    info: 'An informative application about periods',
    info2:
      'Built with a React.js frontend framework and Back-end API built with Ruby on Rails. UI created with JavaScript, HTML, CSS, React Bootstrap.',
    url: 'https://ontherag.netlify.app/',
    repo: 'https://github.com/jokale/on-the-rag-frontend-final', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sports-photography-6.jpg',
    title: 'The Sport Thread',
    info:
      'A place where users can create threads pertaining to different sports news and create comments',
    info2:
      'Built with a React.js frontend framework and Back-end API built with Ruby on Rails. Implemented Redux state management tool UI created with JavaScript, HTML, CSS, React Bootstrap.',
    url: '',
    repo: 'https://github.com/jokale/sport-thread-frontend', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'the inkers.png',
    title: 'Thee Inkers',
    info: 'A mock UI for a tattoo parlour',
    info2: 'Built with a React.js frontend framework and CSS',
    url: '',
    repo: 'https://github.com/jokale/mock-up', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'kalemajoanna@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/joanna-e-kalema-a5a5b4136/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jokale',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

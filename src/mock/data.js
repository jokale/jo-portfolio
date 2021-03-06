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
    img: 'FO.png',
    title: 'Fitness Overload',
    info: 'Web application to create different workouts for everyone to see.',
    info2:
      'UI created and designed with Javascript,HTML and CSS. Developed back-end and API built with Ruby on Rails.',
    url: 'https://thefitnessoverload.netlify.app/',
    repo: 'https://github.com/jokale/workout-js-frontend', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'Aa.png',
    title: 'Annaoj Atleir',
    info: 'A mock UI for an artist/gallery',
    info2: 'Built with a React.js frontend framework and CSS, utlising flexbox',
    url: 'https://annaojatleir.netlify.app/',
    repo: 'https://github.com/jokale/artgallery', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'RN.png',
    title: 'To do Application',
    info: 'A to do application mobile application',
    info2: 'Built with a React.native, inlind CSS and  utlising flexbox, not currently live',
    url: 'https://github.com/jokale/TodoAppRN',
    repo: 'https://github.com/jokale/TodoAppRN', // if no repo, the button will not show up
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

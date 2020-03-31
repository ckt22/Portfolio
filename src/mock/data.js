import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi! I am',
  name: 'Kit',
  subtitle: 'And here is my portfolio.',
  cta: 'Check me out!',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilePic.jpg',
  paragraphOne: 'I am a year 3 student in HKUST, majoring in Computer Engineering (CPEG).',
  paragraphTwo:
    'I am highly passionate of technology. Though I have equal interest in all areas of IT, I am more experienced in full-stack software development. ',
  paragraphThree:
    'This page serves as my portfolio for sharing my recent work. Scroll down to learn more!',
  resume: 'https://cktangad.student.ust.hk/resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'Q&A_Customer_Portal_Selected.png',
    title: 'Product Q&A Customer Portal for mysilkway.com',
    info:
      'This Q&A box appears on all SKU pages. Logged in customers may ask a question about the product. Customers can also view published questions and rate them.',
    info2:
      'Front End using HTML5, CSS3, JavaScript, while Back End using GoLang. We also used PostgresSQL for database and Docker for launching the website.',
    url: 'https://www.mysilkway.com/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Q&A_Admin_Portal_Selected.png',
    title: 'Product Q&A Admin Portal for mysilkway.com',
    info:
      'The admin portal handles received Q&As for all SKUs. It supports functions such as publish, unpublish, reply and ignore questions.',
    info2: 'The administrator portal is for internal use and is therefore unavailable to public.',
    // url: 'https://www.mysilkway.com/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'I am more than thrilled for a chat!',
  btn: 'Email me!',
  email: 'cktangad@connect.ust.hk',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/cheuk-kit-tang/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

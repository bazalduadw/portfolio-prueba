import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Humberto Porras Designer', // e.g: 'Name | Developer'
  lang: 'es', // e.g: en, es, fr, jp
  description: 'My Web Site', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is Humberto Porras',
  name: 'Grapich Designer',
  subtitle: ' ',
  cta: 'About me'
};

// ABOUT DATA
export const aboutData = {
  img: 'homero.jpg',
  paragraphOne: 'Im Humberto Porras, designer bla bla bla.',
  paragraphTwo: 'descripcion bla bla bla',
  paragraphThree: 'descripcion', // if no resume, the button will not show up
};

// EXPERIENCE DATA
export const experienceData = [
  {
    company: 'dVolada',
    lapse: '2020-2021',
    job: 'Desarrollador Android',
    desc: 'Creación de app nativa administrativa para la empresa, soporte a sitio web y apps ya existentes.'
  },
]

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    title: 'El Vecino',
    info: 'Descripcion del proyecto',
    info2: '',
    technologies: ['Photoshop', 'Illustrator'],
    images: ['el_vecino_1.jpg', 'el_vecino_3.png', 'el_vecino_4.png', 'el_vecino_5.png', 'el_vecino_6.png'],
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    title: 'Wirt',
    info: 'Descripcion del proyecto',
    info2: 'Mas info',
    technologies: ['Photoshop', 'Illustrator'],
    images: ['wirt_1.png', 'wirt_2.png', 'wirt_3.png'],
    // url: 'https://drive.google.com/file/d/1A6BUL-qArgl5iX56Efk8-Jrnh6jz5NT3/view?usp=sharing',
    // repo: 'https://github.com/arivalencia/PlusVida', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   title: 'Sunset Smash',
  //   info: 'Descripcion del proyecto',
  //   info2: 'Mas info',
  //   technologies: ['Photoshop', 'Illustrator'],
  //   images: ['smash_branding_logo.png', 'smash_branding_1.jpg', 'smash_branding_2.jpg', 'smash_branding_3.jpg'],
  //   // url: 'https://drive.google.com/file/d/1A6BUL-qArgl5iX56Efk8-Jrnh6jz5NT3/view?usp=sharing',
  //   // repo: 'https://github.com/arivalencia/PlusVida', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: 'Envíame un mensaje',
  btn: 'tucorreo@gmail.com',
  email: 'tucorreo@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: '',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: '',
    },
  ],
};


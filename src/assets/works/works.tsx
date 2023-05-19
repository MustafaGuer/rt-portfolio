import Work from "../../models/Work";

import chauffeurservice from '../images/myChauffeurservice.jpg';
import myPage from '../images/hacker_matrix_small.jpg';

export const works: Work[] = [
  {
    id: 'w1',
    short_desc: 'Self hosted Customer Project',
    title: 'myChauffeurservice.de',
    long_desc: `A website for the presentation of a limousine chauffeur service, with the possibility to make online bookings, 
    convenient online payment with the Paypal Api, make callback appointments and much more.`,
    technologies: ['Next JS', 'Redux', 'Tailwind', 'React Bootstrap', 'Google Maps', 'Paypal', 'Nodemailer'],
    github_link: 'https://github.com/MustafaGuer',
    work_link: 'https://mychauffeurservice.de/',
    image: chauffeurservice,
    image_alt: 'MyChauffeurservice Website Preview'
  },
  {
    id: 'w2',
    short_desc: 'Personal Portfolio Page',
    title: 'mustafaguer.com',
    long_desc: `My personal website to introduce me, myself and i. Some of my projects are also linked on the website.`,
    technologies: ['React JS', 'TypeScript', 'Hooks', 'Css Modules', 'React Context Api', 'EmailJS'],
    github_link: 'https://github.com/MustafaGuer/rt-portfolio',
    work_link: 'https://www.mustafaguer.com',
    image: myPage,
    image_alt: 'My Homepage Preview'
  }
]
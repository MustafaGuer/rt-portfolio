import Work from "../../models/Work";

import chauffeurservice from '../images/myChauffeurservice.png';
import myPage from '../images/mypage.png';

export const works: Work[] = [
  {
    id: 'w1',
    short_desc: 'Self hosted Project',
    title: 'myChauffeurservice',
    long_desc: `A website for the presentation of a limousine chauffeur service, with the possibility to make online bookings, 
    convenient online payment with the Paypal Api, make callback appointments and much more.`,
    technologies: ['Next JS', 'Redux', 'Tailwind', 'React Bootstrap', 'Google Maps', 'Paypal', 'Nodemailer'],
    github_link: 'https://github.com/MustafaGuer',
    work_link: 'https://mychauffeurservice.vercel.app/',
    image: chauffeurservice,
    image_alt: 'MyChauffeurservice Website Preview'
  },
  {
    id: 'w2',
    short_desc: 'Portfolio Page',
    title: 'MustafaGuer.com',
    long_desc: `My personal website to introduce myself and show my projects.`,
    technologies: ['React JS', 'TypeScript', 'Hooks', 'Css Modules', 'React Context Api', 'EmailJS'],
    github_link: 'https://github.com/MustafaGuer/rt-portfolio',
    work_link: 'https://mychauffeurservice.vercel.app/',
    image: myPage,
    image_alt: 'My Homepage Preview'
  }
]
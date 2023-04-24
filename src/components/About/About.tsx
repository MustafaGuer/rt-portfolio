import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext";
import TagCloudComponent from "./TagCloudComponent";
import Card from "../UI/Card";
import styles from './About.module.scss';
import profileImg from '../../assets/images/mustafa.jpg';
import hacker from '../../assets/images/hacker.jpg';
import resume from '../../assets/resume/CV.pdf';

const About = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <section id='about' className={`${styles.section} ${theme === 'dark' ? 'bgDark txtDark' : 'bgLight txtLight'}`}>
      <div className={styles.aboutBox}>
        <img className={styles.profileImg} src={profileImg} alt='Profile' />
        <div className={styles.profileBox}>
          <Card rounded>
            <h2>Hello Agent, my name is Mustafa</h2>
            <img src={hacker} alt='Profile' />
            <p>
              I worked as a cab driver for five years. In 2021, I found myself passionate
              about web development and went through an advanced training to become a web developer, specifically in
              JavaScript and Angular. Since then, I've also furthered my education in React and Next.js and am now a
              passionate web developer. I love to continuously learn new technologies and build projects. My experience
              as a cab driver has shown me the importance of listening to other people's needs and finding solutions. As
              a web developer, I strive to incorporate these skills into my work and create user-friendly solutions.
            </p>
            <div className={styles.action}>
              <a href={resume} target='_blank' rel='noopener noreferrer'>Resume</a>
            </div>
          </Card>
        </div>
        <div className={`text-sphere ${styles.sphere}`}>
          <TagCloudComponent />
        </div>
      </div>
    </section>
  );
};

export default About;
import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext";
import TagCloudComponent from "./TagCloudComponent";
import Card from "../UI/Card";
import styles from './About.module.scss'
import profileImg from '../../assets/images/mustafa.jpg'
import hacker from '../../assets/images/hacker.jpg';

const About = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <section id='about' className={`${styles.section} ${theme === 'dark' ? 'bgDark txtDark' : 'bgLight txtLight'}`}>
      <img className={styles.profileImg} src={profileImg} alt='Profile' />
      <div className={styles.profileBox}>
        <Card>
          <h2>Hi, I'm Mustafa.</h2>
          <img src={hacker} alt='Profile' />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore inventore mollitia quasi quisquam
             similique. Ad aliquid consectetur consequuntur delectus doloribus earum id numquam quia repellat tenetur?
             Doloremque exercitationem id recusandae.</p>
        </Card>
      </div>
      <div className={`text-sphere ${styles.sphere}`}>
        <TagCloudComponent />
      </div>
    </section>
  );
};

export default About;
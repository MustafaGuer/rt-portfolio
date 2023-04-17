import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext";

import Card from "../UI/Card";
import styles from './Works.module.scss';
import {works} from "../../assets/works/works";

import ArrowTopRightOnSquare from "../../assets/icons/ArrowTopRightOnSquare";
import githubDark from '../../assets/icons/github-mark.svg';
import githubLight from '../../assets/icons/github-mark-white.svg';

const Works = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <section id={'works'}
             className={`${styles.section} ${theme === 'dark' ? 'bgDark txtDark' : 'bgLight txtLight'}`}>
      <div className={styles.works}>
        <h2>My Works:</h2>
        {works.map((work) => (
          <div key={work.id} className={styles.workItem}>
            <div className={styles.workImgBox}>
              <img src={work.image} alt={work.image_alt} width={150} height={200} />
            </div>
            <div className={styles.workDescription}>
              <h4>{work.short_desc}</h4>
              <h3>{work.title}</h3>
              <Card>
                <p>{work.long_desc}</p>
              </Card>
              <div className={styles.workTechnologies}>
                {work.technologies.map((t) => (<span key={t}>{t}</span>))}
              </div>
              <div className={styles.workLinks}>
                <a href={work.github_link} rel='noreferrer' target='_blank'>
                  {theme === 'light' ? <img src={githubDark} alt='Dark Github Invertocat Logo' /> :
                    <img src={githubLight} alt='Light Github Invertocat Logo' />}
                </a>
                <a href={work.work_link} rel='noreferrer' target='_blank'>
                  <ArrowTopRightOnSquare />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works
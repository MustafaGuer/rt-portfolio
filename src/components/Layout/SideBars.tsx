import {Link} from "react-router-dom";
import github from "../../assets/icons/github-mark-white.svg";
import linkedin from "../../assets/icons/linkedinWhite.svg";
import arrowDown from "../../assets/icons/arrowDown.svg";
import React, {useContext} from "react";
import styles from './SideBars.module.scss';
import {ThemeContext} from "../../context/ThemeContext";

export const SideBars = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <>
      <div className={`${styles.leftContainer} ${theme === 'dark' ? 'txtDark' : 'txtLight'}`}>
        <div>
          <Link to={'https://github.com/MustafaGuer'}>
            <img src={github} alt={'Link to Github Profile'} width={20} />
            {/*<img src={theme === 'dark' ? githubDark : githubLight} alt={'Link to Github Profile'} width={20} />*/}
          </Link>
          <Link to={'https://www.linkedin.com/in/mustafa-gür'}>
            <img src={linkedin} alt={'Link to Linkedin Profile'} width={30} />
            {/*<img src={theme === 'dark' ? linkedinDark : linkedinLight} alt={'Link to Linkedin Profile'} width={30} />*/}
          </Link>
          <div className={`${theme === 'dark' ? 'borderDark' : 'borderLight'}`} />
        </div>
      </div>
      <div className={`${styles.rightContainer} ${theme === 'dark' ? 'txtDark' : 'txtLight'}`}>
        <div>
          <Link to={'mailto:mustafaguer@outlook.com'}>
            mustafaguer@outlook.com
          </Link>
          <div className={`${theme === 'dark' ? 'borderDark' : 'borderLight'}`} />
          <span>scroll down</span>
          <div className={`${theme === 'dark' ? 'borderDark' : 'borderLight'}`} />
          <img src={arrowDown} alt={'Arrow Down'} width={33} />
        </div>
      </div>
    </>
  );
};
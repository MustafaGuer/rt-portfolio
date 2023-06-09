import React, {useContext, useState} from "react";
import {ThemeContext} from "../../context/ThemeContext";

import styles from './MainHeader.module.scss';
import DarkModeIcon from "../../assets/icons/DarkModeIcon";
import LightModeIcon from "../../assets/icons/LightModeIcon";
import {HashLink} from 'react-router-hash-link';

export const MainHeader = () => {
  const {theme, setThemeMode} = useContext(ThemeContext);
  const [ddOpen, setDDOpen] = useState(false);

  const themeHandler = () => {
    setThemeMode(prevTheme => {
      if (prevTheme === 'dark') {
        return 'light';
      } else {
        return 'dark';
      }
    })
  }

  const burgerMenuHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    setDDOpen(prevState => !prevState)
  }

  return (
    <header className={`${styles.header} ${theme === 'dark' ? 'bgDarkGlass txtDark' : 'bgLightGlass txtLight'}`}>
      <div className={styles.navbar}>
        <nav>
          <HashLink smooth to='/#home'><span className={styles.logo}>MG</span></HashLink>
          <ul>
            <li><HashLink smooth to='/#home'>Home</HashLink></li>
            <li><HashLink smooth to='/#about'>About</HashLink></li>
            <li><HashLink smooth to='/#works'>Works</HashLink></li>
            <li><HashLink smooth to='/#contact'>Contact</HashLink></li>
            <li className={styles.switcher}>
              <DarkModeIcon />
              <label>
                <input onChange={themeHandler} type='checkbox' />
                <span></span>
              </label>
              <LightModeIcon />
            </li>
          </ul>
          <div className={styles.hamburger_icon} onClick={burgerMenuHandler}>
            <div
              className={`bar1 ${theme === 'dark' ? 'bgLight' : 'bgDark'} ${ddOpen ? styles.bar1__open : ''}`}></div>
            <div
              className={`bar2 ${theme === 'dark' ? 'bgLight' : 'bgDark'} ${ddOpen ? styles.bar2__open : ''}`}></div>
            <div
              className={`bar3 ${theme === 'dark' ? 'bgLight' : 'bgDark'} ${ddOpen ? styles.bar3__open : ''}`}></div>
          </div>
        </nav>
      </div>
      <div
        className={`${styles.dropdown_menu} ${ddOpen ? styles.open : ''} ${theme === 'dark' ? 'bgDarkGlass' : 'bgLightGlass'}`}>
        {/*<div id='dropdown' className={styles.dropdown_menu}>*/}
        <ul>
          <li><HashLink smooth to='/#home'>Home</HashLink></li>
          <li><HashLink smooth to='/#about'>About</HashLink></li>
          <li><HashLink smooth to='/#works'>Works</HashLink></li>
          <li><HashLink smooth to='/#contact'>Contact</HashLink></li>
          <li className={styles.switcher}>
            <DarkModeIcon />
            <label>
              <input onChange={themeHandler} type='checkbox' />
              <span></span>
            </label>
            <LightModeIcon />
          </li>
        </ul>
      </div>
    </header>
  );
};

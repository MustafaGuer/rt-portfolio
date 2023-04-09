import React, {useContext, useState} from "react";
import {ThemeContext} from "../../context/ThemeContext";

import styles from './MainHeader.module.scss';
import DarkModeIcon from "../../icons/DarkModeIcon";
import LightModeIcon from "../../icons/LightModeIcon";

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
          <h1>MG</h1>
          <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#works'>Works</a></li>
            <li><a href='#contact'>Contact</a></li>
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
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#contact">Contact</a></li>
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

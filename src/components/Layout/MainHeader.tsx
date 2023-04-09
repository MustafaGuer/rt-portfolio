import React, {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext";

import styles from './MainHeader.module.scss';
import '../../styles/hamburger.scss';
import DarkModeIcon from "../../icons/DarkModeIcon";
import LightModeIcon from "../../icons/LightModeIcon";

export const MainHeader = () => {
  const {theme, setThemeMode} = useContext(ThemeContext);

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
    console.log(event.currentTarget.classList.toggle('change'));
  }

  return (
    <>
      <header className={`${styles.header} ${theme === 'dark' ? 'bgDarkGlass txtDark' : 'bgLightGlass txtLight'}`}>
        <h1>MG</h1>
        <nav>
          <ul>
            <li><a href='#about'>About</a></li>
            <li><a href='#work'>Work</a></li>
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
        </nav>
      </header>
    </>
  );
};

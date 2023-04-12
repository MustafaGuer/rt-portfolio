import styles from './Card.module.scss'
import React, {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext";

const Card: React.FC<{ children: React.ReactNode }> = (props) => {
  const {theme} = useContext(ThemeContext);

  return (
    <div
      className={`${styles.card} ${theme === 'dark' ? 'bgLightGlass txtDark shadowDark' : 'bgDarkGlass txtDark shadowLight'}`}>
      {props.children}
    </div>
  );
};

export default Card;
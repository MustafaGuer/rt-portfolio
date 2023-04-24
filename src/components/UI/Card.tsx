import styles from './Card.module.scss'
import React, {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext";

const Card: React.FC<{ children: React.ReactNode, rounded:boolean }> = (props) => {
  const {theme} = useContext(ThemeContext);

  return (
    <div
      className={`${styles.card} ${props.rounded && styles.rounded} ${theme === 'dark' ? 'shadowDark txtDark' : 'shadowLight txtLight'}`}>
      {props.children}
    </div>
  );
};

export default Card;
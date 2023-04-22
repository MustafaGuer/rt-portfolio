import {useContext} from "react";

import ContactForm from "./ContactForm";

import {ThemeContext} from "../../context/ThemeContext";

import styles from './Contact.module.scss';

const Contact = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <section id='contact' className={` ${styles.container} ${theme === 'dark' ? 'bgDark txtDark' : 'bgLight txtLight'}`}>
      <h2>Let's stay in Contact</h2>
      <ContactForm />
    </section>
  );
};

export default Contact;
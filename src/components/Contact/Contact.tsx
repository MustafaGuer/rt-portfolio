import ContactForm from "./ContactForm";

import fd from "../../models/FormData";

import styles from './Contact.module.scss';
import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext";

const Contact = () => {
  const {theme} = useContext(ThemeContext);
  const submitHandler = (fd: fd) => {
    console.log(fd);
  }

  return (
    <section id='contact' className={` ${styles.container} ${theme === 'dark' ? 'bgDark txtDark' : 'bgLight txtLight'}`}>
      <h2>Let's stay in Contact</h2>
      <ContactForm onSubmitHandler={submitHandler} />
    </section>
  );
};

export default Contact;
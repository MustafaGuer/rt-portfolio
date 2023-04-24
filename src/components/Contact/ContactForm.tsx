import React, {FormEvent, useContext, useRef, useState} from "react";

import emailjs from '@emailjs/browser';
import {Comment} from "react-loader-spinner";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Card from "../UI/Card";
import useInput from "../../hooks/useInput";
import styles from './ContactForm.module.scss';
import {ThemeContext} from "../../context/ThemeContext";

const ContactForm: React.FC<{}> = () => {
  const form = useRef<HTMLFormElement>(null);
  const {theme} = useContext(ThemeContext);
  const [isSending, setIsSending] = useState(false);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value: any) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput((value: any) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value));

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageHandler
  } = useInput((value: any) => value.trim() !== '')

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
    formIsValid = true;
  }
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    if (form.current) {
      setIsSending(true);

      emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
        .then(result => {
          toast.success('Email sent! I will contact you soon 😉', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: theme === 'dark' ? 'dark' : 'light'
          });
          setIsSending(false);
        }, error => {
          toast.error('Uups, something went wrong! Please try again or contact me at mustafaguer@outlook.com', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: theme === 'dark' ? 'dark' : 'light'
          });
          setIsSending(false);
        });
    }

    resetNameInput();
    resetEmailInput();
    resetMessageHandler();
  }

  return (
    <Card rounded>
      <form ref={form} onSubmit={submitHandler} className={`${styles.form} ${theme === 'dark' ? 'txtDark' : 'txtLight'}`}>
        <div className={`${styles.control} ${nameInputHasError && styles.invalid}`}>
          <label htmlFor={'name'}>Your Name</label>
          <input
            id={'name'}
            name={'name'}
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
            className={theme === 'dark' ? 'txtDark' : 'txtLight'}
            placeholder={'John Doe'}
          />
          {nameInputHasError && <p className={`${styles['error-text']}`}>Name must not be empty!</p>}
        </div>
        <div className={`${styles.control} ${emailInputHasError && styles.invalid}`}>
          <label htmlFor={'email'}>Your Email</label>
          <input
            id={'email'}
            name={'email'}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
            className={theme === 'dark' ? 'txtDark' : 'txtLight'}
            placeholder={'doe@foo.bar'}
          />
          {emailInputHasError &&
            <p className={`${styles['error-text']}`}>Email must be a valid form! (e.g. info@foo.bar)</p>}
        </div>
        <div className={`${styles.control} ${messageInputHasError && styles.invalid}`}>
          <label htmlFor={'message'}>Your Message</label>
          <textarea
            id={'message'}
            name={'message'}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
            value={enteredMessage}
            rows={3}
            className={theme === 'dark' ? 'txtDark' : 'txtLight'}
            placeholder={'Hi Mustafa, let\'s work together ;)'}
          ></textarea>
          {messageInputHasError && <p className={`${styles['error-text']}`}>Message must not be empty!</p>}
        </div>
        <div className={styles.actions}>
          <button disabled={!formIsValid}>Let's connect
            <Comment
              visible={isSending}
              height={23}
              width={23}
              ariaLabel={'email-sending'}
              backgroundColor={'#014a45'}
              color={'#fff'}
              wrapperStyle={{position: 'absolute', top: '0', right: '0'}}
            />
          </button>
        </div>
      </form>
      <ToastContainer />
    </Card>
  );
};

export default ContactForm;
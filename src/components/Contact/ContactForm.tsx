import React, {FormEvent, useRef} from "react";

import fd from "../../models/FormData";

import Card from "../UI/Card";
import styles from './ContactForm.module.scss';
import useInput from "../../hooks/useInput";

const ContactForm: React.FC<{ onSubmitHandler: (fd: fd) => void }> = (props) => {
  // const nameRef = useRef<HTMLInputElement>(null);
  // const emailRef = useRef<HTMLInputElement>(null);
  // const messageRef = useRef<HTMLTextAreaElement>(null);

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

  if(enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    if(!formIsValid) {
      return;
    }

    const formData: fd = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage
    }

    props.onSubmitHandler(formData);
    resetNameInput();
    resetEmailInput();
    resetMessageHandler();
  }

  return (
    <Card rounded>
      <form onSubmit={submitHandler} className={styles.form}>
        <div className={`${styles.control} ${nameInputHasError && styles.invalid}`}>
          <label htmlFor={'name'}>Your Name</label>
          <input
            id={'name'}
            name={'name'}
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && <p className={`${styles['error-text']}`}>Name must not be empty!</p>}
          {/*<input ref={nameRef} id={'name'} name={'name'} required />*/}
        </div>
        <div className={`${styles.control} ${emailInputHasError && styles.invalid}`}>
          <label htmlFor={'email'}>Your Email</label>
          <input
            id={'email'}
            name={'email'}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailInputHasError &&
            <p className={`${styles['error-text']}`}>Email must be a valid form! (e.g. info@foo.bar)</p>}
          {/*<input ref={emailRef} id={'email'} name={'email'} required />*/}
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
          ></textarea>
          {messageInputHasError && <p className={`${styles['error-text']}`}>Message must not be empty!</p>}
          {/*<textarea ref={messageRef} id={'message'} name={'message'}></textarea>*/}
        </div>
        <div className={styles.actions}>
          <button disabled={!formIsValid}>Send Message</button>
        </div>
      </form>
    </Card>
  );
};

export default ContactForm;
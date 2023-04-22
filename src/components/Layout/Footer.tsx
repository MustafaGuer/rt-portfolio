import github from '../../assets/icons/github-mark-white.svg'
import linkedin from '../../assets/icons/linkedin.svg';
import whatsapp from '../../assets/icons/whatsapp.svg';

import styles from './Footer.module.scss';

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className={`${styles.footer} txtDark`}>
      <div className={styles.legacy}>
        <span className={styles.copy}>
          &copy;
          <time>{year}</time>
          &lt;Mustafa Gür /&gt;
        </span>
        <span>Impressum</span>
        <span>Datenschutzerklärung</span>
      </div>
      <div className={styles.social}>
        <a href='mailto:mustafaguer@outlook.com'>mustafaguer@outlook.com</a>
        <a href='tel:+4917624899531'>+49 176 248 99531</a>
        <div>
          <a
            href='https://www.linkedin.com/in/mustafa-gür'
            target='_blank'
            rel="noreferrer"
          >
            <img src={linkedin} alt='Linkedin Profile' />
          </a>
          <a
            href='https://github.com/MustafaGuer'
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt='Github Profile' />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=4917624899531"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt='Whatsapp Profile' />
          </a>
        </div>
      </div>
    </footer>
  );

};

export default Footer;
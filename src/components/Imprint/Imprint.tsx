import styles from './Imprint.module.scss';
import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext";

const Imprint = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <section className={`${styles.imprint} ${theme === 'dark' ? 'bgDark txtDark' : 'bgLight txtLight'}`}>
      <h1>Impressum</h1>

      <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
      <p>Mustafa G&uuml;r<br />
         Werinherstra&szlig;e 12<br />
         81541 M&uuml;nchen</p>

      <h2>Kontakt</h2>
      <p>Telefon: +49 (0) 176 24 89 99531<br />
         E-Mail: mustafaguer@outlook.com</p>

      <p>Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a></p>
    </section>
  );
};

export default Imprint;
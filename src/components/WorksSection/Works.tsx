import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext";
import styles from './Works.module.scss';
import myChauffeurservice from '../../assets/images/myChauffeurservice.png';

const Works = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <section id={'works'}
             className={`${styles.section} ${theme === 'dark' ? 'bgDark txtDark' : 'bgLight txtLight'}`}>
      <h2>My Works:</h2>
      <div className={styles.works}>
        <div className={styles.workItem}>
          <img src={myChauffeurservice} alt={''} width={150} height={200} />
          <div className={styles.workDescription}>
            <h4>Self hosted Project</h4>
            <h3><i>my</i>Chauffeurservice</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works
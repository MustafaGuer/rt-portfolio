import MatrixBackground from "./MatrixBackground/MatrixBackground";

import styles from './GreetingSection.module.scss';
import Profile from "./Profile/Profile";
import ArrowDownIcon from "../../assets/icons/ArrowDownIcon";

const GreetingSection = () => {

  return (
    <div className={styles.container} id='home'>
      <MatrixBackground />
      <Profile />
      <a href='#about' className={`txtDark ${styles.whoami}`}>
        <span>#whoami</span>
        <ArrowDownIcon color={'#0f0'} />
      </a>
    </div>
  )
}

export default GreetingSection;
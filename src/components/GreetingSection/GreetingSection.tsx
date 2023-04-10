import MatrixBackground from "./MatrixBackground/MatrixBackground";

import styles from './GreetingSection.module.scss';
import Profile from "./Profile/Profile";

const GreetingSection = () => {

  return (
    <div className={styles.container} id='home'>
      <MatrixBackground />
      <Profile />
    </div>
  )
}

export default GreetingSection;
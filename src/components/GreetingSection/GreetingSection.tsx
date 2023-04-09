import MatrixBackground from "./MatrixBackground/MatrixBackground";

import styles from './GreetingSection.module.scss';
import Profile from "./Profile/Profile";

const GreetingSection = () => {

  return (
    <div className={styles.container}>
      <MatrixBackground />
      <Profile />
    </div>
  )
}

export default GreetingSection;
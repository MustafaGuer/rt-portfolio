import MatrixBackground from "./MatrixBackground/MatrixBackground";

import styles from './Greeting.module.scss';
import Profile from "./Profile/Profile";

const Greeting = () => {

  return (
    <section className={styles.container} id='home'>
      <MatrixBackground />
      <Profile />
    </section>
  )
}

export default Greeting;
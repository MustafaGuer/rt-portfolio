import {useState, useEffect} from "react";

import styles from './Profile.module.scss';
import profileImg from '../../../assets/images/mustafa.jpg';

const Profile = () => {
  const [text, setText] = useState('')
  const [fulltext] = useState(
    'Hi, this is Mustafa Gür. Passionate Frontend Developer!'
  )
  const [index, setIndex] = useState(0)
  const [go, setGo] = useState(false);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setGo(true);
    }, 2000)
    if (index < fulltext.length && go) {
      setTimeout(() => {
        setText(text + fulltext[index])
        setIndex(index + 1)
      }, 70)
    }

    return () => {
      clearTimeout(timeout);
    }
  }, [index, go, text, fulltext])

  return <div className={styles.container}>
    <h1>{text}</h1>
    {go && <div className={styles.imageContainer}><img src={profileImg} alt={'Profile'} /></div>}
  </div>
}

export default Profile;
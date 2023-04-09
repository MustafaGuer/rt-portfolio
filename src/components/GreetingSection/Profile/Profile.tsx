import {useState, useEffect} from "react";

import styles from './Profile.module.scss';

const Profile = () => {
  const [text, setText] = useState('')
  const [fulltext, setFulltext] = useState(
    'Hi, this is Mustafa Gür. Passionate Frontend Developer!'
  )
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fulltext.length) {
      setTimeout(() => {
        setText(text + fulltext[index])
        setIndex(index + 1)
      }, 70)
    }
  }, [index])

  return <div className={styles.container}>
    <h1>{text}</h1>
  </div>
}

export default Profile;
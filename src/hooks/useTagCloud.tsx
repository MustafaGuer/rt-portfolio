import {useContext, useEffect, useRef, useState} from "react";
import TagCloud, {TagCloudOptions} from "TagCloud";
import {ThemeContext} from "../context/ThemeContext";

const data = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'Angular',
  'React.js',
  'Redux',
  'MongoDB',
  'Next.js',
  'Github',
  'Git',
  'Linux',
  'Visual Studio Code',
  'WebStorm',
  'Scrum',
  'Bootstrap'
]

export const useTagCloud = () => {
  const {theme} = useContext(ThemeContext)
  const containerRef = useRef(null)
  const [radius, setRadius] = useState(300)

  useEffect(() => {

    const container: any = containerRef.current
    const texts = data
    const options: TagCloudOptions = {
      radius,
      maxSpeed: 'normal',
      initSpeed: 'normal',
      keep: true
    }

    TagCloud(container, texts, options)

    return () => {
      container.innerHTML = '';
    }
  }, [radius])

  useEffect(() => {
    const container: any = containerRef.current
    container.innerHTML = ''
    const texts = data
    const options: TagCloudOptions = {
      radius,
      maxSpeed: 'normal',
      initSpeed: 'normal',
      keep: true
    }

    TagCloud(container, texts, options)
  }, [theme, radius])

  useEffect(() => {
    const calculateRadius = () => {
      const screenWidth = window.innerWidth

      if (screenWidth <= 992) {
        setRadius(150)
      } else {
        setRadius(250)
      }
    }

    calculateRadius()

    window.addEventListener('resize', calculateRadius)

    return () => {
      window.removeEventListener('resize', calculateRadius)
    }
  }, [theme])

  return containerRef
}

import React, {useEffect, useRef} from "react";
import styles from './MatrixBackground.module.scss';

export const MatrixBackground = ({timeout = 50}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const context = canvasRef.current!.getContext('2d')

    const width = document.body.offsetWidth
    const height = document.body.offsetHeight
    canvasRef.current!.width = width
    canvasRef.current!.height = height

    context!.fillStyle = '#000'
    context!.fillRect(0, 0, width, height)

    const columns = Math.floor(width / 20) + 1
    const yPositions = Array.from({length: columns}).fill(0)

    context!.fillStyle = '#000'
    context!.fillRect(0, 0, width, height)

    const matrixEffect = () => {
      context!.fillStyle = '#0001'
      context!.fillRect(0, 0, width, height)

      context!.fillStyle = '#0f0'
      context!.font = '15pt monospace'

      yPositions.forEach((y, index) => {
        const text = String.fromCharCode(Math.random() * 256)
        const x = index * 20
        if (typeof y === "number") {
          context!.fillText(text, x, y)
          if (y > 100 + Math.random() * 10000) {
            yPositions[index] = 0
          } else {
            yPositions[index] = y + 20
          }
        }
      })
    }

    const interval = setInterval(matrixEffect, timeout)
    return () => {
      clearInterval(interval)
    }

  }, [canvasRef, timeout])

  return (
    <div className={styles.container}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default MatrixBackground;
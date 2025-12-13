import clsx from 'clsx'
import { useState } from 'react'
import styles from './burgerMenu.module.css'

export function BurgerMenu() {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <button
      type="button"
      className={
        clsx(
          `flex flex-col justify-between
          px-1 py-1.5
          w-6 h-6`,
          isPressed && styles.pressed,
        )
      }
      onClick={() => setIsPressed(!isPressed)}
    >
      <span className={styles.line} />
      <span className={styles.line} />
      <span className={styles.line} />
    </button>
  )
}

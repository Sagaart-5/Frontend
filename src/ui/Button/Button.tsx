import { FC, ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  variant?: string // light, dark
  extraClass?: string
}

const Button: FC<ButtonProps> = ({
  title,
  variant = 'light',
  extraClass,
  ...ButtonHTMLAttributes
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${extraClass}`}
      {...ButtonHTMLAttributes}
    >
      {title}
    </button>
  )
}

export default Button

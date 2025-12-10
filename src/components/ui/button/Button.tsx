import { Link } from '@tanstack/react-router'
import clsx from 'clsx'

type ButtonVariant = 'contain' | 'text'
type ButtonColor = 'white' | 'black'

interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: ButtonVariant
  color?: ButtonColor
  icon?: React.ComponentType
  children?: React.ReactNode
  to?: string
}

export function Button({
  type = 'button',
  variant = 'contain',
  color = 'black',
  icon: Icon,
  className,
  children,
  to,
  ...props
}: ButtonProps) {
  const cn = clsx(
    `flex justify-center items-center
    w-29 h-10.5
    transition-colors duration-(--duration-button)
    cursor-pointer`,
    variant === 'contain' && color === 'white' && !Icon && 'bg-neutral-100 text-neutral-700 hover:bg-neutral-50',
    variant === 'contain' && color === 'black' && !Icon && 'bg-neutral-900 text-neutral-100 hover:bg-neutral-800',
    variant === 'text' && 'bg-none text-neutral-800 hover:text-neutral-500',
    Icon && 'p-1 w-auto h-auto bg-none',
    className,
  )

  if (to) {
    return (
      <Link to={to} className={cn}>
        {Icon && <Icon />}
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={cn}
      {...props}
    >
      {Icon && <Icon />}
      {children}
    </button>
  )
}

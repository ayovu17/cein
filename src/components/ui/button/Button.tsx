import { Link } from '@tanstack/react-router'
import clsx from 'clsx'

type ButtonVariant = 'contain' | 'text' | 'icon'
type ButtonWidth = 'default' | 'full' | 'fit'
type ButtonSize = 'xs' | 'sm' | 'md'
type ButtonColor = 'white' | 'black' | 'gray'

interface ButtonProps extends React.ComponentProps<'button'> {
  variant: ButtonVariant
  width?: ButtonWidth
  size?: ButtonSize
  color?: ButtonColor
  icon?: React.ComponentType
  children?: React.ReactNode
  to?: string
}

export function Button({
  type = 'button',
  variant,
  width = 'default',
  size = 'md',
  color = 'black',
  icon: Icon,
  className,
  children,
  to,
  ...props
}: ButtonProps) {
  const variantClass = clsx(
    (variant === 'contain' || variant === 'icon') && 'flex justify-center items-center',
    variant === 'contain' && color === 'white' && 'bg-neutral-100 text-neutral-700 hover:bg-white',
    variant === 'contain' && color === 'black' && 'bg-neutral-900 text-neutral-100 hover:bg-neutral-800',
    variant === 'text' && color === 'black' && 'w-auto h-auto bg-none text-neutral-800 hover:text-neutral-500',
    variant === 'text' && color === 'gray' && 'w-auto h-auto bg-none text-neutral-600 hover:text-neutral-500',
    variant === 'icon' && 'p-1 w-auto h-auto bg-none',
  )
  const widthClass = clsx(
    width === 'default' && 'w-29',
    width === 'full' && 'w-full',
    width === 'fit' && 'w-fit px-4',
  )
  const sizeClass = clsx(
    size === 'xs' && 'text-(length:--text100) leading-(--leading100)',
    size === 'sm' && 'text-(length:--text300) leading-(--leading300)',
    size === 'md' && 'text-(length:--text400) leading-(--leading400)',
  )
  const cn = clsx(
    `h-10.5
    transition-colors duration-(--duration-button)
    cursor-pointer`,
    variantClass,
    widthClass,
    sizeClass,
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

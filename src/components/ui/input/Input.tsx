import clsx from 'clsx'

interface InputProps extends React.ComponentProps<'input'> {
  invisible?: boolean
}

export function Input({ invisible = false, className, ...props }: InputProps) {
  const borderClass = invisible ? '' : 'border-1 border-white-smoke-200'
  const cn = clsx(
    `px-3.5 py-3
    w-full
    transition-colors duration-(--duration-input)
    focus:border-neutral-900`,
    borderClass,
    className,
  )

  return (
    <input className={cn} {...props} />
  )
}

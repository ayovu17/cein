import clsx from 'clsx'

interface InputProps extends React.ComponentProps<'input'> {
}

export function Input({ className, ...props }: InputProps) {
  const cn = clsx(
    `px-3.5 py-3
    w-full
    border-1 border-white-smoke-200
    transition-colors duration-(--duration-input)
    focus:border-neutral-900`,
    className,
  )

  return (
    <input className={cn} {...props} />
  )
}

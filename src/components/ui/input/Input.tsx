import clsx from 'clsx'

interface InputProps extends React.ComponentProps<'input'> {
  invisible?: boolean
}

export function Input({ invisible = false, className, ...props }: InputProps) {
  const cn = clsx(
    `px-3.5 py-3
    w-full
    transition-colors duration-(--duration-input)
    focus:border-neutral-900`,
    !invisible && 'border-1 border-white-smoke-200',
    className,
  )

  return (
    <input className={cn} {...props} />
  )
}

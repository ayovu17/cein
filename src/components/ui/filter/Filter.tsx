import clsx from 'clsx'

interface FilterProps {
  title: string
  isActive: boolean
  onClick: (title: string) => void
}

export function Filter({ title, isActive = false, onClick }: FilterProps) {
  const activeClass = `text-neutral-50 bg-neutral-900`
  const unactiveClass = `text-neutral-900 bg-white`
  const cn = clsx(
    `px-4 py-1
    border border-neutral-900 rounded-4xl
    transition-colors duration-(--duration-filter)
    select-none cursor-pointer`,
    isActive ? activeClass : unactiveClass,
  )

  return (
    <div className={cn} onClick={() => onClick(title)}>{title}</div>
  )
}

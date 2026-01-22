import clsx from 'clsx'

interface FilterProps {
  title: string
  isActive: boolean
  onClick: (title: string) => void
}

export function Filter({
  title,
  isActive = false,
  onClick,
}: FilterProps) {
  const cn = clsx(
    `px-4 py-1
    text-(length:--text300) leading-(--leading300)
    border border-neutral-800 rounded-4xl
    transition-colors duration-(--duration-ui)
    cursor-pointer
    hover:bg-neutral-200`,
    isActive ? 'text-neutral-50 bg-neutral-900' : 'text-neutral-800 bg-white',
  )

  return (
    <button
      type="button"
      className={cn}
      onClick={() => onClick(title)}
    >
      {title}
    </button>
  )
}

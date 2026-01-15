import clsx from 'clsx'

type CollapseIconColor = 'black' | 'gray'

interface CollapseIconProps {
  color?: CollapseIconColor
  isOpen: boolean
}

export function CollapseIcon({
  color = 'black',
  isOpen,
}: CollapseIconProps) {
  const lineClass = clsx(
    `absolute top-1/2 left-1/2
    rounded origin-center -translate-x-1/2 -translate-y-1/2
    transition-all duration-300`,
  )
  const colorClass = clsx(
    color === 'black' && 'bg-neutral-900 group-hover:bg-neutral-500',
    color === 'gray' && 'bg-neutral-500 group-hover:bg-neutral-400',
  )
  const firstLineCn = clsx(
    `w-4 h-[1.5px]`,
    lineClass,
    colorClass,
    isOpen && 'rotate-90 opacity-0',
  )
  const secondLineCn = clsx(
    `w-[1.5px] h-4`,
    lineClass,
    colorClass,
    isOpen && 'rotate-90',
  )

  return (
    <div className="relative w-6 h-6">
      <span className={firstLineCn} />
      <span className={secondLineCn} />
    </div>
  )
}

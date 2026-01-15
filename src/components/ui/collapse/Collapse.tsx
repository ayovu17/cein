import clsx from 'clsx'
import { useState } from 'react'
import { CollapseIcon } from './Icon'

type CollapseColor = 'black' | 'gray'

interface CollapseProps {
  label: string
  icon?: React.ComponentType
  color?: CollapseColor
  children: React.ReactNode
}

export function Collapse({
  label,
  icon: Icon,
  color = 'black',
  children,
}: CollapseProps) {
  const [isOpen, setIsOpen] = useState(false)

  function toggleVisible() {
    setIsOpen(!isOpen)
  }

  const colorClass = clsx(
    color === 'black' && 'text-neutral-900 hover:text-neutral-500',
    color === 'gray' && 'text-neutral-500 hover:text-neutral-400',
  )
  const cn = clsx(
    `group
    flex justify-between items-center
    py-4
    w-full
    transition-colors duration-(--duration-collapse)
    select-none cursor-pointer`,
    colorClass,
  )

  return (
    <div className="flex flex-col">
      <div
        className={cn}
        onClick={toggleVisible}
      >
        {label}
        {Icon ? <Icon /> : <CollapseIcon color={color} isOpen={isOpen} />}
      </div>
      <div
        className={clsx(
          `pl-4
          overflow-hidden
          transition-all duration-(--duration-collapse)`,
          isOpen
            ? 'opacity-100 max-h-1000'
            : 'opacity-0 max-h-0',
        )}
      >
        {children}
      </div>
    </div>
  )
}

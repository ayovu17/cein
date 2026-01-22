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

  const colorClass = clsx(
    color === 'black' && 'text-neutral-900 hover:text-neutral-500',
    color === 'gray' && 'text-neutral-500 hover:text-neutral-400',
  )
  const labelClass = clsx(
    `group
    flex justify-between items-center
    py-4
    w-full
    transition-colors duration-(--duration-ui)
    select-none cursor-pointer`,
    colorClass,
  )
  const innerClass = clsx(
    `pl-4
    overflow-hidden
    transition-all duration-(--duration-ui)`,
    isOpen
      ? 'opacity-100 max-h-1000'
      : 'opacity-0 max-h-0',
  )

  return (
    <div className="flex flex-col">
      <button
        type="button"
        className={labelClass}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        {Icon ? <Icon /> : <CollapseIcon color={color} isOpen={isOpen} />}
      </button>
      <div className={innerClass}>
        {children}
      </div>
    </div>
  )
}

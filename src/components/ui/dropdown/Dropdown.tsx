import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

type DropdownIconPosition = 'start' | 'end'
type DropdownSize = 'xs' | 'sm' | 'md'
type DropdownPlacement = 'left' | 'center' | 'right'

interface DropdownProps {
  label: string
  icon?: React.ComponentType
  iconPosition?: DropdownIconPosition
  menu: string[]
  size?: DropdownSize
  placement?: DropdownPlacement
  className?: string
}

export function Dropdown({
  label,
  icon: Icon,
  iconPosition = 'end',
  menu,
  size = 'md',
  placement = 'right',
  className,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const sizeButtonClass = clsx(
    size === 'xs' && 'text-(length:--text100) leading-(--leading100)',
    size === 'sm' && 'text-(length:--text300) leading-(--leading300)',
    size === 'md' && 'text-(length:--text400) leading-(--leading400)',
  )
  const sizeMenuClass = clsx(
    size === 'xs' && 'gap-2 px-5 py-3',
    size === 'sm' && 'gap-4 px-8 py-5',
    size === 'md' && 'gap-6 px-12 py-8',
  )
  const placementClass = clsx(
    placement === 'left' && 'left-auto right-0',
    placement === 'center' && 'left-1/2 -translate-x-1/2',
    placement === 'right' && 'left-0 right-auto',
  )
  const buttonClass = clsx(
    `flex items-center gap-1
    text-neutral-800
    transition-colors duration-(--duration-ui)
    cursor-pointer
    hover:text-neutral-500`,
    sizeButtonClass,
    className,
  )
  const menuClass = clsx(
    `z-(--z-floating)
    absolute top-[calc(100%+16px)]
    flex-col
    w-max
    bg-white shadow-[0_10px_25px_rgba(0,0,0,0.25)]`,
    size === 'xs' && 'gap-2 px-5 py-3',
    size === 'sm' && 'gap-4 px-8 py-5',
    size === 'md' && 'gap-6 px-12 py-8',
    sizeMenuClass,
    placementClass,
    isOpen ? 'flex' : 'hidden',
  )
  const menuItemClass = clsx(
    `text-neutral-800
    cursor-pointer
    hover:text-neutral-500`,
    sizeButtonClass,
  )

  useEffect(() => {
    if (!dropdownRef.current)
      return

    function handleClose(e: MouseEvent) {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClose)
    return () => document.removeEventListener('mousedown', handleClose)
  }, [])

  return (
    <div ref={dropdownRef} className="relative">
      <button type="button" className={buttonClass} onClick={() => setIsOpen(!isOpen)}>
        {Icon && iconPosition === 'start' && (
          <>
            <Icon />
            {' '}
          </>
        )}
        {label}
        {Icon && iconPosition === 'end' && (
          <>
            {' '}
            <Icon />
          </>
        )}
      </button>
      <ul className={menuClass}>
        {menu.map(i => <li key={i} className={menuItemClass}>{i}</li>)}
      </ul>
    </div>
  )
}

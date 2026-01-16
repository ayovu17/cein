import clsx from 'clsx'
import { useEffect, useState } from 'react'

type HeaderLayoutComponent = 'mega-menu' | 'search'
interface HeaderLayoutProps extends React.ComponentProps<'div'> {
  component: HeaderLayoutComponent
  children: React.ReactNode
}

export function HeaderLayout({ component, children, ...props }: HeaderLayoutProps) {
  const [isVisible, setIsVisible] = useState(false)

  const componentClass = clsx(
    component === 'mega-menu' && 'h-[calc(100dvh-94px)] lg:h-auto',
    component === 'search' && 'h-auto',
  )
  const visibilityClass = clsx(isVisible && 'opacity-100')
  const cn = clsx(
    `z-(--z-overlay)
    flex flex-col justify-between
    absolute top-[94px]
    w-full
    bg-neutral-50 border-t border-white-smoke-200
    opacity-0 overflow-y-auto
    transition-opacity duration-(--duration-overlay)
    lg:top-28`,
    componentClass,
    visibilityClass,
  )

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={cn} {...props}>
      <div className="container">
        {children}
      </div>
    </div>
  )
}

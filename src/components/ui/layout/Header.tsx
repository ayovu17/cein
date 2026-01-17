import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useOverlaysStore } from '@/stores'

type HeaderLayoutComponent = 'mega-menu' | 'search'
interface HeaderLayoutProps extends React.ComponentProps<'div'> {
  layout: HeaderLayoutComponent
  closeLayout?: HeaderLayoutComponent
  children: React.ReactNode
}

export function HeaderLayout({
  layout,
  closeLayout,
  children,
  ...props
}: HeaderLayoutProps) {
  const [isVisible, setIsVisible] = useState(false)
  const { closingOverlay, closeOverlay } = useOverlaysStore()

  function handleClose() {
    if (!closeLayout)
      return
    setIsVisible(false)
    setTimeout(() => {
      closeOverlay(closeLayout)
    }, 300)
  }

  const overlayCn = clsx(
    `z-(--z-overlay)
    fixed top-[94px] left-0 right-0 bottom-0
    bg-black/50 backdrop-blur-sm
    opacity-0
    transition-opacity duration-(--duration-overlay)
    lg:top-28`,
    isVisible && 'opacity-100',
  )
  const heightClass = clsx(
    layout === 'mega-menu' && 'h-[calc(100dvh-94px)] lg:h-auto',
    layout === 'search' && 'h-auto',
  )
  const layoutCn = clsx(
    `z-(--z-modal)
    flex flex-col justify-between
    w-full max-h-[calc(100dvh-94px)]
    bg-neutral-50 border-t border-white-smoke-200
    overflow-y-auto
    lg:max-h-[calc(100dvh-224px)]`,
    heightClass,
  )

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (closingOverlay === layout)
      setIsVisible(false)
  }, [closingOverlay, layout])

  return (
    <div className={overlayCn} onClick={handleClose}>
      <div className={layoutCn} {...props} onClick={e => e.stopPropagation()}>
        <div className="container h-full">
          {children}
        </div>
      </div>
    </div>
  )
}

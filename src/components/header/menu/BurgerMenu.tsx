import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useOverlaysStore } from '@/stores'

export function BurgerMenu() {
  const [isPressed, setIsPressed] = useState(false)
  const { overlays, openOverlay, closeOverlay } = useOverlaysStore()

  function toggleMenu() {
    setIsPressed(!isPressed)
    isPressed ? closeOverlay('mega-menu') : openOverlay('mega-menu')
  }

  const lineClass = clsx(
    `w-4 h-[1.5px]
    bg-neutral-900 rounded
    transition-all duration-300`,
  )
  const firstLineCn = clsx(
    lineClass,
    isPressed && 'rotate-45 translate-y-[5.5px]',
  )
  const secondLineCn = clsx(
    lineClass,
    isPressed && 'invisible opacity-0',
  )
  const thirdLineCn = clsx(
    lineClass,
    isPressed && '-rotate-45 -translate-y-[5px]',
  )

  useEffect(() => {
    if (!overlays.has('mega-menu'))
      setIsPressed(false)
  }, [overlays])

  return (
    <button
      type="button"
      className="
        flex flex-col justify-between
        px-1 py-1.5
        w-6 h-6
      "
      onClick={toggleMenu}
    >
      <span className={firstLineCn} />
      <span className={secondLineCn} />
      <span className={thirdLineCn} />
    </button>
  )
}

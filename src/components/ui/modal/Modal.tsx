import type { Overlay } from '@/types'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Button, XIcon } from '@/components'
import { useOverlaysStore } from '@/stores'

interface ModalProps {
  modalClose: Overlay
  children: React.ReactNode
}

export function Modal({ modalClose, children }: ModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  const { closingOverlay, closeOverlay } = useOverlaysStore()

  function handleClose() {
    setIsVisible(false)
    setTimeout(() => closeOverlay(modalClose), 300)
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (closingOverlay === modalClose)
      setIsVisible(false)
  }, [closingOverlay, modalClose])

  return (
    <div
      className={clsx(
        `z-(--z-overlay)
        fixed inset-0
        flex justify-center items-end
        bg-black/50 backdrop-blur-sm
        opacity-0
        transition-opacity duration-(--duration-overlay)
        md:items-center`,
        isVisible && 'opacity-100',
      )}
      onClick={handleClose}
    >
      <div
        className={clsx(
          `z-(--z-modal)
          relative
          flex flex-col
          w-full h-[90dvh]
          bg-white
          transition-all duration-(--duration-overlay)
          md:mx-4 md:w-auto md:h-auto md:max-h-[80dvh]`,
          isVisible
            ? 'translate-y-0 md:opacity-100 md:scale-100'
            : 'translate-y-full md:translate-y-0 md:opacity-0 md:scale-90',
        )}
        onClick={e => e.stopPropagation()}
      >
        <Button
          variant="icon"
          icon={XIcon}
          className="absolute top-2 right-2"
          onClick={handleClose}
        />
        <div className="overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  )
}

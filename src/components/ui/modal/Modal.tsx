import type { Modal as ModalType } from '@/types'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Button, XIcon } from '@/components'
import { useModalsStore } from '@/stores'

interface ModalProps {
  modalClose: ModalType
  children: React.ReactNode
}

export function Modal({ modalClose, children }: ModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  const { closeModal } = useModalsStore()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={clsx(
        `z-(--z-overlay)
        fixed inset-0
        flex justify-center items-end
        bg-black/50 backdrop-blur-sm
        opacity-0
        transition-opacity duration-(--duration-modal)
        md:items-center`,
        isVisible && 'opacity-100',
      )}
      onClick={() => closeModal(modalClose)}
    >
      <div
        className={clsx(
          `z-(--z-modal)
          relative
          flex flex-col
          w-full h-[90dvh]
          bg-white
          opacity-0 scale-90
          transition-all duration-(--duration-modal)
          md:mx-4 md:w-auto md:h-auto md:max-h-[80dvh]`,
          isVisible && 'opacity-100 scale-100',
        )}
        onClick={e => e.stopPropagation()}
      >
        <Button
          variant="icon"
          icon={XIcon}
          className="absolute top-2 right-2"
          onClick={() => closeModal(modalClose)}
        />
        <div className="overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  )
}

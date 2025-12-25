import type { Modal as ModalType } from '@/types'
import { Button, XIcon } from '@/components'
import { useModalsStore } from '@/stores'

interface ModalProps {
  modalClose: ModalType
  children: React.ReactNode
}

export function Modal({ modalClose, children }: ModalProps) {
  const { closeModal } = useModalsStore()

  return (
    <div
      className="
        z-(--z-overlay)
        fixed inset-0
        flex justify-center items-end
        bg-black/50 backdrop-blur-sm
        md:items-center
      "
      onClick={() => closeModal(modalClose)}
    >
      <div
        className="
          z-(--z-modal)
          relative
          flex flex-col
          w-full h-[90dvh]
          bg-white
          md:mx-4 md:w-auto md:h-auto md:max-h-[80dvh]
        "
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

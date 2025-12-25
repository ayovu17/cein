import { useEffect } from 'react'
import { useModalsStore } from '@/stores'
import { LazyPromotionModal } from './lazy'

export function Modals() {
  const modals = useModalsStore(state => state.modals)

  useEffect(() => {
    if (modals.size) {
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = ''
    }
  }, [modals])

  return (
    <>
      {modals.has('promotion') && <LazyPromotionModal />}
    </>
  )
}

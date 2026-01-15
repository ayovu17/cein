import { useEffect } from 'react'
import { useOverlaysStore } from '@/stores'
import { PromotionModal } from './promotion/Promotion'

export function OverlaysRoot() {
  const overlays = useOverlaysStore(state => state.overlays)

  useEffect(() => {
    if (overlays.size) {
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = ''
    }
  }, [overlays])

  return (
    <>
      {overlays.has('promotion') && <PromotionModal />}
    </>
  )
}

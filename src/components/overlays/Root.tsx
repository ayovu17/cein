import { useEffect } from 'react'
import { useOverlaysStore } from '@/stores'
import { MegaMenuLayout } from './megaMenu/MegaMenu'
import { PromotionModal } from './promotion/Promotion'
import { SearchLayout } from './search/Search'

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
      {overlays.has('mega-menu') && <MegaMenuLayout />}
      {overlays.has('search') && <SearchLayout />}
      {overlays.has('promotion') && <PromotionModal />}
    </>
  )
}

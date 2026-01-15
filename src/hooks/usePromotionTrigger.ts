import { useEffect } from 'react'
import { useOverlaysStore } from '@/stores'

export function usePromotionTrigger(targetRef: HTMLElement | null) {
  const { openOverlay } = useOverlaysStore()

  useEffect(() => {
    if (!targetRef) {
      return
    }
    if (localStorage.getItem('promo_first_order') === 'true')
      return

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting)
        return

      openOverlay('promotion')
      localStorage.setItem('promo_first_order', 'true')
      observer.disconnect()
    }, {
      threshold: 0.5,
    })
    observer.observe(targetRef)

    return () => {
      observer.disconnect()
    }
  }, [targetRef, openOverlay])
}

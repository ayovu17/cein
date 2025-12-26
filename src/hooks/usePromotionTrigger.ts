import { useEffect } from 'react'
import { useModalsStore } from '@/stores'

export function usePromotionTrigger(targetRef: HTMLElement | null) {
  const { openModal } = useModalsStore()

  useEffect(() => {
    if (!targetRef) {
      return
    }
    if (localStorage.getItem('promo_first_order') === 'true')
      return

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting)
        return

      openModal('promotion')
      localStorage.setItem('promo_first_order', 'true')
      observer.disconnect()
    }, {
      threshold: 0.5,
    })
    observer.observe(targetRef)

    return () => {
      observer.disconnect()
    }
  }, [targetRef, openModal])
}

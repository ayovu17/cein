import type { Overlay } from '@/types'
import { create } from 'zustand'

interface OverlaysStore {
  overlays: Set<Overlay>
  closingOverlay: Overlay | null
  animationTimer: ReturnType<typeof setTimeout> | null
  delayTimer: ReturnType<typeof setTimeout> | null
  clearTimers: () => void
  openOverlay: (overlay: Overlay) => void
  closeOverlay: (overlay: Overlay) => void
  closeOverlayWithDelay: (overlay: Overlay) => void
}

export const useOverlaysStore = create<OverlaysStore>()((set, get) => ({
  overlays: new Set(),
  closingOverlay: null,
  animationTimer: null,
  delayTimer: null,
  clearTimers: () => {
    const animationTimer = get().animationTimer
    const delayTimer = get().delayTimer
    if (animationTimer) {
      clearTimeout(animationTimer)
      set({ animationTimer: null })
    }
    if (delayTimer) {
      clearTimeout(delayTimer)
      set({ delayTimer: null })
    }
  },
  openOverlay: (overlay) => {
    get().clearTimers()
    const nextSet = new Set(get().overlays)

    if (nextSet.size) {
      const [currentOverlay] = nextSet
      currentOverlay !== overlay && get().closeOverlay(currentOverlay)
    }

    nextSet.add(overlay)
    set({ overlays: nextSet })
  },
  closeOverlay: (overlay) => {
    set({ closingOverlay: overlay })

    const animationTimer = setTimeout(() => {
      const nextSet = new Set(get().overlays)
      nextSet.delete(overlay)
      set({ overlays: nextSet, closingOverlay: null, animationTimer: null })
    }, 300)
    set({ animationTimer })
  },
  closeOverlayWithDelay: (overlay) => {
    const delayTimer = setTimeout(() => {
      get().closeOverlay(overlay)
      set({ delayTimer: null })
    }, 300)
    set({ delayTimer })
  },
}))

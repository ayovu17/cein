import type { Overlay } from '@/types'
import { create } from 'zustand'

interface OverlaysStore {
  overlays: Set<Overlay>
  timer: number | null
  clearTimer: () => void
  openOverlay: (overlay: Overlay) => void
  closeOverlay: (overlay: Overlay) => void
  closeOverlayWithDelay: (overlay: Overlay) => void
}

export const useOverlaysStore = create<OverlaysStore>()((set, get) => ({
  overlays: new Set(),
  timer: null,
  clearTimer: () => {
    const timer = get().timer
    if (timer) {
      clearTimeout(timer)
      set({ timer: null })
    }
  },
  openOverlay: (overlay) => {
    get().clearTimer()
    const nextSet = new Set(get().overlays)
    nextSet.add(overlay)
    set({ overlays: nextSet })
  },
  closeOverlay: (overlay) => {
    get().clearTimer()
    const nextSet = new Set(get().overlays)
    nextSet.delete(overlay)
    set({ overlays: nextSet })
  },
  closeOverlayWithDelay: (overlay) => {
    get().clearTimer()
    const timer = window.setTimeout(() => {
      const nextSet = new Set(get().overlays)
      nextSet.delete(overlay)
      set({ overlays: nextSet, timer: null })
    }, 300)
    set({ timer })
  },
}))

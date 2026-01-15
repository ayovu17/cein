import type { Overlay } from '@/types'
import { create } from 'zustand'

interface OverlaysStore {
  overlays: Set<Overlay>
  openOverlay: (overlay: Overlay) => void
  closeOverlay: (overlay: Overlay) => void
}

export const useOverlaysStore = create<OverlaysStore>()((set, get) => ({
  overlays: new Set(),
  openOverlay: (overlay) => {
    const nextSet = new Set(get().overlays)
    nextSet.add(overlay)
    set({ overlays: nextSet })
  },
  closeOverlay: (overlay) => {
    const nextSet = new Set(get().overlays)
    nextSet.delete(overlay)
    set({ overlays: nextSet })
  },
}))

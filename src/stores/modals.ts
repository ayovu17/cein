import type { Modal } from '@/types'
import { create } from 'zustand'

interface ModalsStore {
  modals: Set<Modal>
  openModal: (modal: Modal) => void
  closeModal: (modal: Modal) => void
}

export const useModalsStore = create<ModalsStore>()((set, get) => ({
  modals: new Set(),
  openModal: (modal) => {
    const nextSet = new Set(get().modals)
    nextSet.add(modal)
    set({ modals: nextSet })
  },
  closeModal: (modal) => {
    const nextSet = new Set(get().modals)
    nextSet.delete(modal)
    set({ modals: nextSet })
  },
}))

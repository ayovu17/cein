import { create } from 'zustand'

interface FavoritesStore {
  favoritesIds: Set<number>
  favoritesCount: () => number
  toggleFavorite: (id: number) => void
}

export const useFavoritesStore = create<FavoritesStore>()((set, get) => ({
  favoritesIds: new Set(),
  favoritesCount: () => get().favoritesIds.size,
  toggleFavorite: (id: number) => {
    const nextSet = new Set(get().favoritesIds)
    nextSet.has(id) ? nextSet.delete(id) : nextSet.add(id)
    set({ favoritesIds: nextSet })
  },
}))

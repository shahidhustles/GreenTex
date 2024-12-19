import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useData = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
    }),
    {
      name: 'user-data', // name of the item in the storage (must be unique)
      getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
    }
  )
)

export const useTextiles = create((set, get) => ({
  textiles: [],
  setTextiles: (textiles) => set({ textiles }),
  // below func returns the textile arrays
  getTextiles: () => get().textiles,
  updateTextiles: (newTextiles) => {
    const currentTextiles = get().textiles;
    if (currentTextiles.length === 0 || currentTextiles.length < newTextiles.length) {
      set({ textiles: newTextiles });
    }
  }
}))
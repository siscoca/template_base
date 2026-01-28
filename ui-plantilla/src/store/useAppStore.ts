import { create } from 'zustand'

// 1. Definir la interfaz del estado y las acciones
interface AppState {
  count: number
  isLoading: boolean
  increment: () => void
  reset: () => void
  setLoading: (status: boolean) => void
}

// 2. Crear el hook del store
export const useAppStore = create<AppState>()((set) => ({
  count: 0,
  isLoading: false,
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
  setLoading: (status) => set({ isLoading: status }),
}))
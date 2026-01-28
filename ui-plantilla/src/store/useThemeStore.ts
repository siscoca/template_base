import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type ThemeColor, type ThemeMode, type LayoutMode } from '@/types/theme'

interface ThemeState {
  mode: ThemeMode
  color: ThemeColor
  headerMode: LayoutMode
  footerMode: LayoutMode
  sidebarPinned: boolean
  setMode: (mode: ThemeMode) => void
  setColor: (color: ThemeColor) => void
  setHeaderMode: (mode: LayoutMode) => void
  setFooterMode: (mode: LayoutMode) => void
  setSidebarPinned: (pinned: boolean) => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: 'light',
      color: 'gray',
      headerMode: 'fixed',
      footerMode: 'fixed',
      sidebarPinned: true,
      setMode: (mode) => {
        set({ mode })
        // Actualizar clase en el HTML
        const root = window.document.documentElement
        root.classList.remove('light', 'dark', 'semi-dark')
        root.classList.add(mode)
      },
      setColor: (color) => {
        set({ color })
        // Actualizar clase de color en el HTML
        const root = window.document.documentElement
        const colors: ThemeColor[] = ['gray', 'green', 'red', 'blue', 'orange']
        colors.forEach((c) => root.classList.remove(`theme-${c}`))
        root.classList.add(`theme-${color}`)
      },
      setHeaderMode: (headerMode) => set({ headerMode }),
      setFooterMode: (footerMode) => set({ footerMode }),
      setSidebarPinned: (sidebarPinned) => set({ sidebarPinned }),
    }),
    {
      name: 'theme-storage',
      onRehydrateStorage: () => (state) => {
        // Aplicar tema al recargar la página
        if (state) {
          state.setMode(state.mode)
          state.setColor(state.color)
        }
      },
    }
  )
)

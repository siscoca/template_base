import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { Footer } from './Footer'
import { SettingsPanel } from './SettingsPanel'
import { useThemeStore } from '@/store/useThemeStore'

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const { headerMode, footerMode } = useThemeStore()

  return (
    <div className="flex h-screen w-full overflow-hidden bg-muted/20">
      {/* Barra Lateral Fija */}
      <Sidebar />

      {/* Columna principal que contiene el Header y el contenido */}
      <div className="relative flex flex-1 flex-col">
        {/* Header Fijo (fuera del scroll) */}
        {headerMode === 'fixed' && <Header />}

        {/* Área de Contenido Principal (con scroll) */}
        <main className="flex-1 overflow-y-auto">
          {/* Header Estático (dentro del scroll) */}
          {headerMode === 'static' && <Header />}

          <div className="p-8">{children}</div>

          {/* Footer Estático (dentro del scroll) */}
          {footerMode === 'static' && <Footer />}
        </main>

        {/* Footer Fijo (fuera del scroll) */}
        {footerMode === 'fixed' && <Footer />}

        {/* Botón de configuración flotante cuando el header está oculto */}
        {headerMode === 'hidden' && (
          <div className="absolute right-6 top-4 z-50">
            <SettingsPanel />
          </div>
        )}
      </div>
    </div>
  )
}

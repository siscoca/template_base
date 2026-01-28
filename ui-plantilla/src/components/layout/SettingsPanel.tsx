import {
  Settings,
  Moon,
  Sun,
  Monitor,
  PanelTop,
  PanelBottom,
  EyeOff,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from '@/components/ui/sheet'
import { useThemeStore } from '@/store/useThemeStore'
import { type ThemeColor } from '@/types/theme'
import { cn } from '@/lib/utils'

export function SettingsPanel() {
  const {
    mode,
    setMode,
    color,
    setColor,
    headerMode,
    setHeaderMode,
    footerMode,
    setFooterMode,
  } = useThemeStore()

  // Definición de colores para el renderizado
  const colors: { value: ThemeColor; bg: string }[] = [
    { value: 'gray', bg: 'bg-gray-600' },
    { value: 'green', bg: 'bg-green-600' },
    { value: 'red', bg: 'bg-red-600' },
    { value: 'blue', bg: 'bg-blue-600' },
    { value: 'orange', bg: 'bg-orange-600' },
  ]

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Configuración</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Configuración</SheetTitle>
          <SheetDescription>
            Personaliza la apariencia del sistema.
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6 py-6">
          {/* Sección: Tema */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium leading-none">Tema</h3>
            <div className="grid grid-cols-3 gap-2">
              <Button
                variant={mode === 'light' ? 'default' : 'outline'}
                className="w-full justify-start"
                onClick={() => setMode('light')}
              >
                <Sun className="mr-2 h-4 w-4" />
                Claro
              </Button>
              <Button
                variant={mode === 'dark' ? 'default' : 'outline'}
                className="w-full justify-start"
                onClick={() => setMode('dark')}
              >
                <Moon className="mr-2 h-4 w-4" />
                Oscuro
              </Button>
              <Button
                variant={mode === 'semi-dark' ? 'default' : 'outline'}
                className="w-full justify-start"
                onClick={() => setMode('semi-dark')}
              >
                <Monitor className="mr-2 h-4 w-4" />
                Semi
              </Button>
            </div>
          </div>

          {/* Sección: Color Primario */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium leading-none">Color Primario</h3>
            <div className="grid grid-cols-6 gap-2">
              {colors.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setColor(c.value)}
                  className={cn(
                    'h-8 w-8 rounded-md transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                    c.bg,
                    color === c.value && 'ring-2 ring-ring ring-offset-2'
                  )}
                  title={c.value}
                >
                  <span className="sr-only">{c.value}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Sección: Barra de Header */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium leading-none">Barra Superior</h3>
            <div className="grid grid-cols-3 gap-2">
              <Button
                variant={headerMode === 'fixed' ? 'default' : 'outline'}
                className="w-full justify-start px-3"
                onClick={() => setHeaderMode('fixed')}
              >
                <PanelTop className="mr-2 h-4 w-4" />
                Fija
              </Button>
              <Button
                variant={headerMode === 'static' ? 'default' : 'outline'}
                className="w-full justify-start px-3"
                onClick={() => setHeaderMode('static')}
              >
                <PanelTop className="mr-2 h-4 w-4 rotate-180" />
                Estática
              </Button>
              <Button
                variant={headerMode === 'hidden' ? 'default' : 'outline'}
                className="w-full justify-start px-3"
                onClick={() => setHeaderMode('hidden')}
              >
                <EyeOff className="mr-2 h-4 w-4" />
                Oculta
              </Button>
            </div>
          </div>

          {/* Sección: Footer */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium leading-none">Pie de Página</h3>
            <div className="grid grid-cols-3 gap-2">
              <Button
                variant={footerMode === 'fixed' ? 'default' : 'outline'}
                className="w-full justify-start px-3"
                onClick={() => setFooterMode('fixed')}
              >
                <PanelBottom className="mr-2 h-4 w-4" />
                Fijo
              </Button>
              <Button
                variant={footerMode === 'static' ? 'default' : 'outline'}
                className="w-full justify-start px-3"
                onClick={() => setFooterMode('static')}
              >
                <PanelBottom className="mr-2 h-4 w-4 rotate-180" />
                Estático
              </Button>
              <Button
                variant={footerMode === 'hidden' ? 'default' : 'outline'}
                className="w-full justify-start px-3"
                onClick={() => setFooterMode('hidden')}
              >
                <EyeOff className="mr-2 h-4 w-4" />
                Oculto
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

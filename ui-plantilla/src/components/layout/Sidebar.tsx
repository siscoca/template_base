import { useState } from 'react'
import {
  ChevronDown,
  Home,
  Users,
  Package,
  BarChart3,
  Pin,
  PinOff,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { useThemeStore } from '@/store/useThemeStore'

export function Sidebar() {
  // Estado para controlar qué menú está abierto (comportamiento de acordeón)
  const [openMenu, setOpenMenu] = useState<string | null>('Inicio')
  const { mode, color, sidebarPinned, setSidebarPinned } = useThemeStore()
  const [activeSubItem, setActiveSubItem] = useState('Principal')
  const [isHovered, setIsHovered] = useState(false)

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu)
  }

  // La barra está expandida si está fijada O si el mouse está encima
  const isExpanded = sidebarPinned || isHovered

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'relative flex h-screen flex-col border-r bg-background transition-all duration-300 ease-in-out',
        isExpanded ? 'w-64 p-4' : 'w-[16px] p-0', // w-[16px] es la "pestaña visible"
        mode === 'semi-dark' && 'dark',
        mode === 'semi-dark' && `theme-${color}`
      )}
    >
      {/* Contenido de la barra lateral (solo visible si está expandida) */}
      <div
        className={cn(
          'flex h-full flex-col overflow-hidden',
          !isExpanded && 'invisible opacity-0'
        )}
      >
        <div className="mb-6 flex items-center justify-between px-2">
          <div className="text-xl font-bold">SisCoca</div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarPinned(!sidebarPinned)}
            className="h-8 w-8"
            title={sidebarPinned ? 'Desfijar barra' : 'Fijar barra'}
          >
            {sidebarPinned ? (
              <PinOff className="h-4 w-4" />
            ) : (
              <Pin className="h-4 w-4" />
            )}
            <span className="sr-only">
              {sidebarPinned ? 'Desfijar' : 'Fijar'}
            </span>
          </Button>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto">
          {/* Opción Desplegable: Inicio */}
          <Collapsible
            open={openMenu === 'Inicio'}
            onOpenChange={() => toggleMenu('Inicio')}
            className="group/collapsible"
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between hover:bg-primary/5 data-[state=open]:text-primary"
              >
                <span className="flex items-center">
                  <Home className="mr-2 h-4 w-4" />
                  Inicio
                </span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
              <Button
                variant="ghost"
                onClick={() => setActiveSubItem('Principal')}
                className={cn(
                  'mt-1 w-full justify-start pl-9 transition-all duration-200',
                  activeSubItem === 'Principal'
                    ? 'bg-gradient-to-r from-primary/20 to-transparent text-primary font-medium border-l-2 border-primary rounded-l-none'
                    : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
                )}
              >
                Principal
              </Button>
              <Button
                variant="ghost"
                onClick={() => setActiveSubItem('Analíticas')}
                className={cn(
                  'mt-1 w-full justify-start pl-9 transition-all duration-200',
                  activeSubItem === 'Analíticas'
                    ? 'bg-gradient-to-r from-primary/20 to-transparent text-primary font-medium border-l-2 border-primary rounded-l-none'
                    : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
                )}
              >
                Analíticas
              </Button>
            </CollapsibleContent>
          </Collapsible>

          {/* Opción Desplegable: Usuarios */}
          <Collapsible
            open={openMenu === 'Usuarios'}
            onOpenChange={() => toggleMenu('Usuarios')}
            className="group/collapsible"
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between hover:bg-primary/5 data-[state=open]:text-primary"
              >
                <span className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  Usuarios
                </span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
              <Button
                variant="ghost"
                onClick={() => setActiveSubItem('Lista')}
                className={cn(
                  'mt-1 w-full justify-start pl-9 transition-all duration-200',
                  activeSubItem === 'Lista'
                    ? 'bg-gradient-to-r from-primary/20 to-transparent text-primary font-medium border-l-2 border-primary rounded-l-none'
                    : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
                )}
              >
                Lista
              </Button>
              <Button
                variant="ghost"
                onClick={() => setActiveSubItem('Permisos')}
                className={cn(
                  'mt-1 w-full justify-start pl-9 transition-all duration-200',
                  activeSubItem === 'Permisos'
                    ? 'bg-gradient-to-r from-primary/20 to-transparent text-primary font-medium border-l-2 border-primary rounded-l-none'
                    : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
                )}
              >
                Permisos
              </Button>
            </CollapsibleContent>
          </Collapsible>

          {/* Opción Desplegable: Inventario */}
          <Collapsible
            open={openMenu === 'Inventario'}
            onOpenChange={() => toggleMenu('Inventario')}
            className="group/collapsible"
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between hover:bg-primary/5 data-[state=open]:text-primary"
              >
                <span className="flex items-center">
                  <Package className="mr-2 h-4 w-4" />
                  Inventario
                </span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
              <Button
                variant="ghost"
                onClick={() => setActiveSubItem('Productos')}
                className={cn(
                  'mt-1 w-full justify-start pl-9 transition-all duration-200',
                  activeSubItem === 'Productos'
                    ? 'bg-gradient-to-r from-primary/20 to-transparent text-primary font-medium border-l-2 border-primary rounded-l-none'
                    : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
                )}
              >
                Productos
              </Button>
              <Button
                variant="ghost"
                onClick={() => setActiveSubItem('Categorías')}
                className={cn(
                  'mt-1 w-full justify-start pl-9 transition-all duration-200',
                  activeSubItem === 'Categorías'
                    ? 'bg-gradient-to-r from-primary/20 to-transparent text-primary font-medium border-l-2 border-primary rounded-l-none'
                    : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
                )}
              >
                Categorías
              </Button>
            </CollapsibleContent>
          </Collapsible>

          {/* Opción Desplegable: Reportes */}
          <Collapsible
            open={openMenu === 'Reportes'}
            onOpenChange={() => toggleMenu('Reportes')}
            className="group/collapsible"
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between hover:bg-primary/5 data-[state=open]:text-primary"
              >
                <span className="flex items-center">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Reportes
                </span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
              <Button
                variant="ghost"
                onClick={() => setActiveSubItem('Ventas')}
                className={cn(
                  'mt-1 w-full justify-start pl-9 transition-all duration-200',
                  activeSubItem === 'Ventas'
                    ? 'bg-gradient-to-r from-primary/20 to-transparent text-primary font-medium border-l-2 border-primary rounded-l-none'
                    : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
                )}
              >
                Ventas
              </Button>
              <Button
                variant="ghost"
                onClick={() => setActiveSubItem('Auditoría')}
                className={cn(
                  'mt-1 w-full justify-start pl-9 transition-all duration-200',
                  activeSubItem === 'Auditoría'
                    ? 'bg-gradient-to-r from-primary/20 to-transparent text-primary font-medium border-l-2 border-primary rounded-l-none'
                    : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
                )}
              >
                Auditoría
              </Button>
            </CollapsibleContent>
          </Collapsible>
        </nav>
      </div>

      {/* Pestaña visual cuando está colapsado */}
      {!isExpanded && (
        <div className="absolute inset-y-0 left-0 flex w-full items-center justify-center bg-muted/50 transition-colors hover:bg-primary/20">
          <div className="h-8 w-1 rounded-full bg-muted-foreground/50" />
        </div>
      )}
    </div>
  )
}

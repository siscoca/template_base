import { KeyRound, LogOut, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SettingsPanel } from './SettingsPanel'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function Header() {
  return (
    <header className="flex h-14 items-center justify-end gap-4 border-b bg-background px-6">
      {/* Panel de Configuración */}
      <SettingsPanel />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="relative h-10 w-10 rounded-full p-0"
          >
            <img
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
              alt="Avatar"
              className="h-full w-full rounded-full object-cover"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">Juan Pérez</p>
              <p className="text-xs leading-none text-muted-foreground">
                Cochabamba, Bolivia
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <KeyRound className="mr-2 h-4 w-4" />
              <span>Cambiar contraseña</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Cerrar sesión</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}

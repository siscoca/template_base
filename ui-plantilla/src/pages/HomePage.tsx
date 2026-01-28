import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Switch } from '@/components/ui/switch'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { toast } from 'sonner'

export default function HomePage() {
  const invoices = [
    {
      invoice: 'INV001',
      paymentStatus: 'Pagado',
      total: '$250.00',
      paymentMethod: 'Tarjeta de Crédito',
    },
    {
      invoice: 'INV002',
      paymentStatus: 'Pendiente',
      total: '$150.00',
      paymentMethod: 'PayPal',
    },
    {
      invoice: 'INV003',
      paymentStatus: 'Sin pagar',
      total: '$350.00',
      paymentMethod: 'Transferencia',
    },
    {
      invoice: 'INV004',
      paymentStatus: 'Pagado',
      total: '$450.00',
      paymentMethod: 'Tarjeta de Crédito',
    },
  ]

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Página Principal</h1>
        <p className="text-muted-foreground">
          Bienvenido al sistema SisCoca. Aquí puedes ver una demostración de los
          componentes UI.
        </p>
      </div>

      <Separator />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardHeader>
            <CardTitle>Botones</CardTitle>
            <CardDescription>Diferentes variantes.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardHeader>
            <CardTitle>Controles</CardTitle>
            <CardDescription>Switches, Checks y Radios.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Modo Avión</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Aceptar términos</Label>
            </div>
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Opción 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Opción 2</Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardHeader>
            <CardTitle>Inputs</CardTitle>
            <CardDescription>Campos de entrada.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Contraseña</Label>
              <Input type="password" id="password" placeholder="Password" />
            </div>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardHeader>
            <CardTitle>Badges</CardTitle>
            <CardDescription>Etiquetas de estado.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardHeader>
            <CardTitle>Notificaciones</CardTitle>
            <CardDescription>Ejemplos de alertas.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              onClick={() =>
                toast('Evento creado', {
                  description: 'Domingo, 03 de Diciembre a las 9am',
                  action: {
                    label: 'Deshacer',
                    onClick: () => console.log('Deshacer'),
                  },
                })
              }
            >
              Default
            </Button>
            <Button
              variant="default"
              className="bg-green-600 hover:bg-green-700"
              onClick={() => toast.success('Operación exitosa')}
            >
              Éxito
            </Button>
            <Button
              variant="destructive"
              onClick={() => toast.error('Ha ocurrido un error')}
            >
              Error
            </Button>
            <Button
              variant="secondary"
              onClick={() => toast.info('Nueva actualización disponible')}
            >
              Info
            </Button>
            <Button
              variant="ghost"
              className="text-orange-500 hover:text-orange-600 hover:bg-orange-100"
              onClick={() => toast.warning('Ten cuidado con esta acción')}
            >
              Warning
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="transition-all duration-300 hover:shadow-lg">
        <CardHeader>
          <CardTitle>Registros Recientes</CardTitle>
          <CardDescription>
            Una tabla de ejemplo con datos falsos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>Lista de facturas recientes.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Factura</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Método</TableHead>
                <TableHead className="text-right">Monto</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">{invoice.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

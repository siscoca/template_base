import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/Index/index.css'
import '../styles/Layout/theme.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from '@/components/ui/sonner'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Opcional: Configuración global (ej. no reintentar en error 404)
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 3. Envolver la app con el Provider */}
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster richColors position="top-right" />
      {/* 4. Añadir las Devtools (solo se muestran en desarrollo) */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
)

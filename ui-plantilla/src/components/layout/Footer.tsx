export function Footer() {
  return (
    <footer className="border-t bg-background p-4 text-center text-sm text-muted-foreground">
      <p>
        &copy; {new Date().getFullYear()} SisCoca. Todos los derechos
        reservados.
      </p>
    </footer>
  )
}

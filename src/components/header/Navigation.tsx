import { Button, LogoIcon } from '@/components'

export function Navigation() {
  return (
    <nav className="flex gap-10.5">
      <Button variant="icon" icon={LogoIcon} to="/" />
      <Button variant="text" size="sm" to="/">Shop</Button>
      <Button variant="text" size="sm" to="/">New Arrivals</Button>
      <Button variant="text" size="sm" to="/">Sales</Button>
      <Button variant="text" size="sm" to="/">Journal</Button>
    </nav>
  )
}

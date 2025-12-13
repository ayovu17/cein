import { Button, LogoIcon, Typography } from '@/components'

export function Navigation() {
  return (
    <nav className="flex gap-10.5">
      <Button icon={LogoIcon} to="/" />
      <Button variant="text" to="/"><Typography variant="text-300" tag="span">Shop</Typography></Button>
      <Button variant="text" to="/"><Typography variant="text-300" tag="span">New Arrivals</Typography></Button>
      <Button variant="text" to="/"><Typography variant="text-300" tag="span">Sales</Typography></Button>
      <Button variant="text" to="/"><Typography variant="text-300" tag="span">Journal</Typography></Button>
    </nav>
  )
}

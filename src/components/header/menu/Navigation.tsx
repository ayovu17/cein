import { Button, LogoIcon } from '@/components'
import { useOverlaysStore } from '@/stores'

export function Navigation() {
  const { openOverlay, closeOverlayWithDelay } = useOverlaysStore()

  return (
    <nav className="flex items-center gap-10.5">
      <Button variant="icon" icon={LogoIcon} to="/" />
      <Button
        variant="text"
        size="sm"
        to="/"
        onMouseEnter={() => openOverlay('mega-menu')}
        onMouseLeave={() => closeOverlayWithDelay('mega-menu')}
      >
        Shop
      </Button>
      <Button variant="text" size="sm" to="/">New Arrivals</Button>
      <Button variant="text" size="sm" to="/">Sales</Button>
      <Button variant="text" size="sm" to="/">Journal</Button>
    </nav>
  )
}

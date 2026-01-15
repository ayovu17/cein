import { HeaderLayout } from '@/components'
import { useOverlaysStore } from '@/stores'
import { DesktopMenu } from './Desktop'
import { MobileMenu } from './Mobile'

export function MegaMenuLayout() {
  const { openOverlay, closeOverlay } = useOverlaysStore()

  return (

    <HeaderLayout
      component="mega-menu"
      onMouseEnter={() => openOverlay('mega-menu')}
      onMouseLeave={() => closeOverlay('mega-menu')}
    >
      <MobileMenu />
      <DesktopMenu />
    </HeaderLayout>
  )
}

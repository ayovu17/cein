import { Actions } from './Actions'
import { Navigation } from './Navigation'

export function DesktopMenu() {
  return (
    <div className="container hidden justify-between w-full lg:flex">
      <Navigation />
      <Actions />
    </div>
  )
}

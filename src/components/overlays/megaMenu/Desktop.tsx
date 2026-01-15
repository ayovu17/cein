import { Navigation } from './Navigation'

export function DesktopMenu() {
  return (
    <div
      className="
        container
        hidden justify-between
        py-8
        lg:flex
      "
    >
      <Navigation />
      <img src="/img/mega-menu.webp" alt="mega-menu" className="hidden xl:block" />
    </div>
  )
}

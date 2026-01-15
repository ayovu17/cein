import { Menu } from './menu/Menu'

export function Header() {
  return (
    <header
      className="
        flex items-center
        h-[50px]
        bg-neutral-50
        lg:h-17
      "
    >
      <Menu />
    </header>
  )
}

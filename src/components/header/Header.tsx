import { Menu } from './Menu'

export function Header() {
  return (
    <div
      className="
        container
        flex items-center
        h-[50px]
        bg-neutral-50
        lg:h-17
      "
    >
      <Menu />
    </div>
  )
}

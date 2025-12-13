import { Menu } from './Menu'

export function Header() {
  return (
    <div
      className="
        flex items-center
        px-4
        h-[50px]
        bg-neutral-50
        md:h-17
      "
    >
      <Menu />
    </div>
  )
}

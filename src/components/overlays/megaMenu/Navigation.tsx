import { MEGA_MENU } from '@/constants'
import { NavigationColumn } from './Column'

export function Navigation() {
  return (
    <nav
      className="
        hidden flex-col gap-14
        pl-[142px]
        lg:flex lg:flex-row
      "
    >
      {Object.keys(MEGA_MENU.Shop).map(c => (
        <NavigationColumn key={c} title={c} links={MEGA_MENU.Shop[c]} />
      ))}
    </nav>
  )
}

import { FOOTER_NAVIGATION } from '@/constants'
import { NavigationColumn } from './Column'

export function Navigation() {
  return (
    <nav className="flex flex-col gap-14 lg:flex-row">
      {Object.keys(FOOTER_NAVIGATION).map(c => (
        <NavigationColumn key={c} title={c} list={FOOTER_NAVIGATION[c as keyof typeof FOOTER_NAVIGATION]} />
      ))}
    </nav>
  )
}

import { Button, LogoIcon } from '@/components'
import { Actions } from './Actions'
import { BurgerMenu } from './BurgerMenu'

export function MobileMenu() {
  return (
    <ul className="container grid grid-cols-3 items-center w-full lg:hidden">
      <li className="justify-self-start"><BurgerMenu /></li>
      <li className="justify-self-center"><Button variant="icon" icon={LogoIcon} to="/" /></li>
      <li className="justify-self-end"><Actions /></li>
    </ul>
  )
}

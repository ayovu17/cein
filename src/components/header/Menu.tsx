import { Button, LogoIcon } from '@/components'
import { Actions } from './Actions'
import { BurgerMenu } from './BurgerMenu'
import { Navigation } from './Navigation'

export function Menu() {
  return (
    <>
      <ul
        className="
          grid grid-cols-3 items-center
          w-full
          lg:hidden
        "
      >
        <li className="justify-self-start"><BurgerMenu /></li>
        <li className="justify-self-center"><Button variant="icon" icon={LogoIcon} to="/" /></li>
        <li className="justify-self-end"><Actions /></li>
      </ul>
      <div
        className="
          hidden justify-between
          w-full
          lg:flex
        "
      >
        <Navigation />
        <Actions />
      </div>
    </>
  )
}

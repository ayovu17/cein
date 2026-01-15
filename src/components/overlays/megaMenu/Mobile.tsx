import { Button, Collapse } from '@/components'
import { MEGA_MENU } from '@/constants'
import { LinksList } from './LinksList'

export function MobileMenu() {
  return (
    <div
      className="
        container
        flex flex-col justify-between
        py-4
        h-full
        lg:hidden
      "
    >
      <ul className="divide-y divide-neutral-300">
        {Object.keys(MEGA_MENU).map(i => (
          <li key={i}>
            <Collapse label={i}>
              <ul>
                {Object.keys(MEGA_MENU[i]).map(k => (
                  <li key={k}>
                    <Collapse label={k} color="gray">
                      <LinksList links={MEGA_MENU[i][k]} />
                    </Collapse>
                  </li>
                ))}
              </ul>
            </Collapse>
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-start">
        <Button variant="text" color="gray" className="p-4" to="/">Account</Button>
        <Button variant="text" color="gray" className="p-4" to="/">Stores</Button>
      </div>
    </div>
  )
}

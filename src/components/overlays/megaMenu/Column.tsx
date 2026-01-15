import type { Link } from '@/types'
import { Button, Typography } from '@/components'

interface NavigationColumnProps {
  title: string
  links: Link[]
}

export function NavigationColumn({ title, links }: NavigationColumnProps) {
  return (
    <div className="flex flex-col gap-5">
      <Typography variant="text-100cap" color="gray" tag="span">{title}</Typography>
      <ul className="flex flex-col gap-1">
        {links.map(i => (
          <li key={i.label}>
            <Button variant="text" to={i.to}>{i.label}</Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

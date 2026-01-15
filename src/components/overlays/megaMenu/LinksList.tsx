import type { Link } from '@/types'
import { Button } from '@/components'

interface LinksListProps {
  links: Link[]
}

export function LinksList({ links }: LinksListProps) {
  return (
    <div
      className="
        flex flex-col
        mb-4
        border-l border-neutral-300`
      "
    >
      {links.map(l => (
        <Button
          key={l.label}
          variant="text"
          width="full"
          color="gray"
          to={l.to}
          className="p-4"
        >
          {l.label}
        </Button>
      ))}
    </div>
  )
}

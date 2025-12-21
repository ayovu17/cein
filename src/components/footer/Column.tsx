import { Button, Typography } from '@/components'

interface NavigationColumnItem {
  label: string
  to: string
}

interface NavigationColumnProps {
  title: string
  list: NavigationColumnItem[]
}

export function NavigationColumn({ title, list }: NavigationColumnProps) {
  return (
    <div className="flex flex-col gap-5">
      <Typography variant="text-100cap" color="gray" tag="span">{title}</Typography>
      <ul className="flex flex-col gap-1">
        {list.map(i => (
          <li key={i.label}>
            <Button variant="text" to={i.to}>{i.label}</Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

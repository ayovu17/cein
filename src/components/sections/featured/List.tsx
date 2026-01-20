import { LinkCard } from '@/components'

interface FeaturedItem {
  name: string
  imgPath: string
  to: string
}
interface FeaturedListProps {
  featured: FeaturedItem[]
}

export function FeaturedList({ featured }: FeaturedListProps) {
  return (
    <ul
      className="
        flex flex-col gap-5
        mt-12
        md:flex-row
      "
    >
      {featured.map(f => (
        <li key={f.name} className="w-full aspect-square md:aspect-432/532">
          <LinkCard {...f} />
        </li>
      ))}
    </ul>
  )
}

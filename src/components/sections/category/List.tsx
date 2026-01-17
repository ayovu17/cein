import { LinkCard } from '@/components'

interface Category {
  name: string
  imgPath: string
  to: string
}
interface CategoryListProps {
  categories: Category[]
}

export function CategoryList({ categories }: CategoryListProps) {
  return (
    <ul
      className="
        flex flex-col gap-5
        mt-12
        md:flex-row
      "
    >
      {categories.map(c => (
        <li key={c.name} className="w-full aspect-square md:aspect-432/532">
          <LinkCard {...c} />
        </li>
      ))}
    </ul>
  )
}

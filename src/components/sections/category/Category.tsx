import { Typography } from '@/components'
import { CategoryList } from './List'

const mockData = [
  {
    name: 'New Arrivals',
    imgPath: '/img/new-arrivals.webp',
    to: '/',
  },
  {
    name: 'The Casual Edit',
    imgPath: '/img/the-casual-edit.webp',
    to: '/',
  },
  {
    name: 'Best-Sellers',
    imgPath: '/img/best-sellers.webp',
    to: '/',
  },
]

function CategorySection() {
  return (
    <section className="container py-8">
      <Typography variant="text-600" tag="h2" className="p-4">
        Elevate your lifestyle with a more intelligent, superior wardrobe.
        <br />
        Our range is crafted sustainably with longevity in mind.
      </Typography>
      <CategoryList categories={mockData} />
    </section>
  )
}

export default CategorySection

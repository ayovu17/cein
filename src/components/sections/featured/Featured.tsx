import { Typography } from '@/components'
import { FeaturedList } from './List'

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

function FeaturedSection() {
  return (
    <section className="container py-8">
      <Typography variant="text-600" tag="h1" className="p-4">
        Elevate your lifestyle with a more intelligent, superior wardrobe.
        <br />
        Our range is crafted sustainably with longevity in mind.
      </Typography>
      <FeaturedList featured={mockData} />
    </section>
  )
}

export default FeaturedSection

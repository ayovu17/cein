import { Typography } from '@/components'
import { InstagramSlider } from './Slider'

const mockData = [
  {
    imgPath: '/img/instagram-card-1.webp',
    href: '/',
  },
  {
    imgPath: '/img/instagram-card-2.webp',
    href: '/',
  },
  {
    imgPath: '/img/instagram-card-3.webp',
    href: '/',
  },
  {
    imgPath: '/img/instagram-card-4.webp',
    href: '/',
  },
  {
    imgPath: '/img/instagram-card-5.webp',
    href: '/',
  },
]

function InstagramSection() {
  return (
    <section className="overflow-hidden">
      <div className="container py-8">
        <Typography variant="text-600" tag="h1" className="p-4 text-center">Shop Instagram</Typography>
        <InstagramSlider photos={mockData} />
      </div>
    </section>
  )
}

export default InstagramSection

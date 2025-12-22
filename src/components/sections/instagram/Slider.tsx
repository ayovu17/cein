import { Swiper, SwiperSlide } from 'swiper/react'
import { InstagramCard } from '@/components'

interface Photo {
  imgPath: string
  href: string
}

interface InstagramSliderProps {
  photos: Photo[]
}

export function InstagramSlider({ photos }: InstagramSliderProps) {
  return (
    <Swiper spaceBetween={20} slidesPerView="auto" className="mt-12 overflow-visible!">
      {photos.map(p => (
        <SwiperSlide
          key={p.imgPath}
          className="
            w-25! h-25!
            sm:w-[250px]! sm:h-[250px]!
          "
        >
          <InstagramCard imgPath={p.imgPath} href={p.href} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

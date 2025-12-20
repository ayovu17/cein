import type { Product } from '@/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ProductCard } from '@/components'

interface GoodsSliderProps {
  goods: Product[]
}

export function GoodsSlider({ goods }: GoodsSliderProps) {
  return (
    <Swiper spaceBetween={20} slidesPerView="auto" className="mt-12 overflow-visible!">
      {goods.map(p => (
        <SwiperSlide
          key={p.title}
          className="
            w-[195px]! h-[287px]!
            md:w-[251px]! md:h-[348px]!
          "
        >
          <ProductCard
            id={p.id}
            title={p.title}
            colors={p.colors}
            currentColor={p.currentColor}
            price={p.price}
            imgPath={p.imgPath}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

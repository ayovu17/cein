import { Typography } from '@/components'
import { useProductsStore } from '@/stores'
import { GoodsSlider } from './Slider'

function GoodsSection() {
  const goods = useProductsStore(state => state.wtwProducts)

  return (
    <section className="overflow-hidden">
      <div className="container py-8">
        <Typography variant="text-600" tag="h1" className="p-4">What to Wear Now</Typography>
        <GoodsSlider goods={goods} />
      </div>
    </section>
  )
}

export default GoodsSection

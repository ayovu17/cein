import { ProductCard } from '@/components'
import { useProductsStore } from '@/stores'

export function ProductsList() {
  const products = useProductsStore(state => state.products)
  return (
    <ul
      className="
        container
        flex flex-wrap gap-[4%]
        pt-10
        md:grid md:grid-cols-3 md:gap-4
        lg:grid-cols-4
      "
    >
      {products.map(p => (
        <li key={p.id} className="mb-14 w-[48%] md:w-auto">
          <ProductCard {...p} />
        </li>
      ))}
    </ul>
  )
}

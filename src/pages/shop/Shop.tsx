import { Typography } from '@/components'
import { Filters } from './Filters'
import { ProductsList } from './List'

export function ShopPage() {
  return (
    <>
      <Typography variant="text-900" tag="h1" className="container pt-10">Shop</Typography>
      <Filters />
      <ProductsList />
    </>
  )
}

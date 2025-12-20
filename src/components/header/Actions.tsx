import {
  BagIcon,
  Button,
  HeartIcon,
  SearchIcon,
  Typography,
  UserIcon,
} from '@/components'
import { useFavoritesStore } from '@/stores'
import { useCartStore } from '@/stores/cart'

export function Actions() {
  const favoritesCount = useFavoritesStore(state => state.favoritesCount())
  const cartProductsCount = useCartStore(state => state.cartProductsCount())

  return (
    <div className="flex gap-2.5 lg:gap-4.5">
      <Button variant="icon" icon={SearchIcon} />
      <Button variant="text" size="sm" to="/" className="hidden lg:flex">Stores</Button>
      <Button variant="icon" icon={UserIcon} className="hidden lg:flex" />
      <div className="flex items-center">
        <Button variant="icon" icon={HeartIcon} />
        <Typography variant="text-300" tag="span" className="pt-0.5 pointer-events-none">
          {favoritesCount}
        </Typography>
      </div>
      <div className="flex items-center">
        <Button variant="icon" icon={BagIcon} />
        <Typography variant="text-300" tag="span" className="pt-0.5 pointer-events-none">
          {cartProductsCount}
        </Typography>
      </div>
    </div>
  )
}

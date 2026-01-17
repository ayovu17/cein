import {
  BagIcon,
  Button,
  HeartIcon,
  SearchIcon,
  Typography,
  UserIcon,
} from '@/components'
import { useCartStore, useFavoritesStore, useOverlaysStore } from '@/stores'

export function Actions() {
  const favoritesCount = useFavoritesStore(state => state.favoritesCount())
  const cartProductsCount = useCartStore(state => state.cartProductsCount())
  const { openOverlay } = useOverlaysStore()

  return (
    <div className="flex items-center gap-2.5 lg:gap-4.5">
      <Button variant="icon" icon={SearchIcon} onClick={() => openOverlay('search')} />
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

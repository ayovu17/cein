import type { Product } from '@/types'
import { Button, HeartIcon, PlusIcon, Typography } from '@/components'
import { useCartStore, useFavoritesStore } from '@/stores'
import { ColorSelector } from './ColorSelector'
import { useProductCard } from './useProductCard'

export function ProductCard({
  id,
  title,
  price,
  colors,
  currentColor,
  imgPath,
}: Product) {
  const {
    isColorSelectorVisible,
    showColorSelector,
    hideColorSelector,
    selectedColor,
    selectColor,
    productValue,
  } = useProductCard({
    id,
    title,
    color: currentColor,
    price,
    imgPath,
  })
  const favoritesIds = useFavoritesStore(state => state.favoritesIds)
  const toggleFavorite = useFavoritesStore(state => state.toggleFavorite)
  const isFavorite = favoritesIds.has(id)
  const addProductToCart = useCartStore(state => state.addProductToCart)

  return (
    <div
      className="
        flex flex-col justify-between
        w-full h-full
      "
    >
      <div
        className="relative"
        onMouseEnter={showColorSelector}
        onMouseLeave={hideColorSelector}
      >
        <img
          src={imgPath}
          alt={title}
          className="aspect-195/218 object-cover"
        />
        <Button
          variant="icon"
          icon={() => HeartIcon({ isFill: isFavorite })}
          className="
            z-(--z-content)
            absolute top-[15px] right-[15px]
          "
          onClick={() => toggleFavorite(id)}
        />
        <Button
          variant="icon"
          icon={PlusIcon}
          className="
            z-(--z-content)
            absolute bottom-[15px] right-[15px]
          "
          onClick={() => addProductToCart(productValue)}
        />
        <ColorSelector
          colors={colors}
          selectedColor={selectedColor}
          selectColor={selectColor}
          isVisible={isColorSelectorVisible}
        />
      </div>
      <div>
        <Typography
          variant="text-300"
          tag="p"
          className="truncate"
        >
          {title}
        </Typography>
        <Typography variant="text-300" tag="span">
          $
          {price}
        </Typography>
      </div>
    </div>
  )
}

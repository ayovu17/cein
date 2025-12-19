import type { CartProduct, Color } from '@/types'
import { useState } from 'react'

interface UseProductCardProps {
  id: number
  title: string
  color: Color
  price: number
  imgPath: string
}

export function useProductCard({
  id,
  title,
  color,
  price,
  imgPath,
}: UseProductCardProps) {
  const [isColorSelectorVisible, setIsColorSelectorVisible] = useState(false)
  const [selectedColor, setSelectedColor] = useState(color)
  const [productValue, _] = useState<CartProduct>({
    id,
    title,
    color: selectedColor,
    size: 'm',
    count: 1,
    price,
    subtotal: price,
    imgPath,
  })

  return {
    isColorSelectorVisible,
    showColorSelector: () => setIsColorSelectorVisible(true),
    hideColorSelector: () => setIsColorSelectorVisible(false),
    selectedColor,
    selectColor: (c: Color) => setSelectedColor(c),
    productValue,
  }
}

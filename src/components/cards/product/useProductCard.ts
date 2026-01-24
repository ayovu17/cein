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
  const [productValue, setProductValue] = useState<CartProduct>({
    id,
    title,
    color,
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
    selectedColor: productValue.color,
    selectColor: (c: Color) => setProductValue(prev => ({
      ...prev,
      color: c,
    })),
    productValue,
  }
}

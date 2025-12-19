import type { Color } from './color'
import type { Size } from './size'

export interface Product {
  id: number
  title: string
  colors: Color[]
  currentColor: Color
  price: number
  imgPath: string
}

export interface CartProduct extends Omit<Product, 'colors' | 'currentColor'> {
  color: Color
  size: Size
  count: number
  subtotal: number
}

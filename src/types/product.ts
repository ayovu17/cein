export type Color
  = 'black'
    | 'camel'
    | 'dusty-blue'
    | 'brown'
    | 'olive'
    | 'taupe'
    | 'terracotta'
    | 'red'
    | 'beige'
    | 'graphite'
export type Size = 'xs' | 's' | 'm' | 'l' | 'xl'

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

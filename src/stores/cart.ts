import type { CartProduct } from '@/types'
import { create } from 'zustand'

interface CartStore {
  cartProducts: CartProduct[]
  cartProductsCount: () => number
  findIndexSameProduct: (product: CartProduct) => number
  addProductToCart: (product: CartProduct) => void
}

export const useCartStore = create<CartStore>()((set, get) => ({
  cartProducts: [
    {
      id: 3,
      title: 'Wool Cashmere Sweater Coat',
      color: 'beige',
      size: 'm',
      count: 1,
      price: 398,
      subtotal: 398,
      imgPath: '/img/wool-cashmere-sweater-coat.webp',
    },
    {
      id: 4,
      title: 'Single-Origin Cashmere Beanie',
      color: 'camel',
      size: 'm',
      count: 1,
      price: 98,
      subtotal: 98,
      imgPath: '/img/single-origin-cashmere-beanie.webp',
    },
  ],
  cartProductsCount: () => {
    let count = 0
    get().cartProducts.forEach(p => count += p.count)
    return count
  },
  findIndexSameProduct: (product: CartProduct) => {
    return get().cartProducts.findIndex(p =>
      p.id === product.id
      && p.color === product.color
      && p.size === product.size,
    )
  },
  addProductToCart: (product: CartProduct) => {
    const index = get().findIndexSameProduct(product)
    if (index === -1)
      return set(state => ({ cartProducts: [...state.cartProducts, product] }))

    set((state) => {
      const nextCartProducts = [...state.cartProducts]
      const nextProduct = nextCartProducts[index]

      nextCartProducts[index] = {
        ...nextProduct,
        count: nextProduct.count + 1,
        subtotal: (nextProduct.count + 1) * nextProduct.price,
      }

      return { cartProducts: nextCartProducts }
    })
  },
}))

import type { Product } from '@/types'
import { create } from 'zustand'

interface ProductsStore {
  products: Product[]
  wtwProducts: Product[]
  searchedProducts: Product[]
  getAllProducts: () => Product[]
  getWtwProducts: () => Product[]
  searchProducts: (query: string) => void
}

export const useProductsStore = create<ProductsStore>()((set, get) => ({
  products: [
    {
      id: 1,
      title: 'Classic Easy Zipper Tote',
      colors: ['black'],
      currentColor: 'black',
      price: 298,
      imgPath: '/img/classic-easy-zipper-tote.webp',
    },
    {
      id: 2,
      title: 'Concertina Phone Bag',
      colors: ['black'],
      currentColor: 'black',
      price: 248,
      imgPath: '/img/concertina-phone-bag.webp',
    },
    {
      id: 3,
      title: 'Wool Cashmere Sweater Coat',
      colors: ['beige', 'black'],
      currentColor: 'beige',
      price: 398,
      imgPath: '/img/wool-cashmere-sweater-coat.webp',
    },
    {
      id: 4,
      title: 'Single-Origin Cashmere Beanie',
      colors: ['camel', 'black'],
      currentColor: 'camel',
      price: 98,
      imgPath: '/img/single-origin-cashmere-beanie.webp',
    },
    {
      id: 5,
      title: 'Alpaca Wool Cropped Cardigan',
      colors: ['camel', 'black', 'dusty-blue'],
      currentColor: 'camel',
      price: 248,
      imgPath: '/img/alpaca-wool-cropped-cardigan.webp',
    },
    {
      id: 6,
      title: 'Silk Wide-Leg Pant',
      colors: ['black', 'beige'],
      currentColor: 'black',
      price: 248,
      imgPath: '/img/silk-wide-leg-pant.webp',
    },
    {
      id: 7,
      title: 'Silk Paperbag Pant',
      colors: ['black', 'camel'],
      currentColor: 'black',
      price: 268,
      imgPath: '/img/silk-paperbag-pant.webp',
    },
    {
      id: 8,
      title: 'Ponte Legging Pant',
      colors: ['black', 'beige', 'olive'],
      currentColor: 'black',
      price: 268,
      imgPath: '/img/ponte-legging-pant.webp',
    },
    {
      id: 9,
      title: 'Organic Pima Classic Pant',
      colors: ['black', 'beige', 'brown'],
      currentColor: 'black',
      price: 268,
      imgPath: '/img/organic-pima-classic-pant.webp',
    },
  ],
  wtwProducts: [
    {
      id: 1,
      title: 'Classic Easy Zipper Tote',
      colors: ['black'],
      currentColor: 'black',
      price: 298,
      imgPath: '/img/classic-easy-zipper-tote.webp',
    },
    {
      id: 2,
      title: 'Concertina Phone Bag',
      colors: ['black'],
      currentColor: 'black',
      price: 248,
      imgPath: '/img/concertina-phone-bag.webp',
    },
    {
      id: 3,
      title: 'Wool Cashmere Sweater Coat',
      colors: ['beige', 'black'],
      currentColor: 'beige',
      price: 398,
      imgPath: '/img/wool-cashmere-sweater-coat.webp',
    },
    {
      id: 4,
      title: 'Single-Origin Cashmere Beanie',
      colors: ['camel', 'black'],
      currentColor: 'camel',
      price: 98,
      imgPath: '/img/single-origin-cashmere-beanie.webp',
    },
    {
      id: 5,
      title: 'Alpaca Wool Cropped Cardigan',
      colors: ['camel', 'black', 'dusty-blue'],
      currentColor: 'camel',
      price: 248,
      imgPath: '/img/alpaca-wool-cropped-cardigan.webp',
    },
  ],
  searchedProducts: [],
  getAllProducts: () => {
    return get().products
  },
  getWtwProducts: () => {
    return get().wtwProducts
  },
  searchProducts: (query) => {
    if (query === '')
      return set({ searchedProducts: [] })
    const data = get().products.filter(p => p.title.toLowerCase().includes(query))
    set({ searchedProducts: data })
  },
}))

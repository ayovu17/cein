import type { Product } from '@/types'
import { create } from 'zustand'

interface ProductsStore {
  wtwProducts: Product[]
}

export const useProductsStore = create<ProductsStore>()(() => ({
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
}))

import type { Link } from '@/types'

export const MEGA_MENU: Record<string, Record<string, Link[]>> = {
  'Shop': {
    Categories: [
      {
        label: 'Bags',
        to: '/',
      },
      {
        label: 'Clothing',
        to: '/',
      },
      {
        label: 'Leather Goods',
        to: '/',
      },
      {
        label: 'Accessories',
        to: '/',
      },
      {
        label: 'Gifts',
        to: '/',
      },
      {
        label: 'Shop All',
        to: '/',
      },
    ],
    Featured: [
      {
        label: 'New Arrivals',
        to: '/',
      },
      {
        label: 'Bestsellers',
        to: '/',
      },
      {
        label: 'Trending Now',
        to: '/',
      },
      {
        label: 'Loungewear',
        to: '/',
      },
    ],
    Collections: [
      {
        label: 'Party And Events',
        to: '/',
      },
      {
        label: 'Office Looks',
        to: '/',
      },
      {
        label: 'Selection',
        to: '/',
      },
      {
        label: 'Online Exclusive',
        to: '/',
      },
      {
        label: 'Knitwear',
        to: '/',
      },
      {
        label: 'Total Look',
        to: '/',
      },
      {
        label: 'Basics',
        to: '/',
      },
    ],
  },
  'New Arrivals': {},
  'Sales': {},
  'Journal': {},
}

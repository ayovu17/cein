import type { Link } from '@/types'

export const MEGA_MENU: Record<string, Record<string, Link[]>> = {
  'Shop': {
    Categories: [
      {
        label: 'Bags',
        to: '/shop',
      },
      {
        label: 'Clothing',
        to: '/shop',
      },
      {
        label: 'Leather Goods',
        to: '/shop',
      },
      {
        label: 'Accessories',
        to: '/shop',
      },
      {
        label: 'Gifts',
        to: '/shop',
      },
      {
        label: 'Shop All',
        to: '/shop',
      },
    ],
    Featured: [
      {
        label: 'New Arrivals',
        to: '/shop',
      },
      {
        label: 'Bestsellers',
        to: '/shop',
      },
      {
        label: 'Trending Now',
        to: '/shop',
      },
      {
        label: 'Loungewear',
        to: '/shop',
      },
    ],
    Collections: [
      {
        label: 'Party And Events',
        to: '/shop',
      },
      {
        label: 'Office Looks',
        to: '/shop',
      },
      {
        label: 'Selection',
        to: '/shop',
      },
      {
        label: 'Online Exclusive',
        to: '/shop',
      },
      {
        label: 'Knitwear',
        to: '/shop',
      },
      {
        label: 'Total Look',
        to: '/shop',
      },
      {
        label: 'Basics',
        to: '/shop',
      },
    ],
  },
  'New Arrivals': {},
  'Sales': {},
  'Journal': {},
}

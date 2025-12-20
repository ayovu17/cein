import { lazy } from 'react'

export const LazyCategorySection = lazy(() => import('./category/Category'))
export const LazyGoodsSection = lazy(() => import('./goods/Goods'))
export const LazyLookbookSection = lazy(() => import('./lookbook/Lookbook'))

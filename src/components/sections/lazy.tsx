import { lazy } from 'react'

export const LazyCategorySection = lazy(() => import('./category/Category'))
export const LazyGoodsSection = lazy(() => import('./goods/Goods'))

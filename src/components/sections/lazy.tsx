import { lazy } from 'react'

export const LazyCategorySection = lazy(() => import('./category/Category'))
export const LazyGoodsSection = lazy(() => import('./goods/Goods'))
export const LazyLookbookSection = lazy(() => import('./lookbook/Lookbook'))
export const LazyPhilosophySection = lazy(() => import('./philosophy/Philosophy'))
export const LazyInstagramSection = lazy(() => import('./instagram/Instagram'))

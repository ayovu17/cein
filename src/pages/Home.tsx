import { Suspense } from 'react'
import {
  LazyCategorySection,
  LazyGoodsSection,
  LazyLookbookSection,
  LazyPhilosophySection,
  MainSection,
} from '@/components'

export function HomePage() {
  return (
    <>
      <MainSection />
      <Suspense fallback={null}><LazyCategorySection /></Suspense>
      <Suspense fallback={null}><LazyGoodsSection /></Suspense>
      <Suspense fallback={null}><LazyLookbookSection /></Suspense>
      <Suspense fallback={null}><LazyPhilosophySection /></Suspense>
    </>
  )
}

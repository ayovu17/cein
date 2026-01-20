import { Suspense, useState } from 'react'
import {
  LazyFeaturedSection,
  LazyGoodsSection,
  LazyInstagramSection,
  LazyLookbookSection,
  LazyPhilosophySection,
  MainSection,
} from '@/components'
import { usePromotionTrigger } from '@/hooks'

export function HomePage() {
  const [lookbookRef, setLookbookRef] = useState<HTMLElement | null>(null)
  usePromotionTrigger(lookbookRef)

  return (
    <>
      <MainSection />
      <Suspense fallback={null}><LazyFeaturedSection /></Suspense>
      <Suspense fallback={null}><LazyGoodsSection /></Suspense>
      <Suspense fallback={null}><LazyLookbookSection ref={setLookbookRef} /></Suspense>
      <Suspense fallback={null}><LazyPhilosophySection /></Suspense>
      <Suspense fallback={null}><LazyInstagramSection /></Suspense>
    </>
  )
}

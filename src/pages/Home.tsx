import { Suspense } from 'react'
import { LazyCategorySection, LazyGoodsSection, MainSection } from '@/components'

export function HomePage() {
  return (
    <>
      <MainSection />
      <Suspense fallback={null}>
        <LazyCategorySection />
      </Suspense>
      <Suspense fallback={null}>
        <LazyGoodsSection />
      </Suspense>
    </>
  )
}

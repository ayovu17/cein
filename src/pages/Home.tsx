import { Suspense } from 'react'
import { LazyCategorySection, MainSection } from '@/components'

export function HomePage() {
  return (
    <>
      <MainSection />
      <Suspense fallback={null}>
        <LazyCategorySection />
      </Suspense>
    </>
  )
}

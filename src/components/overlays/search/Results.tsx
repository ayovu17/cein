import { Button, ProductCard } from '@/components'
import { useProductsStore } from '@/stores'

interface SearchResultsProps {
  hasSearched: boolean
}

export function SearchResults({ hasSearched }: SearchResultsProps) {
  const results = useProductsStore(state => state.searchedProducts)

  if (!hasSearched)
    return null

  return (
    <>
      <div className="flex justify-between py-3 border-b border-neutral-300">
        <span className="text-neutral-600">
          {results.length}
          {' '}
          {results.length === 1 ? 'result' : 'results'}
        </span>
        <Button variant="text" color="gray" to="/">View all</Button>
      </div>
      <ul
        className="
          flex flex-wrap gap-[4%]
          pt-10
          max-h-[calc(100dvh-208px)]
          overflow-y-auto
          md:grid md:grid-cols-3 md:gap-4
          lg:max-h-[calc(100dvh-338px)] lg:grid-cols-4
        "
      >
        {results.map(p => (
          <li key={p.id} className="mb-14 w-[48%] md:w-auto">
            <ProductCard {...p} />
          </li>
        ))}
      </ul>
    </>
  )
}

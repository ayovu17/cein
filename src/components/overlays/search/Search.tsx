import { HeaderLayout } from '@/components'
import { SearchInput } from './Input'
import { SearchResults } from './Results'
import { useSearch } from './useSearch'

export function SearchLayout() {
  const search = useSearch()

  return (
    <HeaderLayout layout="search" closeLayout="search">
      <SearchInput {...search} />
      <SearchResults hasSearched={search.hasSearched} />
    </HeaderLayout>
  )
}

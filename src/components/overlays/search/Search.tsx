import { HeaderLayout } from '@/components'
import { SearchInput } from './input/Input'
import { SearchResults } from './Results'

export function SearchLayout() {
  return (
    <HeaderLayout layout="search" closeLayout="search">
      <SearchInput />
      <SearchResults />
    </HeaderLayout>
  )
}

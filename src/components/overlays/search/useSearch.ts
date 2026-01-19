import { useEffect, useState } from 'react'
import { useDebounceValue } from '@/hooks'
import { useProductsStore } from '@/stores'

export function useSearch() {
  const [value, setValue] = useState('')
  const debouncedValue = useDebounceValue({ value, delay: 500 })
  const [hasSearched, setHasSearched] = useState(false)
  const { searchProducts } = useProductsStore()

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }
  function reset() {
    setValue('')
  }

  useEffect(() => {
    if (debouncedValue)
      setHasSearched(true)
  }, [debouncedValue])

  useEffect(() => {
    if (hasSearched)
      searchProducts(debouncedValue)
  }, [hasSearched, searchProducts, debouncedValue])

  return { value, onChange, reset, hasSearched }
}

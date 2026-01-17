import { useEffect, useState } from 'react'
import { useDebounceValue } from '@/hooks'
import { useProductsStore } from '@/stores'

export function useSearchInput() {
  const [value, setValue] = useState('')
  const { searchProducts } = useProductsStore()
  const debouncedValue = useDebounceValue({ value, delay: 500 })

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }
  function reset() {
    setValue('')
  }

  useEffect(() => {
    searchProducts(debouncedValue)
  }, [searchProducts, debouncedValue])

  return { value, onChange, reset }
}

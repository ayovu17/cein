import { useEffect, useState } from 'react'

interface useDebounceValueProps<T> {
  value: T
  delay: number
}

export function useDebounceValue<T>({ value, delay }: useDebounceValueProps<T>) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}

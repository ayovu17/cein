import { useEffect, useRef } from 'react'
import { Button, Input, SearchIcon, XIcon } from '@/components'
import { useSearchInput } from './useSearchInput'

export function SearchInput() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { value, onChange, reset } = useSearchInput()

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className="flex items-center px-6 py-2">
      <SearchIcon />
      <Input
        ref={inputRef}
        value={value}
        invisible={true}
        placeholder="Search..."
        onChange={onChange}
      />
      <Button
        variant="icon"
        icon={XIcon}
        onClick={reset}
      />
    </div>
  )
}

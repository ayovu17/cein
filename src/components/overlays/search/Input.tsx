import { useEffect, useRef } from 'react'
import { Button, Input, SearchIcon, XIcon } from '@/components'

interface SearchInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  reset: () => void
}

export function SearchInput({ value, onChange, reset }: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)

  function handleReset() {
    reset()
    inputRef.current?.focus()
  }

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
        onClick={handleReset}
      />
    </div>
  )
}

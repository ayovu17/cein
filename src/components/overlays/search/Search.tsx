import { Button, HeaderLayout, Input, SearchIcon, XIcon } from '@/components'
import { useOverlaysStore } from '@/stores'

export function SearchLayout() {
  const { closeOverlay } = useOverlaysStore()

  return (
    <HeaderLayout component="search">
      <div className="container">
        <div className="flex items-center px-6 py-2">
          <SearchIcon />
          <Input invisible={true} placeholder="Search..." />
          <Button
            variant="icon"
            icon={XIcon}
            onClick={() => closeOverlay('search')}
          />
        </div>
      </div>
    </HeaderLayout>
  )
}

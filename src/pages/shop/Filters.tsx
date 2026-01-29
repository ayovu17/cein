import { Button, CaretDown, Dropdown, Filter } from '@/components'
import { QUICK_FILTERS, SORT_FILTERS } from '@/constants'
import { useFilters } from '@/hooks'

export function Filters() {
  const { quickFilter, selectQuickFilter } = useFilters()

  return (
    <div className="flex flex-col border-b border-neutral-300">
      <div
        className="
          container
          flex flex-wrap gap-2
          py-4
          md:gap-1
        "
      >
        {QUICK_FILTERS.map(f => (
          <Filter
            key={f}
            title={f}
            isActive={f === quickFilter}
            onClick={selectQuickFilter}
          />
        ))}
      </div>
      <div
        className="
          container
          flex justify-around gap-0
          py-4
          md:justify-end md:gap-20
        "
      >
        <div className="hidden md:flex">
          <Dropdown
            label="Sort"
            size="sm"
            placement="left"
            icon={CaretDown}
            menu={SORT_FILTERS}
          />
        </div>
        <Button
          variant="text"
          size="sm"
          icon={CaretDown}
          iconPosition="end"
          className="flex md:hidden"
        >
          Sort
        </Button>
        <Button variant="text" size="sm">Filter</Button>
      </div>
    </div>

  )
}

import type { Color } from '@/types'
import clsx from 'clsx'
import { ColorPicker, Typography } from '@/components'
import { formatColorName } from '@/helpers'

interface ColorSelectorProps {
  colors: Color[]
  selectedColor: Color
  selectColor: (c: Color) => void
  isVisible: boolean
}

export function ColorSelector({
  colors,
  selectedColor,
  selectColor,
  isVisible,
}: ColorSelectorProps) {
  const cn = clsx(
    `absolute bottom-0
    hidden flex-col justify-between
    p-[15px]
    w-full h-21.5
    bg-white/80
    opacity-0
    transition-opacity duration-(--duration-card)
    lg:flex`,
    isVisible && 'opacity-100',
  )

  return (
    <div className={cn}>
      <Typography variant="text-300" tag="span" className="pointer-events-none">
        {formatColorName(selectedColor)}
      </Typography>
      <ul className="flex gap-1">
        {colors.map(c => (
          <ColorPicker
            key={c}
            value={c}
            pickedColor={selectedColor}
            pickColor={selectColor}
          />
        ))}
      </ul>
    </div>
  )
}

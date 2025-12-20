import type { Color } from '@/types'
import clsx from 'clsx'

interface ColorPickerProps {
  value: Color
  pickedColor: Color
  pickColor: (c: Color) => void
}

export function ColorPicker({
  value,
  pickedColor,
  pickColor,
}: ColorPickerProps) {
  return (
    <button
      type="button"
      className={clsx(
        `flex justify-center items-center
        w-5 h-5
        rounded-full
        cursor-pointer`,
        value === pickedColor && 'border',
      )}
      onClick={() => pickColor(value)}
    >
      <span
        className="
          inline-block
          w-4 h-4
          bg-(--bg) rounded-full
        "
        data-bg-color={value}
      />
    </button>
  )
}

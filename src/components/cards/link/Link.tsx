import { Link } from '@tanstack/react-router'
import { Typography } from '@/components'

interface LinkCardProps {
  name: string
  imgPath: string
  to: string
}

export function LinkCard({ name, imgPath, to }: LinkCardProps) {
  return (
    <Link
      to={to}
      className="
        group
        relative
        flex items-end
        p-8
        w-full h-full
        overflow-hidden
      "
    >
      <img
        src={imgPath}
        alt={name}
        draggable={false}
        className="
          z-(--z-base)
          absolute inset-0
          w-full h-full
          object-cover
          transition-transform duration-(--duration-card)
          lg:group-hover:scale-110
        "
      />
      <Typography
        variant="text-600"
        color="white"
        tag="span"
        className="z-(--z-content)"
      >
        {name}
      </Typography>
    </Link>
  )
}

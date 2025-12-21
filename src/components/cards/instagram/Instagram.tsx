import { InstagramIcon } from '@/components'

interface InstagramCardProps {
  imgPath: string
  href: string
}

export function InstagramCard({ imgPath, href }: InstagramCardProps) {
  return (
    <a
      href={href}
      className="
        group
        relative
        block
        w-full h-full
      "
    >
      <img
        src={imgPath}
        alt="instagram"
        draggable={false}
        className="
          z-(--z-base)
          absolute inset-0
          w-full h-full
          object-cover
        "
      />
      <div
        className="
          z-(--z-content)
          hidden justify-center items-center
          absolute inset-0
          bg-black/50
          opacity-0
          pointer-events-none
          transition-opacity duration-(--duration-card)
          lg:flex lg:group-hover:opacity-100
        "
      >
        <InstagramIcon />
      </div>
    </a>
  )
}

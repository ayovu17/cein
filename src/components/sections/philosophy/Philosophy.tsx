import { Typography } from '@/components'

function PhilosophySection() {
  return (
    <section
      className="
        pt-24 pb-45
        bg-white-smoke
      "
    >
      <div className="container flex flex-col gap-12">
        <Typography variant="text-900" tag="h2" className="text-center">
          The Art of Fewer, Better Choices
        </Typography>
        <Typography variant="text-500" tag="p" className="text-center">
          Opting for quality over quantity means selecting timeless, durable, and responsibly made items. This approach simplifies our lives and fosters a deeper appreciation for our surroundings. Emphasizing longevity and responsible production resonates with a more sustainable and mindful lifestyle.
        </Typography>
      </div>
    </section>
  )
}

export default PhilosophySection

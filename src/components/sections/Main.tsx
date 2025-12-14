import { Button, Typography } from '@/components'

export function MainSection() {
  return (
    <section
      className="
        w-full h-[calc(100dvh-94px)] lg:h-[calc(100dvh-112px)]
        bg-[url(/img/main-section.webp)] bg-no-repeat bg-cover bg-center
      "
    >
      <div
        className="
          container
          flex flex-col justify-end gap-5
          h-full
          pb-16
        "
      >
        <Typography variant="text-900" color="white" tag="h1" className="ml-4 lg:ml-8">
          Elevate Your Style
          <br />
          Timeless Fashion, Sustainable
          <br />
          Choices
        </Typography>
        <Button variant="contain" color="white" to="/" className="ml-4 lg:ml-8">Shop Now</Button>
      </div>
    </section>
  )
}

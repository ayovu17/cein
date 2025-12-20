import { LinkCard } from '@/components'

const mockData = [
  {
    name: 'The Smart Chic',
    imgPath: '/img/the-smart-chic.webp',
    to: '/',
  },
  {
    name: 'Ready To Go',
    imgPath: '/img/ready-to-go.webp',
    to: '/',
  },
]

function LookbookSection() {
  return (
    <section className="container py-8">
      <ul
        className="
          flex flex-col gap-5
          md:flex-row
        "
      >
        {mockData.map(i => (
          <li key={i.name} className="w-full aspect-square md:aspect-658/719">
            <LinkCard name={i.name} imgPath={i.imgPath} to={i.to} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default LookbookSection

import { Typography } from '@/components'

const mockData = {
  mobile: 'The Archive Sale is live. Starting at 20% off. Show now',
  desktop: 'Complimentary U.S. No-Rush Shipping on orders of $95 or more. Shop now',
}

export function AnnouncementBar() {
  return (
    <div
      className="
        flex justify-center items-center
        w-full h-11
        text-neutral-100
        bg-neutral-900
      "
    >
      <Typography variant="text-100" tag="p" className="md:hidden">
        {mockData.mobile}
      </Typography>
      <Typography variant="text-100" tag="p" className="hidden md:block">
        {mockData.desktop}
      </Typography>
    </div>
  )
}

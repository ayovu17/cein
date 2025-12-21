import { Typography } from '@/components'
import { Navigation } from './Navigation'
import { SubscriptionForm } from './Subscription'

export function Footer() {
  return (
    <footer className="bg-white-smoke-100 border-t border-white-smoke-200">
      <div
        className="
          container
          flex flex-col gap-20
          pt-19 pb-10.5
        "
      >
        <div
          className="
            flex flex-col gap-12
            lg:flex-row lg:gap-0 lg:justify-between
          "
        >
          <Navigation />
          <SubscriptionForm />
        </div>
        <Typography
          variant="text-300"
          color="gray"
          tag="span"
          className="text-center lg:text-start"
        >
          ©CEIN
        </Typography>
      </div>
    </footer>
  )
}

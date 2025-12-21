import { Button, Input, Typography } from '@/components'

export function SubscriptionForm() {
  return (
    <form className="w-full lg:w-80 xl:w-110">
      <Typography variant="text-500" tag="h1">Join us in living fewer, better. Every day.</Typography>
      <Input placeholder="Enter your email address" className="mt-6" />
      <Typography variant="text-300" tag="p" className="mt-1">
        By signing up, you agree to our
        {' '}
        <Button variant="text" size="sm" to="/" className="underline">Privacy Policy</Button>
        {' '}
        and
        {' '}
        <Button variant="text" size="sm" to="/" className="underline">Terms of Service</Button>
        .
      </Typography>
      <Button variant="contain" className="mt-4.5">Subscribe</Button>
    </form>
  )
}

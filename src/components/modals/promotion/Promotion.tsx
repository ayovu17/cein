import { Button, Input, Modal, Typography } from '@/components'

function PromotionModal() {
  return (
    <Modal modalClose="promotion">
      <div className="flex max-w-210">
        <div className="hidden w-1/2 md:block">
          <img src="/img/promotion.webp" alt="promotion" className="w-full h-full object-cover" />
        </div>
        <form
          className="
            flex flex-col items-center
            px-15 py-30
            w-full
            md:w-1/2
          "
        >
          <Typography variant="text-400" tag="p" className="text-center">
            Enter your email to unlock
          </Typography>
          <Typography variant="text-900" tag="h1" className="mt-6 text-center">
            15% off your first order
          </Typography>
          <Typography variant="text-400" tag="p" className="mt-4 text-center">
            Plus, get insider access to promotions, launches, events, and more.
          </Typography>
          <Input placeholder="Enter your email address" className="mt-6" />
          <Button variant="contain" width="fit" className="mt-4 text-center">
            Unlock Access
          </Button>
        </form>
      </div>
    </Modal>
  )
}

export default PromotionModal

import { createFileRoute } from '@tanstack/react-router'
import { ShopPage } from '@/pages'

export const Route = createFileRoute('/shop')({
  component: ShopPage,
})

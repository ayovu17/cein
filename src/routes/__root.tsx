import { createRootRoute, Outlet } from '@tanstack/react-router'
import { AnnouncementBar, Header } from '@/components'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <Outlet />
    </>
  )
}

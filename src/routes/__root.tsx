import { createRootRoute, Outlet } from '@tanstack/react-router'
import { AnnouncementBar } from '@/components/announcement/AnnouncementBar'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <>
      <AnnouncementBar />
      <Outlet />
    </>
  )
}

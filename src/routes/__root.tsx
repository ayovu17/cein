import { createRootRoute, Outlet } from '@tanstack/react-router'
import { AnnouncementBar, Footer, Header, Modals } from '@/components'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <AnnouncementBar />
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <Modals />
    </>
  )
}

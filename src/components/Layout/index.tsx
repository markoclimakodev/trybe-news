import { Outlet } from 'react-router-dom'
import { FeaturedNews } from '../FeaturedNews'
import { Header } from '../Header'
import { Navbar } from '../Navbar'

export const Layout = () => {
  return (
    <>
      <Header />
      <FeaturedNews />
      <Navbar />
      <Outlet />
    </>
  )
}

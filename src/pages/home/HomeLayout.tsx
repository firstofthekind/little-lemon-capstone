import { Footer, Header } from "../../components"
import { Outlet } from "react-router"

const HomeLayout = () => {
  return (
    <main>
      <Header />
      <section>
        <Outlet />
      </section>
      <Footer />
    </main>
  )
}

export default HomeLayout

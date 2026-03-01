import { createBrowserRouter } from "react-router"
import { Home, HomeLayout, Login, OrderOnline, Reservation } from "../pages"

const router = createBrowserRouter([
  {
    path: "",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "reservation",
        Component: Reservation,
      },
      {
        path: "order-online",
        Component: OrderOnline,
      },
      {
        path: "login",
        Component: Login,
      },
    ],
  },
])

export default router

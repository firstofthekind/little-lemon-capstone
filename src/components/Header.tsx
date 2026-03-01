import { useState } from "react"
import { LogoHeader } from "../assets"
import { AlignRight, X } from "lucide-react"
import { Link } from "react-router"

const Header = () => {
  const [openMenu, setOpenMenu] = useState(true)
  const toggleMenu = () => setOpenMenu(!openMenu)

  return (
    <header className="d-flex container py-4 justify-content-start justify-content-lg-between align-items-center gap-10">
      <div>
        <img src={LogoHeader} alt="logo" width={220} loading="lazy" />
      </div>
      {openMenu ? (
        <ul className="d-none d-lg-flex justify-content-evenly gap-4 fs-5 fw-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <Link to="/reservation">Reservation</Link>
          </li>
          <li>
            <Link to="/order-online">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      ) : (
        <ul className="d-flex flex-column gap-3 d-lg-none shadow-lg p-4 menubar_position ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <Link to="/reservation">Reservation</Link>
          </li>
          <li>
            <Link to="/order-online" className="text-nowrap">
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
      <div
        onClick={toggleMenu}
        className="position-absolute top-1 end-0 translate-middle-x d-block d-lg-none"
      >
        {openMenu ? <AlignRight /> : <X />}
      </div>
    </header>
  )
}

export default Header

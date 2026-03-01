import { LogoFooter } from "../assets"

const Footer = () => {
  return (
    <section className="bg-dark text-white py-6 fs-6">
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div className="col mb-3">
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
            >
              <img src={LogoFooter} alt="Logo Footer" width="120" loading="lazy" />
            </a>
          </div>

          <div className="col mb-3">
            <h1 className="text-primary fw-bold fs-4">Quick Links</h1>
            <ul className="nav flex-column ">
              <li className="nav-item mb-2 ">
                <a href="#" className="nav-link p-0 text-white">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  About
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Menu
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Reservations
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Order online
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Login
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h1 className="text-primary fw-bold fs-4">Contact</h1>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  <i className="bi bi-geo-alt-fill"></i> Little Lemon, 123 Main Street,Chicago
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  <i className="bi bi-telephone-fill"></i> (555) 123-4567
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  <i className="bi bi-envelope-fill"></i> info@littlelemon.com
                </a>
              </li>
            </ul>
          </div>

          <div className="col social_icons">
            <h1 className="text-primary fw-bold fs-4">Social Links</h1>
            <ul className="nav gap-2">
              <li className="nav-item mb-2">
                <a href="#" className="">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="">
                  <i className="bi bi-twitter-x"></i>
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="">
                  <i className="bi bi-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Footer

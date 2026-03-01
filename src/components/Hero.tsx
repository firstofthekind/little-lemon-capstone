import { RestaurantFood1 } from "../assets"
import { Link } from "react-router"

const Hero = () => {
  return (
    <section className="bg-dark py-6">
      <div className="container text-light">
        {/* Grid Wrappers */}
        <div className="row flex-lg-row align-items-center g-4">
          {/* Text*/}
          <div className="col-lg-6">
            <h1 className="text-primary primary_heading">Little Lemon</h1>
            <h2 className="secondary_heading">Chicago</h2>
            <p className="mt-5 fs-6">
              Little Lemon is a charming neighborhood bistro that serves simple food and classic
              cocktails in a lively but casual environment. The restaurant features a
              locally-sourced menu with daily specials.
            </p>
            <div>
              <Link to="/reservation" className="btn btn-primary px-4 rounded-4 fw-semibold">
                Reserve a table
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="col-lg-6">
            <img
              src={RestaurantFood1}
              className="d-block mx-lg-auto img-fluid rounded-2"
              alt="restaurant food"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

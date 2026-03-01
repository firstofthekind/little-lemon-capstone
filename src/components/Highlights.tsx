import { highligts } from "../data/data"

const Highlights = () => {
  return (
    <section className="py-6" id="menu">
      <div className="container">
        <div className="mb-4">
          <div className="d-flex justify-content-between flex-wrap">
            <h1 className="text-gray fw-light">This weeks specials!</h1>
            <div>
              <button
                type="button"
                className="btn btn-primary px-4 rounded-4 text-nowrap fw-semibold"
              >
                Online menu
              </button>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-2">
          {highligts.map((item) => (
            <div className="col" key={item.id}>
              <div className="card h-100 rounded-0">
                <img src={item.image} className="fixed_img" alt={item.title} loading="lazy" />
                <div className="card-body text-dark bg-light">
                  <div className="d-flex justify-content-between items-center fw-semibold">
                    <p className="text-black">{item.title}</p>
                    <p className="text-accent">{item.price}</p>
                  </div>
                  <p className="fs-7">{item.description}</p>
                  <div className="d-flex justify-content-between items-center">
                    <a href="#" className="text-black fw-semibold">
                      {item.order}
                    </a>
                    <item.icon className="text-black" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights

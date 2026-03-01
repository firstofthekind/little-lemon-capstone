import { salad } from "../data/data"

const Salad = () => {
  return (
    <section className="">
      <h1 className="text-black mb-4 text-center">Salad</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-2 ">
        {salad.map((item) => (
          <div className="col" key={item.id}>
            <div className="card h-100 rounded-0">
              <img src={item.image} className="fixed_img" alt={item.title} loading="lazy" />
              <div className="card-body text-dark bg-white">
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
    </section>
  )
}

export default Salad

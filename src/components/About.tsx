import { MarioAdrian1, MarioAdrian2 } from "../assets"

const About = () => {
  return (
    <section className="py-6" id="about">
      <div className="container">
        <div className="row flex-lg-row align-items-center g-2">
          <div className="col-lg-6">
            <h1 className="text-dark primary_heading">Little Lemon</h1>
            <h2 className="text-dark secondary_heading">Chicago</h2>
            <p className="fs-6 mt-5 text-black">
              Embrace the captivating allure of Little Lemon Restaurant, a family-owned haven
              meticulously curated by brothers Mario and Adrian, nestled in the
              Mediterranean-inspired enclave East of Chicago. Our culinary odyssey invites you to
              savor an array of exquisite flavors, marrying tradition with innovation. Immerse
              yourself in the warmth of genuine hospitality, where every visit becomes an
              unforgettable journey for you and your cherished companions.
            </p>
          </div>

          <div className="col-10 col-sm-8 col-lg-6 position-relative about_img_container">
            <div className="mario_position">
              <img
                src={MarioAdrian1}
                className="w-100 h-100 rounded-4 object-fit-cover"
                alt="Mario"
                loading="lazy"
              />
            </div>
            <div className="adrian_position">
              <img
                src={MarioAdrian2}
                className="w-100 h-100 rounded-4 object-fit-cover"
                alt="Adrian"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

// step 1: import
import * as React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/layout"

// step 2: define component
const AboutUs = () => {
  return (
    <Layout>
      <div className="row row_padding">
        <div className="d-md-flex align-items-center">
          <div className="col col-md-6">
            <div className="d-flex">
              <h1 className="heading_boxed">01</h1>
              <h2 class="text-uppercase">Brand Story</h2>
            </div>
            <h5>Brand Story</h5>
            <p>
              M.INT specialises in modular furniture, with a significant
              emphasis on space-saving and durability. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col col-md-5 offset-md-1">
            <img src={"/about_brand_story.jpg"} alt="Brand Story" />
          </div>
        </div>
      </div>
      <div className="row row_padding bg_grey">
        <div className="d-md-flex align-items-center">
          <div className="col col-md-5">
            <img src={"/about_mission.jpg"} alt="Mission" />
          </div>
          <div className="col col-md-6 offset-md-1 text-end">
            <div className="d-flex justify-content-end">
              <h1 className="heading_boxed">02</h1>
              <h2 class="text-uppercase">Mission</h2>
            </div>
            <h5>Mission</h5>
            <p>
              M.INT specialises in modular furniture, with a significant
              emphasis on space-saving and durability. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="row row_padding">
        <div className="d-md-flex align-items-center">
          <div className="col col-md-6">
            <div className="d-flex">
              <h1 className="heading_boxed">03</h1>
              <h2 class="text-uppercase">Services</h2>
            </div>
            <h5>Modular Furniture</h5>
            <p>
              M.INT specialises in modular furniture, with a significant
              emphasis on space-saving and durability. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>

            <p class="pb-10">
              <button type="submit" class="btn btn-primary mb-3">
                Explore Our Products
              </button>
            </p>

            <h5>Interior Design</h5>
            <p>
              M.INT specialises in modular furniture, with a significant
              emphasis on space-saving and durability. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              <button type="submit" class="btn btn-primary mb-3">
                Explore Our Works
              </button>
            </p>
          </div>
          <div className="col col-md-5 offset-md-1">
            <img src={"/about_services.jpg"} alt="Services" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default AboutUs

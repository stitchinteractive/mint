// step 1: import
import * as React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/layout"

// step 2: define
const HomePage = () => {
  return (
    <Layout>
      <div className="bg_black font_white">
        <div className="container-fluid">
          <div className="row_padding_sides">
            <div className="row row_padding">
              <div className="col-12 col-md-5">
                <h1 class="text-uppercase">Min+Modules</h1>
                <p>
                  Min+Modules is a series of modular furniture exclusively
                  designed in-house by M.INT. Each module is connected by
                  magnetic connectors which allows flexible arrangements to suit
                  your needs and spaces.
                </p>
              </div>
              <div className="col-12">
                <div className="d-flex flex-column flex-lg-row justify-content-evenly align-items-end bd-highlight mb-3">
                  <div className="p-2 flex-fill bd-highlight text-center">
                    <p>
                      <img src="/home/1.png" alt="" />
                    </p>
                    <p>
                      <Link to="/">
                        <button type="button" className="btn btn-outline">
                          Side table
                        </button>
                      </Link>
                    </p>
                  </div>
                  <div className="p-2 flex-fill bd-highlight text-center">
                    <p>
                      <img src="/home/2.png" alt="" />
                    </p>
                    <p>
                      <Link to="/">
                        <button type="button" className="btn btn-outline">
                          Large side table
                        </button>
                      </Link>
                    </p>
                  </div>
                  <div className="p-2 flex-fill bd-highlight text-center">
                    <p>
                      <img src="/home/3.png" alt="" />
                    </p>
                    <p>
                      <Link to="/">
                        <button type="button" className="btn btn-outline">
                          Small bedroom chest
                        </button>
                      </Link>
                    </p>
                  </div>
                  <div className="p-2 flex-fill bd-highlight text-center">
                    <p>
                      <img src="/home/4.png" alt="" />
                    </p>
                    <p>
                      <Link to="/">
                        <button type="button" className="btn btn-outline">
                          Tall bookshelf
                        </button>
                      </Link>
                    </p>
                  </div>
                  <div className="p-2 flex-fill bd-highlight text-center">
                    <p>
                      <img src="/home/5.png" alt="" />
                    </p>
                    <p>
                      <Link to="/">
                        <button type="button" className="btn btn-outline">
                          Full bookshelf
                        </button>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row_padding_sides">
            <div className="row row_padding">
              <div className="col-md-6">
                <h1 class="text-uppercase">Two Sizes.</h1>
                <div class="text_indent">
                  <h2 className="text-uppercase">Endless Configurations.</h2>
                  <p>Stack and arrange the modules in any way you want.</p>
                </div>
              </div>
              <div className="col-md-6">
                <video width="100%" height="100%" controls>
                  <source src="/home/intro_sizes.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="row row_padding">
              <div className="col-md-6">
                <video width="100%" height="100%" controls>
                  <source src="/home/intro_connectors.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="col-md-6">
                <h1 class="text-uppercase">Flexible.</h1>
                <div class="text_indent">
                  <h2 className="text-uppercase">Magnetic Connectors.</h2>
                  <p>
                    Each module is connected by magnetic connectors which allows
                    flexible arrangements to suit your needs and spaces.
                  </p>
                </div>
              </div>
            </div>
            <div className="row row_padding">
              <div className="col-md-6">
                <h1 class="text-uppercase">Wide Selection.</h1>
                <div class="text_indent">
                  <h2 className="text-uppercase">Storage Compartments.</h2>
                  <p>
                    Choose from a selection of doors, drawers and space dividers
                    to satisfy your storage requirements.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <video width="100%" height="100%" controls>
                  <source src="/home/intro_storage.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="row row_padding">
              <div className="col-md-6">
                <video width="100%" height="100%" controls>
                  <source src="/home/intro_connectors.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="col-md-6">
                <h1 class="text-uppercase">Your Space.</h1>
                <div class="text_indent">
                  <h2 className="text-uppercase">Your Style.</h2>
                  <p>
                    From wood grains to solid colours and patterns, mix and
                    match to form the perfect combination that suit your
                    interior style.
                  </p>
                </div>
              </div>
            </div>
            <div className="row row_padding">
              <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center bd-highlight mb-3">
                <div className="container_lead_in text-center h-100 flex-fill">
                  <h2 class="pb-10">Why compromise when you can customise?</h2>
                  <p>
                    <Link to="/">
                      <button type="button" className="btn btn-outline">
                        Build your own Min+Modules
                      </button>
                    </Link>
                  </p>
                </div>
                <div className="container_lead_in text-center h-100 flex-fill">
                  <p className="pb-10">
                    <img src="/home/1.png" alt="" />
                  </p>
                  <p>
                    <Link to="/">
                      <button type="button" className="btn btn-outline">
                        Lorem Ipsum
                      </button>
                    </Link>
                  </p>
                </div>
                <div className="container_lead_in text-center h-100 flex-fill">
                  <h2 class="pb-10">There’s a Min+Module for every space.</h2>
                  <p>
                    <Link to="/">
                      <button type="button" className="btn btn-outline">
                        Explore Lookbook
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row_padding_sides">
          <div class="row_padding">
            <div class="col text-center">
              <h2 class="pb-5 text-uppercase">As featured on</h2>
            </div>
            <div class="col">
              <div className="d-flex flex-column flex-lg-row justify-content-evenly align-items-center bd-highlight mb-3">
                <div>
                  <img
                    src="/home/logo_straits_times.png"
                    alt="The Straits Times"
                  />
                </div>
                <div>
                  <img src="/home/logo_today.png" alt="Today" />
                </div>
                <div>
                  <img src="/home/logo_home_decor.png" alt="Home Decor" />
                </div>
                <div>
                  <img src="/home/logo_pets.png" alt="Pets" />
                </div>
                <div>
                  <img src="/home/logo_squarerooms.png" alt="Square Rooms" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default HomePage

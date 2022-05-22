// step 1: import
import * as React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import { LookBookItem } from "../components/lookbook-item"

// step 2: define component
const LookBook = () => {
  return (
    <Layout>
      <div className="row row_padding">
        <div className="col-12">
          <h2 class="text-uppercase pb-4">
            There’s 101 ways you can go modular with us.
          </h2>
          <h6 class="text-uppercase pb-5">
            Shop the look below and get inspirations for your space.
          </h6>
        </div>
        <LookBookItem></LookBookItem>
        <LookBookItem></LookBookItem>
        <LookBookItem></LookBookItem>
      </div>
    </Layout>
  )
}

// step 3: export
export default LookBook

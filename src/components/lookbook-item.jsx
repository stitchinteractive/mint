// step 1: import
import * as React from "react"
import { Link } from "gatsby"

// step 2: define
export function LookBookItem() {
  return (
    <div className="d-md-flex py-5">
      <div className="col col-md-1 align-self-start">
        <div className="text_vertical">Living Room</div>
      </div>
      <div className="col col-md-6">
        <p>
          <img src={"/lookbook/living_room/1.jpg"} alt="Living Room" />
        </p>
      </div>
      <div className="col col-md-4 offset-md-1 d-flex flex-wrap">
        <div className="align-self-end">
          <p>
            The living room usually houses the most furniture and it can be
            tricky to coordinate the look and feel of every piece. See how you
            can easily create a cohesive look with our modular furniture.
          </p>
          <p>
            <Link to="/">
              <button type="submit" className="btn btn-light">
                Step in
              </button>
            </Link>
          </p>
        </div>
        <div className="align-self-end">
          <p>
            <img src={"/lookbook/living_room/2.jpg"} alt="Living Room" />
          </p>
        </div>
      </div>
    </div>
  )
}

import * as React from "react"
import { Link } from "gatsby"
import Logo from "../icons/logo"
import FacebookIcon from "../icons/fb"
import InstagramIcon from "../icons/ig"
import VisaIcon from "../icons/visa"
import MasterIcon from "../icons/master"
import PaypalIcon from "../icons/paypal"
import * as footerModule from "./footer.module.css"

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <Link to="/">
              <Logo className="logo" />
            </Link>
          </div>
          <div className="col-lg-3">
            <h6 class="text-uppercase">M.INT</h6>
            <ul class="text-uppercase">
              <li>
                <Link to="/">Complimentary design service</Link>
              </li>
              <li>
                <Link to="/">Min+modules configurator</Link>
              </li>
              <li>
                <Link to="/">Media</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h6 class="text-uppercase">Customer Care</h6>
            <ul class="text-uppercase">
              <li>
                <Link to="/">Faqs</Link>
              </li>
              <li>
                <Link to="/">Shipping</Link>
              </li>
              <li>
                <Link to="/">Exchange &amp; Returns</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h6 class="text-uppercase">We Accept</h6>
            <ul className={footerModule.icons}>
              <li>
                <Link to="/">
                  <VisaIcon />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <MasterIcon />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <PaypalIcon />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h6 class="text-uppercase">Socials</h6>
            <ul className={footerModule.icons}>
              <li>
                <Link to="/">
                  <FacebookIcon />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <InstagramIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Link to="/">
              <Logo className="logo" />
            </Link>
          </div>
          <div className="col-md-2">
            <h6>M.INT</h6>
            <ul>
              <li>
                <Link to="/">Media</Link>
              </li>
              <li>
                <Link to="/">FAQs</Link>
              </li>
              <li>
                <Link to="/">Terms</Link>
              </li>
              <li>
                <Link to="/">Privacy</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6>Customer Care</h6>
            <ul>
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
          <div className="col-md-2">
            <h6>Socials</h6>
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
          <div className="col-md-2">
            <h6>Payment Methods</h6>
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
        </div>
      </div>
    </footer>
  )
}

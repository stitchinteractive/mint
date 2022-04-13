import * as React from "react"
import { Link } from "gatsby"
import { StoreContext } from "../context/store-context"
import Logo from "../icons/logo"
import { Navigation } from "./navigation"
import { CartButton } from "./cart-button"
import ProfileIcon from "../icons/profile"
import SearchIcon from "../icons/search"
import {
  header,
  test,
  container,
  logo as logoCss,
  searchButton,
  nav
} from "./header.module.css"

export function Header() {
  const { checkout, loading, didJustAddToCart } = React.useContext(StoreContext)

  const items = checkout ? checkout.lineItems : []

  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <div className={container}>
      <header className={header}>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/">
              <Logo className="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul
                className="navbar-nav w-100"
                style={{ border: "1px solid red" }}
              >
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/shop"
                  >
                    Shop
                  </Link>
                </li>
              </ul>
              <div className="{test}"></div>
              <ul
                className="navbar-nav w-100 justify-content-end"
                style={{ border: "1px solid red" }}
              >
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/shop"
                  >
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/about-us">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/lookbook">
                    Lookbook
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/interior-design"
                  >
                    Interior Design
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/membership"
                  >
                    Membership
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/blog">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

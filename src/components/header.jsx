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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
                <Link className="nav-link" to="/lookbook">
                  Lookbook
                </Link>
                <Link className="nav-link" to="/interior-design">
                  Interior design
                </Link>
                <Link className="nav-link" to="/membership">
                  Membership
                </Link>
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

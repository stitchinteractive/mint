import * as React from "react"
import { Link } from "gatsby"
import Logo from "../icons/logo"
import SearchIcon from "../icons/search"
import ProfileIcon from "../icons/profile"
import CartIcon from "../icons/cart"
import * as headerModule from "./header.module.css"

export function Header() {
  return (
    <div className={headerModule.container_header}>
      <header className={headerModule.header}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 d-flex align-items-center">
              <Link to="/">
                <Logo className="logo" />
              </Link>
            </div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-12 d-flex justify-content-end">
                  <ul className={headerModule.nav_link_icon}>
                    <li>
                      <Link to="/search">
                        <SearchIcon />
                      </Link>
                    </li>
                    <li>
                      <Link to="/profile">
                        <ProfileIcon />
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart">
                        <CartIcon />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-12 d-flex justify-content-end">
                  <ul className={headerModule.nav_link}>
                    <li>
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link to="/lookbook">Lookbook</Link>
                    </li>
                    <li>
                      <Link to="/interior-design">Interior Design</Link>
                    </li>
                    <li>
                      <Link to="/membership">Membership</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

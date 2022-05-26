import * as React from "react"
import { Link } from "gatsby"
import Logo from "../icons/logo"
import SearchIcon from "../icons/search"
import ProfileIcon from "../icons/profile"
import CartIcon from "../icons/cart"
import * as headerModule from "./header.module.css"
import Navbar from "react-bootstrap/Navbar"

export function Header() {
  return (
    <div className={headerModule.container_header}>
      <header className={headerModule.header}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 col-md-2 d-flex align-items-top align-items-md-center">
              <Link to="/">
                <Logo className="logo" />
              </Link>
            </div>
            <div className="col-8 col-md-10">
              <div className="row">
                <div className="col-md-12 d-flex justify-content-end">
                  <ul className={headerModule.nav_link_icon}>
                    <li>
                      <Link to="/search">
                        <SearchIcon />
                      </Link>
                    </li>
                    <li>
                      <Link to="/login">
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

                {/*
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
                */}
              </div>
            </div>
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </header>
    </div>
  )
}

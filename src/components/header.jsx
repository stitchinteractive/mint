import * as React from "react"
import { Link } from "gatsby"
import Logo from "../icons/logo"
import SearchIcon from "../icons/search"
import ProfileIcon from "../icons/profile"
import CartIcon from "../icons/cart"
import * as headerModule from "./header.module.css"
import Navbar from "react-bootstrap/Navbar"
import { Container, Nav, Form, FormControl, Button } from "react-bootstrap"

export function Header() {
  return (
    /*
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
    */
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="me-auto">
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <Nav.Link href="/lookbook">Lookbook</Nav.Link>
            <Nav.Link href="/interior-design">Interior Design</Nav.Link>
            <Nav.Link href="/membership">Membership</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

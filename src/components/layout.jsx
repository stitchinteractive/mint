import * as React from "react"
import { SkipNavContent, SkipNavLink } from "./skip-nav"
import { Header } from "./header"
import { Footer } from "./footer"
import { Seo } from "./seo"

export function Layout({ children }) {
  return (
    <div>
      <Seo />
      <SkipNavLink />
      <Header />
      <div className="container-fluid">
        <div className="content_padding">
          <SkipNavContent>{children}</SkipNavContent>
        </div>
      </div>
      <Footer />
    </div>
  )
}

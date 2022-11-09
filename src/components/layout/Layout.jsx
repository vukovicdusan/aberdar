import Header from "../Header"
import Footer from "../Footer"
import Wrapper from "../layout/Wrapper"
import React, { Fragment } from "react"

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header></Header>
      <main>
        <Wrapper>{children}</Wrapper>
      </main>
      <Footer></Footer>
    </Fragment>
  )
}

export default Layout

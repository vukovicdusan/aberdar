import Header from "../Header"
import Footer from "../Footer"
import Wrapper from "../layout/Wrapper"
import React, { Fragment } from "react"
import { getImage, withArtDirection } from "gatsby-plugin-image"

const Layout = props => {
  const nodes = props.imgData.allFile.nodes
  const img = nodes.filter(image => image.name === "logo-black")
  const imgWhite = nodes.filter(image => image.name === "logo-yellow")
  const images = withArtDirection(getImage(img[0]), [
    {
      media: "(prefers-color-scheme: dark)",
      image: getImage(imgWhite[0]),
    },
  ])
  return (
    <Fragment>
      <Header imgData={images}></Header>
      <main>
        <Wrapper>{props.children}</Wrapper>
      </main>
      <Footer imgData={images}></Footer>
    </Fragment>
  )
}

export default Layout

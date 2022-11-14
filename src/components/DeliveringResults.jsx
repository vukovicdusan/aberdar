import React, { Fragment } from "react"
import Region from "./layout/Region"
import listItems from "../../static/ListCompData"
import ListComponent from "./ListComponent"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import * as styles from "../styles/DeliveringResults.module.css"

const DeliveringResults = props => {
  const nodes = props.imgData.allFile.nodes
  const img = nodes.filter(image => image.name === "zastava")
  const imgWhite = nodes.filter(image => image.name === "zastava_bela")
  const images = withArtDirection(getImage(img[0]), [
    {
      media: "(prefers-color-scheme: dark)",
      image: getImage(imgWhite[0]),
    },
  ])

  return (
    <Fragment>
      <Region idProp={"results"}>
        <div>
          <h2 className="text-big">
            Delivering results with
            <br /> cutting-edge tools.
          </h2>
        </div>
        <div className="[ switcher ] [ mr-bs-4 ]">
          <div>
            <p>
              We pride ourselves with keeping up-to-date with all the latest web
              analytics development and tools, including:
            </p>
          </div>
          <div className="stack">
            <ListComponent items={listItems.results}></ListComponent>
          </div>
        </div>

        <div className="[ switcher ] [ mr-bs-4 ]">
          <div className={`${styles.unleashStack} [ stack ]`}>
            <h2 className="text-big">
              Unleash the power
              <br /> of your website.
            </h2>
            <p className="mr-bs-2">
              Too many businesses neglect their website. We can help you to
              unlock the potential of your most powerful asset.
            </p>
            <p>
              Get in touch today to find out how our expert web analytics and
              data services can boost your business.
            </p>
            <button className="[ button ] [ mr-bs-4 ]">Book A Call Now</button>
          </div>
          <GatsbyImage image={images} alt="flag"></GatsbyImage>
        </div>
      </Region>
    </Fragment>
  )
}

export default DeliveringResults

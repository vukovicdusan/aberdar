import React, { Fragment } from "react"
import * as styles from "../styles/Process.module.css"
import Region from "./layout/Region"
import ListComponent from "../components/ListComponent"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import listItems from "../../static/ListCompData"
const Process = props => {
  const nodes = props.imgData.allFile.nodes
  const img = nodes.filter(image => image.name === "riba")
  const imgWhite = nodes.filter(image => image.name === "riba_bela")
  const images = withArtDirection(getImage(img[0]), [
    {
      media: "(prefers-color-scheme: dark)",
      image: getImage(imgWhite[0]),
    },
  ])
  return (
    <Fragment>
      <Region idProp={"process"}>
        <div>
          <h2 className="text-big">
            Your path to
            <br /> web success.
          </h2>
        </div>
        <div className="[ switcher ] [ mr-bs-4 ]">
          <div>
            <p>
              Over the years, we've developed a robust process to optimize the
              performance of your website and digital marketing channels.
            </p>
          </div>
          <div className="stack">
            <ListComponent items={listItems.successPath}></ListComponent>
            <a href="#contact" className="[ button ] [ mr-bs-4 ]">
              Discover More
            </a>
          </div>
        </div>

        <div className="mr-bs-4">
          <h2 className="text-big">
            Serving all
            <br /> industries.
          </h2>
        </div>
        <div className="[ switcher ] [ mr-bs-4 ]">
          <GatsbyImage
            className={styles.fishImg}
            image={images}
            alt="fish"
            objectFit="contain"
          ></GatsbyImage>
          <div className="[ stack ] [ big-stack ]">
            <p>
              Over the past decade, we have worked with businesses involved in a
              wide range of industries and verticals, including:
            </p>
            <ListComponent
              items={listItems.servingAllIndustries}
            ></ListComponent>
            <p>
              We can define and implement KPI tracking for any type of business
              - technical or non-technical.
            </p>
          </div>
        </div>
      </Region>
    </Fragment>
  )
}

export default Process

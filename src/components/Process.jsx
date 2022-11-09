import React, { Fragment } from "react"
import * as styles from "../styles/Process.module.css"
import Region from "./layout/Region"
import ListComponent from "../components/ListComponent"
import { StaticImage } from "gatsby-plugin-image"
import listItems from "../../static/ListCompData"
const Process = () => {
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
            <button className="[ button ] [ mr-bs-4 ]">Discover More</button>
          </div>
        </div>

        <div className="mr-bs-4">
          <h2 className="text-big">
            Serving all
            <br /> industries.
          </h2>
        </div>
        <div className="[ switcher ] [ mr-bs-4 ]">
          <StaticImage
            className={styles.fishImg}
            src="../images/riba.png"
            // width={250}
            placeholder="blurred"
            layout="fullWidth"
            objectFit="contain"
            alt="fish"
          ></StaticImage>
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
              - technical or non-tehnical.
            </p>
          </div>
        </div>
      </Region>
    </Fragment>
  )
}

export default Process

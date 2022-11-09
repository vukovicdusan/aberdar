import React, { Fragment } from "react"
import Region from "./layout/Region"
import listItems from "../../static/ListCompData"
import ListComponent from "./ListComponent"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/DeliveringResults.module.css"

const DeliveringResults = () => {
  return (
    <Fragment>
      <Region>
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
          <StaticImage
            src="../images/zastava.png"
            placeholder="blurred"
            layout="fullWidth"
            objectFit="contain"
            alt="flag"
          ></StaticImage>
        </div>
      </Region>
    </Fragment>
  )
}

export default DeliveringResults

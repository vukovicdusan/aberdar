import React from "react"
import * as styles from "../styles/DarkSection.module.css"
import Wrapper from "./layout/Wrapper"
import Region from "./layout/Region"
import { StaticImage } from "gatsby-plugin-image"
import arrow from "../../static/images/arrow-right.svg"

const DarkSection = () => {
  return (
    <div className="background-dark full-bleed">
      <Wrapper>
        <Region>
          <div className="[ switcher ]">
            <div className={`${styles.mainStackLeft} [ stack ]`}>
              <h2 className="[ text-light ] [ text-big ]">
                Tired of shooting in the dark?
              </h2>
              <div className="stack">
                <p className="text-light">
                  Digital marketing only performs well when you know your web
                  data inside-out.
                </p>
                <p className="text-light">
                  That's where we come in. We'll setup reliable website tracking
                  that includes:
                </p>
                <img className="mr-bs-4" width={100} src={arrow} alt="arrow" />
              </div>
            </div>
            <div className={`${styles.slingshotStack} [ stack ]`}>
              <StaticImage
                src="../images/pracka.png"
                width={300}
                placeholder="blurred"
                // layout="fullWidth"
                alt="slingshot"
              ></StaticImage>
              <div
                className={`${styles.slingshotSubStack} [ text-light ] [ stack ]`}
              >
                <h5 className="text-bold">Accurate Market Attribution</h5>
                <p>
                  - Find out which marketing channels bring in the highest
                  quality users.
                </p>
              </div>
              <div
                className={`${styles.slingshotSubStack} [ text-light ] [ stack ]`}
              >
                <h5 className="text-bold">Detailed User Behaviour Tracking</h5>
                <p>
                  - Discover what people are actually doing when they visit your
                  website.
                </p>
              </div>
            </div>
          </div>
        </Region>
      </Wrapper>
    </div>
  )
}

export default DarkSection

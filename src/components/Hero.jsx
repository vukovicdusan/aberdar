import React from "react"
import * as styles from "../styles/Hero.module.css"
import Region from "./layout/Region"
import { StaticImage } from "gatsby-plugin-image"
const Hero = () => {
  return (
    <Region id="hero">
      {/* <div> */}
      <div className={styles.heroGridMain}>
        <h1 className="text-jumbo">Get To Know Your Web Users Better</h1>
        <svg
          className={styles.circleTitle}
          viewBox="0 0 100 100"
          width="100"
          height="100"
        >
          <defs>
            <path
              id="circle"
              d="
              M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text fontSize="13">
            <textPath xlinkHref="#circle">
              Expert web analytics consultancy.
            </textPath>
          </text>
        </svg>
        <div>
          <p>
            - helping you to build a more accurate picture of your website
            visitors and users.
          </p>
        </div>
      </div>

      <div className={`${styles.heroSwitcher} [ switcher ]`}>
        <div className={styles.heroGridSecondary}>
          <p className="text-big">
            Cost-effective & <br />
            accurate data services
          </p>
          <StaticImage
            src="../images/logo-yellow.png"
            placeholder="blurred"
            alt="logo"
            objectFit="contain"
          ></StaticImage>
        </div>
        <div className={`${styles.heroBottomRight} [ stack ]`}>
          <div className={`${styles.heroBottomRightContent} [ stack ]`}>
            <p>Top-tier web analytics doesn't need to cost the earth.</p>
            <p>
              Over the past seven years, we've delivered cost-effective and
              impactful web data strategy, implementation, and support to more
              than <span>150 clients</span>.
            </p>
            <p>
              We'll help you to get the most out of your web data, improve your
              marketing performance, and grow your business.
            </p>
          </div>
          <div>
            <button className="button">Book A Free Consultation</button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Region>
  )
}

export default Hero

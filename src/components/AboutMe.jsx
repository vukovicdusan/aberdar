import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "../styles/AboutMe.module.css"
import Region from "./layout/Region"
const AboutMe = () => {
  return (
    <Region idProp={"about"}>
      <h2 className="text-big">About me.</h2>
      <div className="[ switcher ] [ mr-bs-2 ]">
        <div>
          <StaticImage
            className={styles.aboutMeImg}
            src="../images/aboutme-2.jpg"
            width={350}
            placeholder="blurred"
            layout="constrained"
            objectFit="contain"
            alt="flag"
          ></StaticImage>
        </div>
        <div className="big-stack">
          <div className="stack">
            <p>
              Hey there! I'm Vladimir. I'm a web analytics expert who helps
              organizations make environments for data-driven decisions. Whether
              by tracking user behavior, defining KPIs, or improving marketing
              data collection, I'm passionate about leveraging web analytics to
              help businesses thrive. <br></br>
              <br></br>
              When I'm not tracking what people do on websites, you may find me
              in my garden growing my spices and stressing about why my chili
              plants have so few peppers.
            </p>
          </div>
          <p className="text-big">
            Vladimir <br /> Milić
          </p>
        </div>
      </div>
    </Region>
  )
}

export default AboutMe

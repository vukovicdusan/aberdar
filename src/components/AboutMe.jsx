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
            src="../images/aboutme.jpg"
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis, libero. Ullam error pariatur reiciendis incidunt,
              asperiores ducimus dolorum iusto voluptatibus tempora maxime sequi
              excepturi doloribus vel nemo quae odio labore.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
              debitis ullam beatae vero quaerat molestiae enim eius veniam
              pariatur unde eveniet quidem suscipit voluptatibus aspernatur
              voluptatum saepe vitae quisquam, atque, maiores blanditiis tenetur
              culpa, eum repudiandae inventore? Quam, necessitatibus
              voluptatibus.
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

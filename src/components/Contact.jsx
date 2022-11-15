import React from "react"
import Region from "./layout/Region"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/Contact.module.css"
const Contact = () => {
  return (
    <Region idProp={"contact"}>
      <div className="switcher">
        <div className="contact">
          <h2 className="text-big">Contact.</h2>
          <form
            action=""
            className={`${styles.formStack} [ stack ] [ mr-bs-4 ]`}
          >
            <div className={`${styles.inputsStack} [ stack ]`}>
              <label className="visually-hidden" htmlFor="name">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
              />
              <label className="visually-hidden" htmlFor="name">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
              />
              <label className="visually-hidden" htmlFor="name">
                Message
              </label>

              <textarea
                className="textarea"
                type="text"
                id="message"
                name="message"
                rows={4}
                placeholder="Message"
              />
            </div>
            <button className="[ button ] [ mr-b-auto ]">Send Email</button>
          </form>
        </div>

        <StaticImage
          src="../images/logo-yellow.png"
          placeholder="blurred"
          objectFit="contain"
          alt="logo"
        ></StaticImage>
      </div>
    </Region>
  )
}

export default Contact

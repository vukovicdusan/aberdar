import React from "react"
import Region from "./layout/Region"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/Contact.module.css"
import { useForm } from "@formspree/react"
const Contact = () => {
  const api = process.env.FORMSPREE_API_ENDPOINT

  const [state, handleSubmit] = useForm(api)

  return (
    <Region idProp={"contact"}>
      <div className="switcher">
        <div className="contact">
          <h2 className="text-big">Contact.</h2>
          <form
            onSubmit={handleSubmit}
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
            <input type="text" name="_gotcha" class={styles.honeypot} />
            {state.succeeded ? (
              <p className="text-main">
                Thank you for your message, I will get back to you asap.
              </p>
            ) : (
              ""
            )}
            <button className="[ button ] [ mr-b-auto ]">
              Book A Free Consultation
            </button>
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

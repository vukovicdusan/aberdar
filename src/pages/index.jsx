// import React, { useState, useEffect } from "react"
import React from "react"
import DarkSection from "../components/DarkSection"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Process from "../components/Process"
import Testimonials from "../components/Testimonials"
import AboutMe from "../components/AboutMe"
import BackToTop from "../components/BackToTop"
import Layout from "../components/layout/Layout"
import "../styles/globals.css"
import DeliveringResults from "../components/DeliveringResults"
import Contact from "../components/Contact"
import { graphql, useStaticQuery } from "gatsby"
// import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"

export const Head = () => (
  <>
    <title>Aberdar - Web Analytics Consultancy</title>
    <meta
      name="description"
      content="Aberdar is a top tier web analytics consultancy agency"
    />
  </>
)
export default function Home({ imgData }) {
  // const [mode, setMode] = useState()

  // const onSelectMode = mode => {
  //   setMode(mode)
  // }

  // useEffect(() => {
  //   // Add listener to update styles
  //   window
  //     .matchMedia("(prefers-color-scheme: dark)")
  //     .addEventListener("change", e =>
  //       onSelectMode(e.matches ? "dark" : "light")
  //     )

  //   // Setup dark/light mode for the first time
  //   onSelectMode(
  //     window.matchMedia("(prefers-color-scheme: dark)").matches
  //       ? "dark"
  //       : "light"
  //   )

  //   // Remove listener
  //   return () => {
  //     window
  //       .matchMedia("(prefers-color-scheme: dark)")
  //       .removeEventListener("change", () => {})
  //   }
  // }, [])

  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
    }
  `)

  return (
    <Layout imgData={data}>
      <BackToTop></BackToTop>
      <Hero></Hero>
      <DarkSection></DarkSection>
      <Services imgData={data}></Services>
      <Process imgData={data}></Process>
      <Testimonials></Testimonials>
      <DeliveringResults imgData={data}></DeliveringResults>
      <AboutMe></AboutMe>
      <Contact></Contact>
    </Layout>
  )
}

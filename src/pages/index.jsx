import React from "react"
import DarkSection from "../components/DarkSection"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Process from "../components/Process"
import Testimonials from "../components/Testimonials"
import AboutMe from "../components/AboutMe"
// import BackToTop from "../components/BackToTop"
import Layout from "../components/layout/Layout"
import "../styles/globals.css"
import DeliveringResults from "../components/DeliveringResults"
import Contact from "../components/Contact"

export const Head = () => (
  <>
    <title>Aberdar - Web Analytics Consultancy</title>
    <meta
      name="description"
      content="Aberdar is a top tier web analytics consultancy agency"
    />
  </>
)
export default function Home() {
  return (
    <Layout>
      {/* <BackToTop></BackToTop> */}
      <Hero></Hero>
      <DarkSection></DarkSection>
      <Services></Services>
      <Process></Process>
      <Testimonials></Testimonials>
      <DeliveringResults></DeliveringResults>
      <AboutMe></AboutMe>
      <Contact></Contact>
    </Layout>
  )
}

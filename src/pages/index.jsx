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

export const Head = () => (
  <>
    <title>Vladimir Milic - Web Analytics Expert</title>
    <meta
      name="description"
      content="Vladimir is a top tier web analytics consultancy expert"
    />
    <script id="gtm-script">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://load.data.vladimirmilic.com/dxtneslk.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TJCTN2WM')`}</script>
  </>
)
export default function Home() {
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
      <Testimonials imgData={data}></Testimonials>
      <DeliveringResults imgData={data}></DeliveringResults>
      <AboutMe></AboutMe>
      <Contact></Contact>
    </Layout>
  )
}

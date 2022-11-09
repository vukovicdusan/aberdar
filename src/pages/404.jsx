import React from "react"
import Wrapper from "../components/layout/Wrapper"
export const Head = () => (
  <>
    <title>Aberdar - Web Analytics Consultancy</title>
    <meta name="description" content="Hello World" />
  </>
)
export default function NotFound() {
  return (
    <main>
      <Wrapper>
        <p>Sorry, we don't have that!</p>
      </Wrapper>
    </main>
  )
}

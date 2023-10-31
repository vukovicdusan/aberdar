import React from "react"
import Region from "./layout/Region"
import TestimonialsSlider from "./TestimonialsSlider"

const Testimonials = props => {
  return (
    <Region>
      <TestimonialsSlider imgData={props.imgData}></TestimonialsSlider>
    </Region>
  )
}

export default Testimonials

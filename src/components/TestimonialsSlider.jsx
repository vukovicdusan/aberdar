import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import Region from "./layout/Region"
import "swiper/css"
import "swiper/css/navigation"
import TestimonialBox from "./TestimonialBox"
import testimonialsData from "../../static/TestimonialsData"

import { Navigation } from "swiper"

export default function TestimonialsSlider(props) {
  return (
    <Region>
      <Swiper
        slidesPerView="auto"
        spaceBetween={50}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="swiper"
        breakpoints={{
          0: { slidesPerView: 1 },
          750: { slidesPerView: 2 },
          1000: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialBox
              content={testimonial.content}
              name={testimonial.name}
              title={testimonial.title}
              position={testimonial.position}
              logo={testimonial.logo}
              imgData={props.imgData}
            ></TestimonialBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </Region>
  )
}

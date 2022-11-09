import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "../styles/Services.module.css"
import Service from "../components/Service"
import servicesContent from "../../static/ServicesData"
import Region from "./layout/Region"

const Services = () => {
  return (
    <Region idProp={"services"}>
      <div className="big-stack">
        <div className="stack">
          <p className="text-big">
            Deep<br></br> analysis.
          </p>
          <p className="text-big">
            Valuable<br></br> insights.
          </p>
        </div>
        <div className="switcher">
          <p className="[ text-jumbo ] [ text-main ]">150+ clients</p>
          <div className="[ stack ] [ stack-space-between ]">
            <p>
              Your website performance depends on the decisions you make. To
              succeed you need to make informed decisions based on hard facts,
              not guesswork. We make sure you get valuable insights by taking
              the time to understand your business, market, and web strategy.
            </p>
            <p>
              With more than 150 clients served, we have experience of almost
              every scenario imaginable. This means we can deliver
              highly-focused web analytics solutions, without overlooking any
              important aspects.
            </p>
          </div>
        </div>
        <div className={`${styles.chairSwitcher} [ switcher ]`}>
          <div className="[ stack ] [ stack-space-between ]">
            <p className="text-big">
              Web analytics packages to suit any business.
            </p>
            <p className={styles.chairMediumText}>
              We offer a range of services to meet your specific needs:
            </p>
          </div>

          <StaticImage
            src="../images/stolica.png"
            width={350}
            placeholder="blurred"
            layout="constrained"
            objectFit="contain"
            alt="chair"
          ></StaticImage>
        </div>
        <div className={`${styles.servicesGrid} [ grid ]`}>
          {servicesContent.map(service => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </Region>
  )
}

export default Services

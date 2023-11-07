import React from "react"
import PropTypes from "prop-types"
import { Script } from "gatsby"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <Script>
          {(function (w, d, s, l, i) {
            w[l] = w[l] || []
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : ""
            j.async = true
            j.src =
              "https://load.data.vladimirmilic.com/dxtneslk.js?id=" + i + dl
            f.parentNode.insertBefore(j, f)
          })(window, document, "script", "dataLayer", "GTM-TJCTN2WM")}
        </Script>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

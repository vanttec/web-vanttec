//~ DEPENDENCIES
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from "react-helmet"

//~ COMPONENTS

//~ MEDIA

//~ MISCELLANEOUS

const Seo = (props) => {
  //? VARIABLES - STATES - PROPS - REFS

  //? CONTEXT

  //? SANITY DATA
    // const data = useStaticQuery(graphql`
    //   query {
    //   }
    // `)

  //? FUNCTIONS

  //? EFFECTS

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content={"xDescription"} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta property="og:description" content={"xDescription"} />
      <meta property="og:title" content={"xTitle"} />
      <meta property="og:image" content={"xImage"} />
      <meta property="og:image:width" content="256" />
      <meta property="og:image:height" content="256" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={"xImage"} />

      <link rel="shortcut icon" href={"xFavicon"} />

      <title>{"localHost"}</title>
    </Helmet>
  )
}

export default Seo
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MapWrapper from "../components/MapWrapper"



const Soundsystems = (props) => {

  const { data } = props;
  const soundsLength = data.allStrapiSoundsystem.totalCount

  return (
    <Layout>
      <h1 style={{ marginBottom: 'var(--space-3)' }}>The <b>Belgian Reggae Soundsystem</b> Family <b>({soundsLength})</b></h1>
      <Link to="/">Back Home</Link>
      <MapWrapper />
    </Layout>
  )
}

export const Head = () => (
  <Seo title="Soundsystems">
    <meta property="og:image" content="../soundsystem-cover.jpg" />
    <meta name="image" content="../soundsystem-cover.jpg" />
  </Seo>
)

export default Soundsystems

export const pageQuery = graphql`
  query {
    allStrapiSoundsystem {
      totalCount
    }
  }
`
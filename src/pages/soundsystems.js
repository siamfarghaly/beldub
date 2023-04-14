import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MapWrapper from "../components/MapWrapper"



const Soundsystems = () => {




  return (
    <Layout>
      {/* <h1 style={{ marginBottom: 'var(--space-1)' }}>The Bel<b>DUB</b> Family</h1>
      <Link to="/">Back Home</Link> */}
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

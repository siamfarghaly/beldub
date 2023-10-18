import React from "react"
import { Link, Script } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MapWrapper from "../components/MapWrapper"



const Soundsystems = () => {




  return (
    <Layout>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-EFRMKX44HB" />
      <Script id="gtagScript">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EFRMKX44HB');
        `}
      </Script>
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

import * as React from "react"
import { Link } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Team = () => (
  <Layout>
    <h1 style={{marginBottom:'var(--space-1)'}}>BelDUB <b>Team</b></h1>
    <Link to="/">Back Home</Link>
    <div style={{marginTop:'var(--space-3)',display:'grid',  gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )", gridGap:"30px"}}>
      <img style={{borderRadius:'4px'}} alt="Andreas from Beldub taking an interview with King Earthquake" src="../beldub-during-interview.jpeg" />
      <div>
        <h2 style={{textAlign:"left",color:'var(--color-primary)'}}> BelDUB created a platform that brings you reports of everything dubbing in Belgium. It's the sequel to a documentary on Belgian soundsystem culture.</h2>
        <p>
          Music reporter Andreas Peeters has been documenting the early days of the Belgian soundsystems since 2009. After a few years of making videos with distorted audio, he met cameraman Gieljan Van Goethem. Together they created the BelDUB documentary, which was screened for the first time march 2015 and broadcasted on the channel Op Acht in the summer of 2016. In the years after the release, Andreas kept doing interviews and event reports. Since 2019 he teamed up with the one-man video and photography powerhouse Doryan Rosario. 
          Team BelDUB is here for you to report on all things dubbing in Belgium, pushing the soundsystem scene  forward since 2009.
        </p>
      </div>
    </div>
  </Layout>
)

export const Head = () => (
  <Seo title="BelDUB Team">
    <meta property="og:image" content="../beldub-during-interview.jpeg" />
    <meta name="image" content="../beldub-during-interview.jpeg" />
  </Seo>
)

export default Team

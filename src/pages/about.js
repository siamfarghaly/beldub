import * as React from "react"
import { Link } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <h1 style={{marginBottom:'var(--space-3)'}}>About <b>Beldub</b></h1>
    <Link to="/">Back Home</Link>
    <div style={{marginTop:'var(--space-3)',display:'grid',  gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )", gridGap:"30px"}}>
      <img style={{borderRadius:'4px'}} alt="Andreas from Beldub taking an interview with King Earthquake" src="../beldub-during-interview.jpeg" />
      <div>
        <h2 style={{textAlign:"left",color:'var(--color-primary)'}}> BelDub created a platform that brings you reports of everything dubbing in Belgium. It's the sequel to a documentary on Belgian soundsystem culture.</h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Arcu dictum varius duis at consectetur lorem donec massa. Orci sagittis eu volutpat odio facilisis. Molestie ac feugiat sed lectus vestibulum. Sed vulputate odio ut enim blandit. Aliquet eget sit amet tellus cras. Neque volutpat ac tincidunt vitae semper quis. Condimentum id venenatis a condimentum vitae sapien. Lectus vestibulum mattis ullamcorper velit sed ul </p>
      </div>
    </div>

  </Layout>
)

export const Head = () => (
  <Seo title="About Us">
    <meta property="og:image" content="../beldub-during-interview.jpeg" />
    <meta name="image" content="../beldub-during-interview.jpeg" />
  </Seo>
)

export default About

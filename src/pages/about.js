import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <h1 style={{marginBottom:'var(--space-3)'}}>About <b>Beldub</b></h1>
    <Link to="/">Back Home</Link>
  </Layout>
)

export const Head = () => <Seo title="About page" />

export default About

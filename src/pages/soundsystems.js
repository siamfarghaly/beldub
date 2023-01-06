import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Soundsystems = () => (
  <Layout>
    <h1>The <b>Belgian Reggae Soundsystem List</b></h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Soundsystems" />

export default Soundsystems

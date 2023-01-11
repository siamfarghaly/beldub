import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Dubcalendar = () => (
  <Layout>
    <h1>Upcoming Dub & Soundsystem <b>Events in Belgium</b></h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Dubcalendar" />

export default Dubcalendar

import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"


const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <Link style={{marginBottom:'20px'}} to="/">Back Home</Link>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

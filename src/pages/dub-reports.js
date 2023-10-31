import React, { useState } from "react"
import { Link, graphql, Script } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const Reports = props => {

  const { data } = props
  const allPosts = data.allStrapiPost.nodes
  const emptyQuery = ""
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    const query = event.target.value
    const { data } = props
    const posts = data.allStrapiPost.nodes || []
    const filteredData = posts.filter(post => {
      const { title, content } = post
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        content.data.content.toLowerCase().includes(query.toLowerCase())
      )
    })
    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

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
      <h1 style={{ marginBottom: 'var(--space-1)' }}>Check our latest <b>Dub Reports</b></h1>
      <Link to="/">Back Home</Link>
      <div className="searchBox" style={{ marginBottom: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
        <label style={{ fontSize: 'var(--font-lg)', fontWeight: 'var(--font-bold)' }} htmlFor="search">🔎 Search: </label>
        <input
          name="search"
          className="searchInput"
          type="text"
          style={{ paddingLeft: 'var(--space-3)', borderRadius: '4px', fontSize: 'var(--font-lg)', width: '100%', height: 'var(--space-6)' }}
          aria-label="Search"
          placeholder="E.g. `King Alpha`,`Interview` or `Youth & Truth`..."
          onChange={handleInputChange}
        />
      </div>
      <div className="blogPosts" style={{
        display: "grid",
        gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )",
        gridGap: "30px",
        marginTop: "30px"
      }}>
        {posts.map((blogpost, i) => (
          <div key={i} style={{ maxWidth: '600px', textAlign: 'left' }}>
            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={blogpost.slug}>
              <GatsbyImage style={{ borderRadius: '4px' }} image={getImage(blogpost.cover.localFile.childImageSharp.gatsbyImageData)} alt={blogpost.slug} />
              <p style={{ fontSize: 'var(--font-sm)', marginTop: 'var(--space-1)', marginBottom: '0' }}>{blogpost.publishedAt}</p>
              <h2 style={{ lineHeight: 'var(--line-height-dense)', color: 'var(--color-primary)', marginTop: 'var(--space-1)', marginBottom: 'var(--space-2)', textAlign: 'left' }}><b>{blogpost.title}</b></h2>
              <p style={{ fontWeight: "var(--font-medium)" }}>{blogpost.content.data.content.slice(0, 250).replace(/#|_|*/g, "")}<span style={{ textDecoration: 'none', color: 'var(--color-primary)' }}> ...more</span></p>
            </Link>
          </div>
        ))} </div>
    </Layout>
  )
}


export const Head = () => (
  <Seo title="Dub Reports">
    <meta property="og:image" content="../blog-cover.jpg" />
    <meta name="image" content="../blog-cover.jpg" />
  </Seo>
)

export default Reports

export const pageQuery = graphql`
query BlogQuery {
  allStrapiPost(sort: {publishedAt: DESC}) {
    nodes {
      title
      slug
      video
      content {
        data {
          content
        }
      }
      cover {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      publishedAt(formatString: "DD MMMM, YYYY")
    }
  }
}
`

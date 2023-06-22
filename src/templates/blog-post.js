import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ReactMarkdown from 'react-markdown'

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPost = ({ data }) => {
  const { title, slug, cover, content, video, createdAt } = data.strapiPost
  return (
    <Layout>
      <h1 style={{ marginBottom: 'var(--space-1)' }}>{title}</h1>
      
      <p margin><Link style={{display:'inline'}} to="/dub-reports">Go back</Link> {createdAt}</p>
      {video !== null && <iframe src={video} style={{ aspectRatio: '16/9' }} width="100%" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>}
      {video === null && <GatsbyImage image={getImage(cover.localFile.childImageSharp.gatsbyImageData)} alt={slug} />}
      <p style={{ margin: 'auto'; margin-top: 24px; }}> <ReactMarkdown>{content.data.content}</ReactMarkdown></p>
     
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String) {
    strapiPost(slug: {eq: $slug}) {
        title
        slug
        video
        content {
            data {
            content
            }
        }
        other {
            localFile {
            childImageSharp {
                gatsbyImageData
            }
            }
        }
        cover {
          localFile {
            childImageSharp {
                gatsbyImageData
            }
            url
          }
        }
        createdAt(formatString: "DD MMMM, YYYY")
    }
  }
`

export const Head = ({ data }) => (
  <Seo title={data.strapiPost.title}>
    <meta property="og:image" content={data.strapiPost.cover.localFile.url} />
    <meta name="image" content={data.strapiPost.cover.localFile.url} />
  </Seo>
)

export default BlogPost

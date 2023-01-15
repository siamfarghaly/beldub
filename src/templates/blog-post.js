import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPost = ({data}) => {
  const {title, slug, cover, content, video, createdAt} = data.strapiPost
  return(
    <Layout>
      <h1 style={{marginBottom:'var(--space-1)'}}>{title}</h1>
      <Link style={{marginBottom:'var(--space-1)'}} to="/blog">Go back</Link>
      <GatsbyImage image={getImage(cover.localFile.childImageSharp.gatsbyImageData)} alt={slug} />
      <p>{video}</p>
      <p>{content.data.content}</p>
      <p>{createdAt}</p>
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
            }
        }
        createdAt(fromNow: true)
    }
  }
`

export const Head = () => <Seo title="BlogPost" />

export default BlogPost

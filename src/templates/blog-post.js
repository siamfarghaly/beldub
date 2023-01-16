import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPost = ({data}) => {
  const {title, slug, cover, content, video, createdAt} = data.strapiPost
  return(
    <Layout>
            <Link style={{marginBottom:'var(--space-1)'}} to="/blog">Go back</Link>

      <h1 style={{marginBottom:'var(--space-1)'}}>{title}</h1>
      <p>{createdAt}</p>
      {video !== null && <iframe src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
      {video === null && <GatsbyImage image={getImage(cover.localFile.childImageSharp.gatsbyImageData)} alt={slug} />}
      
      <p style={{margin:'auto'}}>{content.data.content}</p>
      
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

import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const Blog = () => {
  const data = useStaticQuery(graphql`
    query BlogQuery {
      allStrapiPost {
        nodes {
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
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Latest <b>Videos, Articles & Interviews</b></h1>
      <Link to="/">Go back to the homepage</Link>
        {data.allStrapiPost.nodes.map((blogpost, i) => (
         
              <div style={{textAlign:'left'}}>
                <GatsbyImage image={getImage(blogpost.cover.localFile.childImageSharp.gatsbyImageData)} alt={blogpost.slug} />
                <h1><b>{blogpost.title}</b></h1>
                <p style={{fontWeight: "var(--font-medium)"}}>{blogpost.content.data.content}</p>
              </div>
        ))} 
    </Layout>
  )
}
  

export const Head = () => <Seo title="Blog" />

export default Blog

import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const Blog = () => {
  const data = useStaticQuery(graphql`
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
        publishedAt
      }
    }
  }
  `)

  return (
    <Layout>
      <h1>Latest <b>Videos, Articles & Interviews</b></h1>
      <Link style={{marginBottom:'20px'}} to="/">Back Home</Link>
      <div className="blogPosts" style={{display:"grid",
  gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )",
  gridGap:"30px",
  marginTop:"30px"}}>
        {data.allStrapiPost.nodes.map((blogpost, i) => (
              <div key={i} style={{textAlign:'left'}}>
                <Link style={{color:'inherit',textDecoration:'inherit'}} to={blogpost.slug}>
                  <GatsbyImage style={{borderRadius:'4px'}} image={getImage(blogpost.cover.localFile.childImageSharp.gatsbyImageData)} alt={blogpost.slug} />
                  <h2 style={{lineHeight:'var(--line-height-dense)',color:'var(--color-primary)',marginTop:'var(--space-3)',marginBottom:'var(--space-2)',textAlign:'left'}}><b>{blogpost.title}</b></h2>
                  <p style={{fontWeight: "var(--font-medium)"}}>{blogpost.content.data.content.slice(0, 250)}<a href={blogpost.slug}style={{textDecoration:'none'}}> ...more</a></p>
                </Link>
              </div>
        ))} </div>
    </Layout>
  )
}
  

export const Head = () => <Seo title="Blog" />

export default Blog

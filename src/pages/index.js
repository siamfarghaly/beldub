import * as React from "react"
import { Link, graphql } from "gatsby"

// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import  "../components/index.module.css"






const IndexPage = props => {
  const { data } = props
  const allPosts = data.allStrapiPost.nodes
  return(
    <Layout>
    <div className="hero" style={{zIndex:'-100',position:'absolute',top:'250px', overflow:'hidden',left:'0', backgroundPosition:'90%',height:'60vh',width:'100vw',backgroundSize:'cover',backgroundRepeat:'no-repeat', backgroundImage:'url("../beldubcover.jpg")'}}>
      
    </div>
    <div className="hero" style={{zIndex:'-105',position:'absolute',top:'100px', overflow:'hidden',left:'0', backgroundPosition:'0%',height:'60vh',width:'100vw',backgroundSize:'cover',backgroundRepeat:'no-repeat', backgroundColor:'black'}}>
      
    </div>
     <div style={{height:'68vh',display:'flex', flexDirection:'column', justifyContent:'space-between', marginBottom:'10vh'}}>
     <h1 style={{fontSize:'2.5rem',textAlign:'center'}}>
        The platform that brings you reports of everything <b>dubbing in Belgium.</b>
      </h1>
      <a href="https://vimeo.com/201431711" className="actionButton" style={{padding:'1rem',textAlign:'center',textDecoration:'none',cursor:'pointer',boxShadow:"4px 6px 5px var(--color-blue)", margin:'0 auto',width:'300px',color:'var(--color-primary)', border:'2px solid var(--color-primary)',borderRadius:'4px',backgroundColor:'#161615', height:'65px'}}>
        <h3 style={{marginTop:'0'}}>WATCH DOCUMENTARY</h3>
      </a>
    </div>
    <h1 style={{marginBottom:'var(--space-3)'}}>Latest <b>updates</b></h1>
    <div className="blogPosts" style={{display:"grid", gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )", gridGap:"30px", marginTop:"30px"}}>
        {allPosts.map((blogpost, i) => (
              <div key={i} style={{maxWidth:'600px',textAlign:'left'}}>
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

export const Head = () => <Seo title="Home" />

export default IndexPage
export const pageQuery = graphql`
query {
  allStrapiPost(sort: {publishedAt: DESC}, limit: 3) {
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
`
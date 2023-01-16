import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SoundPage = ({data}) => {
  const {name, year, city, fb, insta, other, slug, img} = data.strapiSoundsystem
  return(
    <Layout>
      
      <Link style={{marginBottom:'var(--space-1)'}} to="/soundsystems">Go back</Link>
      <div style={{boxShadow:"4px 6px 5px var(--color-blue)",color:'var(--color-primary)',backgroundColor:'var(--color-text)',borderRadius:'4px',padding:'var(--space-4)', display:"grid", gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )", gridGap:"30px", marginTop:"30px"}}>
        <div>
          <h1 style={{marginBottom:'var(--space-1)'}}>{name}</h1>
          {fb !== null && <a href={fb}><img style={{filter:'invert(1)', marginRight:'var(--space-2)',height:'40px'}} src={'/fb.png'} alt="fb-icon" /></a>}
          {insta !== null && <a href={insta}><img style={{filter:'invert(1)',height:'40px'}} src={'/insta.png'} alt="insta-icon" /></a>}
          {other !== null && <a href={other}><img style={{filter:'invert(1)', height:'40px'}} src={'/web.png'} alt="web-icon" /></a>}
          {city !== null && <h2 style={{ textAlign:'left',margin:'0', color:'var(--color-black'}}>From: {city}</h2>}
          {year !== null && <h2 style={{  textAlign:'left',margin:'0', color:'var(--color-black'}}>Since: {year}</h2>}

        
        </div>
        <GatsbyImage image={getImage(img.localFile.childImageSharp.gatsbyImageData)} alt={slug} />

        
      </div>
     
    </Layout>
  )
  
  }

export const query = graphql`
  query ($slug: String) {
    strapiSoundsystem(slug: {eq: $slug}) {
      name
      year
      city
      fb
      insta
      other
      lat
      long
      slug
      img {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      updatedAt(fromNow: true)
    }
  }
`

export const Head = ({data}) => <Seo title={data.strapiSoundsystem.name} />

export default SoundPage

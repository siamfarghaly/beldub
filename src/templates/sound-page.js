import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SoundPage = ({data}) => {
  const {name, year, city, fb, insta, other, slug, img, updatedAt} = data.strapiSoundsystem
  return(
    <Layout>
      <h1 style={{marginBottom:'var(--space-1)'}}>{name}</h1>
      <Link style={{marginBottom:'var(--space-1)'}} to="/soundsystems">Go back</Link>
      <GatsbyImage image={getImage(img.localFile.childImageSharp.gatsbyImageData)} alt={slug} />
      <p>{city}</p>
      <p>{year}</p>
      <p>{fb}</p>
      <p>{insta}</p>
      <p>{other}</p>
      <p>{updatedAt}</p>
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

export const Head = () => <Seo title="Soundpage" />

export default SoundPage

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]


const moreLinks = [
  { text: "Youtube", url: "https://www.youtube.com/@beldub9678" },
  {
    text: "Instagram",
    url: "https://www.instagram.com/beldub_/",
  },
  {
    text: "Facebook",
    url: "https://www.facebook.com/beldubdocu",
  },
  {
    text: "Tiktok",
    url: "https://www.tiktok.com/@beldub_",
  },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    {/* <div style={{background_color :'var(--color-blue', width:'100%'}}>
      <StaticImage
          src="../images/beldubcover.jpeg"
          loading="eager"
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ 
            margin:'auto',
            marginBottom: `var(--space-3)`,
          }}
      />
    </div> */}
    
    <div className={styles.textCenter}>
      <h1 style={{textAlign:'left'}}>
        <b>Beldub:</b> the platform that brings you reports of everything dubbing in Belgium.
      </h1>
      <p className={styles.intro}>
      
      </p>
    </div>
    <a href={'https://vimeo.com/201431711'}>
    <StaticImage
        src="../images/promofoto-documentaire-beldub.jpeg"
        loading="eager"
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ 
          margin:'auto',
          marginBottom: `var(--space-3)`,
         }}
      />
    </a>
    
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

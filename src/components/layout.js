/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const socials = [
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


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
          zIndex: '1',
        }}
      >
        <main>{children}</main>
        
      </div>
      <footer
          style={{
            padding:'var(--space-5)',
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
            textAlign:'center',
            width: '100%',
            backgroundColor: 'var(--color-black)'
          }}
        >
          <div style={{ height:'2px', margin:'auto',maxWidth:'400px', backgroundColor:'var(--color-primary)'}}></div>
          <h2 style={{marginTop:'var(--space-3)', marginBottom:'var(--space-2)'}}>Our social media channels:</h2>
          <div >
            <a href={socials[0].url}><img style={{marginRight:'var(--space-2)',height:'40px'}} src={'/yt.png'} alt="youtube-icon" /></a>
            <a href={socials[1].url}><img style={{marginRight:'var(--space-2)',height:'40px'}} src={'/insta.png'} alt="insta-icon" /></a>
            <a href={socials[2].url}><img style={{marginRight:'var(--space-2)',height:'40px'}} src={'/fb.png'} alt="fb-icon" /></a>
            <a href={socials[3].url}><img style={{marginRight:'var(--space-2)',height:'40px'}} src={'/tiktok.png'} alt="tiktok-icon" /></a>
          </div>
          

          Beldub © {new Date().getFullYear()} &middot; Site by
          {` `}
          <a href="https://www.linkedin.com/in/siam-farghaly/">Siam Farghaly</a>
        </footer>
    </>
  )
}

export default Layout

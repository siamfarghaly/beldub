import * as React from "react"
import { Link, graphql, Script } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../components/index.module.css"
import HeroVideo from "../assets/hero-video.mp4"
import HeroWebm from "../assets/hero-webm.webm"


const IndexPage = props => {
  const { data } = props
  const allPosts = data.allStrapiPost.nodes
  return (
    <Layout>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-EFRMKX44HB" />
      <Script id="gtagScript">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EFRMKX44HB');
        `}
      </Script>
      <div style={{fontSize:'22px',padding:'5px 5px 5px 5px',position:'absolute',width:'100vw', textAlign:'center',left:'0', top:'120px', color:'var(--color-black)', marginTop:'-30px',backgroundColor:'var(--color-primary'}}><b>The platform that brings you reports of everything <b style={{color:'var(--color-black)'}}>dubbing in Belgium.</b></b></div>
      <div className="hero video-container">
      <video className="hero-video" loop autoPlay muted poster="../beldub-docu-still.jpg">
        <source src={HeroVideo} type="video/mp4" />
        <source src={HeroWebm} type="video/webm" />
      </video>
      </div>
      {/* <div className="hero" style={{ zIndex: '-100', position: 'absolute', top: '250px', overflow: 'hidden', left: '0', backgroundPosition: '90%', height: '60vh', width: '100vw', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: 'url("../beldubcover.jpg")' }}>
      </div> */}
      
      <div style={{ height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'end', marginBottom: 'var(--space-6)' }}>
        {/* <h1 style={{ fontSize: '2.5rem', textAlign: 'center', color: 'var(--color-white)', textShadow:'2px 4px 5px var(--color-black)' }}>
          The platform that brings you reports of everything <b style={{color:'var(--color-primary)'}}>dubbing in Belgium.</b>
        </h1> */}
        <a href="https://youtu.be/_iq2Yt_KXFg" className="actionButton" style={{ padding: '1rem', textAlign: 'center', textDecoration: 'none', cursor: 'pointer', boxShadow: "4px 6px 5px var(--color-blue)", margin: '0 auto', width: '300px', color: 'var(--color-primary)', border: '2px solid var(--color-primary)', borderRadius: '4px', backgroundColor: '#161615', height: '65px' }}>
          <h3 style={{ marginTop: '0', marginBottom: 'var(--space-3)' }}>Watch BelDUB docu (2015)</h3>
        </a>
      </div>
      <h2 style={{ textAlign: 'left',lineHeight:'2rem', fontSize: '2rem', color: 'var(--color-text)', marginBottom: 'var(--space-3)' }}>Check our latest <span style={{ color: 'var(--color-primary)' }}>Dub Reports</span></h2>
      <div className="latestPosts" style={{ display: "grid", gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )", gridGap: "30px", marginTop: "30px" }}>
        {allPosts.map((blogpost, i) => (
          <div key={i} style={{ maxWidth: '600px', textAlign: 'left' }}>
            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={"dub-reports/" + blogpost.slug}>
              <GatsbyImage style={{ borderRadius: '4px' }} image={getImage(blogpost.cover.localFile.childImageSharp.gatsbyImageData)} alt={blogpost.slug} />
              <p style={{ fontSize: 'var(--font-sm)', marginTop: 'var(--space-1)', marginBottom: '0' }}>{blogpost.publishedAt}</p>
              <h2 style={{ lineHeight: 'var(--line-height-dense)', color: 'var(--color-primary)', marginTop: 'var(--space-1)', marginBottom: 'var(--space-2)', textAlign: 'left' }}><b>{blogpost.title}</b></h2>
              <p style={{ fontWeight: "var(--font-medium)" }}>{blogpost.content.data.content.slice(0, 250)}
                {blogpost.video !== null && <span style={{ color: 'var(--color-primary)' }}> ...Watch video</span>}
                {blogpost.video === null && <span style={{ color: 'var(--color-primary)' }}> ...Read more</span>}
              </p>
            </Link>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: 'var(--space-4)' }}>
        <a href="/dub-reports" className="actionButton" style={{ padding: '1rem', textAlign: 'center', textDecoration: 'none', cursor: 'pointer', boxShadow: "4px 6px 5px var(--color-blue)", margin: '0 auto', width: '300px', color: 'var(--color-primary)', border: '2px solid var(--color-primary)', borderRadius: '4px', backgroundColor: '#161615', height: '65px' }}>
          <h3 style={{ marginTop: '0', marginBottom: 'var(--space-3)' }}>VIEW ALL</h3>
        </a>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo title="Home">
    <meta property="og:image" content="../beldub-docu-still.jpg" />
    <meta name="image" content="../beldub-docu-still.jpg" />
  </Seo>
)

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
      cover {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      publishedAt(formatString: "DD MMMM, YYYY")
    }
  }
}
`

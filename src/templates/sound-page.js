import * as React from "react"
import { graphql, Link, Script } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SoundPage = ({ data }) => {
  const { name, year, city, fb, insta, other, slug, img } = data.strapiSoundsystem
  let json = JSON.parse(data.allStrapiEventcalendar.nodes[0].content);
  const allEvents = json.VCALENDAR[0].VEVENT;
  const filteredEvents = allEvents.filter(dubEvent => {
    const { SUMMARY, DESCRIPTION } = dubEvent
    if (name.toLowerCase().includes("soundsystem")) {
      return (
        SUMMARY.toLowerCase().includes(name.slice(0, -11).toLowerCase()) ||
        SUMMARY.toLowerCase().includes(name.replace(/-/g, ' ').slice(0, -11).toLowerCase()) ||
        DESCRIPTION.toLowerCase().includes(name.slice(0, -11).toLowerCase()) ||
        DESCRIPTION.toLowerCase().includes(name.replace(/-/g, ' ').slice(0, -11).toLowerCase())
      )
    } else {
      return (
        SUMMARY.toLowerCase().includes(name.toLowerCase()) ||
        SUMMARY.toLowerCase().includes(name.replace(/-/g, ' ').toLowerCase()) ||
        DESCRIPTION.toLowerCase().includes(name.toLowerCase()) ||
        DESCRIPTION.toLowerCase().includes(name.replace(/-/g, ' ').toLowerCase())
      )
    }
  });
  function formatDate(dateCode) {
    let year = dateCode.substring(0, 4);
    let month = dateCode.substring(4, 6);
    let day = dateCode.substring(6, 8);
    let hours = dateCode.substring(9, 11);
    let minutes = dateCode.substring(11, 13);
    let date = new Date(year, month - 1, day, hours, minutes);
    // let dateString = date.toDateString();
    return (date);
  };
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
      <Link style={{ marginBottom: 'var(--space-1)' }} to="/soundsystems">Go back</Link>
      <div style={{ boxShadow: "4px 6px 5px var(--color-blue)", color: 'var(--color-primary)', backgroundColor: 'var(--color-text)', borderRadius: '4px', padding: 'var(--space-4)', display: "grid", gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )", gridGap: "30px", marginTop: "30px" }}>
        <div>
          <h1 style={{ marginBottom: 'var(--space-1)' }}>{name}</h1>
          {fb !== null && <a href={fb}><img style={{ marginRight: 'var(--space-2)', height: '40px' }} src={'/fb.png'} alt="fb-icon" /></a>}
          {insta !== null && <a href={insta}><img style={{ height: '40px' }} src={'/insta.png'} alt="insta-icon" /></a>}
          {other !== null && <a href={other}><img style={{ height: '40px' }} src={'/web.png'} alt="web-icon" /></a>}
          {city !== null && <h2 style={{ textAlign: 'left', margin: '0', color: 'var(--color-white' }}>From: {city}</h2>}
          {year !== null && <h2 style={{ textAlign: 'left', margin: '0', color: 'var(--color-white' }}>Since: {year}</h2>}
          {filteredEvents.length !== 0 && <h2 style={{ textAlign: 'left', margin: '0', color: 'var(--color-white' }}>Upcoming Events:</h2>}
          <div className="eventBox" style={{
            display: "grid",
            gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
            gridGap: "30px"
          }}>
            {
              filteredEvents.reverse().map((soundEvent, index) => {
                if (formatDate(soundEvent.DTSTART) > new Date()) {
                  return (
                    <div className="eventCard" key={index} style={{
                      backgroundColor: "var(--color-white)",
                      color: "var(--color-black)",
                      padding: "10px",
                      borderRadius: "4px",
                      border: "2px solid var(--color-primary)",
                      boxShadow: "4px 6px 5px var(--color-blue)",
                      maxWidth: "100%"
                    }}>
                      <a href={soundEvent.URL} style={{ textDecoration: "none" }}>
                        <h3 className="eventTitle" style={{ margin: "0", height: "80px" }}> <b>{soundEvent.SUMMARY}</b> </h3>
                        <div style={{ color: 'var(--color-black)', textAlign: "left" }}> {formatDate(soundEvent.DTSTART).toDateString()}<br />
                          {soundEvent.LOCATION}
                        </div>
                      </a>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
        <GatsbyImage style={{maxWidth:'100%'}} image={getImage(img.localFile.childImageSharp.gatsbyImageData)} alt={slug} />
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
          url
        }
      }
      updatedAt(fromNow: true)
    }
    allStrapiEventcalendar {
      nodes {
        content
      }
    }
  }
`

export const Head = ({ data }) => (
  <Seo title={data.strapiSoundsystem.name}>
    <meta property="og:image" content={data.strapiSoundsystem.img.localFile.url} />
    <meta name="image" content={data.strapiSoundsystem.img.localFile.url} />
  </Seo>
)

export default SoundPage

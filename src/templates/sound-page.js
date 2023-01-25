import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SoundPage = ({data}) => {
  const {name, year, city, fb, insta, other, slug, img} = data.strapiSoundsystem
  let json = JSON.parse(data.allStrapiEventcalendar.nodes[0].content);
  const allEvents = json.VCALENDAR[0].VEVENT;
  const filteredEvents = allEvents.filter(dubEvent => {
    const { SUMMARY, DESCRIPTION} = dubEvent
    return (
      SUMMARY.toLowerCase().includes(name.toLowerCase()) ||
      DESCRIPTION.toLowerCase().includes(name.toLowerCase())
    )
  });
  function formatDate(dateCode){
    let year        = dateCode.substring(0,4);
    let month       = dateCode.substring(4,6);
    let day         = dateCode.substring(6,8);
    let hours        = dateCode.substring(9,11);
    let minutes       = dateCode.substring(11,13);
    let date        = new Date(year, month-1, day, hours, minutes);
    let dateString = date.toDateString();
    return dateString;

  };
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
          <h2 style={{  textAlign:'left',margin:'0', color:'var(--color-black'}}>Upcoming Events:</h2>
          <div className="eventBox" style={{display:"grid",
  gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )",
  gridGap:"30px"}}>
        {
          filteredEvents.reverse().map((soundEvent, index) => {
            
              return(
                <div className="eventCard" key={index} style={{ backgroundColor:"var(--color-black)",
                  color:"var(--color-text)",
                  padding:"10px",
                  borderRadius:"4px",
                  boxShadow:"4px 6px 5px var(--color-blue)",
                  maxWidth:"600px"}}>
                  <a href={soundEvent.URL} style={{textDecoration:"none"}}>
                    <h3 className="eventTitle"style={{margin:"0", height:"80px"}}> <b>{soundEvent.SUMMARY}</b> </h3>
                    <div style={{color:'var(--color-text)', textAlign:"left"}}> {formatDate(soundEvent.DTSTART)}<br/>
                    {soundEvent.LOCATION}</div>
                    
                  </a>
                 
                  {/* <p>{soundEvent.DESCRIPTION}</p>  */}
                  
                </div>
              )
            
          })
        }
      </div>
        
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
    },
    allStrapiEventcalendar {
      nodes {
        content
      }
    }
  }
`

export const Head = ({data}) => <Seo title={data.strapiSoundsystem.name} />

export default SoundPage

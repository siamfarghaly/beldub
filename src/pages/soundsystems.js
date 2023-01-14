import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const Soundsystems = () => {
  const data = useStaticQuery(graphql`
    query SoundsystemQuery {
      allStrapiSoundsystem {
        nodes {
          name
          slug
          year
          lat
          long
          city
          fb
          insta
          other
          img {
            url
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
      <h1>The <b>Belgian Reggae Soundsystem List</b></h1>
      <Link style={{marginBottom:'20px'}} to="/">Back Home</Link>
      <MapContainer style={{ borderRadius:'4px', height: '400px'}} center={[50.70538598041358, 4.494414422841746]} zoom={7}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=TSXhCTpRTaXUw3cJHU0A"
        />
        {data.allStrapiSoundsystem.nodes.map((sound, i) => (
          <Marker key={i} position={[sound.lat, sound.long]}>
            <Popup>
              <div style={{textAlign:'center'}}>
                <GatsbyImage image={getImage(sound.img.localFile.childImageSharp.gatsbyImageData)} alt={sound.slug} />
                <p><b>{sound.name}</b><br /> from {sound.city} <br /> {sound.year}</p> 
              </div>
              
            </Popup>
          </Marker>
        ))}
        
      </MapContainer>
      <div className="eventBox" style={{display:"grid",
  gridTemplateColumns: "repeat( auto-fit, minmax(215px, 1fr) )",
  gridGap:"30px",
  marginTop:"30px"}}>
      {
          data.allStrapiSoundsystem.nodes.map((sound, index) => {
            
              return(
                <div className="soundCard" key={index} style={{ height:'360px',backgroundColor:"white",
                  color:"var(--color-black)",
                  padding:"10px",
                  borderRadius:"4px",
                  boxShadow:"4px 6px 5px var(--color-blue)"}}>
                  <a href={sound.slug} style={{textDecoration:"none"}}>
                  <h2 className="soundName"style={{fontWeight:'var(--font-bold)',lineHeight:'var(--line-height-dense)', margin:'0',height:"70px",textAlign:'center'}}> <b>{sound.name}</b> </h2>
                  <GatsbyImage image={getImage(sound.img.localFile.childImageSharp.gatsbyImageData)} alt={sound.slug} style={{marginTop:'0',height:'250px'}} />
                  </a>
                  <p style={{marginBottom:'0',textAlign:"left"}}>{sound.city} </p>
                  <p style={{marginBottom:'0',marginTop:'-25px',textAlign:"right"}}>{sound.year}</p>
                  {/* <p>{dubEvent.DESCRIPTION}</p> */}
                  
                </div>
              )
            
          })
        }
        </div>
    </Layout>
  )
}
  

export const Head = () => <Seo title="Soundsystems" />

export default Soundsystems

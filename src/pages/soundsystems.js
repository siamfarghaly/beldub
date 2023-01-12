import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import leaflet from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
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
      <Link to="/">Go back to the homepage</Link>
      <MapContainer style={{ height: '400px' }} center={[50.70538598041358, 4.494414422841746]} zoom={7} maxZoom={20}>
        <MarkerClusterGroup
          chunkedLoading
        >
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
        </MarkerClusterGroup>

      </MapContainer>
    </Layout>
  )
}
  

export const Head = () => <Seo title="Soundsystems" />

export default Soundsystems

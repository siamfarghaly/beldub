import React, { useState } from "react"
import { Link , graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const Soundsystems = props => {
  
  // const data = useStaticQuery(graphql`
  //   query SoundsystemQuery {
  //     allStrapiSoundsystem(sort: {name: ASC}) {
  //       nodes {
  //         name
  //         slug
  //         year
  //         lat
  //         long
  //         city
  //         fb
  //         insta
  //         other
  //         img {
  //           url
  //           localFile {
  //             childImageSharp {
  //               gatsbyImageData
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)


  const { data } = props
  const allSounds = data.allStrapiSoundsystem.nodes

  const emptyQuery = ""

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value
    const { data } = props

    const sounds = data.allStrapiSoundsystem.nodes || []

    const filteredData = sounds.filter(sound => {
      const { name, city, year} = sound
      return (
        name.toLowerCase().includes(query.toLowerCase()) ||
        (year==query) ||
        city.toLowerCase().includes(query.toLowerCase())
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const sounds = hasSearchResults ? filteredData : allSounds

  return (
    
    <Layout>
      <h1 style={{marginBottom:'var(--space-3)'}}>The <b>Belgian Reggae Soundsystem</b> List</h1>
      <Link to="/">Back Home</Link>
      <div className="searchBox" style={{marginBottom:'var(--space-3)',marginTop:'var(--space-3)'}}>
        <label style={{fontSize:'var(--font-lg)',fontWeight:'var(--font-bold)'}}htmlFor="search">???? Search: </label>
        <input
          
          name="search"
          className="searchInput"
          type="text"
          style={{paddingLeft:'var(--space-3)',borderRadius:'4px',fontSize:'var(--font-lg)',width:'100%',height:'var(--space-6)'}}
          aria-label="Search"
          placeholder="E.g. `Gent` ,`Ionyouth` or `2018`..."
          onChange={handleInputChange}
        />
      </div>
      
      <MapContainer style={{ borderRadius:'4px', height: '400px'}} center={[50.70538598041358, 4.494414422841746]} dragging={false} zoom={7}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=TSXhCTpRTaXUw3cJHU0A"
        />
        {sounds.map((sound, i) => (
          <Marker key={i} position={[sound.lat, sound.long]}>
            <Popup>
              <Link to={sound.slug} style={{color:'inherit',textDecoration:"inherit"}}>
              <div style={{textAlign:'center'}}>
                <GatsbyImage style={{borderRadius:'4px'}} image={getImage(sound.img.localFile.childImageSharp.gatsbyImageData)} alt={sound.slug} />
                <p><b>{sound.name}</b><br /> from {sound.city} <br /> {sound.year}</p> 
              </div>
              </Link>
              
            </Popup>
          </Marker>
        ))}
        
      </MapContainer>
      
      <div className="soundBox" style={{display:"grid",
  gridTemplateColumns: "repeat( auto-fit, minmax(215px, 1fr) )",
  gridGap:"30px",
  marginTop:"var(--space-3)"}}>
      {
          sounds.map((sound, index) => {
            
              return(
                <div className="soundCard" key={index} style={{ 
                  height:'360px',
                  backgroundColor:"var(--color-text)",
                  padding:"var(--space-1)",
                  borderRadius:"4px",
                  border:'1px solid var(--color-primary)',
                  boxShadow:"4px 6px 5px var(--color-primary)",
                  maxWidth:"600px"}}>
                  <Link to={sound.slug} style={{color:'inherit',textDecoration:"inherit"}}>
                    <div style={{height:'70px',display:'flex', flexDirection:'column', justifyContent:'center'}}>
                    <h2 className="soundName"style={{color:'var(--color-primary)',fontWeight:'var(--font-heavy)',lineHeight:'1.8rem', margin:'0',textAlign:'center',padding:'var(--space-4)'}}> <b>{sound.name}</b> </h2>

                    </div>
                   <GatsbyImage image={getImage(sound.img.localFile.childImageSharp.gatsbyImageData)} alt={sound.slug} style={{marginTop:'0',borderRadius:'4px',height:'250px'}} />
                  </Link>
                  <p style={{marginLeft:'var(--space-2)',fontWeight:'var(--font-bold)',marginBottom:'0',marginTop:'var(--space-1)',textAlign:"left",color:'var(--color-black)'}}>{sound.city} </p>
                  {sound.year !== null && <p style={{marginRight:'var(--space-2)', fontWeight:'var(--font-bold)', marginBottom:'0',color:'var(--color-black)',marginTop:'-25px',textAlign:"right"}}>{sound.year}</p>}
                  
                </div>
              )
            
          })
        }
        </div>
    </Layout>
      )
  
}

export const Head = () => (
  <Seo title="Soundsystems">
    <meta property="og:image" content="../soundsystem-cover.jpg" />
    <meta name="image" content="../soundsystem-cover.jpg" />
  </Seo>
)

export default Soundsystems
export const pageQuery = graphql`
query {
  allStrapiSoundsystem(sort: {name: ASC}) {
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
`
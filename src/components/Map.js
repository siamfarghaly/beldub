import React, { useState } from 'react';
import { Link, graphql, useStaticQuery } from "gatsby"
import { MapContainer, Marker, Popup } from 'react-leaflet';
import VectorTileLayer from 'react-leaflet-vector-tile-layer';
import MarkerClusterGroup from 'react-leaflet-cluster';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default function Map() {
    const data = useStaticQuery(graphql`
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
  `)

    const allSounds = data.allStrapiSoundsystem.nodes
    const emptyQuery = ""
    const [state, setState] = useState({
        filteredData: [],
        query: emptyQuery,
    })

    const handleInputChange = event => {
        console.log(event.target.value)
        const query = event.target.value
        const sounds = data.allStrapiSoundsystem.nodes || []
        const filteredData = sounds.filter(sound => {
            const { name, city, year } = sound
            return (
                name.toLowerCase().includes(query.toLowerCase()) ||
                (year == query) ||
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

    const svgIcon = L.divIcon({
        html: `
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <defs>
                <style>
                .cls-1 {
                    fill: #fff;
                }

                .cls-2 {
                    fill: #1d1d1b;
                }

                .cls-3 {
                    fill: #1d1d1d;
                }
                </style>
            </defs>
            <path class="cls-3" d="m77.77,15.75c-7.02-5.74-15.83-9.36-25.48-9.85h0c-.75-.04-1.52-.06-2.28-.06C25.7,5.84,6,25.61,6,50c0,15.86,8.33,29.77,20.83,37.55,6.73,4.19,14.66,6.61,23.17,6.61.68,0,1.37-.01,2.05-.04,23.34-1.08,41.95-20.42,41.95-44.12,0-13.83-6.32-26.16-16.23-34.25Zm-25.72,76.78c-.68.05-1.37.06-2.05.06-8.22,0-15.9-2.35-22.39-6.42l12.7-22.44c2.73,1.95,6.08,3.09,9.69,3.09.69,0,1.38-.04,2.05-.12v25.83Zm0-27.42c-.67.09-1.36.14-2.05.14-3.33,0-6.41-1.08-8.92-2.91-3.79-2.76-6.27-7.26-6.27-12.34,0-8.23,6.51-14.95,14.65-15.23.17,0,.35-.02.54-.02,3.91,0,7.47,1.48,10.17,3.93,3.09,2.79,5.02,6.83,5.02,11.32,0,7.72-5.72,14.1-13.14,15.11Zm9.08-27.68c-2.96-2.64-6.86-4.25-11.13-4.25-.13,0-.27,0-.39.01l2.52-25.72c9.34.46,17.89,3.96,24.69,9.53l-15.69,20.43Z"/>
            <path class="cls-1" d="m60.17,38.68c-2.7-2.45-6.26-3.93-10.17-3.93-.19,0-.37.01-.54.02-8.14.28-14.65,7-14.65,15.23,0,5.08,2.48,9.58,6.27,12.34,2.51,1.83,5.59,2.91,8.92,2.91.69,0,1.38-.05,2.05-.14,7.42-1.01,13.14-7.39,13.14-15.11,0-4.49-1.93-8.53-5.02-11.32Zm-10.17,14.92c-.08,0-.15,0-.23-.01h0c-.32-.02-.62-.08-.91-.18-.44-.14-.83-.37-1.17-.66-.28-.24-.51-.51-.71-.81h0c-.36-.57-.56-1.23-.56-1.94,0-1.36.75-2.53,1.85-3.15.51-.28,1.1-.44,1.73-.44,1.25,0,2.35.64,2.99,1.61.38.57.59,1.25.59,1.98,0,1.99-1.6,3.6-3.58,3.6Z"/>
            <path class="cls-2" d="m53.58,50c0,1.99-1.6,3.6-3.58,3.6-.08,0-.15,0-.23-.01h0c-.32-.02-.62-.08-.91-.18-.44-.14-.83-.37-1.17-.66-.28-.24-.51-.51-.71-.81h0c-.36-.57-.56-1.23-.56-1.94,0-1.36.75-2.53,1.85-3.15.51-.28,1.1-.44,1.73-.44,1.25,0,2.35.64,2.99,1.61.38.57.59,1.25.59,1.98Z"/>
            <path class="cls-1" d="m52.05,66.7v25.83c-.68.05-1.37.06-2.05.06-8.22,0-15.9-2.35-22.39-6.42l12.7-22.44c2.73,1.95,6.08,3.09,9.69,3.09.69,0,1.38-.04,2.05-.12Z"/>
            <path class="cls-1" d="m76.82,17l-15.69,20.43c-2.96-2.64-6.86-4.25-11.13-4.25-.13,0-.27,0-.39.01l2.52-25.72c9.34.46,17.89,3.96,24.69,9.53Z"/>
        </svg>`,
        className: "svg-icon",
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });

    return (
        <div>
            <div className="searchBox" style={{ marginBottom: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
                <label style={{ fontSize: 'var(--font-lg)', fontWeight: 'var(--font-bold)' }} htmlFor="search">🔎 Search: </label>
                <input
                    name="search"
                    className="searchInput"
                    type="text"
                    style={{ paddingLeft: 'var(--space-3)', borderRadius: '4px', fontSize: 'var(--font-lg)', width: '100%', height: 'var(--space-6)' }}
                    aria-label="Search"
                    placeholder="E.g. `Gent` ,`Ionyouth` or `2018`..."
                    onChange={handleInputChange}
                />
            </div>
            <div className="map__container custom-popup">
                <MapContainer style={{ borderRadius: '4px', height: '400px' }} center={[50.70538598041358, 4.494414422841746]} dragging={true} zoom={7} maxZoom={20}>
                    <MarkerClusterGroup chunkedLoading maxClusterRadius={30}>
                        <VectorTileLayer
                            styleUrl="https://api.maptiler.com/maps/d1978af7-1fc3-48b1-93b3-223cc990e712/style.json?key=TSXhCTpRTaXUw3cJHU0A"
                        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        {sounds.map((sound, i) => (
                            <Marker key={i} position={[sound.lat, sound.long]} icon={svgIcon}>
                                <Popup>
                                    <Link to={sound.slug} style={{ color: 'inherit', textDecoration: "inherit" }}>
                                        <div style={{ textAlign: 'center' }}>
                                            <p style={{lineHeight: '20px', marginBottom: '10px'}}><b style={{ fontSize:'20px', color:'var(--color-primary)'}}>{sound.name}</b><br />{sound.city}<br />{sound.year}</p>
                                            <GatsbyImage style={{maxHeight:'180', borderRadius: '4px' }} image={getImage(sound.img.localFile.childImageSharp.gatsbyImageData)} alt={sound.slug} />
                                        </div>
                                    </Link>
                                </Popup>
                            </Marker>
                        ))}
                    </MarkerClusterGroup>
                </MapContainer>
            </div>
            <div className="soundBox" style={{
                display: "grid",
                gridTemplateColumns: "repeat( auto-fit, minmax(215px, 1fr) )",
                gridGap: "30px",
                marginTop: "var(--space-3)"
            }}>
                {
                    sounds.map((sound, index) => {
                        return (
                            <div className="soundCard" key={index} style={{
                                height: '360px',
                                backgroundColor: "var(--color-black)",
                                padding: "var(--space-1)",
                                borderRadius: "4px",
                                border: '2px solid var(--color-primary)',
                                boxShadow: "4px 6px 5px var(--color-blue)",
                                maxWidth: "600px"
                            }}>
                                <Link to={sound.slug} style={{ color: 'inherit', textDecoration: "inherit" }}>
                                    <div style={{ height: '70px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <h2 className="soundName" style={{ color: 'var(--color-primary)', fontWeight: 'var(--font-heavy)', lineHeight: '1.8rem', margin: '0', textAlign: 'center', padding: 'var(--space-4)' }}> <b>{sound.name}</b> </h2>

                                    </div>
                                    <GatsbyImage image={getImage(sound.img.localFile.childImageSharp.gatsbyImageData)} alt={sound.slug} style={{ marginTop: '0', borderRadius: '4px', height: '250px' }} />
                                </Link>
                                <p style={{ marginLeft: 'var(--space-2)', fontWeight: 'var(--font-bold)', marginBottom: '0', marginTop: 'var(--space-1)', textAlign: "left", color: 'var(--color-white)' }}>{sound.city} </p>
                                {sound.year !== null && <p style={{ marginRight: 'var(--space-2)', fontWeight: 'var(--font-bold)', marginBottom: '0', color: 'var(--color-white)', marginTop: '-25px', textAlign: "right" }}>{sound.year}</p>}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
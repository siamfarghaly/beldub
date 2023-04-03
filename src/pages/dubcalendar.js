import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"


const Dubcalendar = props => {

  const { data } = props
  let json = JSON.parse(data.allStrapiEventcalendar.nodes[0].content);
  const allDubEvents = json.VCALENDAR[0].VEVENT;
  const emptyQuery = ""
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    console.log(event.target.value);
    const query = event.target.value;
    const { data } = props;
    let json = JSON.parse(data.allStrapiEventcalendar.nodes[0].content);
    const dubEvents = json.VCALENDAR[0].VEVENT || [];
    const filteredData = dubEvents.filter(dubEvent => {
      const { SUMMARY, LOCATION, DESCRIPTION } = dubEvent
      return (
        SUMMARY.toLowerCase().includes(query.toLowerCase()) ||
        DESCRIPTION.toLowerCase().includes(query.toLowerCase()) ||
        LOCATION.toLowerCase().includes(query.toLowerCase())
      )
    })
    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const dubEvents = hasSearchResults ? filteredData : allDubEvents

  function formatDate(dateCode) {
    let year = dateCode.substring(0, 4);
    let month = dateCode.substring(4, 6);
    let day = dateCode.substring(6, 8);
    let hours = dateCode.substring(9, 11);
    let minutes = dateCode.substring(11, 13);
    let date = new Date(year, month - 1, day, hours, minutes);
    //  let dateString = date.toDateString();
    return (date);
  }

  return (
    <Layout>
      <h1 style={{ marginBottom: 'var(--space-3)' }}>Upcoming Dub & Soundsystem <b>Events in Belgium</b></h1>
      <Link to="/">Back Home</Link>
      <div className="searchBox" style={{ marginBottom: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
        <label style={{ fontSize: 'var(--font-lg)', fontWeight: 'var(--font-bold)' }} htmlFor="search">🔎 Search: </label>
        <input
          name="search"
          className="searchInput"
          type="text"
          style={{ paddingLeft: 'var(--space-3)', borderRadius: '4px', fontSize: 'var(--font-lg)', width: '100%', height: 'var(--space-6)' }}
          aria-label="Search"
          placeholder="E.g. `Buda BXL` ,`Kingstep` or 'Festival'..."
          onChange={handleInputChange}
        />
      </div>
      <div className="eventBox" style={{
        display: "grid", gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )", gridGap: "30px", marginTop: "30px"
      }}>
        {
          dubEvents.reverse().map((dubEvent, index) => {
            if (formatDate(dubEvent.DTSTART) > new Date()) {
              if (formatDate(dubEvent.DTSTART).getTime() < new Date().getTime() + 604800000) {
                return (
                  <div className="eventCard" key={index} style={{
                    backgroundColor: "var(--color-black)",
                    color: "var(--color-white)",
                    padding: "10px",
                    borderRadius: "4px",
                    boxShadow: "4px 6px 5px var(--color-blue)",
                    maxWidth: "600px",
                    border: "2px solid var(--color-primary)"
                  }}>
                    <a href={dubEvent.URL} style={{ textDecoration: "none" }}>
                      <h3 className="eventTitle" style={{ margin: "0", height: "80px" }}> <b>{dubEvent.SUMMARY}</b> </h3>
                      <div style={{ color: 'var(--color-white)', textAlign: "left" }}> {formatDate(dubEvent.DTSTART).toDateString()}<br />
                        {dubEvent.LOCATION}</div>
                    </a>
                    {/* <p>{dubEvent.DESCRIPTION}</p>  */}
                  </div>
                )
              } else {
                return (
                  <div className="eventCard" key={index} style={{
                    backgroundColor: "white",
                    color: "var(--color-black)",
                    padding: "10px",
                    borderRadius: "4px",
                    boxShadow: "4px 6px 5px var(--color-blue)",
                    maxWidth: "600px",
                    border: "2px solid var(--color-primary)"
                  }}>
                    <a href={dubEvent.URL} style={{ textDecoration: "none" }}>
                      <h3 className="eventTitle" style={{ margin: "0", height: "80px" }}> <b>{dubEvent.SUMMARY}</b> </h3>
                      <div style={{ color: 'var(--color-black)', textAlign: "left" }}> {formatDate(dubEvent.DTSTART).toDateString()}<br />
                        {dubEvent.LOCATION}</div>
                    </a>
                    {/* <p>{dubEvent.DESCRIPTION}</p>  */}
                  </div>
                )
              }
            }
          })
        }
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo title="Dubcalendar">
    <meta property="og:image" content="../events-cover.jpg" />
    <meta name="image" content="../events-cover.jpg" />
  </Seo>
)

export default Dubcalendar

export const pageQuery = graphql`
query {
  allStrapiEventcalendar {
    nodes {
      content
    }
  }
}
`
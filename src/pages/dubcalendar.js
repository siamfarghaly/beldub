import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


const Dubcalendar = () => {
  const data = useStaticQuery(graphql`
  query EventQuery {
    allStrapiEventcalendar {
      nodes {
        content
      }
    }
  }
  `);
  
  let json = JSON.parse(data.allStrapiEventcalendar.nodes[0].content);
  const dubEvents = json.VCALENDAR[0].VEVENT;
  function formatDate(dateCode){
       let year        = dateCode.substring(0,4);
       let month       = dateCode.substring(4,6);
       let day         = dateCode.substring(6,8);
       let hours        = dateCode.substring(9,11);
       let minutes       = dateCode.substring(11,13);
       let date        = new Date(year, month-1, day, hours, minutes);
       let dateString = date.toDateString();
       return dateString;

     }
  return(
    <Layout>
      <h1>Upcoming Dub & Soundsystem <b>Events in Belgium</b></h1>
      <Link style={{marginBottom:'20px'}} to="/">Back Home</Link>
      <div className="eventBox" style={{display:"grid",
  gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )",
  gridGap:"30px",
  marginTop:"30px"}}>
        {
          dubEvents.reverse().map((dubEvent, index) => {
            
              return(
                <div className="eventCard" key={index} style={{ backgroundColor:"white",
                  color:"var(--color-black)",
                  padding:"10px",
                  borderRadius:"4px",
                  boxShadow:"4px 6px 5px var(--color-blue)"}}>
                  <a href={dubEvent.URL} style={{textDecoration:"none"}}>
                  <h3 className="eventTitle"style={{margin:"0", height:"80px"}}> <b>{dubEvent.SUMMARY}</b> </h3>
                  </a>
                  <div style={{textAlign:"left"}}> {formatDate(dubEvent.DTSTART)}<br/>
                  {dubEvent.LOCATION}</div>
                  {/* <p>{dubEvent.DESCRIPTION}</p> */}
                  
                </div>
              )
            
          })
        }
      </div>    
    </Layout>
  )
}

export const Head = () => <Seo title="Dubcalendar" />

export default Dubcalendar

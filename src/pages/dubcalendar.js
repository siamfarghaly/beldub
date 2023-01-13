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
  console.log(dubEvents);
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
      <Link to="/">Go back to the homepage</Link>
      <div className="eventBox">
        {
          dubEvents.reverse().map((dubEvent, index) => {
              return(
                <div className="eventCard" key={index}>
                  <h3 className="eventTitle"> {dubEvent.SUMMARY} </h3>
                  <div> {formatDate(dubEvent.DTSTART)} </div>
                  <p> {dubEvent.LOCATION}</p>
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

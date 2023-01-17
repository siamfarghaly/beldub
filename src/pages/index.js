import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import  "../components/index.module.css"






const IndexPage = () => (
  
  <Layout>
    <div className="hero" style={{zIndex:'-100',position:'absolute',top:'250px', overflow:'hidden',left:'0', backgroundPosition:'90%',height:'50vh',width:'100vw',backgroundSize:'cover',backgroundRepeat:'no-repeat', backgroundImage:'url("../beldubcover.jpeg")'}}>
      
    </div>
    <div className="hero" style={{zIndex:'-105',position:'absolute',top:'100px', overflow:'hidden',left:'0', backgroundPosition:'0%',height:'50vh',width:'100vw',backgroundSize:'cover',backgroundRepeat:'no-repeat', backgroundColor:'black'}}>
      
    </div>
     <div style={{height:'60vh',display:'flex', flexDirection:'column', justifyContent:'space-between', marginBottom:'10vh'}}>
     <h1 style={{fontSize:'2.5rem',textAlign:'center'}}>
        The platform that brings you reports of everything <b>dubbing in Belgium.</b>
      </h1>
      <a href="https://vimeo.com/201431711" className="actionButton" style={{padding:'.6rem',textAlign:'center',textDecoration:'none',cursor:'pointer',boxShadow:"4px 6px 5px var(--color-blue)", margin:'0 auto',width:'250px',color:'var(--color-primary)', border:'2px solid var(--color-primary)',borderRadius:'4px',backgroundColor:'#161615', height:'50px'}}>
        <h3 style={{marginTop:'0'}}>WATCH DOCUMENTARY</h3>
      </a>
    </div> 
    
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

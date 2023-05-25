import * as React from "react"
import { Link } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Team = () => (
  <Layout>
    <h1 style={{ marginBottom: 'var(--space-1)' }}>BelDUB <b>Team</b></h1>
    <Link to="/">Back Home</Link>
    <h2 style={{ marginTop:'var(--space-5)',textAlign: "center", color: 'var(--color-primary)' }}> "BelDUB created a platform that brings you reports of everything dubbing in Belgium. It's the sequel to a documentary on Belgian soundsystem culture."</h2>
    <div style={{ marginTop: 'var(--space-5)' }}>
      {/* <img style={{borderRadius:'4px'}} alt="Andreas from Beldub taking an interview with King Earthquake" src="../beldub-during-interview.jpeg" /> */}
      {/* <div>
        <p>
          Music reporter Andreas Peeters has been documenting the early days of the Belgian soundsystems since 2009. After a few years of making videos with distorted audio, he met cameraman Gieljan Van Goethem. Together they created the BelDUB documentary, which was screened for the first time march 2015 and broadcasted on the channel Op Acht in the summer of 2016. In the years after the release, Andreas kept doing interviews and event reports. Since 2019 he teamed up with the one-man video and photography powerhouse Doryan Rosario. 
          Team BelDUB is here for you to report on all things dubbing in Belgium, pushing the soundsystem scene  forward since 2009.
        </p>
      </div> */}
      <div style={{  borderBottom:'2px dashed var(--color-primary)' ,display: 'grid',gridTemplateColumns: "repeat( auto-fit, minmax(400px, 1fr) )", alignItems: 'center', justifyItems:'center' }}>
        <img style={{ borderRadius: '4px', height: '300px' }} alt="Andreas from BelDUB" src="../Andreas.png" />
        <p>Part-time music reporter <b>Andreas Peeters</b> (°1984) has been documenting the early days of the Belgian soundsystems since 2009. After a few years of making videos with distorted audio, he met cameraman Gieljan Van Goethem. Together they created the BelDUB documentary, which was screened for the first time march 2015 and broadcasted on the channel Op Acht in the summer of 2016. In the years after the release, Andreas kept doing interviews and event reports. In 2019, he teamed up with the one-man video and photography powerhouse Doryan Rosario. Together they decided to gather a crew of reggae-minded reporters and create the very platform you’re looking at. Andreas took up the role of head editor.
          Andreas is also one of the founding members of <b>Tempest Soundsystem</b>, where he goes by the name of selector Roots Apostle.</p>
      </div>
      <div style={{ borderBottom:'2px dashed var(--color-primary)' ,display: 'grid',gridTemplateColumns: "repeat( auto-fit, minmax(400px, 1fr) )", alignItems: 'center', justifyItems:'center' }}>
      <img style={{  borderRadius: '4px', height: '300px' }} alt="Doryan from BelDUB" src="../Doryan.png" />
        <p>At a young age, <b>Doryan Rosario</b> (°1996) developed a passion for music photography and videos. As a student, he provided many aspiring hip-hop artists with a music video.Somewhere on the road, he picked up the love for dub music in general and soundsystems in particular. 8 years ago, he started making event video’s of soundsystem sessions. Since then, you would find him on every party. He built a solid reputation as a dub photographer, just have a look at his Instagram.
          Doryan is also known as a reggae selector by the name of <b>Dub Dokki</b>.</p>
      </div>
      <div style={{  borderBottom:'2px dashed var(--color-primary)' ,display: 'grid',gridTemplateColumns: "repeat( auto-fit, minmax(400px, 1fr) )", alignItems: 'center', justifyItems:'center' }}>
        <img style={{ borderRadius: '4px', height: '300px' }} alt="Dries from BelDUB" src="../Dries.png" />
        <p><b>Dries Talloen</b> aka <b>DT</b> (°1997) is one of those few writers with an academic background with a heart for reggae music. He graduated as a historian with a thesis on soundsystem culture. Recently he joined the BelDUB team as a historian, journalist and photographer. He is one of the founding members of the Bruges based <b>Roots Explosion Soundsystem</b>, with which he functions mainly as a selector and MC.</p>
      </div>
      <div style={{  borderBottom:'2px dashed var(--color-primary)' ,display: 'grid',gridTemplateColumns: "repeat( auto-fit, minmax(400px, 1fr) )", alignItems: 'center', justifyItems:'center' }}>
      <img style={{ borderRadius: '4px', height: '300px' }} alt="Bram from BelDUB" src="../Bram.png" />
        <p><b>Bram Lembrechts</b> (°2002) is an aspiring videographer from Geel. Recently he decided to join our team. You’ll see much more of him and his camera very soon.</p>
      </div>
      <div style={{  borderBottom:'2px dashed var(--color-primary)' ,display: 'grid',gridTemplateColumns: "repeat( auto-fit, minmax(400px, 1fr) )", alignItems: 'center', justifyItems:'center' }}>
        <img style={{ borderRadius: '4px', height: '300px' }} alt="Toon from BelDUB" src="../Toon.png" />
        <p><b>Toon Geraerts</b> (° 1998) is a soundsystem addict from Leuven. His passion for dub music led him to the decison to start his own sound, <b>Damballa Soundsystem</b>.
          Toon has been making audio recordings of soundsystems sessions for years, which he consequently uploads on the well known content platform talawa.fr. Toon is our audio guy, a man of few words who prefers to listen rather than talk.</p>
      </div>
      <div style={{  borderBottom:'2px dashed var(--color-primary)' ,display: 'grid',gridTemplateColumns: "repeat( auto-fit, minmax(400px, 1fr) )", alignItems: 'center', justifyItems:'center' }}>
      <img style={{ borderRadius: '4px', height: '300px' }} alt="Siam from BelDUB" src="../Siam.png" />
        <p><b>Siam Farghaly</b> (°1998) from Geel is one of the founding members of the well know <b>Waga Waga Soundsystem</b>. He put his shoulders to the wheel to make the yearly Wadada Festival a succes. Siam deserves all credit for the BelDUB website: it was his graduation project. Siam is our site manager and a stand up guy, who’s not afraid to roll up his sleeves when reggae duty calls.</p>
      </div>
      <div style={{  display: 'grid',gridTemplateColumns: "repeat( auto-fit, minmax(400px, 1fr) )", alignItems: 'center', justifyItems:'center' }}>
        <img style={{ borderRadius: '4px', height: '300px' }} alt="Seppe from BelDUB" src="../Seppe.png" />
        <p><b>Seppe Dumon</b> (°2005) is the Benjamin of this team. Seppe is a young and super enthusiastic cameraman with a heart beating for reggae music. As many youths from Bruges seem to do, he decided to build a soundsystem with his friends: <b>Backyard Soundsystem</b>.</p>
      </div>


    </div>
  </Layout>
)

export const Head = () => (
  <Seo title="BelDUB Team">
    <meta property="og:image" content="../beldub-during-interview.jpeg" />
    <meta name="image" content="../beldub-during-interview.jpeg" />
  </Seo>
)

export default Team

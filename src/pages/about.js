import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../components/about.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
const socials = [
  { text: "Youtube", url: "https://www.youtube.com/@beldub9678" },
  {
    text: "Instagram",
    url: "https://www.instagram.com/beldub_/",
  },
  {
    text: "Facebook",
    url: "https://www.facebook.com/beldubdocu",
  },
  {
    text: "Tiktok",
    url: "https://www.tiktok.com/@beldub_",
  },
]

function handleClick(event) {
  var el = event.currentTarget;
  el.classList.toggle("active");
  var content = el.querySelector(".content");
  if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
}

const Team = () => (
  <Layout>
    <div style={{ padding: 'var(--size-gutter)', width: '100svw', position: 'absolute', top: '100px', left: '0', backgroundColor: '#222', }}>
      <div style={{ maxWidth: 'var(--size-content)', margin: 'auto' }}>
        <h1 style={{ marginBottom: 'var(--space-1)', color: 'var(--color-white)' }}>BelDUB <b>Team</b></h1>
        <Link style={{ maxWidth: 'var(--size-content)', margin: 'auto' }} to="/">Back Home</Link>
      </div>
      <h2 style={{ margin: 'var(--space-5) auto', maxWidth: 'var(--size-content)', textAlign: "center", color: 'var(--color-primary)' }}> "BelDUB created a platform that brings you reports of everything dubbing in Belgium. It's the sequel to a documentary on Belgian soundsystem culture."</h2>
      {/* <img style={{borderRadius:'4px'}} alt="Andreas from Beldub taking an interview with King Earthquake" src="../beldub-during-interview.jpeg" /> */}
      {/* <div>
        <p>
          Music reporter Andreas Peeters has been documenting the early days of the Belgian soundsystems since 2009. After a few years of making videos with distorted audio, he met cameraman Gieljan Van Goethem. Together they created the BelDUB documentary, which was screened for the first time march 2015 and broadcasted on the channel Op Acht in the summer of 2016. In the years after the release, Andreas kept doing interviews and event reports. Since 2019 he teamed up with the one-man video and photography powerhouse Doryan Rosario. 
          Team BelDUB is here for you to report on all things dubbing in Belgium, pushing the soundsystem scene  forward since 2009.
        </p>
      </div> */}
      <div style={{ margin: 'auto', maxWidth: 'var(--size-content)', color: 'white', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div onClick={handleClick} className="collapsible" style={{ display: 'flex', flexDirection: 'column', gap: '0px', alignItems: 'center' }} >
          <StaticImage layout="fixed" height={300} src="../images/Andreas.png" alt="Andreas from BelDUB" />
          <h3 style={{ marginTop: '-20px' }} >Andreas Peeters</h3>
          <div className="content">
            <p>Part-time music reporter <b>Andreas Peeters</b> (°1984) has been documenting the early days of the Belgian soundsystems since 2009. After a few years of making videos with distorted audio, he met cameraman Gieljan Van Goethem. Together they created the BelDUB documentary, which was screened for the first time march 2015 and broadcasted on the channel Op Acht in the summer of 2016. In the years after the release, Andreas kept doing interviews and event reports. In 2019, he teamed up with the one-man video and photography powerhouse Doryan Rosario. Together they decided to gather a crew of reggae-minded reporters and create the very platform you’re looking at. Andreas took up the role of head editor.
              Andreas is also one of the founding members of <b>Tempest Soundsystem</b>, where he goes by the name of selector Roots Apostle.</p>
          </div>
        </div>
        <div onClick={handleClick} className="collapsible" style={{ display: 'flex', flexDirection: 'column', gap: '0px', alignItems: 'center' }} >
          <StaticImage layout="fixed" height={300} src="../images/Doryan.png" alt="Doryan from BelDUB" />
          <h3 style={{ marginTop: '-20px' }} >Doryan Rosario</h3>
          <div className="content">
            <p>At a young age, <b>Doryan Rosario</b> (°1996) developed a passion for music photography and videos. As a student, he provided many aspiring hip-hop artists with a music video.Somewhere on the road, he picked up the love for dub music in general and soundsystems in particular. 8 years ago, he started making event video’s of soundsystem sessions. Since then, you would find him on every party. He built a solid reputation as a dub photographer, just have a look at his Instagram.
              Doryan is also known as a reggae selector by the name of <b>Dub Dokki</b>.</p>
          </div>
        </div>
        <div onClick={handleClick} className="collapsible" style={{ display: 'flex', flexDirection: 'column', gap: '0px', alignItems: 'center' }} >
          <StaticImage layout="fixed" height={300} src="../images/Dries.png" alt="Dries from BelDUB" />
          <h3 style={{ marginTop: '-20px' }} >Dries Talloen</h3>
          <div className="content">
            <p><b>Dries Talloen</b> aka <b>DT</b> (°1997) is one of those few writers with an academic background with a heart for reggae music. He graduated as a historian with a thesis on soundsystem culture. Recently he joined the BelDUB team as a historian, journalist and photographer. He is one of the founding members of the Bruges based <b>Roots Explosion Soundsystem</b>, with which he functions mainly as a selector and MC.</p>
          </div>
        </div>

        <div onClick={handleClick} className="collapsible" style={{ display: 'flex', flexDirection: 'column', gap: '0px', alignItems: 'center' }} >
          <StaticImage layout="fixed" height={300} src="../images/Bram.png" alt="Bram from BelDUB" />
          <h3 style={{ marginTop: '-20px' }} >Bram Lembrechts</h3>
          <div className="content">
            <p><b>Bram Lembrechts</b> (°2002) is an aspiring videographer from Geel. Recently he decided to join our team. You’ll see much more of him and his camera very soon.</p>
          </div>
        </div>
        <div onClick={handleClick} className="collapsible" style={{ display: 'flex', flexDirection: 'column', gap: '0px', alignItems: 'center' }} >
          <StaticImage layout="fixed" height={300} src="../images/Toon.png" alt="Toon from BelDUB" />
          <h3 style={{ marginTop: '-20px' }} >Toon Geraerts</h3>
          <div className="content">
            <p><b>Toon Geraerts</b> (° 1998) is a soundsystem addict from Leuven. His passion for dub music led him to the decison to start his own sound, <b>Damballa Soundsystem</b>.
              Toon has been making audio recordings of soundsystems sessions for years, which he consequently uploads on the well known content platform talawa.fr. Toon is our audio guy, a man of few words who prefers to listen rather than talk.</p>
          </div>
        </div>
        <div onClick={handleClick} className="collapsible" style={{ display: 'flex', flexDirection: 'column', gap: '0px', alignItems: 'center' }} >
          <StaticImage layout="fixed" height={300} src="../images/Siam.png" alt="Siam from BelDUB" />
          <h3 style={{ marginTop: '-20px' }} >Siam Farghaly</h3>
          <div className="content">
            <p><b>Siam Farghaly</b> (°1998) from Geel is one of the founding members of the well know <b>Waga Waga Soundsystem</b>. He put his shoulders to the wheel to make the yearly Wadada Festival a succes. Siam deserves all credit for the BelDUB website: it was his graduation project. Siam is our site manager and a stand up guy, who’s not afraid to roll up his sleeves when reggae duty calls.</p>
          </div>
        </div>
        <div onClick={handleClick} className="collapsible" style={{ display: 'flex', flexDirection: 'column', gap: '0px', alignItems: 'center' }} >
          <StaticImage layout="fixed" height={300} src="../images/Seppe.png" alt="Seppe from BelDUB" />
          <h3 style={{ marginTop: '-20px' }} >Seppe Dumon</h3>
          <div className="content">
            <p><b>Seppe Dumon</b> (°2005) is the Benjamin of this team. Seppe is a young and super enthusiastic cameraman with a heart beating for reggae music. As many youths from Bruges seem to do, he decided to build a soundsystem with his friends: <b>Backyard Soundsystem</b>.</p>
          </div>
        </div>
      </div>
      {/* <p>Part-time music reporter <b>Andreas Peeters</b> (°1984) has been documenting the early days of the Belgian soundsystems since 2009. After a few years of making videos with distorted audio, he met cameraman Gieljan Van Goethem. Together they created the BelDUB documentary, which was screened for the first time march 2015 and broadcasted on the channel Op Acht in the summer of 2016. In the years after the release, Andreas kept doing interviews and event reports. In 2019, he teamed up with the one-man video and photography powerhouse Doryan Rosario. Together they decided to gather a crew of reggae-minded reporters and create the very platform you’re looking at. Andreas took up the role of head editor.
          Andreas is also one of the founding members of <b>Tempest Soundsystem</b>, where he goes by the name of selector Roots Apostle.</p>
      </div>
      <div style={{ borderBottom:'2px dashed var(--color-primary)' ,display: 'grid',gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )", alignItems: 'center', justifyItems:'center' }}>
      <img style={{  borderRadius: '4px', height: '300px' }} alt="Doryan from BelDUB" src="../Doryan.png" />
        <p>At a young age, <b>Doryan Rosario</b> (°1996) developed a passion for music photography and videos. As a student, he provided many aspiring hip-hop artists with a music video.Somewhere on the road, he picked up the love for dub music in general and soundsystems in particular. 8 years ago, he started making event video’s of soundsystem sessions. Since then, you would find him on every party. He built a solid reputation as a dub photographer, just have a look at his Instagram.
          Doryan is also known as a reggae selector by the name of <b>Dub Dokki</b>.</p>
      </div>
      <div style={{  borderBottom:'2px dashed var(--color-primary)' ,display: 'grid',gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )", alignItems: 'center', justifyItems:'center' }}>
        <img style={{ borderRadius: '4px', height: '300px' }} alt="Dries from BelDUB" src="../Dries.png" />
        <p><b>Dries Talloen</b> aka <b>DT</b> (°1997) is one of those few writers with an academic background with a heart for reggae music. He graduated as a historian with a thesis on soundsystem culture. Recently he joined the BelDUB team as a historian, journalist and photographer. He is one of the founding members of the Bruges based <b>Roots Explosion Soundsystem</b>, with which he functions mainly as a selector and MC.</p>
      </div>
      <div style={{  borderBottom:'2px dashed var(--color-primary)' ,display: 'grid',gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )", alignItems: 'center', justifyItems:'center' }}>
      <img style={{ borderRadius: '4px', height: '300px' }} alt="Bram from BelDUB" src="../Bram.png" />
        <p><b>Bram Lembrechts</b> (°2002) is an aspiring videographer from Geel. Recently he decided to join our team. You’ll see much more of him and his camera very soon.</p>
      </div>
      <div style={{  borderBottom:'2px dashed var(--color-primary)' ,display: 'grid',gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )", alignItems: 'center', justifyItems:'center' }}>
        <img style={{ borderRadius: '4px', height: '300px' }} alt="Toon from BelDUB" src="../Toon.png" />
        <p><b>Toon Geraerts</b> (° 1998) is a soundsystem addict from Leuven. His passion for dub music led him to the decison to start his own sound, <b>Damballa Soundsystem</b>.
          Toon has been making audio recordings of soundsystems sessions for years, which he consequently uploads on the well known content platform talawa.fr. Toon is our audio guy, a man of few words who prefers to listen rather than talk.</p>
      </div>
      <div style={{  borderBottom:'2px dashed var(--color-primary)' ,display: 'grid',gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )", alignItems: 'center', justifyItems:'center' }}>
      <img style={{ borderRadius: '4px', height: '300px' }} alt="Siam from BelDUB" src="../Siam.png" />
        <p><b>Siam Farghaly</b> (°1998) from Geel is one of the founding members of the well know <b>Waga Waga Soundsystem</b>. He put his shoulders to the wheel to make the yearly Wadada Festival a succes. Siam deserves all credit for the BelDUB website: it was his graduation project. Siam is our site manager and a stand up guy, who’s not afraid to roll up his sleeves when reggae duty calls.</p>
      </div>
      <div style={{  display: 'grid',gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )", alignItems: 'center', justifyItems:'center' }}>
        <img style={{ borderRadius: '4px', height: '300px' }} alt="Seppe from BelDUB" src="../Seppe.png" />
        <p><b>Seppe Dumon</b> (°2005) is the Benjamin of this team. Seppe is a young and super enthusiastic cameraman with a heart beating for reggae music. As many youths from Bruges seem to do, he decided to build a soundsystem with his friends: <b>Backyard Soundsystem</b>.</p>
      </div> */}

      <footer
        style={{
          padding: 'var(--space-5)',
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
          textAlign: 'center',
          width: '100svw',
          position: 'absolute',
          left: '0',
          backgroundColor: 'var(--color-black)'
        }}
      >
        <div style={{ height: '2px', margin: 'auto', maxWidth: '400px', backgroundColor: 'var(--color-primary)' }}></div>
        <h2 style={{ marginTop: 'var(--space-3)', color: 'var(--color-white)', marginBottom: 'var(--space-2)' }}>Find BelDUB on Social Media:</h2>
        <div >
          <a href={socials[0].url}><img style={{ marginRight: 'var(--space-2)', height: '40px' }} src={'/yt.png'} alt="youtube-icon" /></a>
          <a href={socials[1].url}><img style={{ marginRight: 'var(--space-2)', height: '40px' }} src={'/insta.png'} alt="insta-icon" /></a>
          <a href={socials[2].url}><img style={{ marginRight: 'var(--space-2)', height: '40px' }} src={'/fb.png'} alt="fb-icon" /></a>
          <a href={socials[3].url}><img style={{ marginRight: 'var(--space-2)', height: '40px' }} src={'/tiktok.png'} alt="tiktok-icon" /></a>
        </div>
        <div style={{ color: 'var(--color-white)' }}>
          Beldub © {new Date().getFullYear()} &middot; Site by
          {` `}
          <a href="https://www.siamfarghaly.com/">Siam</a>
        </div>
      </footer>
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

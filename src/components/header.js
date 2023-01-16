import * as React from "react"
import { Link } from "gatsby"
import "./header.css"


const Header = ({ siteTitle }) => (
  <header
    style={{
      maxWidth: '1000px',
      margin: 'auto',
      zIndex: '1000',
    }}
  >
    <section className="top-nav">
      
        <Link 
          className="logo"
          to="/"
          style={{
            fontSize: `var(--font-sm)`,
            textDecoration: `none`,
          }}
        >
          <img
            alt="Beldub logo"
            height={75}
            style={{ margin: 0 }}
            src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg id='Layer_2' data-name='Layer 2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 186.11 186.11'%3E%3Cdefs%3E%3Cstyle%3E .cls-1 %7B fill: %23fff; %7D .cls-2 %7B fill: %2390caa2; %7D .cls-3 %7B fill: %231d1d1b; %7D %3C/style%3E%3C/defs%3E%3Cg id='Laag_1' data-name='Laag 1'%3E%3Cg%3E%3Cpath class='cls-2' d='m31.99,124.37v-24.9l14.02-1.84c8.53-1.12,13.88-.94,17.26,3.66,3.09,4.22,3.06,11.13,3.03,21.03-.04,9.9-.06,16.81-3.17,22.17-3.08,5.32-7.75,7.59-14.92,9.49l-16.22-29.61Z'/%3E%3Cpath class='cls-2' d='m144.33,106.26c4.15-3.68,5.93-6.9,5.99-10.84.06-4.44-1.91-7.43-5.79-8.86-3.52-1.32-7.85-.81-13.56-.06l-13.67,1.79-.49,49.26,15.02-3.61c6.68-1.61,11.29-3.08,14.78-6.97,2.91-3.16,4.77-7.32,4.83-11.5.08-4.96-2.32-8.02-7.12-9.21Zm-14.39-11.75c.44-.13.87-.19,1.3-.26,4.41-.66,6.77.87,6.72,4.12-.05,3.88-2.45,5.98-7.36,6.83-.29.05-.5.09-.79.14l.13-10.83Zm.71,31.29c-.36.08-.72.16-1.08.24l.15-12.42c.29-.06.58-.11.86-.17,5.62-1.08,8.19.17,8.14,4.16-.05,4.24-2.75,7.01-8.07,8.19Z'/%3E%3Cpath class='cls-2' d='m95.51,123.42c0,.21,0,.48,0,.69-.05,6.59-.14,10.16-4.32,11.09-4.39.98-4.51-2.76-4.47-10.03l.2-32.9-12.72,1.67-.13,29.02c-.04,8.89.08,15.16,2.5,18.9,2.71,4.05,7.15,4.88,14.2,3.18,7.62-1.85,12.45-4.97,15.15-10.24,2.04-3.93,2.23-8.17,2.27-13.31.01-1.2.02-2.47.04-3.8l.25-28.24-12.72,1.67-.23,32.3Z'/%3E%3Cg%3E%3Cpath class='cls-1' d='m61.63,32.09c2.47,2.36,3.73,5.69,3.72,9.91-.02,4.74-1.77,8.31-5.92,12.04,4.86,2.24,7.31,6.33,7.29,12.29-.02,5.02-1.85,9.7-4.75,12.98-3.49,4.04-8.12,4.98-14.85,5.71l-15.13,1.62v-38.37l29.65-16.17Z'/%3E%3Cpolygon class='cls-1' points='103.72 68.62 86.76 70.07 86.83 58.61 102.5 57.64 102.58 47.42 86.9 48.05 86.95 38.41 103.97 38.06 104.05 28.21 74.27 28.21 74.03 82.13 103.64 78.95 103.72 68.62'/%3E%3Cpolygon class='cls-1' points='139.68 65.61 124.39 66.92 124.82 28.21 112 28.21 111.55 78.1 139.56 75.09 139.68 65.61'/%3E%3C/g%3E%3Cg%3E%3Cpath class='cls-3' d='m52.18,140.43c1.15-1.96,1.24-7.05,1.25-15.63,0-.9,0-1.72,0-2.54.01-7.01-.05-11.26-1.13-12.65-1.08-1.56-3.03-1.94-5.84-1.51-.51.08-1.09.16-1.66.32l-.05,36.04c.65-.06,1.22-.19,1.8-.32,2.66-.59,4.46-1.73,5.62-3.71Z'/%3E%3Cpath class='cls-3' d='m120.35,0l-58.71,32.08c2.48,2.36,3.77,5.69,3.76,9.91-.02,4.74-1.77,8.31-5.92,12.04,4.86,2.25,7.31,6.33,7.29,12.29-.02,5.02-1.84,9.7-4.75,12.98-3.49,4.04-8.12,4.98-14.85,5.71l-15.13,1.63v-38.38L0,65.76l32.03,58.61v-24.9l14.03-1.84c8.53-1.12,13.88-.94,17.26,3.66,3.09,4.21,3.06,11.13,3.03,21.03-.04,9.9-.06,16.81-3.17,22.17-3.08,5.32-7.78,7.59-14.96,9.49l17.56,32.13,120.35-65.77L120.35,0Zm-46.07,28.21h29.77l-.08,9.85-17.01.35-.06,9.64,15.69-.63-.08,10.22-15.67.97-.07,11.46,16.95-1.45-.08,10.32-29.61,3.18.24-53.92Zm33.94,89.48c-.01,1.34-.02,2.6-.04,3.8-.04,5.14-.23,9.38-2.27,13.31-2.7,5.27-7.53,8.39-15.15,10.24-7.04,1.71-11.49.88-14.2-3.18-2.43-3.74-2.54-10.02-2.5-18.9l.13-29.02,12.72-1.67-.2,32.9c-.05,7.26.08,11,4.47,10.03,4.17-.93,4.27-4.5,4.32-11.09,0-.21,0-.48,0-.69l.23-32.3,12.72-1.67-.25,28.24Zm3.79-89.48h12.81l-.42,38.71,15.29-1.31-.13,9.48-28.01,3.01.46-49.89Zm19.83,105.73l-15.02,3.61.49-49.26,13.67-1.79c5.71-.75,10.05-1.26,13.56.06,3.88,1.43,5.85,4.42,5.79,8.86-.06,3.95-1.84,7.16-5.99,10.84,4.8,1.19,7.2,4.25,7.12,9.21-.06,4.18-1.92,8.34-4.83,11.5-3.5,3.89-8.1,5.36-14.78,6.97Z'/%3E%3Cpath class='cls-3' d='m137.96,98.37c.04-3.25-2.31-4.77-6.72-4.12-.43.06-.86.13-1.3.26l-.13,10.83c.29-.05.51-.09.79-.14,4.91-.85,7.31-2.95,7.36-6.83Z'/%3E%3Cpath class='cls-3' d='m130.57,113.45c-.29.05-.57.11-.86.17l-.15,12.42c.36-.08.72-.16,1.08-.24,5.32-1.17,8.01-3.95,8.07-8.19.05-3.99-2.52-5.24-8.14-4.16Z'/%3E%3Cpath class='cls-3' d='m53.93,66.69c0-4.77-2.6-6.7-8.26-6.36-.29.02-.58.03-.87.05l-.02,14.8c.36-.03.73-.06,1.09-.1,5.36-.47,8.05-3.32,8.06-8.39Z'/%3E%3Cpath class='cls-3' d='m52.96,43.52c0-2.45-.95-4.23-2.77-5.19l-5.37,2.93v9.24c.28-.01.5-.02.79-.03,4.94-.21,7.34-2.32,7.35-6.96Z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A"
          />

        </Link>
      
      <input id="menu-toggle" type="checkbox" />
      <label className='menu-button-container' htmlFor="menu-toggle">
        <div className='menu-button'></div>
      </label>
      <ul className="menu">
        <li>
          <Link
            to="/blog"
            style={{
              fontSize: `var(--font-lg)`,
              textDecoration: `none`,
              fontWeight: 'var(--font-bold)',
            }}
          >
            News
          </Link>
        </li>
        <li><Link
          to="/dubcalendar"
          style={{
            fontSize: `var(--font-lg)`,
            textDecoration: `none`,
            fontWeight: 'var(--font-bold)',

          }}
        >
          Events
        </Link></li>
        <li><Link
          to="/soundsystems"
          style={{
            fontSize: `var(--font-lg)`,
            textDecoration: `none`,
            fontWeight: 'var(--font-bold)',

          }}
        >
          Soundsystems
        </Link></li>
        <li><Link
          to="/about"
          style={{
            fontSize: `var(--font-lg)`,
            textDecoration: `none`,
            fontWeight: 'var(--font-bold)',

          }}
        >
          About
        </Link></li>
      </ul>
    </section>


  </header>
)

export default Header

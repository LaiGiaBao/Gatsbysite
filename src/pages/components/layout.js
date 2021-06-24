import * as React from 'react'
import {Link} from 'gatsby'
import {container,
heading, navLinks, navLinkItem, navLinkText} from '../components/layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'
const Layout=({pageTitle, children})=>{
    return (
        <main className={container}>
            <title>{pageTitle}</title>
            <nav>
                <ul>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                </ul>
            </nav>
            <h1 className={heading}>{pageTitle}</h1>
            <StaticImage 
      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
      src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"/>
            {children}
        </main>
    )
}
export default Layout
import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'
import {StaticImage} from 'gatsby-plugin-image'
const Layout=({pageTitle, children})=>{
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }  
  `)
    return (
        <main className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <p className={siteTitle}>{data.site.siteMetadata.title}</p>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                    <li className={navLinkItem}><Link to="/blog" className={navLinkText}>My Blog</Link></li>
                </ul>
            </nav>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
            <StaticImage 
      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
      src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"/>
        </main>
    )
}
export default Layout
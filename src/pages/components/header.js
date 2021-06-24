import * as React from 'react'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'graphql'

const Header =() =>{
    const data = useStaticQuery(graphql`
    query MyQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

    return (
        <header>
            {}
            <h1>{data.site.siteMetaData.title}</h1>
        </header>
    )
}
export default Header
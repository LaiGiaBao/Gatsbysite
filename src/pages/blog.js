import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../pages/components/layout'

const BlogPage = ({data}) =>{
    return (
        <Layout pageTitle="My Blog Page">
            <p>My cool post wil go in here</p>
            <ul>
                {
                    data.allFile.nodes.map((node) => (
                        <li key={node.name}>{node.name}</li>
                    ))
                }
            </ul>
        </Layout>
    )
}
export const query = graphql`
query {
    allFile {
      nodes {
        name
      }
    }
  }
  
`
export default BlogPage
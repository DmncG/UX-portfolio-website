import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const GET_POSTS = graphql`
  query{
    allFile(filter: {sourceInstanceName: { in: "blog"} }) {
      nodes {
        name
      }
    }
  }
`

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}
export default BlogPage
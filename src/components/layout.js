import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const GET_TITLE = graphql`
  query{
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(GET_TITLE);

  return (
    <main>
      <title>{pageTitle} | {data?.site?.siteMetadata?.title}</title>
      <p>{data?.site?.siteMetadata?.title}</p>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
      <h1>{pageTitle}</h1>
      {children}
    </main>
  )
}
export default Layout
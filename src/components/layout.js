import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Footer from './footer/Footer'
import Navbar from './navBar/Navbar'
import { motion } from 'framer-motion'

const GET_TITLE = graphql`
  query{
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout = ({ pageTitle, children, location }) => {
  const data = useStaticQuery(GET_TITLE);
  return (
    <main>
      <Navbar location={location} />
      {/* <title>{pageTitle} | {data?.site?.siteMetadata?.title}</title>
      <p>{data?.site?.siteMetadata?.title}</p> */}
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav> */}
      <motion.main
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{
            type: "spring",
            mass: 0.35,
            stiffness: 75,
            duration: 0.3
          }}
        >
        {children}
        <Footer />
      </motion.main>
    </main>
  )
}
export default Layout
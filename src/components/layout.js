import * as React from 'react'
import PropTypes from 'prop-types'
import {
  // useStaticQuery,
  graphql,
} from 'gatsby'
import { motion } from 'framer-motion'
import Helmet from 'react-helmet'
import Footer from './footer/Footer'
import Navbar from './navBar/Navbar'
import logoFavicon from '../images/favicon-logo-white.ico'

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
  // const data = useStaticQuery(GET_TITLE);
  return (
    <>
      <Helmet>
        <link rel="icon" href={logoFavicon} />
      </Helmet>
      {
        location?.pathname !== '/'
          && <Navbar location={location} />
      }
      {/* <title>{pageTitle} | {data?.site?.siteMetadata?.title}</title>
      <p>{data?.site?.siteMetadata?.title}</p> */}
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
      </motion.main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
}
export default Layout
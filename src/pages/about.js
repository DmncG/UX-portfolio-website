import React from 'react'
import Layout from '../components/layout'
import AboutContent from '../components/about/AboutContent'

const About = ({ location }) => (
  <Layout pageTitle="About" location={location}>
    <AboutContent />
  </Layout>
)

export default About;
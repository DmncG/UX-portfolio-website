import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import ParticleCanvas from '../components/home/particleCanvas'
import AboutContent from '../components/about/AboutContent'
const About = ({ location }) => (
  <Layout pageTitle="About" location={location}>
    <AboutContent />
  </Layout>
)

export default About;
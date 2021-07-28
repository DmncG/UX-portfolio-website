import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const Skills = ({ location }) => (
  <Layout pageTitle="Skills" location={location}>
    <div className="w-screen h-screen bg-padua p-4">
      <p>This is the Skills page</p>
    </div>
  </Layout>
)

export default Skills;
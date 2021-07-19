import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import ProjectList from '../components/projects/ProjectList'

const Projects = () => (
  <Layout pageTitle="Projects">
    <ProjectList />
  </Layout>
)

export default Projects;
import React from 'react'
import Layout from '../../components/layout'
import ProjectList from '../../components/projects/ProjectList'

const Projects = ({ location }) => (
  <Layout pageTitle="Projects" location={location}>
    <ProjectList />
  </Layout>
)

export default Projects;
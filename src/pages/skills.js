import React from 'react'
import Layout from '../components/layout'
import SkillsList from '../components/skills/SkillsList'

const Skills = ({ location }) => (
  <Layout pageTitle="Skills" location={location}>
    <div className="bg-padua p-4">
      <SkillsList />
    </div>
  </Layout>
)

export default Skills;
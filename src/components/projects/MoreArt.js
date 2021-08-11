import React from 'react'
import PropTypes from 'prop-types'
import Hero from '../hero/Hero'
import Header from '../header/Header'

const MoreArt = ({ location }) => (
  <div className="max-w-screen-lg lg:h-screen md:mx-auto py-16">
    <Hero location={ location } />
    <Header level={1}>MoreArt</Header>
    <Header level={2}>Redesigning <strong>MoreArt</strong>, an organization that supports collaboration between artists and communities to create public art</Header>
  </div>
)

MoreArt.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default MoreArt
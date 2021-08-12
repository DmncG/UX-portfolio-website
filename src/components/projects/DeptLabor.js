import React from 'react'
import PropTypes from 'prop-types'
import Hero from '../hero/Hero'
import Header from '../header/Header'

const DeptLabor = ({ location }) => (
  <div className="max-w-screen-lg lg:h-screen md:mx-auto py-16">
    <div className="max-w-screen-lg md:mx-auto">
      <Hero location={ location } />
      <Header level={1}>Department of Labor</Header>
      <Header level={2}><strong>Department of Labor</strong> website redesign</Header>
    </div>
  </div>
)

DeptLabor.propTypes = {
    location: PropTypes.objectOf(PropTypes.any).isRequired,
  }

export default DeptLabor
import React from 'react'
import PropTypes from 'prop-types'
import Hero from '../hero/Hero'
import Header from '../header/Header'

const Strand = ({ location }) => (
  <div className="max-w-screen-lg lg:h-screen md:mx-auto py-16">
    <div className="max-w-screen-lg md:mx-auto">
      <Hero location={ location } />
      <Header level={1}>Strand Book Store</Header>
      <Header level={2}>Development and implementation of the e-commerce platform of <strong>Strand Book Store</strong>, an independent bookstore based in New York City</Header>
    </div>
  </div>
)

Strand.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default Strand
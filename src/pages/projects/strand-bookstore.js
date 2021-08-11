import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/layout'
import Strand from '../../components/projects/Strand'

const StrandPage = ({ location }) => (
  <Layout location={ location } >
    <Strand location={ location } />
  </Layout>
)

StrandPage.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default StrandPage
import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/layout'
import Muse from '../../components/projects/Muse'

const MusePage = ({ location }) => (
  <Layout location={ location } >
    <Muse location={ location } />
  </Layout>
)

MusePage.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default MusePage
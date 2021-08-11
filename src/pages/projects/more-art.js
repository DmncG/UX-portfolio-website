import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/layout'
import MoreArt from '../../components/projects/MoreArt'

const MoreArtPage = ({ location }) => (
  <Layout location={ location } >
    <MoreArt location={ location } />
  </Layout>
)

MoreArtPage.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default MoreArtPage

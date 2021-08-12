import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/layout'
// import Dol from '../../components/projects/Dol'

const DepartmentOfLaborPage = ({ location }) => (
  <Layout location={location}>
    {/* <Dol location={location} /> */}
    hello there
  </Layout>
)

DepartmentOfLaborPage.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default DepartmentOfLaborPage
import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/layout'
import DeptLabor from '../../components/projects/DeptLabor'

const DepartmentOfLaborPage = ({ location }) => (
  <Layout location={location}>
    <DeptLabor location={location} />
  </Layout>
)

DepartmentOfLaborPage.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default DepartmentOfLaborPage
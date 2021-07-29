import * as React from "react"
import Layout from '../components/layout'
// import ParticleCanvas from '../components/home/particleCanvas'
import Home from '../components/home/home'

// markup
const IndexPage = ({ location }) => {
  return (
    <Layout pageTitle="Home Page" location={location}>
      <div>
        {/* <ParticleCanvas /> */}
        <Home />
      </div>
    </Layout>
  )
}

export default IndexPage

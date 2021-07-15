import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const About = () => (
  <Layout pageTitle="About">
    <div className="w-screen h-screen bg-gunPowder p-4">
      <div className="overflow-hidden rounded-full w-60 h-60 flex justify-center mx-auto border-4 border-terracota">
        <StaticImage src="../images/profile.jpg" alt="profile" />
      </div>
      <div>
        <h1 className="font-display text-4xl my-4 font-semibold text-rice">About</h1>
        <div>
          <p className="font-body font-normal text-md text-rice">
            Hi. My name is Dom.
            <br />
            <br />
            I'm a UX Designer/Fullstack Engineer based in New York City.
            <br />
            <br />
            {/* Currently, I'm working on a building a Shopify-based ecommerce website that sells a wide variety of wood products */}
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default About;
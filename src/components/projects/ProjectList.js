import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const ProjectList = () => {
  return (
    <main>
      <section className="flex flex-col justify-center items-center">
        <div>
          <h1 className="font-display font-semibold text-4xl">Non Profit Organization for the Arts</h1>
          <div />
          <h2>Redesigning MoreArt, an organization that supports collaboration between professional artists and communities to create public art</h2>
        </div>

        <div className="flex flex-col justify-center">
          <StaticImage className="p-1 w-60 mix-blend-soft-light" src="../../images/Device - Macbook Pro.png" alt="moreart macbook mockup" />
          <StaticImage className="p-1 w-60 mix-blend-soft-light" src="../../images/Clay Dark.png" alt="moreart mobile mockup" />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center">
        <div>
          <h1>Government Agency Website</h1>
          <div />
          <h2>Department of Labor website redesign</h2>
        </div>

        <div className="flex flex-col justify-center">
          <StaticImage className="p-1 w-60 mix-blend-soft-light" src="../../images/dol-macbook-pro.png" alt="dol macbook mockup" />
          <StaticImage className="p-1 w-60 mix-blend-soft-light" src="../../images/dol-mobile.png" alt="dol mobile mockup" />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center">
        <div>
          <h1>Mobile App Case Study</h1>
          <div />
          <h2>Nudge, a travel app that sends timely automated reminders</h2>
        </div>

        <div className="flex flex-col justify-center">
          <StaticImage className="p-1 w-60 mix-blend-soft-light" src="../../images/nudge-mobile.png" alt="nudge mobile mockup" />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center">
        <div>
          <h1>Bookstore Website</h1>
          <div />
          <h2>Development and implementation of the e-commerce platform of Strand Book Store, an independent bookstore based in New York City</h2>
        </div>
      </section>
    </main>
  )
}

    export default ProjectList
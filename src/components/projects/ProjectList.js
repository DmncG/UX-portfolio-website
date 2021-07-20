import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const ProjectList = () => {
  return (
    <main>
      <div>
        <h1 className="font-display font-semibold text-4xl my-2 p-1">Projects</h1>
        <div className="h-1 bg-terracota w-16 my-4 ml-1"/>
      </div>
      
      <section className="grid-cols-1 justify-center items-center p-1 m-1 relative">
        <div className="flex flex-col justify-center">
          <StaticImage className="p-1 w-72 relative z-0" src="../../images/Device - Macbook Pro.png" alt="moreart macbook mockup" />
          <StaticImage className="p-1 w-40 relative z-10" src="../../images/Clay Dark.png" alt="moreart mobile mockup" />
        </div>

        <div className="p-1 my-1 mx-auto relative">
          <h1 className="font-display font-semibold text-4xl my-2">Non Profit Organization for the Arts</h1>
          <div className="h-1 bg-terracota w-16 my-4"/>
          <h2 className="font-display font-normal text-xl mb-2">Redesigning <strong>MoreArt</strong>, an organization that supports collaboration between artists and communities to create public art</h2>
          <Link to="/" className="font-body text-md text-terracota hover:text-terracota-light my-1">
            View this project
          </Link>
        </div>
        <div className="rounded-full h-48 w-48 bg-terracota-light opacity-30 absolute z-0 bottom-28 right-4" />
      </section>

      <section className="flex flex-col justify-center items-center p-1 m-1 relative">
        <div className="flex flex-col justify-center">
          <StaticImage className="p-1 w-72" src="../../images/dol-macbook-pro.png" alt="dol macbook mockup" />
          <StaticImage className="p-1 w-32 absolute" src="../../images/dol-mobile.png" alt="dol mobile mockup" />
        </div>

        <div>
          <h1 className="font-display font-semibold text-4xl my-2">Government Agency Website</h1>
          <div className="h-1 bg-terracota w-16 my-4"/>
          <h2 className="font-display font-normal text-xl mb-2"><strong>Department of Labor</strong> website redesign</h2>
          <Link to="/" className="font-body text-md text-terracota hover:text-terracota-light my-1">
            View this project
          </Link>
        </div>
        <div className="rounded-full h-48 w-48 bg-padua-light opacity-30 absolute z-0 bottom-28 left-4" />
      </section>

      <section className="flex flex-col justify-center items-center p-1 m-1 relative">
        <div className="flex flex-col justify-center">
          <StaticImage className="p-1 w-60" src="../../images/nudge-mobile.png" alt="nudge mobile mockup" />
        </div>

        <div>
          <h1 className="font-display font-semibold text-4xl my-2">Mobile App Case Study</h1>
          <div className="h-1 bg-terracota w-16 my-4" />
          <h2 className="font-display font-normal text-xl mb-2"><strong>Nudge</strong>, a travel app that sends timely automated reminders</h2>
          <Link to="/" className="font-body text-md text-terracota hover:text-terracota-light my-1">
            View this project
          </Link>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center p-1 m-1 relative">
        <div>
          <h1 className="font-display font-semibold text-4xl my-2">Bookstore Website</h1>
          <div className="h-1 bg-terracota w-16 my-4"/>
          <h2 className="font-display font-normal text-xl mb-2">Development and implementation of the e-commerce platform of <strong>Strand Book Store</strong>, an independent bookstore based in New York City</h2>
          <Link to="/" className="font-body text-md text-terracota hover:text-terracota-light">
            View this project
          </Link>
        </div>
      </section>
    </main>
  )
}

    export default ProjectList
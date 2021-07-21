import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const ProjectList = () => {
  return (
    <main className="md:max-w-screen-sm lg:max-w-screen-lg md:mx-auto overflow-hidden">
      <div className="my-8 p-4">
        <h1 className="font-display font-semibold text-4xl md:text-6xl">Projects</h1>
        <div className="h-1 bg-terracota w-16 my-4 ml-1"/>
      </div>
      
      <section className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center p-4 m-1 mb-8 relative">
        <div className="flex flex-col justify-center relative">
          <StaticImage className="p-1 w-72 md:w-96 relative z-0 mx-auto" src="../../images/Device - Macbook Pro.png" alt="moreart macbook mockup" />
          <StaticImage className="p-1 w-44 md:w-56 relative z-10 -top-28 -right-16 mx-auto" src="../../images/Clay Dark.png" alt="moreart mobile mockup" />
        </div>

        <div className="p-1 my-1 mx-auto relative">
          <h1 className="font-display font-semibold text-2xl md:text-4xl my-2">Non Profit Organization for the Arts</h1>
          <div className="h-1 bg-terracota w-16 my-4"/>
          <h2 className="font-display font-normal text-xl mb-2">Redesigning <strong>MoreArt</strong>, an organization that supports collaboration between artists and communities to create public art</h2>
          <Link to="/" className="font-body text-md text-terracota-dark hover:text-terracota my-1">
            View this project
          </Link>
        </div>
        <div className="rounded-full h-48 md:h-60 w-48 md:w-60 bg-terracota-light opacity-30 absolute z-0 bottom-44 md:bottom-20 lg:bottom-32 right-4" />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center p-4 m-1 mb-8 relative">
        <div className="flex flex-col justify-center">
          <StaticImage className="p-1 w-72 md:w-96 relative z-0 mx-auto" src="../../images/dol-macbook-pro.png" alt="dol macbook mockup" />
          <StaticImage className="p-1 w-24 md:w-36 relative z-10 -top-36 -right-24 md:-right-32 mx-auto" src="../../images/dol-mobile.png" alt="dol mobile mockup" />
        </div>

        <div>
          <h1 className="font-display font-semibold text-2xl md:text-4xl my-2">Government Agency Website</h1>
          <div className="h-1 bg-terracota w-16 my-4"/>
          <h2 className="font-display font-normal text-xl mb-2"><strong>Department of Labor</strong> website redesign</h2>
          <Link to="/" className="font-body text-md text-terracota-dark hover:text-terracota my-1">
            View this project
          </Link>
        </div>
        <div className="rounded-full h-48 md:h-60 w-48 md:w-60 bg-padua-light opacity-30 absolute z-0 bottom-16 md:bottom-4 lg:bottom-44 right-4 lg:left-auto lg:right-4" />
      </section>

      {/* <section className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center p-4 m-1 relative">
        <div className="flex flex-col justify-center">
          <StaticImage className="p-1 w-60" src="../../images/nudge-mobile.png" alt="nudge mobile mockup" />
        </div>

        <div>
          <h1 className="font-display font-semibold text-2xl my-2">Mobile App Case Study</h1>
          <div className="h-1 bg-terracota w-16 my-4" />
          <h2 className="font-display font-normal text-xl mb-2"><strong>Nudge</strong>, a travel app that sends timely automated reminders</h2>
          <Link to="/" className="font-body text-md text-terracota-dark hover:text-terracota my-1">
            View this project
          </Link>
        </div>
      </section> */}

      <section className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center p-4 m-1 relative">
        <div className="flex flex-col justify-center">
          <StaticImage className="p-1 w-72 md:w-96 relative z-0 mx-auto" src="../../images/strand_macbook.png" alt="strand macbook mockup" />
          <StaticImage className="p-1 w-24 md:w-36 relative z-10 -top-36 -right-24 md:-right-32 mx-auto" src="../../images/strand_mobile.png" alt="strand mobile mockup" />
        </div>
        
        <div>
          <h1 className="font-display font-semibold text-2xl md:text-4xl my-2">Bookstore Website</h1>
          <div className="h-1 bg-terracota w-16 my-4"/>
          <h2 className="font-display font-normal text-xl mb-2">Development and implementation of the e-commerce platform of <strong>Strand Book Store</strong>, an independent bookstore based in New York City</h2>
          <Link to="/" className="font-body text-md text-terracota-dark hover:text-terracota">
            View this project
          </Link>
        </div>
        <div className="rounded-full h-48 md:h-60 w-48 md:w-60 bg-gunPowder-light opacity-30 absolute z-0 bottom-16 md:bottom-4 lg:bottom-44 right-4 lg:left-auto lg:right-4" />
      </section>
    </main>
  )
}

    export default ProjectList
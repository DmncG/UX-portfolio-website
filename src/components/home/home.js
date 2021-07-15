import React from 'react'
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'
import Button from '../button/Button'
import pdfCV from '../../downloads/CV_Dominic_Garcia_4_05_2021.pdf'


const Home = () => {
  return (
    <div>
      <main className="md:grid md:grid-cols-2 md:relative">
        <section className="md:sticky md:top-0 h-screen">

          <div className="flex flex-col justify-center">
            <div className="rounded-full bg-gunPowder h-48 lg:h-80 w-48 lg:w-80 flex items-center justify-center mx-auto my-4">
              <h1 className="font-display font-semibold text-center text-7xl lg:text-9xl text-white">drg</h1>
            </div>

            <div className="flex flex-col justify-center p-2 m-2">
              <h2 className="font-display font-normal text-2xl lg:text-5xl text-center">Dominic Ross Garcia</h2>
              <h3 className="font-body font-normal text-md lg:text-2xl text-center">UX Designer | Fullstack Engineer</h3>
            </div>

            <div className="flex flex-row justify-center p-1 m-1">
              <a href="https://github.com/DmncG/" target="_blank" rel="noreferrer nofollow">
                <StaticImage className="w-12 m-4" src="../../images/GitHub-Mark-64px.png" alt="github logo" />
              </a>
              <a href="https://www.linkedin.com/in/dominic-rb-garcia/" target="_blank" rel="nofollow noreferrer">
                <StaticImage className="w-12 m-4" src="../../images/linkedin-logo.png" alt="linkedin logo" />
              </a>
            </div>

            <div className="flex flex-row justify-center items-center p-1 m-1 font-body">
              <Link className="hover:text-terracota" to="/projects">Projects</Link>
              <p className="m-0.5">|</p>
              <Link className="hover:text-terracota" to="/experience">Experience</Link>
              <p className="m-0.5">|</p>
              <Link className="hover:text-terracota" to="/about">About</Link>
            </div>

            <div className="shadow-md hover:shadow-xl rounded-md w-72 lg:w-96 mx-auto my-8 flex justify-center items-center bg-terracota hover:bg-terracota-light text-rice cursor-pointer">
              <a className="py-3 text-lg lg:text-2xl font-semibold font-display" download="CV_Dominic_Ross_Garcia.pdf" href={pdfCV}>
                Download CV
              </a>
            </div>
          </div>

        </section>

        <section className="md:scroll-snap-y-mandatory">
          <div className=" relative w-full h-96 md:h-screen bg-gunPowder md:scroll-snap-align-start overflow-hidden">
            <StaticImage className="p-1 my-4 mx-auto relative mix-blend-soft-light" src="../../images/Device - Macbook Pro.png" alt="macbook mockup" />
            <StaticImage className="p-1 relative -top-28 lg:-top-36 xl:-top-60 left-20 lg:left-36 xl:left-60 mix-blend-soft-light" src="../../images/Clay Dark.png" alt="mobile mockup" />
            <div className="absolute bottom-3 md:bottom-8 left-3 md:left-8">
              <Button
                label="Projects."
                link="/projects"
                type="link"
                size="lg"
                color="terracota"
              />
            </div>
          </div>

          <div className="relative w-full h-96 md:h-screen bg-home-experience bg-cover bg-no-repeat md:scroll-snap-align-start bg-blend-hard-light">
            <div className="absolute bottom-3 md:bottom-8 right-3 md:right-8">
              <Button
                label="Experience."
                link="/experience"
                type="link"
                size="lg"
                shape="circle"
                color="gunPowder"
              />
            </div>
          </div>

          <div className="relative w-full h-96 md:h-screen bg-home-about md:scroll-snap-align-start bg-cover bg-no-repeat bg-blend-hard-light">
            <div className="absolute bottom-3 md:bottom-8 left-3 md:left-8">
              <Button
                label="About."
                link="/about"
                type="link"
                size="lg"
                shape="circle"
                color="padua"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
import React from 'react'
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import Button from '../button/Button'
import pdfCV from '../../downloads/CV_Dominic_Garcia_4_05_2021.pdf'


const Home = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:relative scroll-behavior-smooth">
      <section className="md:sticky md:top-0 h-screen relative">
        <div className="absolute left-2 top-0 rounded-full bg-gunPowder p-3 h-16 w-16 flex items-center justify-center mx-auto my-4">
          <StaticImage className="w-full" src="../../images/portfolio_logo_revised.png" alt="drg logo" />
        </div>

        <div className="flex flex-col justify-center relative top-28">
          <h1 className="font-display font-semibold text-5xl text-center">
            <span className="text-9xl">Hi.</span> My name is Dom.
          </h1>

          <h2 className="font-body font-normal text-2xl my-4 text-center">
            I design user-centered experiences with simplicity, creativity, and thoughfulness
          </h2>
          {/* <StaticImage className="relative" src="../../images/portfolio_logo_revised.png" alt="drg logo" /> */}

          <div className="flex flex-col justify-center p-2 m-2">
            {/* <h2 className="font-display font-normal text-2xl lg:text-5xl text-center">Dominic Ross Garcia</h2> */}
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
            <p className="m-2">|</p>
            <Link className="hover:text-terracota" to="/skills">Skills</Link>
            <p className="m-2">|</p>
            <Link className="hover:text-terracota" to="/about">About</Link>
          </div>

          <div className="shadow-md hover:shadow-xl rounded-md w-56 lg:w-72 mx-auto my-8 flex justify-center items-center bg-terracota hover:bg-terracota-light text-rice cursor-pointer">
            <a className="py-3 text-lg lg:text-2xl font-semibold font-display" download="CV_Dominic_Ross_Garcia.pdf" href={pdfCV}>
              Download CV
            </a>
          </div>
          <div className="md:hidden my-1 text-terracota-dark opacity-1/2 flex justify-center items-center animate-bounce">
            <a href="#projects">
              <ArrowDropDownCircleOutlinedIcon fontSize="large" />
            </a>
          </div>
        </div>

      </section>

      <section id="projects">
        <div className="relative w-full h-96 md:h-screen bg-gunPowder overflow-hidden">
          <StaticImage className="p-1 m-8 relative 2xl:top-28 2xl:left-72" src="../../images/Device - Macbook Pro.png" alt="macbook mockup" />
          <StaticImage className="p-1 m-4 relative -top-28 lg:-top-36 xl:-top-60 2xl:top-60 left-20 lg:left-36 xl:left-60 2xl:-left-16" src="../../images/Clay Dark.png" alt="mobile mockup" />
          <div className="absolute bottom-3 md:bottom-8 left-3 md:left-8 z-10">
            <Button
              label="Projects."
              link="/projects"
              type="link"
              size="lg"
              color="terracota"
            />
          </div>
          <p className="opacity-0 md:opacity-100 absolute text-9xl font-bold text-rice bottom-36 lg:bottom-44 xl:bottom-56 2xl:bottom-24 left-8 2xl:left-auto 2xl:right-8 z-0 mix-blend-soft-light">Projects.</p>
        </div>

        <div className="relative w-full h-96 md:h-screen bg-home-experience bg-cover bg-no-repeat bg-blend-hard-light overflow-hidden">
          <div className="absolute bottom-3 md:bottom-8 right-3 md:right-8">
            <Button
              label="Skills."
              link="/skills"
              type="link"
              size="lg"
              shape="circle"
              color="padua"
            />
          </div>
          <p className="opacity-0 md:opacity-100 absolute text-9xl font-bold text-rice bottom-36 lg:bottom-44 xl:bottom-56 2xl:bottom-24 left-8 2xl:left-auto 2xl:right-8 z-0 mix-blend-soft-light">Skills.</p>
        </div>

        <div className="relative w-full h-96 md:h-screen bg-home-about bg-cover bg-no-repeat bg-blend-hard-light overflow-hidden">
          <div className="absolute bottom-3 md:bottom-8 left-3 md:left-8 z-10">
            <Button
              label="About."
              link="/about"
              type="link"
              size="lg"
              shape="circle"
              color="gunPowder"
            />
          </div>
          <p className="opacity-0 md:opacity-100 absolute text-9xl font-bold text-rice bottom-36 lg:bottom-44 xl:bottom-56 2xl:bottom-24 left-8 2xl:left-auto 2xl:right-8 z-0 mix-blend-soft-light">About.</p>
        </div>
      </section>
    </div>
  )
}

export default Home
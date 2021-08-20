import React from 'react'
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import { motion } from 'framer-motion'
import Button from '../button/Button'
import pdfCV from '../../downloads/CV_Dominic_Garcia_4_05_2021.pdf'

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1, 
    transition: {
      delay: 0.4,
      staggerChildren: 0.08,
    },
  },
}

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const line1 = 'Hi.'
const line2 = 'My name is Dom.'

const h2Variant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
      delay: 1,
    },
  },
}

const divVariant = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
  },
}

const navLinkVariant = {
  hidden: {
    opacity: 0,
    left: '-8px',
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    left: 'initial',
    transition: {
      duration: 0.5,
    },
  },
}


const Home = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:relative scroll-behavior-smooth bg-rice">
      <section className="md:sticky md:top-0 xs:h-screen relative">
        
          <StaticImage placeholder="blurred" className="w-12 absolute left-2 top-0 my-2" src="../../images/portfolio-logo-revised-gunpowder.png" alt="drg logo" />

        <div className="flex flex-col justify-center relative top-0 md:top-32 xl:top-40 xl:max-w-screen-md xl:m-auto">
          <motion.h1 variants={sentence} initial="hidden" animate="visible" className="font-display font-normal text-4xl text-center mx-4 my-2">
            {
              line1.split('').map((char, i) => (
                <motion.span className="text-8xl font-semibold" key={`${char}-${i}`} variants={letter}>{char}</motion.span>
              ))
            }
            &nbsp;
            {
              line2.split('').map((char, i) => (
                <motion.span key={`${char}-${i}`} variants={letter}>{char}</motion.span>
              ))
            }
          </motion.h1>

          <motion.h2
            className="font-body font-light text-lg text-center leading-relaxed max-w-md mx-auto my-4"
            variants={h2Variant}
            initial="hidden"
            animate="visible"
          >
            I design user-centered experiences grounded in collaboration, communication, and simplicity.
          </motion.h2>   

          <div className="flex flex-row justify-center p-1 m-1">
            <a href="https://github.com/DmncG/" target="_blank" rel="noreferrer nofollow">
              <StaticImage placeholder="blurred" className="w-12 m-4" src="../../images/GitHub-Mark-64px.png" alt="github logo" />
            </a>
            <a href="https://www.linkedin.com/in/dominic-rb-garcia/" target="_blank" rel="nofollow noreferrer">
              <StaticImage placeholder="blurred" className="w-12 m-4" src="../../images/linkedin-logo.png" alt="linkedin logo" />
            </a>
          </div>

          <div className="flex flex-row justify-center items-center p-1 m-1 font-body relative">
            <motion.div
              variants={divVariant}
              initial="hidden"
              whileHover="visible"
              className="relative flex flex-cols justify-center items-center"
            >
              <Link className="hover:text-terracota" to="/projects">Projects</Link>
              <motion.div
                className="h-1 w-8 bg-terracota absolute top-6"
                variants={navLinkVariant}
              />
            </motion.div>
            <p className="m-2">|</p>
            <motion.div
              variants={divVariant}
              initial="hidden"
              whileHover="visible"
              className="relative  flex flex-cols justify-center items-center"
            >
              <Link className="hover:text-terracota" to="/skills">Skills</Link>
              <motion.div
                className="h-1 w-8 bg-terracota absolute top-6"
                variants={navLinkVariant}
              />
            </motion.div>
            <p className="m-2">|</p>
            <motion.div
              variants={divVariant}
              initial="hidden"
              whileHover="visible"
              className="relative flex flex-cols justify-center items-center"
            >
              <Link className="hover:text-terracota" to="/about">About</Link>
              <motion.div
                className="h-1 w-8 bg-terracota absolute top-6"
                variants={navLinkVariant}
              />
            </motion.div>
          </div>

          <div className="shadow-md hover:shadow-xl rounded-md w-56 lg:w-72 mx-auto my-2 flex justify-center items-center bg-terracota hover:bg-terracota-light text-rice cursor-pointer">
            <a className="py-3 text-lg lg:text-2xl font-semibold font-display" download="CV_Dominic_Ross_Garcia.pdf" href={pdfCV}>
              Download CV
            </a>
          </div>
          <div className="md:hidden my-8 text-terracota-dark opacity-1/2 flex justify-center items-center animate-bounce">
            <a href="#projects">
              <ArrowDropDownCircleOutlinedIcon fontSize="large" />
            </a>
          </div>
        </div>

      </section>

      <section id="projects">
        <div className="relative w-full h-96 md:h-screen bg-home-projects bg-cover bg-no-repeat bg-blend-soft-light overflow-hidden">
          <div className="absolute bottom-3 md:bottom-8 left-3 md:left-8 z-10">
            <Button
              label="Projects."
              link="/projects"
              type="link"
              size="lg"
              color="terracota"
            />
          </div>
        </div>

        <div className="relative w-full h-96 md:h-screen bg-home-experience bg-cover bg-no-repeat bg-blend-hard-light overflow-hidden">
          <div className="absolute bottom-3 md:bottom-8 right-3 md:right-8 z-10">
            <Button
              label="Skills."
              link="/skills"
              type="link"
              size="lg"
              shape="circle"
              color="padua"
            />
          </div>
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
        </div>
      </section>
    </div>
  )
}

export default Home
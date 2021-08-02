import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion'
import { useMediaQuery } from '@material-ui/core'

const ProjectList = () => {
  const controlsSection1 = useAnimation()
  const controlsSection2 = useAnimation()
  const controlsSection3 = useAnimation()

  const { ref: refSection1, inView: inViewSection1 } = useInView()
  const { ref: refSection2, inView: inViewSection2 } = useInView()
  const { ref: refSection3, inView: inViewSection3 } = useInView()

  const match767 = useMediaQuery('(min-width: 767px)')

  const sectionVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    },
  }

  const projectImageVariants = {
    closer: {
      y: 20,
    },
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  }

  const circleVariant = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: 20,
    },
    visible: {
      opacity: 0.3,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  }

  const accentVariant = {
    hidden: {
      x: -20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
    transition: {
      delay: 0.5,
      duration: 2,
    },
  }

  const projectHeaderVariants = {
    closer: {
      y: -20,
    },
  }

  const sentenceVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1, 
      transition: {
        delay: 0,
        staggerChildren: 0.03,
      },
    },
  }
  
  const letterVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const h3Variant = {
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

  const titleArr = [
    {
      id: 1,
      title: 'Non Profit Organization for the Arts',
    },
    {
      id: 2,
      title: 'Government Agency Website',
    },
    {
      id: 3,
      title: 'Bookstore Website'
    },
  ]

  useEffect(() => {
    if (inViewSection1) {
      controlsSection1.start('visible');
    }
  }, [controlsSection1, inViewSection1])

  useEffect(() => {
    if (inViewSection2) {
      controlsSection2.start('visible');
    }
  }, [controlsSection2, inViewSection2])

  useEffect(() => {
    if (inViewSection3) {
      controlsSection3.start('visible');
    }
  }, [controlsSection3, inViewSection3])

  return (
    <div className="md:max-w-screen-sm lg:max-w-screen-lg md:mx-auto lg:px-8 overflow-hidden">
      <div className="my-8 p-4">
        <h1 className="font-display font-semibold text-4xl md:text-7xl">Projects</h1>
        <div className="h-1 bg-terracota w-16 my-4 ml-1"/>
      </div>
      
      <motion.section
        className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center p-4 m-1 mb-8 relative"
        variants={sectionVariant}
        initial="hidden"
        animate={controlsSection1}
        ref={refSection1}
      >
        <motion.div
          className="flex flex-col justify-center relative -top-5"
          variants={projectImageVariants}
        >
          <StaticImage className="p-1 w-72 md:w-96 relative z-0 mx-auto" src="../../images/Device - Macbook Pro.png" alt="moreart macbook mockup" />
          <StaticImage className="p-1 w-44 md:w-52 relative z-10 -top-28 -right-16 mx-auto" src="../../images/Clay Dark.png" alt="moreart mobile mockup" />
        </motion.div>

        <motion.div
          className="p-1 my-1 mx-auto relative"
          variants={projectHeaderVariants}
        >
          <div className="relative">
            <motion.h2
              className="font-display font-semibold text-2xl md:text-4xl my-2"
              variants={sentenceVariant}
              // initial="hidden"
              // animate="visible"
            >
              {
                titleArr[0].title.split('').map((char, i) => <motion.span key={`${char}-${i}`} variants={letterVariant}>{char}</motion.span>)
              }
            </motion.h2>
            <motion.div
              className="rounded-full h-48 md:h-60 w-48 md:w-60 bg-terracota-light absolute z-0 -top-20 -right-2"
              variants={circleVariant}
            />
          </div>
          <motion.div
            className="h-1 bg-terracota w-16 my-4"
            variants={accentVariant}
          />
          <motion.h3
            className="font-display font-normal text-lg mb-2"
            variants={h3Variant}
            // initial="hidden"
            // animate="visible"
          >
            Redesigning <strong>MoreArt</strong>, an organization that supports collaboration between artists and communities to create public art
          </motion.h3>
          <Link to="/" className="font-body text-lg text-terracota-dark hover:text-terracota my-1">
            View this project
          </Link>
        </motion.div>
      </motion.section>

      <motion.section
        className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center p-4 m-1 mb-8 relative"
        variants={sectionVariant}
        initial="hidden"
        animate={controlsSection2}
        ref={refSection2}
      >
        <motion.div
          className="flex flex-col justify-center relative top-9"
          variants={projectImageVariants}
        >
          <StaticImage className="p-1 w-72 md:w-96 relative z-0 mx-auto" src="../../images/dol-macbook-pro.png" alt="dol macbook mockup" />
          <StaticImage className="p-1 w-24 md:w-32 relative z-10 -top-36 -right-24 md:-right-32 mx-auto" src="../../images/dol-mobile.png" alt="dol mobile mockup" />
        </motion.div>

        <motion.div
          className="p-1 my-1 mx-auto relative"
          variants={projectHeaderVariants}
        >
          <div className="relative">
            <motion.h2
              className="font-display font-semibold text-2xl md:text-4xl my-2"
              variants={sentenceVariant}
            >
              {
                titleArr[1].title.split('').map((char, i) => <motion.span key={`${char}-${i}`} variants={letterVariant}>{char}</motion.span>)
              }
            </motion.h2>
            <motion.div
              className="rounded-full h-48 md:h-60 w-48 md:w-60 bg-padua-light opacity-30 absolute z-0 -top-20 -right-2"
              variants={circleVariant}
            />
          </div>
          <motion.div
            className="h-1 bg-terracota w-16 my-4"
            variants={accentVariant}
          />
          <motion.h3
            className="font-display font-normal text-lg mb-2"
            variants={h3Variant}
          >
            <strong>Department of Labor</strong> website redesign
          </motion.h3>
          <Link to="/" className="font-body text-lg text-terracota-dark hover:text-terracota my-1">
            View this project
          </Link>
        </motion.div>
      </motion.section>

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

      <motion.section
        className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center p-4 m-1 relative"
        variants={sectionVariant}
        initial="hidden"
        animate={controlsSection3}
        ref={refSection3}
      >
        <motion.div
          className="flex flex-col justify-center relative -top-4"
          variants={projectImageVariants}
        >
          <StaticImage className="p-1 w-72 md:w-96 relative z-0 mx-auto" src="../../images/strand_macbook.png" alt="strand macbook mockup" />
          <StaticImage className="p-1 w-28 md:w-40 relative z-10 -top-36 -right-24 md:-right-32 mx-auto" src="../../images/strand_mobile.png" alt="strand mobile mockup" />
        </motion.div>
        
        <motion.div
          className="p-1 my-1 mx-auto relative"
          variants={projectHeaderVariants}
        >
          <div className="relative">
            <motion.h2
              className="font-display font-semibold text-2xl md:text-4xl my-2"
              variants={sentenceVariant}
            >
              {
                titleArr[2].title.split('').map((char, i) => <motion.span key={`${char}-${i}`} variants={letterVariant}>{char}</motion.span>)
              }
            </motion.h2>
            <motion.div
              className="rounded-full h-48 md:h-60 w-48 md:w-60 bg-gunPowder-light absolute z-0 -top-20 -right-2" 
              variants={circleVariant}
            />
          </div>
          <motion.div
            className="h-1 bg-terracota w-16 my-4"
            variants={accentVariant}
          />
          <motion.h3
            className="font-display font-normal text-lg mb-2"
            variants={h3Variant}
          >
            Development and implementation of the e-commerce platform of <strong>Strand Book Store</strong>, an independent bookstore based in New York City
          </motion.h3>
          <Link to="/" className="font-body text-lg text-terracota-dark hover:text-terracota">
            View this project
          </Link>
        </motion.div>
      </motion.section>
    </div>
  )
}

    export default ProjectList
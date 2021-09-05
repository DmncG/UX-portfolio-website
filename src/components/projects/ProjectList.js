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

  const match1024 = useMediaQuery('(min-width: 1024px)')

  const sectionVariant = {
    hidden: {
      opacity: 0,
    },
    hiddenMobile: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      },
    },
    visibleMobile: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    },
    scale: {
      scale: 1,
    },
  }

  const projectImageVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    hiddenMobile: {
      opacity: 0,
      y: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
    visibleMobile: {
      opacity: 1,
      y: 50,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
    scale: {
      scale: 1,
    },
  }

  const circleVariant = {
    hidden: {
      opacity: 0,
      scale: 1,
      y: 20,
    },
    hiddenMobile: {
      opacity: 0,
      scale: 1,
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
    visibleMobile: {
      opacity: 0.3,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
    scale: {
      scale: 1.1,
      transition: {
        duration: 0.5
      }
    },
  }

  const accentVariant = {
    hidden: {
      x: -20,
      opacity: 0,
    },
    hiddenMobile: {
      x: -20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
    visibleMobile: {
      x: 0,
      opacity: 1,
    },
    transition: {
      delay: 0.5,
      duration: 2,
    },
    scale: {
      scale: 1,
    },
  }

  const sentenceVariant = {
    hidden: { opacity: 1 },
    hiddenMobile: { opacity: 1 },
    visible: {
      opacity: 1, 
      transition: {
        delay: 0,
        staggerChildren: 0.03,
      },
    },
    visibleMobile: {
      opacity: 1, 
      transition: {
        delay: 0,
        staggerChildren: 0.03,
      },
    },
    scale: {
      scale: 1,
    },
  }
  
  const letterVariant = {
    hidden: { opacity: 0, y: 50 },
    hiddenMobile: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
    visibleMobile: {
      opacity: 1,
      y: 0,
    },
    scale: {
      scale: 1,
    },
  }

  const h3Variant = {
    hidden: {
      opacity: 0,
    },
    hiddenMobile: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 3,
        delay: 1,
      },
    },
    visibleMobile: {
      opacity: 1,
      transition: {
        duration: 3,
        delay: 1,
      },
    },
    scale: {
      scale: 1,
    },
  }

  const navLinkVariant = {
    hidden: {
      opacity: 0,
      x: -5
    },
    hiddenMobile: {
      opacity: 0,
      x: -5
    },
    visible: {
      opacity: 0,
      x: -5,
    },
    visibleMobile: {
      opacity: 0,
      x: -5,
    },
    scale: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      }
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
      title: 'Bookstore Website',
    },
    {
      id: 4,
      title: 'Social Music App',
    }
  ]

  useEffect(() => {
    if (inViewSection1) {
      match1024 ? controlsSection1.start('visible') : controlsSection1.start('visibleMobile');
    }
  }, [controlsSection1, inViewSection1])

  useEffect(() => {
    if (inViewSection2) {
      match1024 ? controlsSection2.start('visible') : controlsSection2.start('visibleMobile');
    }
  }, [controlsSection2, inViewSection2])

  useEffect(() => {
    if (inViewSection3) {
      match1024 ? controlsSection3.start('visible') : controlsSection3.start('visibleMobile');
    }
  }, [controlsSection3, inViewSection3])

  return (
    <div className="md:max-w-screen-sm lg:max-w-screen-lg md:mx-auto lg:px-8 overflow-hidden">
      <div className="my-16 p-4">
        <h1 className="font-display font-semibold text-4xl md:text-7xl">Projects</h1>
        <div className="h-1 bg-terracota w-16 my-4 ml-1"/>
      </div>

      <motion.section
        className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center p-4 m-1 mb-32 relative"
        variants={sectionVariant}
        initial={match1024 ? 'hidden' : 'hiddenMobile'}
        animate={controlsSection1}
        whileHover="scale"
        ref={refSection1}
      >
        <motion.div
          className="flex flex-row justify-center items-center relative -top-28 lg:-top-5"
          variants={projectImageVariants}
        >
          <StaticImage placeholder="blurred" className="p-1 relative mx-auto left-4" src="../../images/muse-projects-artists.png" alt="muse artists mockup" />
          <StaticImage placeholder="blurred" className="p-1 relative mx-auto" src="../../images/muse-projects-home.png" alt="muse home mockup" />
          <StaticImage placeholder="blurred" className="p-1 relative mx-auto right-4" src="../../images/muse-projects-friends.png" alt="muse friends mockup" />
        </motion.div>

        <motion.div
          className="p-1 my-1 mx-auto relative"
        >
          <div className="relative">
            <motion.h2
              className="font-display font-semibold text-2xl md:text-4xl my-2"
              variants={sentenceVariant}
              // initial="hidden"
              // animate="visible"
            >
              {
                titleArr[3].title.split('').map((char, i) => <motion.span key={`${char}-${i}`} variants={letterVariant}>{char}</motion.span>)
              }
            </motion.h2>
            <motion.div
              className="rounded-full h-48 md:h-60 w-48 md:w-60 bg-rice absolute z-0 -top-20 -right-2"
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
           <strong>Muse</strong> is a social music app that aims to add a human element in discovering new music
          </motion.h3>
          <Link to="/projects/muse" className="font-body text-lg text-terracota-dark hover:text-terracota my-1">
            View this project
          </Link>
          <motion.div
            className="h-1 w-8 bg-terracota absolute -bottom-1"
            variants={navLinkVariant}
          />
        </motion.div>
      </motion.section>
      
      <motion.section
        className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center p-4 m-1 mb-8 relative"
        variants={sectionVariant}
        initial={match1024 ? 'hidden' : 'hiddenMobile'}
        animate={controlsSection2}
        whileHover="scale"
        ref={refSection2}
      >
        <motion.div
          className="flex flex-col justify-center relative -top-5"
          variants={projectImageVariants}
        >
          <StaticImage placeholder="blurred" className="p-1 w-72 md:w-96 relative z-0 mx-auto" src="../../images/Device - Macbook Pro.png" alt="moreart macbook mockup" />
          <StaticImage placeholder="blurred" className="p-1 w-44 md:w-52 relative z-10 -top-28 -right-16 mx-auto" src="../../images/Clay Dark.png" alt="moreart mobile mockup" />
        </motion.div>

        <motion.div
          className="p-1 my-1 mx-auto relative"
        >
          <div className="relative">
            <motion.h2
              className="font-display font-semibold text-2xl md:text-4xl my-2 relative z-10"
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
          <Link to="/projects/more-art" className="font-body text-lg text-terracota-dark hover:text-terracota my-1">
            View this project
          </Link>
          <motion.div
            className="h-1 w-8 bg-terracota absolute -bottom-1"
            variants={navLinkVariant}
          />
        </motion.div>
      </motion.section>

      <motion.section
        className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center p-4 m-1 mb-8 relative"
        variants={sectionVariant}
        initial={match1024 ? 'hidden' : 'hiddenMobile'}
        animate={controlsSection3}
        whileHover="scale"
        ref={refSection3}
      >
        <motion.div
          className="flex flex-col justify-center relative top-9"
          variants={projectImageVariants}
        >
          <StaticImage placeholder="blurred" className="p-1 w-72 md:w-96 relative z-0 mx-auto" src="../../images/dol-macbook-pro.png" alt="dol macbook mockup" />
          <StaticImage placeholder="blurred" className="p-1 w-24 md:w-32 relative z-10 -top-36 -right-24 md:-right-32 mx-auto" src="../../images/dol-mobile.png" alt="dol mobile mockup" />
        </motion.div>

        <motion.div
          className="p-1 my-1 mx-auto relative"
        >
          <div className="relative">
            <motion.h2
              className="font-display font-semibold text-2xl md:text-4xl my-2 relative z-10"
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
          <Link to="/projects/department-of-labor" className="font-body text-lg text-terracota-dark hover:text-terracota my-1">
            View this project
          </Link>
          <motion.div
            className="h-1 w-8 bg-terracota absolute -bottom-1"
            variants={navLinkVariant}
          />
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

      {/* <motion.section
        className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center p-4 m-1 relative"
        variants={sectionVariant}
        initial={match1024 ? 'hidden' : 'hiddenMobile'}
        animate={controlsSection3}
        whileHover="scale"
        ref={refSection3}
      >
        <motion.div
          className="flex flex-col justify-center relative -top-4"
          variants={projectImageVariants}
        >
          <StaticImage placeholder="blurred" className="p-1 w-72 md:w-96 relative z-0 mx-auto" src="../../images/strand_macbook.png" alt="strand macbook mockup" />
          <StaticImage placeholder="blurred" className="p-1 w-28 md:w-40 relative z-10 -top-36 -right-24 md:-right-32 mx-auto" src="../../images/strand_mobile.png" alt="strand mobile mockup" />
        </motion.div>
        
        <motion.div
          className="p-1 my-1 mx-auto relative"
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
          <Link to="/projects/strand-bookstore" className="font-body text-lg text-terracota-dark hover:text-terracota">
            View this project
          </Link>
          <motion.div
            className="h-1 w-8 bg-terracota absolute -bottom-1"
            variants={navLinkVariant}
          />
        </motion.div>
      </motion.section> */}
    </div>
  )
}

    export default ProjectList
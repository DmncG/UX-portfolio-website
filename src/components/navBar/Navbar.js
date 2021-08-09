import React, { useState, useRef } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { motion, useCycle } from 'framer-motion'
import Slide from '@material-ui/core/Slide'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Backdrop from '@material-ui/core/Backdrop'
import IconButton from '@material-ui/core/IconButton'
import { useDimensions } from '../../hooks/useDimensions'

const useStyles = makeStyles({
  rootAppBar: {
    backgroundColor: '#3D405B',
  },
  rootIconButton: {
    color: '#E07A5F',
    '&:hover': {
      color: '#F0BEB0',
    },
    position: 'fixed',
    top: '18px',
    left: '15px',
    zIndex: 1400,
  },
  rootIcon: {
    fontSize: '40px',
  },
  rootToolbar: {
    justifyContent: 'space-between',
    position: 'relative',
  },
  rootBackdrop: {
    zIndex: 1100,
  }
});

const divVariant = {
  hidden: {
    opacity: 1,
    x: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
}

const navLinkVariant = {
  hidden: {
    opacity: 0,
    x: -5
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    }
  },
}

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#E07A5F"
    strokeLinecap="round"
    {...props}
  />
);

const linksVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


const Navbar = (props) => {
  const match768 = useMediaQuery('(min-width: 768px)')
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const classes = useStyles()

  const [drawerState, setDrawer] = useState(false)

  const [isOpen, toggleOpen] = useCycle(false, true)

  const handleToggle = () => toggleOpen()

  return (
    <>
      {
        match768
          ? (
            <HideOnScroll {...props}>
            <AppBar classes={{ root: classes.rootAppBar }} position="sticky">
              <Toolbar classes={{ root: classes.rootToolbar }}>
                <div className="flex flex-row justify-center items-center">
                  <motion.div
                    className="mx-4 p-1 relative"
                    variants={divVariant}
                    initial="hidden"
                    whileHover="visible"
                  >
                    <Link to="/projects" className="text-rice hover:text-terracota font-display text-md lg:text-lg text-normal">
                      Projects
                    </Link>
                    <motion.div
                      className="h-1 w-6 bg-terracota absolute -bottom-1"
                      variants={navLinkVariant}
                    />
                  </motion.div>

                  <motion.div
                    className="mx-4 p-1 relative"
                    variants={divVariant}
                    initial="hidden"
                    whileHover="visible"
                  >
                    <Link to="/skills" className="text-rice hover:text-terracota font-display text-md lg:text-lg text-normal">
                      Skills
                    </Link>
                    <motion.div
                      className="h-1 w-6 bg-terracota absolute -bottom-1"
                      variants={navLinkVariant}
                    />
                  </motion.div>

                  <motion.div
                    className="mx-4 p-1 relative"
                    variants={divVariant}
                    initial="hidden"
                    whileHover="visible"
                  >
                    <Link to="/about" className="text-rice hover:text-terracota font-display text-md lg:text-lg text-normal">
                      About
                    </Link>
                    <motion.div
                      className="h-1 w-6 bg-terracota absolute -bottom-1"
                      variants={navLinkVariant}
                    />
                  </motion.div>
                  
                </div>
                <div>
                  <Link to="/">
                    <StaticImage className="w-12 m-2" src="../../images/portfolio_logo_revised.png" alt="drg logo" />
                  </Link>
                </div>
              </Toolbar>
            </AppBar>
            </HideOnScroll>
          )
          : (
            <React.Fragment>
              <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
              >
                <motion.div className="absolute top-0 left-0 bottom-0 w-60 bg-gunPowder z-1200" variants={sidebar} />
                <Backdrop className={classes.rootBackdrop} open={isOpen} onClick={handleToggle} />
                <motion.div className="absolute z-1300 top-32 left-20" variants={linksVariants}>

                <motion.div variants={itemVariants} className="flex justify-center">
                  <Link to="/">
                    <StaticImage className="w-16 block mx-auto" src="../../images/portfolio_logo_revised.png" alt="drg logo" />
                  </Link>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col justify-center text-rice text-center text-lg font-display">
                  <Link to="/projects" className="p-2 my-1 hover:text-terracota">
                    <p>Projects</p>
                  </Link>

                  <Link to="/skills" className="p-2 my-1 hover:text-terracota">
                    <p>Skills</p>
                  </Link>

                  <Link to="/about" className="p-2 my-1 hover:text-terracota">
                    <p>About</p>
                  </Link>
                </motion.div>

                </motion.div>
                <IconButton onClick={handleToggle} aria-label="menu" classes={{ root: classes.rootIconButton }}>
                <svg width="23" height="23" viewBox="0 0 23 23">
                  <Path
                    variants={{
                      closed: { d: "M 2 2.5 L 20 2.5" },
                      open: { d: "M 3 16.5 L 17 2.5" }
                    }}
                  />
                  <Path
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.1 }}
                  />
                  <Path
                    variants={{
                      closed: { d: "M 2 16.346 L 20 16.346" },
                      open: { d: "M 3 2.5 L 17 16.346" }
                    }}
                  />
                </svg>
                </IconButton>
              </motion.div>
              <AppBar classes={{ root: classes.rootAppBar }}>
                <Toolbar classes={{ root: classes.rootToolbar }}>
                  <div className="w-2 h2 bg-gunPowder p-1"/>
                  <div>
                    <Link to="/">
                      <StaticImage className="w-12 m-2" src="../../images/portfolio_logo_revised.png" alt="drg logo" />
                    </Link>
                  </div>
                </Toolbar>
              </AppBar>
              <Toolbar />
            </React.Fragment>
          )
      }
    </>
  )
}

export default Navbar
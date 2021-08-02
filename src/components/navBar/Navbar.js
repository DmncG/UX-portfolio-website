import React, { useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { motion } from 'framer-motion'
import Slide from '@material-ui/core/Slide'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import IconButton from '@material-ui/core/IconButton'
import NavDrawer from '../navDrawer/NavDrawer'

const useStyles = makeStyles({
  rootAppBar: {
    backgroundColor: '#3D405B',
    // backgroundColor: '#1f202e',
    // backgroundColor: '#87311a',
  },
  rootIconButton: {
    color: '#E07A5F',
    '&:hover': {
      color: '#F0BEB0',
    },
  },
  rootIcon: {
    fontSize: '40px',
  },
  rootToolbar: {
    justifyContent: 'space-between',
  },
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
      duration: 1,
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


const Navbar = (props) => {
  const match768 = useMediaQuery('(min-width: 768px)')

  const classes = useStyles()

  const [drawerState, setDrawer] = useState(false)

  const handleDrawer = () => setDrawer(!drawerState)

  const closeDrawer = () => setDrawer(false)

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar classes={{ root: classes.rootAppBar }} position="sticky">
          <Toolbar classes={{ root: classes.rootToolbar }}>

            <div>
              <Link to="/">
                <StaticImage className="w-12 m-2" src="../../images/portfolio_logo_revised.png" alt="drg logo" />
              </Link>
            </div>

            {
              match768
                ? (
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
                )
                : (
                  <div>
                    <IconButton onClick={handleDrawer} aria-label="menu" classes={{ root: classes.rootIconButton }}>
                      <MenuRoundedIcon classes={{ root: classes.rootIcon }} />
                    </IconButton>
                  </div>
                )
            }

          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <NavDrawer open={drawerState} onClose={closeDrawer} />
    </>
  )
}

export default Navbar
import React, { useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import IconButton from '@material-ui/core/IconButton'
import NavDrawer from '../navDrawer/NavDrawer'

function HideOnScroll(props) {
  const { children, window, location } = props;
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

  const useStyles = makeStyles({
    rootAppBar: {
      backgroundColor: '#3d405b',
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
              <IconButton onClick={handleDrawer} aria-label="menu" classes={{ root: classes.rootIconButton }}>
                <MenuRoundedIcon classes={{ root: classes.rootIcon }} />
              </IconButton>
            </div>

            <div>
              <Link to="/">
                <StaticImage className="w-16" src="../../images/portfolio_logo_rice.png" alt="drg logo" />
              </Link>
            </div>

          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <NavDrawer open={drawerState} onClose={closeDrawer} />
    </>
  )
}

export default Navbar
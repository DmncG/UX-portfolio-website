import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const useStyles = makeStyles({
  rootDrawer: {
    backgroundColor: '#3D405B',
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
})

const NavDrawer = ({ open, onClose }) => {
  const classes = useStyles()

  return (
    <Drawer PaperProps={{ classes: { root: classes.rootDrawer } }} open={open} onClose={onClose}>
      <div className="w-52">
        <IconButton classes={{ root: classes.rootIconButton }} onClick={onClose} aria-label="close-icon">
          <CloseRoundedIcon classes={{ root: classes.rootIcon }}/>
        </IconButton>

        <Link to="/">
          <StaticImage className="w-28 block mx-auto my-2" src="../../images/portfolio_logo_rice.png" alt="drg logo" />
        </Link>

        <div className="flex flex-col justify-center text-rice text-center text-lg font-display">
          <Link to="/projects" className="p-2 my-1 hover:text-terracota">
            <p>Projects</p>
          </Link>

          <Link to="/skills" className="p-2 my-1 hover:text-terracota">
            <p>Skills</p>
          </Link>

          <Link to="/about" className="p-2 my-1 hover:text-terracota">
            <p>About</p>
          </Link>
        </div>
      </div>
    </Drawer>
  )
}

export default NavDrawer;

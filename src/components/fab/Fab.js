import React from 'react'
import PropTypes from 'prop-types'
import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUpRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';

const Fab = ({ fabType }) => {
  
  const handleScrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  if (fabType === 'email') {
    return (
      <div className="fixed flex justify-center items-center rounded-full w-16 h-16 bg-terracota hover:bg-terracota-light bottom-28 right-8 text-rice z-50">
        <a
          className=""
          aria-label="Contact Me"
          href="mailto:micksdev@gmail.com"
        >
          <MailOutlineRoundedIcon fontSize="large" />
        </a>
      </div>
    )
  }

  return (
    <button
      className="fixed rounded-full w-16 h-16 bg-terracota hover:bg-terracota-light bottom-8 right-8 text-rice z-50"
      aria-label="Return to Top"
      type="button"
      onClick={handleScrollTop}
    >
      <KeyboardArrowUpRoundedIcon fontSize="large" />
    </button>
  )
}

Fab.propTypes = {
  fabType: PropTypes.string,
}

Fab.defaultProps = {
  fabType: null,
}

export default Fab;

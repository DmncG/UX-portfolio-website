import React from 'react'
import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUpRounded';

const Fab = () => {
  
  const handleScrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <button
      className="fixed rounded-full w-24 h-24 bg-terracota hover:bg-terracota-light bottom-24 right-8 text-rice z-50"
      aria-label="Return to Top"
      type="button"
      onClick={handleScrollTop}
    >
      <KeyboardArrowUpRoundedIcon fontSize="large" />
    </button>
  )
}

export default Fab;

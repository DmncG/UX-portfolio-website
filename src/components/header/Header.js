import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ level = 1, children }) => {

  if (level === 2) {
    return (
    <h2 className="font-body font-light text-lg my-4 text-center leading-relaxed max-w-screen-sm mx-auto p-2">
      {children}
    </h2>
    )
  }

  return (
    <h1 className="font-display font-normal text-4xl text-center mx-4 my-4 p-2">
      {children}
    </h1>
  )
}

Header.propTypes = {
  level: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
}

export default Header
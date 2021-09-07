import React from 'react'
import PropTypes from 'prop-types'

const Mobile = ({ mobileImage }) => (
  <div className="my-8 mx-2 relative">
    <div className="relative h-680 overflow-y-scroll">
      <img
        src={mobileImage.imgSrc}
        alt={mobileImage.imgAlt}
        className="relative z-0"
      />
    </div>
  </div>
)

Mobile.propTypes = {
  mobileImage: PropTypes.objectOf.isRequired,
}

export default Mobile
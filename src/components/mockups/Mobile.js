import React from 'react'
import PropTypes from 'prop-types'
import iphoneMockup from '../../images/iphone-x-mockup.png'

const Mobile = ({ mobileImage }) => (
  <div className="my-8 mx-2 relative">
    <div className="relative h-680 overflow-y-scroll">
      {/* <img
        src={iphoneMockup}
        alt="iphone x screen"
        className="absolute top-0 z-10"
      /> */}
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
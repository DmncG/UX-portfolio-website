import React from 'react'
import PropTypes from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = ({ location }) => {
  const projectName = location.pathname.slice(10, -1)
  console.log(projectName)

  if (projectName === 'more-art') {
    return (
        <div className="mt-16 mb-16">
          <div className="relative flex flex-col justify-center items-center max-w-sm sm:mx-auto">
            <StaticImage
              src="../../images/moreart-cover-desktop.png"
              alt="MoreArt Desktop"
              placeholder="blurred"
              className="w-72 sm:w-120 lg:w-136"
            />
            <StaticImage
              src="../../images/moreart-cover-mobile.png"
              alt="MoreArt Mobile"
              placeholder="blurred"
              className="w-32 sm:w-36 lg:w-48 right-4 sm:-right-12 lg:-right-24 top-4 sm:top-20 lg:top-16"
              style={{
                position: 'absolute',
              }}
            />
          </div>
      </div> 
    )
  }

  if (projectName === 'department-of-labor') {
    return (
      <div className="mt-16 mb-16">
        <div className="relative flex flex-col justify-center items-center max-w-sm sm:mx-auto">
          <StaticImage
            src="../../images/dol-cover-desktop.png"
            alt="DOL Desktop"
            placeholder="blurred"
            className="w-72 sm:w-120 lg:w-136"
          />
    
          <StaticImage
            src="../../images/dol-cover-mobile.png"
            alt="DOL Mobile"
            placeholder="blurred"
            className="w-32 sm:w-36 lg:w-48 right-4 sm:-right-12 lg:-right-24 top-4 sm:top-20 lg:top-16"
            style={{
              position: 'absolute',
            }}
          />
        </div>
      </div> 
    )
  }

  if (projectName === 'strand-bookstore') {
    return (
      <div className="mt-16 mb-16">
        <div className="relative flex flex-col justify-center items-center max-w-sm sm:mx-auto">
          <StaticImage
            src="../../images/strand_macbook.png"
            alt="Strand Desktop"
            placeholder="blurred"
            className="w-72 sm:w-120 lg:w-136"
          />
    
          <StaticImage
            src="../../images/strand_mobile.png"
            alt="Strand Mobile"
            placeholder="blurred"
            className="w-32 sm:w-36 lg:w-48 right-4 sm:-right-12 lg:-right-24 top-4 sm:top-20 lg:top-16"
            style={{
              position: 'absolute',
            }}
          />
        </div>
      </div> 
    )
  }

  if (projectName === 'muse') {
    return (
      <div className="mt-16 mb-16">
        <div className="relative flex flex-col justify-center items-center max-w-sm sm:mx-auto">
          <StaticImage
            src="../../images/dol-cover-desktop.png"
            alt="DOL Desktop"
            placeholder="blurred"
            className="w-72 sm:w-120 lg:w-136"
          />
    
          <StaticImage
            src={`../../images/dol-cover-mobile.png`}
            alt={`DOL Mobile`}
            placeholder="blurred"
            className="w-32 sm:w-36 lg:w-48 right-4 sm:-right-12 lg:-right-24 top-4 sm:top-20 lg:top-16"
            style={{
              position: 'absolute',
            }}
          />
        </div>
      </div> 
    )
  }

  if (projectName === 'nudge') {
    return (
      <div className="mt-16 mb-16">
        <div className="relative flex flex-col justify-center items-center max-w-sm sm:mx-auto">
          <StaticImage
            src="../../images/dol-cover-desktop.png"
            alt="DOL Desktop"
            placeholder="blurred"
            className="w-72 sm:w-120 lg:w-136"
          />
    
          <StaticImage
            src={`../../images/dol-cover-mobile.png`}
            alt={`DOL Mobile`}
            placeholder="blurred"
            className="w-32 sm:w-36 lg:w-48 right-4 sm:-right-12 lg:-right-24 top-4 sm:top-20 lg:top-16"
            style={{
              position: 'absolute',
            }}
          />
        </div>
      </div> 
    )
  }

  return (
    <div className="mt-16 mb-16 relative flex flex-col justify-center items-center">
      <StaticImage
        src=''
        alt='placeholder'
        placeholder="blurred"
        className=""
      />

      <StaticImage
        src=''
        alt='placeholder mobile'
        placeholder="blurred"
        className=""
      />
    </div> 
  )
}

Hero.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default Hero
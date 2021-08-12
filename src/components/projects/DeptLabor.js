import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Header from '../header/Header'

const DeptLabor = () => (
  <div className="max-w-screen-lg lg:h-screen md:mx-auto py-16">
    <div className="max-w-screen-lg md:mx-auto">
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
 
      <Header level={1}>Department of Labor</Header>
      <Header level={2}><strong>Department of Labor</strong> website redesign</Header>
    </div>
  </div>
)

export default DeptLabor
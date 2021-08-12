import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Header from '../header/Header'

const MoreArt = () => (
  <>
    <div className="max-w-screen-lg lg:h-screen md:mx-auto py-16">
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
      <Header level={1}>MoreArt</Header>
      <Header level={2}>Redesigning <strong>MoreArt</strong>, an organization that supports collaboration between artists and communities to create public art</Header>

      <div>
        <section>
          <Header level={1}>Overview</Header>
          <div>
            <div className="py-2 px-4 my-2">
              <h2 className="font-display font-semibold text-lg my-2">Background</h2>
              <p className="font-body text-base leading-relaxed">More Art is a 501(c)(3) nonprofit organization that supports collaborations between professional artists and communities to create public art and educational programs that inspire social justice.</p>
            </div>

            <div className="py-2 px-4 my-2">
              <h2 className="font-display font-semibold text-lg my-2">Objectives</h2>
              <p>To redesign MoreArt.org's website by applying the design thinking process</p>
            </div>

            <div className="py-2 px-4 my-2">
              <h2 className="font-display font-semibold text-lg my-2">My Role</h2>
              <p>UX Designer, team of 3</p>
            </div>

            <div className="py-2 px-4 my-2">
              <h2 className="font-display font-semibold text-lg my-2">Timeline</h2>
              <p>Two weeks</p>
            </div>

            <div className="py-2 px-4 my-2">
              <h2 className="font-display font-semibold text-lg my-2">Tools</h2>
              <p>Figma, Miro, Zoom, Otter.ai, Previewed</p>
            </div>
          </div>
        </section>

        <section>

        </section>

        <section>

        </section>
      </div>
    </div>
  </>
)

export default MoreArt
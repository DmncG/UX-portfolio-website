import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Header from '../header/Header'
import { RoundedButton } from '../button/Button'
import Fab from '../fab/Fab'

const DeptLabor = () => (
  <>
    <Fab />
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

      <div>
        <section className="bg-rice-light">
          <Header level={1}>Overview</Header>
          <div className="md:grid md:grid-cols-2 md:justify-center md:items-start">
            <div className="py-2 px-4 my-2">
              <div>
                <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Background</h2>
                <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
              </div>
              <p className="font-body text-base leading-relaxed">The DOL's mission is to foster, promote, and develop the welfare of the wage earners, job seekers, and retirees of the United States; improve working conditions; advance opportunities for profitable employment; and assure work-related benefits and rights.</p>
            </div>

            <div className="py-2 px-4 my-2">
              <div>
                <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Objectives</h2>
                <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
              </div>
              <p className="font-body text-base leading-relaxed">To analyze the Department of Labor’s website through the use of research and methodologies and provide recommendations to improve its UX.</p>
            </div>

            <div className="py-2 px-4 my-2">
              <div>
                <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">My Role</h2>
                <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
              </div>
              <p className="font-body text-base leading-relaxed">UX Designer</p>
            </div>

            <div className="py-2 px-4 my-2">
              <div>
                <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Timeline</h2>
                <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
              </div>
              <p className="font-body text-base leading-relaxed">Two weeks</p>
            </div>

            <div className="py-2 px-4 my-2">
              <div>
                <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Tools</h2>
              <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
              </div>
              <p className="font-body text-base leading-relaxed">Figma, Miro, Zoom, Otter.ai, InVision</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </>
)

export default DeptLabor
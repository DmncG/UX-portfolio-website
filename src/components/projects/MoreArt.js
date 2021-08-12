import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Header from '../header/Header'

const MoreArt = () => (
  <>
    <div className="max-w-screen-md xl:max-w-screen-lg md:mx-auto py-16">
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
          <div className="md:grid md:grid-cols-2 md:justify-center md:items-start">
            <div className="py-2 px-4 my-2">
              <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Background</h2>
              <p className="font-body text-base leading-relaxed">More Art is a 501(c)(3) nonprofit organization that supports collaborations between professional artists and communities to create public art and educational programs that inspire social justice.</p>
            </div>

            <div className="py-2 px-4 my-2">
              <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Objectives</h2>
              <p className="font-body text-base leading-relaxed">To redesign MoreArt.org's website by applying the design thinking process</p>
            </div>

            <div className="py-2 px-4 my-2">
              <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">My Role</h2>
              <p className="font-body text-base leading-relaxed">UX Designer, team of 3</p>
            </div>

            <div className="py-2 px-4 my-2">
              <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Timeline</h2>
              <p className="font-body text-base leading-relaxed">Two weeks</p>
            </div>

            <div className="py-2 px-4 my-2">
              <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Tools</h2>
              <p className="font-body text-base leading-relaxed">Figma, Miro, Zoom, Otter.ai, Previewed</p>
            </div>
          </div>
        </section>

        <section>
          <Header level={1}>Research</Header>
          <div>
            <div className="py-2 px-4 my-4">
              <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Research Interviews</h2>
              <p className="font-body text-base leading-relaxed">We began the process by conducting 5 research interviews to figure out the habits and painpoints of users when they donate online. Moreover, we wanted to know the general needs of people who are interested in social initiatives, and get a sense of how they perceive non-profit organizations as a whole.</p>
              <div className="grid grid-cols-2 justify-center my-8 lg:max-w-screen-md mx-auto">
                <StaticImage src="../../images/moreart-interview-1.png" alt="research interview 1" />

                <StaticImage src="../../images/moreart-interview-2.png" alt="research interview 2" />

                <StaticImage src="../../images/moreart-interview-3.png" alt="research interview 3" />

                <StaticImage src="../../images/moreart-interview-4.png" alt="research interview 4" />
              </div>
              <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Survey</h2>
              <div className="grid grid-cols-2 items-center">
                <p className="font-display text-9xl text-gunPowder">86.4%</p>
                <div>
                  <p className="font-body text-base leading-relaxed">
                    We also conducted a survey to get some quantitative data regarding this subject. Out of 22 responses, 86.4% wanted to know where their donations went.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <Header level={1}>Definition & Ideation</Header>
        </section>

        <section>
          <Header level={1}>Prototyping & Testing</Header>
        </section>

        <section>
          <Header level={1}>Next Steps</Header>
        </section>
      </div>
    </div>
  </>
)

export default MoreArt
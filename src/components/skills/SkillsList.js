import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Fab from '../fab/Fab'

const SkillsList = () => {
  return (
    <>
      <Fab />
      <div className="my-8 md:max-w-screen-md md:mx-auto">
        <h1 className="font-display font-semibold text-4xl md:text-7xl">Skills</h1>
        <div className="h-1 bg-terracota w-16 my-4 ml-1"/>
        <div className="my-12">
          <section>
            <div className="mb-12">
              <h2 className="font-display font-semibold text-2xl md:text-4xl">Research</h2>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center">
                  <StaticImage placeholder="blurred" alt="zoom" src="../../images/zoom-logo.png" className="w-40 my-8 mx-auto md:col-span-1" />
                  <div className="md:col-start-2 md:col-end-4">
                    <h3 className="font-body font-normal text-lg my-2">Zoom</h3>
                    <p className="font-body font-normal text-base">Pretty reliable and a lot of users have it installed in their computers so there's no need for installation/on-boarding. It produces space-efficient video recordings, too, which is a plus.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center">
                  <StaticImage placeholder="blurred" alt="zoom" src="../../images/otter-logo.png" className="w-40 my-8 mx-auto md:col-span-1" />
                  <div className="md:col-start-2 md:col-end-4">
                    <h3 className="font-body font-normal text-lg my-2">Otter.ai</h3>
                    <p className="font-body font-normal text-base">I really love Otter for its simplicity. it starts transcribing with a click of a button. Although the transcription needs editing to make it truly accurate, it still does a remarkable job capturing every word in an interview. Having it turned on with Zoom is a boon for any UX designer.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center">
                  <StaticImage placeholder="blurred" alt="zoom" src="../../images/google-forms-logo.png" className="w-32 my-8 mx-auto md:col-span-1" />
                  <div className="md:col-start-2 md:col-end-4">
                    <h3 className="font-body font-normal text-lg my-2">Google Forms</h3>
                    <p className="font-body font-normal text-base">Google Forms is my survey builder of choice simply because it lives within Google's ecosystem. Using it just makes my workflow more streamlined.</p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section>
            <div className="mb-12">
              <h2 className="font-display font-semibold text-2xl md:text-4xl">Ideation</h2>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center">
                  <StaticImage placeholder="blurred" alt="zoom" src="../../images/miro-logo.png" className="w-40 my-8 mx-auto md:col-span-1" />
                  <div className="md:col-start-2 md:col-end-4">
                    <h3 className="font-body font-normal text-lg my-2">Miro</h3>
                    <p className="font-body font-normal text-base">I haven't found a better collaboration tool than Miro. It feels so satisfying to see your team buzzing around, placing post-it notes in an infinite board. It's also great for generating user personas, graphs, and frameworks.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center">
                  <StaticImage placeholder="blurred" alt="zoom" src="../../images/invision-logo.png" className="w-32 my-8 mx-auto md:col-span-1" />
                  <div className="md:col-start-2 md:col-end-4">
                    <h3 className="font-body font-normal text-lg my-2">InVision</h3>
                    <p className="font-body font-normal text-base">I like creating moodboards with InVision but I hardly use it for anything else. Still a decent tool for organizing your ideas.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="mb-12">
              <h2 className="font-display font-semibold text-2xl md:text-4xl">Mockups &amp; Prototyping</h2>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center">
                  <StaticImage placeholder="blurred" alt="zoom" src="../../images/figma-logo.svg" className="w-32 my-8 mx-auto md:col-span-1" />
                  <div className="md:col-start-2 md:col-end-4">
                    <h3 className="font-body font-normal text-lg my-2">Figma</h3>
                    <p className="font-body font-normal text-base">I find it so easy to create mockups and do fast prototyping with Figma. With the ability to use wirekits and plugins created by a passionate community of designers, Figma's just hard to beat. I love using this tool.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center">
                  <StaticImage placeholder="blurred" alt="zoom" src="../../images/adobe-xd-logo.png" className="w-32 my-8 mx-auto md:col-span-1" />
                  <div className="md:col-start-2 md:col-end-4">
                    <h3 className="font-body font-normal text-lg my-2">Adobe XD</h3>
                    <p className="font-body font-normal text-base">Fell in love with its smart animate feature. Although I mainly use Figma, AdobeXD also does its job very well. Prototyping is very intuitive when using this tool.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="mb-12">
              <h2 className="font-display font-semibold text-2xl md:text-4xl">Development</h2>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center">
                  <StaticImage placeholder="blurred" alt="zoom" src="../../images/react-logo.png" className="w-40 my-8 mx-auto md:col-span-1" />
                  <div className="md:col-start-2 md:col-end-4">
                    <h3 className="font-body font-normal text-lg my-2">ReactJS</h3>
                    <p className="font-body font-normal text-base">My Javascript framework of choice. Everything just... made sense when I started using this framework. Component building has never been easier.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center">
                  <StaticImage placeholder="blurred" alt="zoom" src="../../images/material-ui-logo.png" className="w-40 my-8 mx-auto md:col-span-1" />
                  <div className="md:col-start-2 md:col-end-4">
                    <h3 className="font-body font-normal text-lg my-2">Material UI</h3>
                    <p className="font-body font-normal text-base">I've been using this since the beginning. Back then, you had to add inline style properties paired with the 'important' rule to apply your own styles. A lot has changed since then and I'll choose Material UI over Bootstrap any day. Bonus: your components automatically follow material design guidelines.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center">
                  <StaticImage placeholder="blurred" alt="zoom" src="../../images/apollo-logo.png" className="w-40 my-8 mx-auto md:col-span-1" />
                  <div className="md:col-start-2 md:col-end-4">
                    <h3 className="font-body font-normal text-lg my-2">GraphQL + Apollo</h3>
                    <p className="font-body font-normal text-base">Being able to just call the data that you need is one of the hallmark features of GraphQL. It's fast, easy to incorporate into components, and the documentation is excellent.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center">
                  <StaticImage placeholder="blurred" alt="zoom" src="../../images/react-testing-library-logo.png" className="w-40 my-8 mx-auto md:col-span-1" />
                  <div className="md:col-start-2 md:col-end-4">
                    <h3 className="font-body font-normal text-lg my-2">Jest + React Testing Library</h3>
                    <p className="font-body font-normal text-base">Jest is a testing framework that comes out-of-the-box from Create React App. It's pretty easy to create mocks with it. Alongside React Testing Library, I've found everything I need to do unit tests with these two.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center">
                  <StaticImage placeholder="blurred" alt="zoom" src="../../images/gatsby-logo.png" className="w-40 my-8 mx-auto md:col-span-1" />
                  <div className="md:col-start-2 md:col-end-4">
                    <h3 className="font-body font-normal text-lg my-2">GatsbyJS</h3>
                    <p className="font-body font-normal text-base">Let's just say I wish I learned this React-based framework when it first came out. It's a remarkable solution for frontend developers. Not only is it React-based, but it also has hosting, scaling, and data querying solutions that just makes my life easier. Fun fact: this portfolio website was made with GatsbyJS!</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center">
                  <StaticImage placeholder="blurred" alt="zoom" src="../../images/tailwind-logo.png" className="w-40 my-8 mx-auto md:col-span-1" />
                  <div className="md:col-start-2 md:col-end-4">
                    <h3 className="font-body font-normal text-lg my-2">Tailwind CSS</h3>
                    <p className="font-body font-normal text-base">Another one of those "I wish I learned this sooner" type of frameworks. Some people would say it's just Bootstrap but what separates it from the rest is its utility-first approach. There is a learning curve to use TailwindCSS but it feels so good once I got accustomed to its concepts. It makes my styles reusable, development is faster, AND it allows me to have little to no CSS files in my projects.</p>
                  </div>
                </div>
    
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center">
                  <StaticImage placeholder="blurred" alt="zoom" src="../../images/analytics-logo.png" className="w-40 my-8 mx-auto md:col-span-1" />
                  <div className="md:col-start-2 md:col-end-4">
                    <h3 className="font-body font-normal text-lg my-2">Google Analytics</h3>
                    <p className="font-body font-normal text-base">Quantitative metrics alongside qualitative data is essential in creating a complete picture of a product. Google Analytics just makes it easier to capture KPIs and present numbers to stakeholders.</p>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default SkillsList





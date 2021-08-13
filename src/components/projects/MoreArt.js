import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Header from '../header/Header'

const MoreArt = () => {
  return (
    <>
      <div className="md:max-w-screen-md xl:max-w-screen-lg md:mx-auto py-16">
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
          <section className="bg-rice-light">
            <Header level={1}>Overview</Header>
            <div className="md:grid md:grid-cols-2 md:justify-center md:items-start">
              <div className="py-2 px-4 my-2">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Background</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <p className="font-body text-base leading-relaxed">More Art is a 501(c)(3) nonprofit organization that supports collaborations between professional artists and communities to create public art and educational programs that inspire social justice.</p>
              </div>

              <div className="py-2 px-4 my-2">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Objectives</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <p className="font-body text-base leading-relaxed">To redesign MoreArt.org's website by applying the design thinking process</p>
              </div>

              <div className="py-2 px-4 my-2">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">My Role</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <p className="font-body text-base leading-relaxed">UX Designer, team of 3</p>
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
                <p className="font-body text-base leading-relaxed">Figma, Miro, Zoom, Otter.ai, Previewed</p>
              </div>
            </div>
          </section>

          <section>
            <Header level={1}>Research</Header>
            <div>
              <div className="py-2 px-4 my-4">

                <div className="my-4">
                  <div>
                    <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Research Interviews</h2>
                    <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                  </div>
                  <p className="font-body text-base leading-relaxed">We began the process by conducting 4 research interviews to <strong>figure out the habits and painpoints of users when they donate online</strong>. Moreover, we wanted to know the general needs of people who are interested in social initiatives, and get a sense of how they perceive non-profit organizations as a whole.</p>
                  <div className="grid grid-cols-2 justify-center my-16 lg:max-w-screen-md mx-auto">
                    <StaticImage
                      src="../../images/moreart-interview-1.png"
                      alt="research interview 1"
                      placeholder="blurred"
                    />

                    <StaticImage
                      src="../../images/moreart-interview-2.png"
                      alt="research interview 2"
                      placeholder="blurred"
                    />

                    <StaticImage
                      src="../../images/moreart-interview-3.png"
                      alt="research interview 3"
                      placeholder="blurred"
                    />

                    <StaticImage
                      src="../../images/moreart-interview-4.png"
                      alt="research interview 4"
                      placeholder="blurred"
                    />
                  </div>
                </div>

                <div className="my-4">
                  <div>
                    <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Research Findings</h2>
                    <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                  </div>
                  <ul className="list-disc pl-8">
                    <li className="font-body text-base my-4">
                      There is a desire to see people genuinely help others
                    </li>
                    <li className="font-body text-base my-4">
                      There is a general agreement that it's important to support social causes
                    </li>
                    <li className="font-body text-base my-4">
                      They discover non-profit organizations and social causes via social media
                    </li>
                  </ul>
                  <div className="my-16">
                    <p className="font-body font-semibold text-lg sm:text-xl md:text-3xl leading-relaxed my-2">
                      “In an age where everything is driven by profit, non-profit organizations believe in a cause and I want to help”
                    </p>
                  </div>
                </div>

                <div className="my-4">
                  <div>
                    <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Survey</h2>
                    <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                  </div>
                  <div className="grid grid-cols-2 items-center my-8 lg:my-12 mx-auto max-w-screen-sm lg:max-w-screen-md">
                    <p className="font-display text-center text-4xl md:text-7xl lg:text-8xl text-padua">86.4%</p>
                    <div>
                      <p className="font-body text-base leading-relaxed lg:text-xl">
                        We also conducted a survey to get some quantitative data regarding this subject. Out of 22 responses, 86.4% wanted to know where their donations went.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="my-4">
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2 relative">What makes it difficult to donate?</h2>

                  <div className="my-16 flex flex-col">
                    <p className="font-body font-semibold text-lg sm:text-xl md:text-3xl leading-relaxed my-2">
                      "Not knowing where the donation will end up"
                    </p>
                    <p className="font-body text-xl md:text-2xl leading-relaxed my-2 md:my-8 self-end relative right-2 md:right-40">
                      "It's not convenient"
                    </p>
                    <p className="font-body font-bold text-xl md:text-5xl leading-relaxed my-2 relative left-6">
                      "Lack of trust"
                    </p>
                  </div>
                </div>

                <div className="my-4">
                  <div>
                    <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Proto Persona</h2>
                    <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                  </div>
                  <div className="my-8 flex flex-col">
                    <p className="font-body text-base leading-relaxed">We created a proto persona to represent our assumptions of MoreArt's ideal user</p>
                    <StaticImage
                      src="../../images/moreart-proto-persona.jpg"
                      alt="proto persona"
                      className="my-8 self-center"
                      placeholder="blurred"
                    />
                  </div>
                </div>

                <div className="my-4">
                  <div>
                    <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Heuristic Evaluation</h2>
                    <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                  </div>
                  <div className="my-8 flex flex-col">
                    <p className="font-body text-base leading-relaxed">After performing a heuristic evaluation on MoreArt's current website, it was evident that there was a need to <strong>make the designs between pages feel more consistent</strong>. There were also a number of broken links throughout the site. Despite all this, the website does have help available in every page and there are a limited number of buttons and links.</p>
                    <div className="my-16 lg:max-w-screen-md mx-auto grid grid-cols-3">
                      <StaticImage
                        src="../../images/moreart-heuristic-1.png"
                        alt="Heuristic 1"
                        className="my-8 self-center"
                        placeholder="blurred"
                      />
                      <StaticImage
                        src="../../images/moreart-heuristic-2.png"
                        alt="Heuristic 2"
                        className="my-8 self-center"
                        placeholder="blurred"
                      />
                      <StaticImage
                        src="../../images/moreart-heuristic-3.png"
                        alt="Heuristic 3"
                        className="my-8 self-center"
                        placeholder="blurred"
                      />
                    </div>
                  </div>
                </div>

                <div className="my-4">
                  <div>
                    <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Annotations</h2>
                    <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                  </div>
                  <div className="my-8 flex flex-col">
                    <p className="font-body text-base leading-relaxed">After performing a heuristic evaluation on MoreArt's current website, it was evident that there was a need to <strong>make the designs between pages feel more consistent</strong>. There were also a number of broken links throughout the site. Despite all this, the website does have help available in every page and there are a limited number of buttons and links.</p>
                    <div className="my-16 lg:max-w-screen-md mx-auto grid grid-cols-3">
                      <StaticImage
                        src="../../images/moreart-anno-1.png"
                        alt="Annotations 1"
                        className="my-8 self-center"
                        placeholder="blurred"
                      />
                      <StaticImage
                        src="../../images/moreart-anno-2.png"
                        alt="Annotations 2"
                        className="my-8 self-center"
                        placeholder="blurred"
                      />
                      <StaticImage
                        src="../../images/moreart-anno-3.png"
                        alt="Annotations 3"
                        className="my-8 self-center"
                        placeholder="blurred"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section>
            <Header level={1}>Definition & Ideation</Header>
            <div className="py-2 px-4 my-4">
              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Affinity Diagram</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8 flex flex-col">
                  <p className="font-body text-base leading-relaxed">We gathered all our findings from the research interviews and organized them into an affinity diagram. <strong>Concerns about transparency and trust</strong> naturally came up as we grouped the data.</p>
                  <StaticImage
                    src="../../images/moreart-affinity.jpg"
                    alt="Affinity Diagram"
                    className="my-8 self-center"
                    placeholder="blurred"
                  />
                </div>
              </div>

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">User Insight</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8">
                  <p className="font-body text-base leading-relaxed">We decided to focus on the themes surrounding transparecy and trust as this seemed to be the most important factor for our users.</p>
                  <p className="font-display font-semibold text-lg sm:text-xl md:text-3xl leading-relaxed my-16">People who donate online need to have a simple,  reassuring, and accountable giving experience because <span className="text-terracota">trust and transparency are key into motivating users to donate</span>.</p>
                </div>
              </div>

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">User Persona</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8 flex flex-col">
                  <StaticImage
                    src="../../images/moreart-user-persona.png"
                    alt="User Persona"
                    className="my-8 self-center"
                    placeholder="blurred"
                  />
                </div>
              </div>
            </div>
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
  
}

export default MoreArt
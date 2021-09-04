import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Header from '../header/Header'
import { RoundedButton } from '../button/Button'
import SectionBreak from '../sectionBreak/SectionBreak'
import Mobile from '../mockups/Mobile'
import lofiMobile1 from '../../images/moreart-lofi-home-mobile.png'
import lofiMobile2 from '../../images/moreart-lofi-rsvp-mobile.jpg'
import lofiMobile3 from '../../images/moreart-lofi-shop-mobile.png'
import hifiMobile1 from '../../images/moreart-home-mobile.png'
import hifiMobile2 from '../../images/moreart-final-shop-mobile.png'
import hifiMobile3 from '../../images/moreart-final-exhibitions-mobile.jpg'

import Fab from '../fab/Fab'

const MoreArt = () => {
  return (
    <>
      <Fab />
      <div className="md:max-w-screen-md xl:max-w-screen-lg md:mx-auto py-16">
        <div className="mt-16 mb-16">
          <div className="relative -left-16 grid grid-cols-3 justify-center items-center max-w-lg sm:mx-auto">
            <StaticImage
              src="../../images/muse-projects-artists.png"
              alt="Muse Artists"
              placeholder="blurred"
              className="w-72"
            />
            <StaticImage
              src="../../images/muse-projects-home.png"
              alt="Muse Home"
              placeholder="blurred"
              className="w-72"
            />
            <StaticImage
              src="../../images/muse-projects-friends.png"
              alt="Muse Friends"
              placeholder="blurred"
              className="w-72 relative -top-2.5"
            />
          </div>
        </div> 
        <Header level={1}>Muse</Header>
        <Header level={2}>A social music app that aims to add a human element in discovering new music</Header>
        
        <SectionBreak />
        
        <div>
          <section>
            <Header level={1}>Overview</Header>
            <div className="md:grid md:grid-cols-2 md:justify-center md:items-start">
              <div className="py-2 px-4 my-2">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Background</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <p className="font-body text-base leading-relaxed">Our team wanted to come up with a music app that would allow users to share their music with friends and family</p>
              </div>

              <div className="py-2 px-4 my-2">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Objectives</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <p className="font-body text-base leading-relaxed">Muse looks to add a human element to the way people discover new music. By establishing a social music community, sharing and discovering music becomes a more interactive, dynamic and ultimately rewarding experience.</p>
              </div>

              <div className="py-2 px-4 my-2">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">My Role</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <p className="font-body text-base leading-relaxed">UX Designer, team of 4</p>
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
                <p className="font-body text-base leading-relaxed">Figma, Miro, Zoom, Otter.ai</p>
              </div>
            </div>
          </section>

          <SectionBreak />

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

                  <div className="my-4">
                  <div className="my-16 mx-auto flex flex-col overflow-hidden">
                    <p className="font-body font-semibold text-lg sm:text-xl md:text-3xl leading-relaxed my-2">
                      "I like using Spotify but it doesn't connect the social aspect of music"
                    </p>
                    <p className="font-body text-xl md:text-2xl leading-relaxed my-2 md:my-8 self-end relative right-2 md:right-8">
                      "I have my own music preferences but I am open to discovering new music"
                    </p>
                    <p className="font-body font-bold text-xl md:text-5xl leading-relaxed my-2 relative left-6">
                      "Playlist radios on Spotify often seems to be wrong"
                    </p>
                  </div>
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

                  <div className="my-16 mx-auto flex flex-col overflow-hidden">
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
                    <div className="my-16 lg:max-w-screen-md mx-auto grid grid-cols-1">
                      <StaticImage
                        src="../../images/moreart-heuristic-1.png"
                        alt="Heuristic 1"
                        className="my-8 col-span-2"
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
                    <p className="font-body text-base leading-relaxed">We annotated MoreArt's website as well to identify notable elements and key areas of improvement</p>
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

                  <div className="my-4">
                    <RoundedButton
                      label="View Annotations"
                      color="terracota"
                      link="https://www.figma.com/file/ewE6IUBmbbSkgmuKKL87nq/Non-Profit-Annotations?node-id=0%3A1"
                    />
                  </div>
                </div>

              </div>
            </div>
          </section>

          <SectionBreak />

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

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Competitor Analysis</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>

                <div className="my-8 flex flex-col">
                  <p className="font-body text-base leading-relaxed">We conducted a competitor analysis to evaluate the strengths and weaknesses of organizations within the same space.</p>
                  <div className="my-8 lg:max-w-screen-md mx-auto">
                    <div className="flex flex-col md:flex-row justify-start items-center">
                      <StaticImage
                        src="../../images/moreart-artstart_logo.png"
                        alt="ArtStart"
                        className="my-2 w-48"
                        placeholder="blurred"
                        imgStyle={{
                          width: "150px",
                          margin: 'auto',
                          objectFit: 'contain',
                        }}
                      />
                      <div>
                        <ul className="list-disc pl-8">
                          <li className="font-body text-base my-4">
                            Donate page is easy to scan
                          </li>
                          <li className="font-body text-base my-4">
                            Website is beautifully designed
                          </li>
                          <li className="font-body text-base my-4">
                            No breakdown of how the money is being used
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-start items-center">
                      <StaticImage
                        src="../../images/moreart-free-arts-nyx-logo.png"
                        alt="Free Arts NYC"
                        className="my-2 w-48"
                        placeholder="blurred"
                        imgStyle={{
                          width: "150px",
                          margin: 'auto',
                          objectFit: 'contain',
                        }}
                      />
                      <div>
                        <ul className="list-disc pl-8">
                          <li className="font-body text-base my-4">
                            There is a page dedicated to the financial breakdown of donations
                          </li>
                          <li className="font-body text-base my-4">
                            Lots of donation options
                          </li>
                          <li className="font-body text-base my-4">
                            Aesthetics need improvement
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-start items-center">
                      <StaticImage
                        src="../../images/moreart-ASPCA-logo.png"
                        alt="ASPCA"
                        className="my-12 md:my-2 w-48"
                        placeholder="blurred"
                        imgStyle={{
                          width: "150px",
                          margin: 'auto',
                          objectFit: 'contain',
                        }}
                      />
                      <div>
                        <ul className="list-disc pl-8">
                          <li className="font-body text-base my-4">
                            Prominent donation button
                          </li>
                          <li className="font-body text-base my-4">
                            Allows one-time as well as monthly donations
                          </li>
                          <li className="font-body text-base my-4">
                            Homepage is a little busy
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>

            </div>
          </section>

          <SectionBreak />

          <section>
            <Header level={1}>Prototyping & Testing</Header>
            <div className="py-2 px-4 my-4">

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">I Like, I Wish, What If...</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8 flex flex-col">
                  <p className="font-body text-base leading-relaxed">We knew that we wanted the donation workflow to be simpler with a clean and modern design. Users should also be able to donate to specific projects.</p>
                  <div className="my-8 lg:max-w-screen-md mx-auto grid grid-cols-1">
                    <StaticImage
                      src="../../images/moreart-i-like-i-wish-what-if.jpeg"
                      alt="I Like I Wish What If"
                      className="my-8 col-span-2"
                      placeholder="blurred"
                    />
                  </div>
                </div>
              </div>

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Mood Board</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8 flex flex-col">
                  <p className="font-body text-base leading-relaxed">Quicksand, a sans serif font, was used as it conveyed approachability. We also looked at museums and architecture that had a modern and contemporary feel to develop the website's aesthetics.</p>
                  <div className="my-8 lg:max-w-screen-md mx-auto grid grid-cols-1">
                    <StaticImage
                      src="../../images/moreart-moodboard.png"
                      alt="Mood Board"
                      className="my-8 col-span-2"
                      placeholder="blurred"
                    />
                  </div>
                </div>
              </div>

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Style Guide</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8 flex flex-col">
                  <p className="font-body text-base leading-relaxed">We used the striking Persian Blue that goes very well with the black background. Colors weere kept to a minimum to enhance the site's simplicity.</p>
                  <div className="my-8 lg:max-w-screen-md mx-auto">
                    <StaticImage
                      src="../../images/moreart-style-guide-2.png"
                      alt="Style Guide"
                      className="my-8"
                      placeholder="blurred"
                    />
                  </div>
                </div>
              </div>

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">User Flows</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8 flex flex-col">
                  <p className="font-body text-base leading-relaxed">We focused on the three main user flows of the website: donations, exhibitions, and the shopping experience</p>
                  <div className="my-8 lg:max-w-screen-md mx-auto grid grid-cols-1 md:grid-cols-3">
                    <StaticImage
                      src="../../images/moreart-userflow-donations.jpg"
                      alt="Donations"
                      className="my-8"
                      placeholder="blurred"
                    />
                    <StaticImage
                      src="../../images/moreart-userflow-exhibits.jpg"
                      alt="Exhibitions"
                      className="my-8"
                      placeholder="blurred"
                    />
                    <StaticImage
                      src="../../images/moreart-userflow-shop.jpg"
                      alt="Shop"
                      className="my-8"
                      placeholder="blurred"
                    />
                  </div>
                </div>
              </div>

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Lo-fi Prototypes</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8 flex flex-col">
                  <div className="lg:max-w-screen-md mx-auto grid grid-cols-1 md:grid-cols-3 justify-center items-start">
                    <StaticImage
                      src="../../images/moreart-lofi-home-desktop.png"
                      alt="Home Desktop"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/moreart-lofi-rsvp-desktop.png"
                      alt="RSVP Desktop"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/moreart-lofi-shop-desktop.png"
                      alt="Shop Desktop"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <Mobile mobileImage={{imgSrc: lofiMobile1, imgAlt: 'lofi home'}} />
                    <Mobile mobileImage={{imgSrc: lofiMobile2, imgAlt: 'lofi rsvp'}} />
                    <Mobile mobileImage={{imgSrc: lofiMobile3, imgAlt: 'lofi shop'}} />
                  </div>

                  <div className="my-4">
                    <RoundedButton
                      label="View Prototype"
                      color="terracota"
                      link="https://www.figma.com/proto/ewE6IUBmbbSkgmuKKL87nq/Non-Profit-Annotations?node-id=66%3A49&scaling=scale-down&page-id=62%3A3&starting-point-node-id=66%3A49&show-proto-sidebar=1"
                    />
                  </div>
                </div>
              </div>

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Hi-fi Prototypes</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8 flex flex-col">
                  <div className="lg:max-w-screen-md mx-auto grid grid-cols-1 md:grid-cols-3 justify-center items-start">
                    <StaticImage
                      src="../../images/moreart-final-desktop-1.png"
                      alt="Home Desktop"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/moreart-final-desktop-2.png"
                      alt="RSVP Desktop"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/moreart-final-desktop-3.png"
                      alt="Shop Desktop"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/moreart-final-mobile-1.png"
                      alt="Home Mobile"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/moreart-final-mobile-2.png"
                      alt="RSVP Mobile"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/moreart-final-mobile-3.png"
                      alt="Shop Mobile"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
              </div>

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">User Tests</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8 flex flex-col">
                  <p className="font-body text-base leading-relaxed">We conducted 3 user tests on our hi-fi prototype to validate (or invalidate) our designs. We ask our users to RSVP on a project, make a $25 donation, add an item to their cart, and check out. Some of the feedback we received are the ff:</p>
                  <ul className="list-disc pl-8">
                    <li className="font-body text-base my-4">
                      RSVP cta was confusing
                    </li>
                    <li className="font-body text-base my-4">
                      Waited for a pop up to ask the user to check out; clicking the cart wasn't intuitive
                    </li>
                    <li className="font-body text-base my-4">
                      Kept seeing the value proposition on the donations page and thought something was broken
                    </li>
                    <li className="font-body text-base my-4">
                      Struggled to return home from the donations page; navbar missing on the page
                    </li>
                    <li className="font-body text-base my-4">
                      Checkout experience was intuitive
                    </li>
                  </ul>
                </div>
              </div>

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Iterated Hi-fi Prototypes</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8 flex flex-col">
                  <div className="lg:max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-start">
                    <StaticImage
                      src="../../images/moreart-final-home.png"
                      alt="Home Desktop"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/moreart-final-donations.png"
                      alt="Donations Desktop"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/moreart-final-exhibitions.png"
                      alt="Exhibitions Desktop"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/moreart-final-public-water.png"
                      alt="public water"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/moreart-final-shop.png"
                      alt="Shop Desktop"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/moreart-final-checkout.png"
                      alt="Checkout Desktop"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                  </div>

                  <div className="lg:max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 justify-center items-start">
                    <Mobile mobileImage={{imgSrc: hifiMobile1, imgAlt: 'hifi home'}} />
                    <Mobile mobileImage={{imgSrc: hifiMobile2, imgAlt: 'hifi shop'}} />
                    <Mobile mobileImage={{imgSrc: hifiMobile3, imgAlt: 'hifi exhibits'}} />
                  </div>

                </div>
                <div className="my-4">
                  <RoundedButton
                    label="View Prototype"
                    link="https://www.figma.com/proto/ewE6IUBmbbSkgmuKKL87nq/Non-Profit-Annotations?node-id=115%3A3550&scaling=scale-down&page-id=85%3A117&starting-point-node-id=115%3A3550"
                    color="terracota"
                  />
                </div>
              </div>

            </div>
          </section>

          <SectionBreak />

          <section>
            <Header level={1}>Next Steps</Header>
            <div className="py-2 px-4 my-4">
              <p className="font-body text-base leading-relaxed">There were a lot of low-hanging fruits that our team addressed to vastly improve the overall experience on the website. Exhibitions are now more navigable better highlights MoreArt's previous and current endeavors. Checkout is more contemporary and intuitive. Lastly, the home page has clear value propositions, with the donation page more streamlined and reassuring.</p>
              <br />
              <p className="font-body text-base leading-relaxed">Despite all these improvements, there is still more work left to be done.</p>
              <ul className="list-disc pl-8">
                <li className="font-body text-base my-4">
                  Redesign the artist's page.
                </li>
                <li className="font-body text-base my-4">
                  Include more ways to reassure customers during the giving experience (certifications, awards, display no. of donations).
                </li>
                <li className="font-body text-base my-4">
                  Follow-up with testers to see if the iterations worked.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  )
  
}

export default MoreArt
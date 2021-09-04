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
import interviewNicole from '../../images/muse-nicole-interview.gif'
import affinityDiagram from '../../images/muse-affinity-diagram.gif'
import featPrioritizationMatrix from '../../images/muse-feat-prioritization-matrix.gif'
import moodBoard from '../../images/muse-moodboard.gif'

import Fab from '../fab/Fab'

const Muse = () => {
  return (
    <>
      <Fab />
      <div className="md:max-w-screen-md xl:max-w-screen-lg md:mx-auto py-16">
        <div className="mt-16 mb-16">
          <div className="relative flex flex-row justify-center items-center max-w-lg mx-auto">
            <StaticImage
              src="../../images/muse-projects-artists.png"
              alt="Muse Artists"
              placeholder="blurred"
              className="w-28 md:w-full"
            />
            <StaticImage
              src="../../images/muse-projects-home.png"
              alt="Muse Home"
              placeholder="blurred"
              className="w-28 md:w-full"
            />
            <StaticImage
              src="../../images/muse-projects-friends.png"
              alt="Muse Friends"
              placeholder="blurred"
              className="w-28 md:w-full"
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
                  <p className="font-body text-base leading-relaxed">We began the process by conducting 5 research interviews to <strong>figure out user listening habits, music preferences, and how they consume music</strong>. We also wanted to know what compels users to share music and how important it is in their lives.</p>
                  <div className="my-16 lg:max-w-screen-md mx-auto">
                    <img
                      src={interviewNicole}
                      alt="research interview"
                      className="p-2"
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
                    <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Survey</h2>
                    <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                    <p className="font-body text-base leading-relaxed">
                      We also conducted a survey to get some quantitative data regarding this subject. From the 46 responses we've gathered, more than half rely on a music platform's algorithm to discover new music. However, <strong>80% says the music recommendations they receive are inaccurate</strong>.
                    </p>
                  </div>
                  <div className="my-8 mx-auto max-w-screen-md">
                    <div>
                      <StaticImage
                      src="../../images/muse-survey.png"
                      alt="proto persona"
                      className="my-8 self-center"
                      placeholder="blurred"
                    />
                    </div>
                  </div>
                </div>

                <div className="my-4">
                  <div>
                    <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Proto Persona</h2>
                    <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                  </div>
                  <div className="my-8 flex flex-col">
                    <p className="font-body text-base leading-relaxed">We created a proto persona to represent our assumptions of our app's ideal user.</p>
                    <StaticImage
                      src="../../images/muse-proto-persona.jpg"
                      alt="proto persona"
                      className="my-8 self-center"
                      placeholder="blurred"
                    />
                  </div>
                </div>

              </div>
            </div>
          </section>

          <SectionBreak />

          <section>
            <Header level={1}>Definition &amp; Ideation</Header>
            <div className="py-2 px-4 my-4">
              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Affinity Diagram</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8 flex flex-col">
                  <p className="font-body text-base leading-relaxed">We gathered all our findings from the research interviews and organized them into an affinity diagram.</p>
                  <img
                    src={affinityDiagram}
                    alt="Affinity Diagram"
                    className="p-2 my-8"
                  />
                </div>
              </div>

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Affinity Diagram (Final)</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8 flex flex-col">
                  <p className="font-body text-base leading-relaxed">The results were telling. There is a need to integrate a social aspect in music platforms and users are open to discovering new music through friends. In other words, music connects people and there's no feature or service that allows them to do it easily.</p>
                  <StaticImage
                    src="../../images/muse-affinity-diagram-final.jpg"
                    alt="Affinity Diagram Final"
                    className="self-center my-4"
                    placeholder="blurred"
                  />
                </div>
              </div>

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">I Like, I Wish, What If...</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8 flex flex-col">
                  <p className="font-body text-base leading-relaxed">We then identified the features that we like on existing music apps and social platforms, what we wished we had, and imagined out-of-the-box features that could bring the app to the next level. Through dot voting, we were able to narrow down the features we wanted to work on.</p>
                  <div className="my-8 lg:max-w-screen-md mx-auto">
                    <StaticImage
                      src="../../images/muse-i-like-i-wish-what-if.png"
                      alt="I Like I Wish What If"
                      className="my-8 col-span-2"
                      placeholder="blurred"
                    />
                  </div>
                </div>
              </div>

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Feature Prioritization Matrix</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8 flex flex-col">
                  <p className="font-body text-base leading-relaxed">Afterward, we sorted the features we like based on impact and complexity.</p>
                  <div className="my-8 lg:max-w-screen-md mx-auto">
                    <img
                        src={featPrioritizationMatrix}
                        alt="Feature Prioritization Matrix"
                        className="p-2 my-8"
                    />
                  </div>
                </div>
              </div>

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">User Insight</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8">
                  <p className="font-display font-semibold text-lg sm:text-xl md:text-3xl leading-relaxed my-8 md:my-16">Users who enjoy discovering new music <span className="text-terracota">have a desire to share their music preferences and discover others’</span> to form meaningful connections and feel a sense of belonging with others.</p>
                </div>
              </div>

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">User Persona</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8 flex flex-col">
                  <StaticImage
                    src="../../images/muse-user-persona.jpg"
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
            <Header level={1}>Prototyping &amp; Testing</Header>
            <div className="py-2 px-4 my-4">

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Mood Board</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8 flex flex-col">
                  <p className="font-body text-base leading-relaxed">Quicksand, a sans serif font, was used as it conveyed approachability. We also looked at museums and architecture that had a modern and contemporary feel to develop the website's aesthetics.</p>
                  <div className="my-8 lg:max-w-screen-md mx-auto grid grid-cols-1">
                    <img
                      src={moodBoard}
                      alt="Mood Board"
                      className="p-2 my-8"
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
                  <p className="font-body text-base leading-relaxed">We opted to use a bright and punchy gradient and complemented it with a warm and vibrant palette. Signika SC and Poppins were used for the header and the body respectively. The colorful "Atlas" gradient shows on a button's hover state</p>
                  <div className="my-8 lg:max-w-screen-md mx-auto">
                    <StaticImage
                      src="../../images/muse-style-guide.png"
                      alt="Style Guide"
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

export default Muse
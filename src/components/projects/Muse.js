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
import hifiOnboarding from '../../images/muse-hifi-onboarding.gif'
import hifiPosting from '../../images/muse-hifi-posting.gif'
import hifiRequesting from '../../images/muse-hifi-requesting.gif'

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
                    <p className="font-body text-md md:text-2xl leading-relaxed my-2 md:my-8 self-end relative md:left-8 xl:right-8 xl:left-0">
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
                  <p className="font-body text-base leading-relaxed">We conducted a competitor analysis to evaluate the strengths and weaknesses of apps within the music space.</p>
                  <div className="my-8 lg:max-w-screen-md mx-auto">
                    <div className="flex flex-col md:flex-row justify-start items-center">
                      <StaticImage
                        src="../../images/muse-reddit-logo.png"
                        alt="Reddit"
                        className="my-2 w-48"
                        placeholder="blurred"
                        imgStyle={{
                          width: "150px",
                          margin: 'auto',
                          objectFit: 'contain',
                        }}
                      />
                      <div>
                        <h3 className="font-display font-semibold text-base text-gunPowder my-2 pl-4">Reddit</h3>
                        <ul className="list-disc pl-8">
                          <li className="font-body text-base my-4">
                            Upvoting feature makes sure content is relevant and trusted
                          </li>
                          <li className="font-body text-base my-4">
                            Only subreddits are geared toward music
                          </li>
                          <li className="font-body text-base my-4">
                            Can be overwhelming
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-start items-center">
                      <StaticImage
                        src="../../images/muse-spotify-logo.png"
                        alt="Spotify"
                        className="my-2 w-48"
                        placeholder="blurred"
                        imgStyle={{
                          width: "150px",
                          margin: 'auto',
                          objectFit: 'contain',
                        }}
                      />
                      <div>
                        <h3 className="font-display font-semibold text-base text-gunPowder my-2 pl-4">Spotify</h3>
                        <ul className="list-disc pl-8">
                          <li className="font-body text-base my-4">
                            Best algorithm for music recommendations
                          </li>
                          <li className="font-body text-base my-4">
                            Limited social features
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-start items-center">
                      <StaticImage
                        src="../../images/muse-apple-music-logo.png"
                        alt="Apple Music"
                        className="my-12 md:my-2 w-48"
                        placeholder="blurred"
                        imgStyle={{
                          width: "150px",
                          margin: 'auto',
                          objectFit: 'contain',
                        }}
                      />
                      <div>
                        <h3 className="font-display font-semibold text-base text-gunPowder my-2 pl-4">Apple Music</h3>
                        <ul className="list-disc pl-8">
                          <li className="font-body text-base my-4">
                            Offers 60 million songs
                          </li>
                          <li className="font-body text-base my-4">
                            Aesthetically clean and appealing
                          </li>
                          <li className="font-body text-base my-4">
                            There is no free version to listen to a particular song
                          </li>
                          <li className="font-body text-base my-4">
                            Poor Android support
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-start items-center">
                      <StaticImage
                        src="../../images/muse-soundcloud-logo.png"
                        alt="Soundcloud"
                        className="my-12 md:my-2 w-48"
                        placeholder="blurred"
                        imgStyle={{
                          width: "150px",
                          margin: 'auto',
                          objectFit: 'contain',
                        }}
                      />
                      <div>
                        <h3 className="font-display font-semibold text-base text-gunPowder my-2 pl-4">Soundcloud</h3>
                        <ul className="list-disc pl-8">
                          <li className="font-body text-base my-4">
                            Recommends music and artists in many different ways
                          </li>
                          <li className="font-body text-base my-4">
                            UI is very cluttered
                          </li>
                          <li className="font-body text-base my-4">
                            Music is inconsistently behind a paywall
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Storyboard</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8 flex justify-center">
                  <div className="lg:max-w-screen-lg mx-auto">
                    <StaticImage
                      src="../../images/muse-storyboard.png"
                      alt="Storyboard"
                      placeholder="blurred"
                      imgStyle={{
                        objectFit: 'contain',
                      }}
                    />
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
                  <p className="font-body text-base leading-relaxed">We looked at various logos and UIs and considered adding recognizable music elements to our app. We also wanted to have a distinct look from existing music streaming platforms.</p>
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
                  <p className="font-body text-base leading-relaxed">We opted to use a vibrant gradient and complemented it with a warm palette. Signika SC and Poppins were used for the header and the body respectively. The colorful "Atlas" gradient shows on a button's hover state</p>
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
                  <p className="font-body text-base leading-relaxed">We focused on the three main user flows of the app: onboarding, posting music, and requesting for music recommendations</p>
                  <div className="my-8 lg:max-w-screen-md mx-auto grid grid-cols-1">
                    <StaticImage
                      src="../../images/muse-workflow-onboarding.jpg"
                      alt="Onboarding"
                      className="my-8"
                      placeholder="blurred"
                    />
                    <StaticImage
                      src="../../images/muse-workflow-posting.jpg"
                      alt="Posting"
                      className="my-8"
                      placeholder="blurred"
                    />
                    <StaticImage
                      src="../../images/muse-workflow-requesting.jpg"
                      alt="Requesting"
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
                      src="../../images/muse-lofi-onboard-1.png"
                      alt="Lofi Onboard 1"
                      className="my-8 mx-2 border-2 border-black"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/muse-lofi-onboard-2.png"
                      alt="Lofi Onboard 2"
                      className="my-8 mx-2 border-2 border-black"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/muse-lofi-onboard-3.png"
                      alt="Lofi Onboard 3"
                      className="my-8 mx-2 border-2 border-black"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/muse-lofi-post-1.png"
                      alt="Lofi Posting 1"
                      className="my-8 mx-2 border-2 border-black"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/muse-lofi-post-2.png"
                      alt="Lofi Posting 2"
                      className="my-8 mx-2 border-2 border-black"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/muse-lofi-post-3.png"
                      alt="Lofi Posting 3"
                      className="my-8 mx-2 border-2 border-black"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/muse-lofi-request-1.png"
                      alt="Lofi Request 1"
                      className="my-8 mx-2 border-2 border-black"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/muse-lofi-request-2.png"
                      alt="Lofi Request 2"
                      className="my-8 mx-2 border-2 border-black"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/muse-lofi-request-3.png"
                      alt="Lofi Request 3"
                      className="my-8 mx-2 border-2 border-black"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                  </div>

                  <div className="my-4">
                    <RoundedButton
                      label="View Prototype"
                      color="terracota"
                      link="https://www.figma.com/file/GsTt72GNbjtFEYA2PM6SeX/UX-Design_Final-Project-Muse?node-id=70%3A1702"
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
                  <p className="font-body text-base leading-relaxed">We conducted 5 user tests on our lo-fi prototype to see where we can still make improvements. Some of the feedback we received are the ff:</p>
                  <ul className="list-disc pl-8">
                    <li className="font-body text-base my-4">
                      Pre-made prompts to request music were confusing and limiting
                    </li>
                    <li className="font-body text-base my-4">
                      Tutorial screen had no call-to-action buttons to prompt users it was finished
                    </li>
                    <li className="font-body text-base my-4">
                      Posting images with the song album could be more intuitive
                    </li>
                    <li className="font-body text-base my-4">
                      Alignment issues on some screens
                    </li>
                    <li className="font-body text-base my-4">
                      Similar treatment for posting and requesting music can be confusing
                    </li>
                  </ul>
                </div>
              </div>

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Hi-fi Prototypes</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8 flex flex-col">
                  <div className="lg:max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 justify-center items-start">
                    <StaticImage
                      src="../../images/muse-hifi-onboard-1.png"
                      alt="Hifi Onboard 1"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/muse-hifi-onboard-2.png"
                      alt="Hifi Onboard 2"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/muse-hifi-onboard-3.png"
                      alt="Hifi Onboard 3"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/muse-hifi-post-1.png"
                      alt="Hifi Post 1"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/muse-hifi-post-2.png"
                      alt="Hifi Post 2"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/muse-hifi-post-3.png"
                      alt="Hifi Post 3"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/muse-hifi-request-1.png"
                      alt="Hifi Request 1"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/muse-hifi-request-2.png"
                      alt="Hifi Request 2"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/muse-hifi-request-3.png"
                      alt="Hifi Request 3"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                  </div>

                </div>
                <div className="my-4">
                  <RoundedButton
                    label="View Prototype"
                    link="https://www.figma.com/file/GsTt72GNbjtFEYA2PM6SeX/UX-Design_Final-Project-Muse?node-id=177%3A5444"
                    color="terracota"
                  />
                </div>
              </div>

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Mockups</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8 grid grid-cols-1 md:grid-cols-3">
                  <div className="my-8 lg:max-w-screen-md mx-auto">
                    <img
                      src={hifiOnboarding}
                      alt="Hifi Onboarding"
                      className="p-2 my-8"
                    />
                    <h3 className="font-display text-center font-semibold text-base text-gunPowder my-2 pl-4">Onboarding</h3>
                  </div>
                  <div className="my-8 lg:max-w-screen-md mx-auto">
                    <img
                      src={hifiPosting}
                      alt="Hifi Posting"
                      className="p-2 my-8"
                    />
                    <h3 className="font-display text-center font-semibold text-base text-gunPowder my-2 pl-4">Posting</h3>
                  </div>
                  <div className="my-8 lg:max-w-screen-md mx-auto">
                    <img
                      src={hifiRequesting}
                      alt="Hifi Requesting"
                      className="p-2 my-8"
                    />
                    <h3 className="font-display font-semibold text-center text-base text-gunPowder my-2 pl-4">Requesting</h3>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <SectionBreak />

          <section>
            <Header level={1}>Next Steps</Header>
            <div className="py-2 px-4 my-4">
              <p className="font-body text-base leading-relaxed">It was a lot of fun coming up with a mobile app that we can be passionate about. There seems to be a real need to put more focus on the social aspect of music and it is very enticing to start developing the app as soon as possible.</p>
              <br />
              <p className="font-body text-base leading-relaxed">Our team did a good job streamlining the main user flows we identified and iterating on them based on the feedback we gained from our tests. Some of the next steps are the ff:</p>
              <ul className="list-disc pl-8">
                <li className="font-body text-base my-4">
                  Do another round of user tests for our hi-fi prototype
                </li>
                <li className="font-body text-base my-4">
                  Explore integrations with other music platforms and figure out the UX for those features
                </li>
                <li className="font-body text-base my-4">
                  Begin coding the app(!)
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
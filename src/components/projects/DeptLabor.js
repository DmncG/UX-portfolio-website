import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Header from '../header/Header'
import { RoundedButton } from '../button/Button'
import SectionBreak from '../sectionBreak/SectionBreak'
import Fab from '../fab/Fab'
import Mobile from '../mockups/Mobile'
import lofiHomeMobile from '../../images/dol-lofi-home-mobile.png'
import hifiHomeMobile from '../../images/dol-hifi-home-mobile.png'
import hifiUIMobile from '../../images/dol-hifi-ui-mobile.png'

const DeptLabor = () => {
  return (
    <>
      <Fab />
      <Fab fabType="email" />
      <div className="md:max-w-screen-md xl:max-w-screen-lg md:mx-auto py-16">
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
                <p className="font-body text-base leading-relaxed">Figma, Miro, Zoom, Otter.ai, inVision</p>
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
                    <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">User Persona</h2>
                    <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                  </div>
                  <p className="font-body text-base leading-relaxed">I created a user persona based on the assumptions of who uses the government website.</p>
                  <div className="my-16 flex justify-center lg:max-w-screen-md mx-auto">
                    <StaticImage
                      src="../../images/dol-user-persona.jpeg"
                      alt="user persona"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>

                <div className="my-4">
                  <div>
                    <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Usability Tests</h2>
                    <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                    <p className="font-body text-base leading-relaxed">Then, I conducted usability tests on the current website to identify key pain points users face when looking for unemployment insurance and getting more information. We asked 5 people to perform three tasks:</p>
                  </div>
                  <ul className="list-disc pl-8">
                    <li className="font-body text-base my-4">
                      Find the unemployment insurance page
                    </li>
                    <li className="font-body text-base my-4">
                      Find information related to the Coronavirus in the FAQ page
                    </li>
                    <li className="font-body text-base my-4">
                      Find the DOL online contact form
                    </li>
                  </ul>
                  <p className="font-body text-base leading-relaxed">Target Users: Anyone between the ages of 18 - 62.</p>
                  <p className="font-body text-base leading-relaxed my-4"><strong>Note:</strong> We knew beforehand that users would fail to find any coronavirus related information on the FAQ page. We wanted to get feedback from the users' experience and find out where else they would find this information on the website.</p>
                  <div className="my-16 lg:max-w-screen-lg mx-auto grid grid-cols-1">
                      <StaticImage
                        src="../../images/dol-user-test.png"
                        alt="usability test"
                        className="my-8 col-span-2"
                        placeholder="blurred"
                        imgStyle={{
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                </div>

                <div className="my-4">
                  <div>
                    <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Usability Tests Findings</h2>
                    <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                  </div>
                  <div className="grid grid-cols-2 items-center my-8 lg:my-12 mx-auto max-w-screen-sm lg:max-w-screen-md">
                    <p className="font-display text-center text-4xl md:text-7xl lg:text-8xl text-red-800">30%</p>
                    <div>
                      <p className="font-body text-base leading-relaxed lg:text-xl">
                        Only 30% found the online contact form
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="font-body text-base leading-relaxed lg:text-xl">
                      Other notable user feedback were the ff:
                    </p>
                    <ul className="list-disc pl-8 mb-8">
                      <li className="font-body text-base my-4">
                        There were too many links in the menu, making it near impossible to navigate
                      </li>
                      <li className="font-body text-base my-4">
                        Search in FAQ page didn't pull up any relevant results
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="my-4">
                  <div>
                    <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Heuristic Evaluation</h2>
                    <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                  </div>
                  <div className="my-8">
                    <p className="font-body text-base leading-relaxed">The Department of Labor's website did an adequate job with its design. The images used were appropriate and the goal of the website is clear. However, there are just too many links presented in any given page. The information can also be presented in a better way.</p>
                    <div className="my-16 lg:max-w-screen-md mx-auto grid grid-cols-1">
                      <StaticImage
                        src="../../images/dol-heuristic.png"
                        alt="Heuristic"
                        className="my-8"
                        placeholder="blurred"
                        imgStyle={{
                          objectFit: 'contain'
                        }}
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
                    <p className="font-body text-base leading-relaxed">I annotated the pages I wanted to redesign to identify opportunities and improve upon upon the user journey for key tasks we identified. There were a lot of glaring issues between pages. Some of which are the ff:</p>
                    <ul className="list-disc pl-8 mb-8">
                      <li className="font-body text-base my-4">
                        Global navigation isn't consitent across pages
                      </li>
                      <li className="font-body text-base my-4">
                        Topics submenu contain too much information
                      </li>
                      <li className="font-body text-base my-4">
                        Contact Us page seem like an entirely different website; colors and even the logo are different from the home page
                      </li>
                    </ul>
                    <div className="my-16 lg:max-w-screen-md mx-auto grid grid-cols-2">
                      <StaticImage
                        src="../../images/dol-annotation-1.png"
                        alt="Annotations 1"
                        className="my-8 mx-2 self-center"
                        placeholder="blurred"
                      />
                      <StaticImage
                        src="../../images/dol-annotation-2.png"
                        alt="Annotations 2"
                        className="my-8 mx-2 self-center"
                        placeholder="blurred"
                      />
                      <StaticImage
                        src="../../images/dol-annotation-3.png"
                        alt="Annotations 3"
                        className="my-8 mx-2 self-center col-span-2"
                        placeholder="blurred"
                      />
                    </div>
                  </div>

                  <div className="my-4">
                    <RoundedButton
                      label="View Annotations"
                      color="terracota"
                      link="https://www.figma.com/file/GatWAXpPlwYP9iFhbGy9hJ/DOL---Annotations-and-Redlining?node-id=2%3A2"
                    />
                  </div>
                </div>

                <div className="my-4">
                  <div>
                    <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Card Sorting</h2>
                    <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                  </div>
                  <div className="my-8">
                    <p className="font-body text-base leading-relaxed">I conducted a hybrid card sort with six participants to give us an idea of how to chunk the vast amount of topic links of the website.</p>
                    <div className="my-16 lg:max-w-screen-md mx-auto grid grid-cols-1">
                      <StaticImage
                        src="../../images/dol-cardsort.png"
                        alt="Card Sort"
                        className="my-8"
                        placeholder="blurred"
                        imgStyle={{
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="my-4">
                  <div>
                    <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Site Map</h2>
                    <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                  </div>
                  <div className="my-8">
                    <p className="font-body text-base leading-relaxed">After evaluating the card sorting results, I was able to visualize the site structure and come up with a site map</p>
                    <div className="my-16 lg:max-w-screen-md mx-auto grid grid-cols-1">
                      <StaticImage
                        src="../../images/dol-sitemap.png"
                        alt="Site Map"
                        className="my-8"
                        placeholder="blurred"
                        imgStyle={{
                          objectFit: 'contain'
                        }}
                      />
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
                  <p className="font-body text-base leading-relaxed">I drew inspiration from various government agencies that demonstrated a clean and professional aesthetic. I was immediately drawn to sans-serif fonts, monochrome palettes, and flowing elements to reinforce an easy-to-use atmosphere. The website needs to achieve a balance between authority and approachability. Users should feel they are in good hands when they visit the website and believe they would find the information they are looking for. </p>
                  <div className="my-8 lg:max-w-screen-md mx-auto grid grid-cols-1">
                    <StaticImage
                      src="../../images/dol-moodboard-inspo.png"
                      alt="Mood Board Inspo"
                      className="my-8 col-span-2"
                      placeholder="blurred"
                      imgStyle={{
                        objectFit: 'contain',
                      }}
                    />
                    <StaticImage
                      src="../../images/dol-moodboard-ux.png"
                      alt="Mood Board UX"
                      className="my-8 col-span-2"
                      placeholder="blurred"
                      imgStyle={{
                        objectFit: 'contain',
                      }}
                    />
                    <StaticImage
                      src="../../images/dol-moodboard-gov.png"
                      alt="Mood Board Gov"
                      className="my-8 col-span-2"
                      placeholder="blurred"
                      imgStyle={{
                        objectFit: 'contain',
                      }}
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
                  <p className="font-body text-base leading-relaxed">I used a monochrome blue palette with red for error messaging. Header and body font families use Oxygen and Open Sans respectively to maximize legibility and to minimize harsh edges. Buttons are fully rounded and section breaks are curved and flowing.</p>
                  <div className="my-8 lg:max-w-screen-md mx-auto">
                    <StaticImage
                      src="../../images/dol-style-guide.png"
                      alt="Style Guide"
                      className="my-8"
                      placeholder="blurred"
                    />
                  </div>
                </div>
              </div>

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Wireflows</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8 flex flex-col">
                  <p className="font-body text-base leading-relaxed">I made wireflows for the three tasks I focused on to map out the user journey.</p>
                  <div className="my-8 lg:max-w-screen-md mx-auto grid grid-cols-1">
                    <StaticImage
                      src="../../images/dol-wireflow.png"
                      alt="Wireflows"
                      className="my-8"
                      placeholder="blurred"
                      imgStyle={{
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Lo-Fi Prototypes</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8 flex flex-col">
                  <div className="lg:max-w-screen-md mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-start">
                    <StaticImage
                      src="../../images/dol-lofi-home-desktop.png"
                      alt="Lofi Desktop Home"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/dol-lofi-home-menu-desktop.png"
                      alt="Lofi Desktop Menu"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <Mobile mobileImage={{imgSrc: lofiHomeMobile, imgAlt: 'lofi home mobile'}} />
                    <StaticImage
                      src="../../images/dol-lofi-menu-mobile.png"
                      alt="Lofi Menu Mobile"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                  </div>

                  <div className="my-4">
                    <RoundedButton
                      label="View Prototype"
                      color="terracota"
                      link="https://www.figma.com/file/EaB4hcuBkxYQhoxWwTcyTH/DOL-Wireframes?node-id=25%3A90"
                    />
                  </div>
                </div>
              </div>

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Lo-Fi User Tests</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8 flex flex-col">
                  <p className="font-body text-base leading-relaxed">I conducted 3 user tests on my lo-fi prototypes to test the redesign and identify areas of improvement. Some of the feedback I received are the ff:</p>
                  <ul className="list-disc pl-8">
                    <li className="font-body text-base my-4">
                      "Contact Us" button was almost always missed
                    </li>
                    <li className="font-body text-base my-4">
                      Vertical and horizontal alignment on the mobile menu and desktop footer needs work
                    </li>
                    <li className="font-body text-base my-4">
                      Desktop version needs some visual indication that the primarhy link is in a hover state
                    </li>
                  </ul>
                </div>
              </div>

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Hi-Fi Prototypes</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8 flex flex-col">
                  <div className="lg:max-w-screen-md mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-start">
                    <StaticImage
                      src="../../images/dol-hifi-home-desktop.png"
                      alt="Home Desktop"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/dol-hifi-ui-desktop.png"
                      alt="UI Desktop"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <Mobile mobileImage={{imgSrc: hifiHomeMobile, imgAlt: 'hifi home mobile'}} />
                    <Mobile mobileImage={{imgSrc: hifiUIMobile, imgAlt: 'hifi ui mobile'}} />
                  </div>
                </div>

                <div className="my-4">
                  <RoundedButton
                    label="View Prototype"
                    link="https://www.figma.com/file/EaB4hcuBkxYQhoxWwTcyTH/DOL-Wireframes?node-id=138%3A465"
                    color="terracota"
                  />
                </div>
              </div>

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Hi-Fi User Tests</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8 flex flex-col">
                  <p className="font-body text-base leading-relaxed">I did a second round of user testing for my hi-fi prototypes. I took out the “Others” primary link as it caused confusion for some users and added it inside "Resources" instead. Although users didn't have any trouble finding the contact link, there were other areas that still had room for improvement:</p>
                  <ul className="list-disc pl-8">
                    <li className="font-body text-base my-4">
                      Increase spacing between primary nav links on the mobile menu
                    </li>
                    <li className="font-body text-base my-4">
                      CTA buttons, search box, and mobile footer font size can be smaller
                    </li>
                    <li className="font-body text-base my-4">
                      Padding between sections in the unemployment insurance page can be increased and be more consistent
                    </li>
                  </ul>
                </div>
              </div>

              <div className="my-4">
                <div>
                  <h2 className="font-display font-semibold text-2xl text-gunPowder my-2">Hi-Fi Mockups</h2>
                  <div className="w-8 bg-terracota mt-2 mb-4 h-1" />
                </div>
                <div className="my-8 flex flex-col">
                  <div className="lg:max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-start">
                    <StaticImage
                      src="../../images/dol-mockup-home-desktop.png"
                      alt="Home Desktop"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/dol-mockup-ui-desktop.png"
                      alt="UI Desktop"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/dol-mockup-home-mobile.png"
                      alt="Home Mobile"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                    <StaticImage
                      src="../../images/dol-mockup-menu-mobile.png"
                      alt="Menu Mobile"
                      className="my-8 mx-2"
                      placeholder="blurred"
                      imgStyle={{ objectFit: 'contain' }}
                    />
                  </div>

                </div>
              </div>

            </div>
          </section>

          <SectionBreak />

          <section>
            <Header level={1}>Next Steps</Header>
            <div className="py-2 px-4 my-4">
              <p className="font-body text-base leading-relaxed">The contemporary design on the two pages is a great start in transforming the Department of Labor's website into something more professional and trustworthy. Users can now easily find the contact page and the information architecture on the navigation is more palatable. However, given the enormous amount of services the Department of Labor has to accommodate on their website, there would always be something else to work on:</p>
              <br />
              <ul className="list-disc pl-8">
                <li className="font-body text-base my-4">
                  Redesign the FAQ and Contact page
                </li>
                <li className="font-body text-base my-4">
                  Figure out how to improve the Forms page and seamlessly incorporate it to the design
                </li>
                <li className="font-body text-base my-4">
                  Improve desktop footer layout
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  )
  
}

export default DeptLabor
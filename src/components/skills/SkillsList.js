import React from 'react'
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded'
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded'
import LaptopRoundedIcon from '@material-ui/icons/LaptopRounded'
import LocalPhoneRoundedIcon from '@material-ui/icons/LocalPhoneRounded'
import PhoneIphoneRoundedIcon from '@material-ui/icons/PhoneIphoneRounded'
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded'
import TabletRoundedIcon from '@material-ui/icons/TabletRounded'
import WbIncandescentRoundedIcon from '@material-ui/icons/WbIncandescentRounded'
import BuildRoundedIcon from '@material-ui/icons/BuildRounded'
import ArtTrackRoundedIcon from '@material-ui/icons/ArtTrackRounded'
import { StaticImage } from 'gatsby-plugin-image'

const SkillsList = () => {
  return (
    <div className="my-8 md:max-w-screen-md md:mx-auto">
      <h1 className="font-display font-semibold text-4xl md:text-7xl">Skills</h1>
      <div className="h-1 bg-terracota w-16 my-4 ml-1"/>
      <div className="my-8">
        <section>
          <div>
            <div>
              <LocalPhoneRoundedIcon />
              <ArtTrackRoundedIcon />
            </div>
            <h2 className="font-display font-semibold text-2xl md:text-4xl">Research</h2>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center">
                <StaticImage alt="zoom" src="../../images/zoom-logo.png" className="w-40 my-8 mx-auto md:col-span-1" />
                <div className="md:col-start-2 md:col-end-4">
                  <h3 className="font-body font-normal text-lg my-2">Zoom</h3>
                  <p>Pretty reliable and a lot of users have it installed in their computers so there's no need for installation/on-boarding. It produces space-efficient video recordings, too, which is a plus.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center">
                <StaticImage alt="zoom" src="../../images/otter-logo.png" className="w-40 my-8 mx-auto md:col-span-1" />
                <div className="md:col-start-2 md:col-end-4">
                  <h3 className="font-body font-normal text-lg my-2">Otter.ai</h3>
                  <p>I really love Otter for its simplicity. it starts transcribing with a click of a button. Although the transcription needs editing to make it truly accurate, it still does a remarkable job capturing every word in an interview. Having it turned on with Zoom is a boon for any UX designer.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center">
                <StaticImage alt="zoom" src="../../images/google-forms-logo.png" className="w-40 my-8 mx-auto md:col-span-1" />
                <div className="md:col-start-2 md:col-end-4">
                  <h3 className="font-body font-normal text-lg my-2">Google Forms</h3>
                  <p>Google Forms is my survey builder of choice simply because it lives within Google's ecosystem. Using it just makes my workflow more streamlined.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section>
          <div>
            <div>
              <WbIncandescentRoundedIcon />
            </div>
            <h2>Ideation</h2>
            <div>
              <div>
                <h3>Miro</h3>
                <p>I haven't found a better collaboration tool than Miro. It feels so satisfying to see your team buzzing around, placing post-its in an infinite board. It's also great for generating user personas, graphs, and frameworks. Overall, Miro is just an excellent tool.</p>
              </div>

              <div>
                <h3>InVision</h3>
                <p>I like creating moodboards with InVision but I hardly use it for anything else. Still a decent tool for organizing your ideas.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div>
              <LaptopRoundedIcon />
              <PhoneIphoneRoundedIcon />
              <TabletRoundedIcon />
            </div>
            <h2>Mockups & Prototyping</h2>
            <div>
              <div>
                <h3>Figma</h3>
                <p>I find it so easy to create mockups and do fast prototyping with Figma. The ability to use wirekits and plugins created by a passionate community of designers, Figma's just hard to beat. I love using this tool.</p>
              </div>

              <div>
                <h3>Adobe XD</h3>
                <p>Fell in love with its smart animate feature. Although I mainly use Figma, AdobeXD also does its job very well. Prototyping is very intuitive when using this app.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div>
              <SettingsRoundedIcon />
              <BuildRoundedIcon />
            </div>
            <h2>Development</h2>
            <div>
              <div>
                <h3>ReactJS</h3>
                <p>My Javascript framework of choice. Everything just... made sense when I started using this framework. Component building has never been easier.</p>
              </div>

              <div>
                <h3>Material UI</h3>
                <p>I've been using this since the beginning. Back then, you had to add inline style properties paired with the 'important' rule to apply your own styles. A lot has changed since then and I'll choose Material UI over Bootstrap any day. Bonus: your components automatically follow material design guidelines</p>
              </div>

              <div>
                <h3>GraphQL + Apollo</h3>
                <p>Being able to just call the data that you need is one of the hallmark features of GraphQL. </p>
              </div>

              <div>
                <h3>Jest + React Testing Library</h3>
                <p>Jest is a testing framework that comes out-of-the-box from Create React App. It's pretty easy to create mocks with it. Alongside React Testing Library, I've found everything I need to do unit tests with these two.</p>
              </div>

              <div>
                <h3>WAVE</h3>
                <p>This is my preferred extension to check the accessibility of my app. With a click of a button, you get to see the accessibility issues of your app and how you can address it.</p>
              </div>

              <div>
                <h3>GatsbyJS</h3>
                <p>Let's just say I wish I learned this React-based framework when it first came out. It's a remarkable solution for frontend developers. Not only is it React-based, but it also has hosting, scaling, and data querying solutions that just makes my life easier. Fun fact: this portfolio website was made with GatsbyJS!</p>
              </div>

              <div>
                <h3>Tailwind CSS</h3>
                <p>Another one of those "I wish I learned this sooner" type of frameworks. Some people would say it's jsut Bootstrap but what separates it from the rest is its utility-first approach. There is a learning curve to use TailwindCSS but it feels so good once I got accustomed to its concepts. It makes my styles reusable, development is faster, AND it allows me to have little to no CSS files in my projects.</p>
              </div>

              <div>
                <h3>Google Analytics</h3>
                <p>Qualitative metrics is important in creating a complete picture of a product. Google Analytics jsut makes it easier to capture KPIs for a product.</p>
              </div>

              <div>
                <h3>Visual Studio Code</h3>
                <p>My IDE of choice. I have everything I need in Visual Studio Code.</p>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SkillsList





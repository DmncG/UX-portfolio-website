import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import ParticleCanvas from '../home/particleCanvas'

const AboutContent = () => (
  <div className="bg-transparent">
    <ParticleCanvas />
    <div className="p-4 bg-transparent md:flex md:flex-row xl:max-w-screen-xl mx-auto md:my-32">
        <div className="flex justify-center p-2 mt-8">
        <StaticImage placeholder="blurred" imgStyle={{ borderRadius: '50%' }} className="overflow-hidden rounded-full w-60 md:w-72 lg:w-96 h-60 md:h-72 lg:h-96 border-4 border-terracota" src="../../images/profile.jpg" alt="profile" />
        </div>
        
        <div className="m-2 xl:max-w-2xl">
        <h1 className="font-display text-4xl my-4 font-semibold text-rice">About</h1>
        <div>
        
        <div>
        <h2 className="font-display text-2xl my-4 font-semibold text-rice">Hi. My name is Dom.</h2>
        </div>
            <p className="font-body font-normal text-md text-rice">
            I'm a UX Designer/Fullstack Engineer based in New York City.
            <br />
            <br />
            A few years ago, I fell in love with software engineering. It allowed me to express my logical and creative side, and I had a blast building apps and providing value to users.
            <br />
            <br />
            Learning and applying the concepts of UX Design to my work allowed me to experience a new sense of joy and wonder to what I do.
            <br />
            <br />
            It's all about relationships if you really think about it.
            <br />
            <br />
            UX Design humanizes the products I build and interact with on a daily basis and always keeps those who matter the most, the users, in mind.
            <br />
            <br />
            My goal is to create thriving relationships between myself and users through the products I built.
            <br />
            <br />
            I've barely scratched the surface of UX Design and I'm looking forward to discovering and creating better and more functional solutions for the people around me.
            <br />
            <br />
            When I'm not in front of my computer, you can find me writing stories or playing Beat Saber in my VR headset.
            <br /><br />
            For inquiries, you can reach me at&nbsp;
            <a href="tel:+19293462591" className="text-terracota hover:text-terracota-light">+1 929-346-2591</a>
            &nbsp;or&nbsp;
            <a href="tel:+19293462591" className="text-terracota hover:text-terracota-light">micksdev@gmail.com</a>.
            {/* Currently, I'm working on a building a Shopify-based ecommerce website that sells a wide variety of wood products */}
            </p>
        </div>
        </div>
    </div>
  </div>
)

export default AboutContent;

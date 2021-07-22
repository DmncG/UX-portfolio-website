import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <div className="p-4 flex justify-center items-center bg-gunPowder-dark">
      <Link className="hover:text-terracota font-body font-normal text-sm text-rice" to="/projects">Projects</Link>
      <p className="my-2 mx-4 font-body font-normal text-sm text-rice">|</p>
      <Link className="hover:text-terracota font-body font-normal text-sm text-rice" to="/skills">Skills</Link>
      <p className="my-2 mx-4 font-body font-normal text-sm text-rice">|</p>
      <Link className="hover:text-terracota font-body font-normal text-sm text-rice" to="/about">About</Link>
    </div>
  )
}

export default Footer;
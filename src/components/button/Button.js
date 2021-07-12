import React from 'react'
import { Link } from 'gatsby'

const Button = ({ label, type, shape, size, link, onClick, alt }) => {
  return (
    <Link to={link} className="hover:bg-color-terracota-light">
        <div className={`shadow-md hover:shadow-xl rounded-full w-48 h-48 flex justify-center items-center m-8 ${alt ? 'bg-gunPowder hover:bg-gunPowder-light' : 'bg-terracota hover:bg-terracota-light'}`}>
        <p className="font-display font-semibold text-center text-4xl text-rice">{label}</p>
        </div>
    </Link>
  )
}

export default Button
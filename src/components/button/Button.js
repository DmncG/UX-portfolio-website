import React from 'react'
import { Link } from 'gatsby'

const Button = ({ label, type, shape, size, link, onClick, color }) => {
  return (
    <Link to={link}>
        <div className={`shadow-md hover:shadow-xl rounded-full w-36 md:w-40 lg:h-48 h-36 md:h-40 lg:w-48 flex justify-center items-center hover:animate-pulse bg-${color} hover:bg-${color}-light'`}>
        <p className="font-display font-semibold text-center text-2xl md:text-3xl text-rice">{label}</p>
        </div>
    </Link>
  )
}

export default Button
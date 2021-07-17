import React from 'react'
import { Link } from 'gatsby'

const Button = ({ label, type, shape, size, link, onClick, color }) => {
  return (
    <Link to={link}>
        <div className={`shadow-md hover:shadow-xl rounded-full w-36 md:w-40 lg:w-52 xl:w-60 h-36 md:h-40 lg:h-52 xl:h-60 flex justify-center items-center bg-${color} hover:bg-${color}-light active:animate-pulse`}>
        <p className="font-display font-semibold text-center text-2xl md:text-3xl xl:text-4xl text-rice">{label}</p>
        </div>
    </Link>
  )
}

export default Button
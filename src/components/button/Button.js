import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

const Button = ({ label, link, color }) => {
  // had to write it this way since tailwind doesn't recommend string concatenations / string templates

  if (color === 'gunPowder') {
    return (
      <Link to={link}>
        <motion.div
          className='shadow-md hover:shadow-xl rounded-full w-36 md:w-40 lg:w-52 xl:w-60 h-36 md:h-40 lg:h-52 xl:h-60 flex justify-center items-center bg-gunPowder hover:bg-gunPowder-light active:animate-pulse'
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.5,
            }
          }}
        >
        <p className="font-display font-semibold text-center text-2xl md:text-3xl xl:text-4xl text-rice">{label}</p>
        </motion.div>
      </Link>
    )
  }

  if (color === 'padua') {
    return (
      <Link to={link}>
        <motion.div
          className='shadow-md hover:shadow-xl rounded-full w-36 md:w-40 lg:w-52 xl:w-60 h-36 md:h-40 lg:h-52 xl:h-60 flex justify-center items-center bg-padua hover:bg-padua-light active:animate-pulse'
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.5,
            }
          }}
        >
        <p className="font-display font-semibold text-center text-2xl md:text-3xl xl:text-4xl text-rice">{label}</p>
        </motion.div>
      </Link>
    )
  }
  return (
    <Link to={link}>
        <motion.div
          className='shadow-md hover:shadow-xl rounded-full w-36 md:w-40 lg:w-52 xl:w-60 h-36 md:h-40 lg:h-52 xl:h-60 flex justify-center items-center bg-terracota hover:bg-terracota-light active:animate-pulse'
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.5,
            }
          }}
        >
        <p className="font-display font-semibold text-center text-2xl md:text-3xl xl:text-4xl text-rice">{label}</p>
        </motion.div>
    </Link>
  )
}

export const RoundedButton = ({ label, link, color }) => {
  if (color === 'gunPowder') {
    return (
      <div className="w-56 lg:w-72 mx-auto">
        <Link to={link}>
          <div className="shadow-md hover:shadow-xl rounded-md w-56 lg:w-72 mx-auto my-2 flex justify-center items-center bg-gunPowder hover:bg-gunPowder-light text-rice cursor-pointer">
            <p className="py-3 text-lg lg:text-2xl font-semibold font-display text-rice">{label}</p>
          </div>
        </Link>
      </div>
    )
  }

  if (color === 'padua') {
    return (
      <div className="w-56 lg:w-72 mx-auto">
        <Link to={link}>
          <div className="shadow-md hover:shadow-xl rounded-md w-56 lg:w-72 mx-auto my-2 flex justify-center items-center bg-padua hover:bg-padua-light text-rice cursor-pointer">
            <p className="py-3 text-lg lg:text-2xl font-semibold font-display text-rice">{label}</p>
          </div>
        </Link>
      </div>
    )
  }
  return (
    <div className="w-56 lg:w-72 mx-auto">
      <Link to={link}>
        <div className="shadow-md hover:shadow-xl rounded-md w-56 lg:w-72 mx-auto my-2 flex justify-center items-center bg-terracota hover:bg-terracota-light text-rice cursor-pointer">
          <p className="py-3 text-lg lg:text-2xl font-semibold font-display text-rice">{label}</p>
        </div>
      </Link>
    </div>
  )
}

export default Button
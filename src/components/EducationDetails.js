'use client';

import { motion } from "framer-motion"
import LiIcon from "./LiIcon"


export default function EducationDetails ({course, place, time, info}) {
  
  return (
    <li className='my-8 tablet:my-4 first:mt-0 last:mb-16 w-[80%] mx-auto flex flex-col items-start justify-between'>

      <LiIcon />

      <motion.div
        initial={{y:50, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{duration:1, type:"spring", delay: .5}}
        viewport={{once: true}}
      >
        <h3 className='capitalize font-bold text-2xl tablet:text-xl '>{course}</h3>
        <h2 className='text-primary dark:text-primaryDark text-lg tablet:text-sm'>@{place}</h2>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
          {time} | {info}
        </span>
      </motion.div>
    </li>
  )
}
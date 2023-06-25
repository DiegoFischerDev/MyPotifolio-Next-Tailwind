'use client';

import { motion } from "framer-motion"
import LiIcon from "./LiIcon"


export default function ExperienceDetails ({position, company, time, address, work}) {
  
  return (
    <li className='my-8 first:mt-0 last:mb-16 w-[80%] mx-auto flex flex-col items-start justify-between'>

      <LiIcon />

      <motion.div
        initial={{y:50, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{duration:1, type:"spring", delay: .5}}
        viewport={{once: true}}
      >
        <h3 className='capitalize font-bold text-2xl '>{position}</h3>
        <h2 className='text-primary text-lg'>@{company}</h2>
        <span className='capitalize font-medium text-dark/75'>
          {time} | {address}
        </span>
        <p className='font-medium w-full'>
          {work}
        </p>
      </motion.div>
    </li>
  )
}
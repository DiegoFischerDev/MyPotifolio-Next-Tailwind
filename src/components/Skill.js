'use client';

import { motion } from "framer-motion"

export default function Skill({ name, x, y, className }) {

  return (
    <motion.div
    className={`text-2xl desktop:text-xl tablet:text-base mobile:text-sm flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark py-3 tablet:py-1 px-6 tablet:px-3 mobile:px-1 shadow-2xl hover:scale-110 absolute ${className}`}
    // whileHover={{scale:1.05}}
    initial={{ x:0, y:0 }}
    whileInView={{ x:x, y:y }}
    transition={{ duration: 1.5 }}
    viewport={{once: false}}
    >
      {name}
    </motion.div>
  )
}
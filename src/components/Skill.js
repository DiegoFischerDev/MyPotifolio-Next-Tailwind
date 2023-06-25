'use client';

import { motion } from "framer-motion"

export default function Skill({ name, x, y, className }) {

  return (
    <motion.div
    className={`flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark hover:scale-110 absolute ${className}`}
    // whileHover={{scale:1.05}}
    initial={{ x:0, y:0 }}
    whileInView={{ x:x, y:y }}
    transition={{ duration: 1.5 }}
    viewport={{once: true}}
    >
      {name}
    </motion.div>
  )
}
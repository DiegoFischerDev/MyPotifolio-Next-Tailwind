'use client';

import { motion } from "framer-motion"
import Image from "next/image";

export default function AnimatedImage({ image, x, y, deg,  className }) {

  return (
    <motion.div
      className={`${className}`}
      // whileHover={{scale:1.05}}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: false }}
    >
      <Image
        src={image}
        alt='Diego Fischer Image'
        priority={true}
        className={`-rotate-[${deg}deg] border-2`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </motion.div>
  )
}
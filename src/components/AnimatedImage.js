'use client';

import { motion } from "framer-motion"
import Image from "next/image";
import { useState } from "react";

export default function AnimatedImage({ image, x, y, deg, className }) {

  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className={`w-1/4 z-0 rounded-lg absolute left-0 top-0 ${className}`}
        whileHover={{ zIndex: 10, }}
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        onClick={() => { setOpen(!open) }}
      >
        <Image
          src={image}
          alt='Diego Fischer Image'
          priority={true}
          className={`-rotate-[${deg}deg] hover:-rotate-0 border-2 dark:border-light border-dark rounded-2xl mobile:rounded-md transition-all duration-500`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>

        {open &&
          <Image
            src={image}
            alt='Diego Fischer Image'
            priority={true}
            className={`hidden tablet:inline absolute z-40 -top-[70vh] w-[90vw] h-[90vh]  border-2 dark:border-light border-dark rounded-2xl`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onClick={() => { setOpen(!open) }}
          />
        }
    </>
  )
}
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
          className={`-rotate-[${deg}deg] opacity-70 hover:opacity-100 hover:-rotate-0 grayscale-[100%] hover:grayscale-[30%] hover:scale-150 hover:border-2 border-primary dark:border-primaryDark rounded-2xl mobile:rounded-md transition-all duration-500`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>

        {open &&
          <Image
            src={image}
            alt='Diego Fischer Image'
            priority={true}
            className={`hidden tablet:inline absolute z-40 -top-[70vh] w-[90vw] h-[90vh] border-2 border-primary dark:border-primaryDark rounded-2xl grayscale-[30%]`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onClick={() => { setOpen(!open) }}
          />
        }
    </>
  )
}
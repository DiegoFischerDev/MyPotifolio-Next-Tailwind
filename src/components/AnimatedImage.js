'use client';

import { motion } from "framer-motion"
import Image from "next/image";

export default function AnimatedImage({ image, x, y, z, deg, className, setImageOpen, setImage }) {


  return (
    <>
      <motion.div
        className={`w-1/4 z-${z} hover:z-50 rounded-lg absolute left-0 top-0 ${className}`}
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <Image
          src={image}
          alt='DiegoFischer.Dev about image'
          priority={true}
          className={`-rotate-[${deg}deg] opacity-70 hover:opacity-100 hover:-rotate-0 grayscale-[100%] hover:grayscale-[30%] hover:scale-150 tablet:hover:scale-100
           hover:border-2 border-primary dark:border-primaryDark rounded-2xl mobile:rounded-md transition-all duration-500 hover:z-40`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onClick={()=>{setImageOpen(true); setImage(image);}}
        />
      </motion.div>
    </>
  )
}
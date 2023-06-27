'use client'

import Link from 'next/link';
import { motion } from "framer-motion"
import { useContext } from "react"
import { DarkThemeContext } from "@/context/DarkThemeContext"

const MotionLink = motion(Link);

export default function Logo() {

  const {theme} = useContext(DarkThemeContext)

  return (
    <div className='flex itens-center justify-center mt-2 absolute left-[50%] translate-x-[-50%]'>
      <MotionLink
        href="/"
        className='py-0 px-2 text-light dark:text-dark flex items-end justify-center rounded-full text-2xl font-bold'
        animate={{
          backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", theme === "dark" ? "#efefef" : "#121212"],
          transition: { duration: 2 },
        }}
      >DiegoFischer<motion.span
       className='text-sm ml-2 absolute text-primary dark:text-primaryDark -right-8'>.Dev</motion.span></MotionLink>
    </div>
  );
}
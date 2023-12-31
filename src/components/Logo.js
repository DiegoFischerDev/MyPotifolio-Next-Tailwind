'use client'

import Link from 'next/link';
import { motion } from "framer-motion"
import { useContext } from "react"
import { DarkThemeContext } from "@/context/DarkThemeContext"
import lightBulb from "../../public/images/bulb.svg";
import Image from 'next/image';

const MotionLink = motion(Link);

export default function Logo() {

  const { theme } = useContext(DarkThemeContext)

  return (
    <div className='absolute left-[50%] translate-x-[-50%]'>
      <MotionLink
        href="/"
        className='py-1 px-2 mobile:pr-4 text-dark dark:text-light flex items-end justify-center rounded-full text-2xl mobile:text-xl font-bold'
        animate={{
          backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", theme === "dark" ? "#1b1b1b" : "#efefef"],
          transition: { duration: 2 },
        }}
        whileHover={{
          backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", theme === "dark" ? "#1b1b1b" : "#efefef"],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        DiegoFischer
        <div className='text-xs text-dark dark:text-light font-bold mb-1'>.Dev</div>
      </MotionLink>

    </div>
  );
}
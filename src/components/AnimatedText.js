'use client'

import { motion } from "framer-motion"
import { useContext } from "react"
import { DarkThemeContext } from "@/context/DarkThemeContext"

export default function AnimatedText({ text, className }) {

  const {theme} = useContext(DarkThemeContext)

  const quote = {
    initial: {
      opacity: 1,
    },

    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.03,
      },
    }
  }

  const singleWord = {
    initial: {
      opacity: 0,
      y: 50,
    },

    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    }
  }


  return (
    <div className="´overflow-hidden dark:text-light ${className}´">
      <motion.h1
        className={`flex flex-wrap font-bold capitalize text-6xl desktop:text-5xl tablet:text-4xl mobile:text-4xl pointer-events-none select-none ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {
          text.split(" ").map((word, index) => {
            return (
              <motion.div
              key={index}
              className="flex"
              animate={{
                color: ["rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", theme === "dark" ? "#efefef" : "#121212"],
                transition: { duration: 2},
              }}
              >
                {word.split("").map((letter, indexletter) => (
                  <motion.span key={indexletter}
                  className="inline-block"
                  variants={singleWord} 
                  >
                    {letter}
                  </motion.span>
                ))}
                &nbsp; {/* Add a space character */}
              </motion.div>
            );
          })
        }
      </motion.h1>
    </div>
  );
}
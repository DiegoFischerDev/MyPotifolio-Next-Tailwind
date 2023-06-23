'use client'

import { color, motion } from "framer-motion"

export default function AnimatedText({ text, className }) {

  const quote = {
    initial: {
      opacity: 1,
    },

    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.03,
      }
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
      }
    }
  }


  return (
    <div className="´mx-auto py-2 overflow-hidden ${className}´">
      <motion.h1
        className={`flex flex-wrap text-dark font-bold capitalize text-6xl ${className}`}
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
              whileHover={{
                color: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
                transition: { duration: 1, repeat: Infinity },
              }}
              >
                {word.split("").map((letter, indexletter) => (
                  <motion.span key={indexletter} className="inline-block" variants={singleWord} 
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
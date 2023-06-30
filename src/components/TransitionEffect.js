'use client';

import { motion } from "framer-motion";

export default function TransitionEffect() {
 return (
  <>
    <motion.div
    className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-dark dark:bg-light"
    initial={{x: "100%", width: "100%"}}
    animate={{x: "200%", width: "100%"}}
    transition={{duration: 0.6, ease: "easeInOut"}}
    />
    <motion.div
    className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light dark:bg-dark"
    initial={{x: "100%", width: "100%"}}
    animate={{x: "200%", width: "100%"}}
    transition={{delay: 0.1, duration: 0.6, ease: "easeInOut"}}
    />
        <motion.div
    className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-primary dark:bg-primaryDark"
    initial={{x: "100%", width: "100%"}}
    animate={{x: "200%", width: "100%"}}
    transition={{delay: 0.2, duration: 0.6, ease: "easeInOut"}}
    />
  </>
 );
}
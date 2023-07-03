'use client';

import { useScroll, motion } from "framer-motion"
import { useRef } from "react";

export default function ExperienceLine() {

  const ExperienceLineRef = useRef(null);

  const {scrollYProgress} = useScroll({
    target: ExperienceLineRef,
    offset: ["start center", "end start"]
  })

 return (
  <div ref={ExperienceLineRef}>
    <motion.div
    style={{scaleY: scrollYProgress}}
    className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top'
    />
  </div>
 );
}
'use client';

import { usePathname, useRouter } from "next/navigation";
import NavBarActive from './NavBarActive';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function CustomLink({ href, title }) {
  const router = useRouter();
  const [transitionVisible, setTransitionVisible] = useState(false)
  const pathname = usePathname();


  function handleClick() {
    if (href !== pathname){
      setTransitionVisible(true);
      setTimeout(() => {
        router.push(href);
      }, 200)
    }
  }

  useEffect(()=>{
    setTransitionVisible(false);
  },[pathname])

  return (
    <div onClick={() => { handleClick() }} className="relative group cursor-pointer">
      {title}
      <NavBarActive href={href} />
      {transitionVisible && <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-dark dark:bg-light"
        initial={{ x: "0%", width: "100%" }}
        animate={{ x: "100%", width: "100%" }}
        transition={{ duration: 0.3, ease: "easeIn" }}
      /> }

    </div>
  )
}
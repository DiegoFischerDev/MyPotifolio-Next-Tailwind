'use client';

import Image from "next/image";
import lightBulb from "../../public/images/bulb.svg";
import { motion } from "framer-motion"


export default function LightBulb() {

  const ImageMotion = motion(Image);

  const x = window.innerWidth*0.75;
  const y = window.innerHeight*0.75;

  return (
    <ImageMotion
    src={lightBulb}
    alt="Bulb"
    className="h-auto w-1/12 absolute bottom-20 right-40 grayscale group-hover:grayscale-0 hover:grayscale-0 cursor-move"
    drag
    whileDrag={{scale:1.5}}
    dragConstraints={{left: -x, right: 40, top: -y, bottom: 20}}
    />
  );
}
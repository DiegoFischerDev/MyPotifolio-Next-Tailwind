'use client'

import { useState } from 'react';
import Foto1 from '../../public/images/Foto1.jpg'
import Foto3 from '../../public/images/Foto3.jpg'
import Foto4 from '../../public/images/Foto4.jpg'
import Foto2 from '../../public/images/Foto2.jpg'
import AnimatedImage from '@/components/AnimatedImage';
import Image from 'next/image';

export default function AboutImages() {

  const [imageOpen, setImageOpen] = useState(false);
  const [image, setImage] = useState(Foto1);

  return (
    <div className='mb-24 tablet:mb-0 flex w-[90%] h-[300px] tablet:h-[250px] mobile:h-[180px] max-w-[1000px] justify-evenly relative group'>

      {imageOpen &&
        <Image
          src={image}
          alt='Diego Fischer Image'
          priority={true}
          className={`hidden tablet:inline absolute z-40 -top-[70vh] w-[90vw] h-[60vh] border-2 border-primary dark:border-primaryDark rounded-2xl grayscale-[30%]`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onClick={() => { setImageOpen(false) }}
        />
      }

      <AnimatedImage
        image={Foto1}
        className=""
        x="10%"
        y={-20}
        z={10}
        deg="15"
        setImageOpen={setImageOpen}
        setImage={setImage}
      />
      <AnimatedImage
        image={Foto2}
        className=""
        x="90%"
        y={-60}
        z={20}
        deg="30"
        setImageOpen={setImageOpen}
        setImage={setImage}
      />
      <AnimatedImage
        image={Foto3}
        className=""
        x="180%"
        y={-80}
        z={30}
        deg="15"
        setImageOpen={setImageOpen}
        setImage={setImage}
      />
      <AnimatedImage
        image={Foto4}
        className=""
        x="270%"
        y={-120}
        z={40}
        deg="30"
        setImageOpen={setImageOpen}
        setImage={setImage}
      />

    </div>
  );
}
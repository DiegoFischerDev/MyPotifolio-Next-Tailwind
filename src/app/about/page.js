import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import React from 'react';
import profileImg from "../../../public/images/profile-picture.png"

export default function about() {
  return (
    <main className='flex flex-col w-full items-center justify-center'>
      <AnimatedText text="Passion Fuels Purpose!" className="py-16" />
      <div className='w-full px-36 pb-16 flex items-center justify-center'>
        <div className='w-1/3 mr-16 flex flex-col items-start justify-start'>
          <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About me</h2>
          <p className='font-medium'>
            After many years working as a marine engineer in the oil exploration industry, I decided to try and navigate the seas of technology where I found a new career path that matches my life aspirations.
          </p>
          <p className='font-medium my-4'>
            I am now working as a Junior Front-End Engineer at Arsenal where I have the opportunity to deepen my knowledge in technologies such as React.js, Javascript, CSS, Tailwind and others.
          </p>
          <p className='font-medium'>
            I am a self-taught person, learning how to code better everyday and always open to opportunities to grow as a professional and as a person.
          </p>
        </div>
        <div className='border-2 border-solid border-dark w-[560px] h-[420px] pb-16 flex items-center justify-center rounded-2xl'>
          <div className='w-[500px] h-[300px] bg-dark rounded-2xl relative'>
            <div className='absolute -top-20 w-[500px] h-auto rounded-2xl'>
              <Image src={profileImg} alt='Diego Fischer Image' className='rounded-2xl' />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import React from 'react';
import profileImg from "../../../public/images/profile-picture.png"
import Skill from '@/components/Skill';
import Experience from '@/components/Experience';
import Education from '@/components/Education';

export default function about() {
  return (
    <main className='flex flex-col w-full items-center justify-center'>
      <AnimatedText text="Passion Fuels Purpose!" className="py-24" />
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
      <div className="w-full">
        <h2 className="font-bold text-6xl mt-28 w-full text-center">Dev Skills</h2>
        <div className="w-full h-screen relative flex items-center rounded-full justify-center bg-circularLight">

          <Skill name="Web" x="0" y="0" className="roundend-full w-25 h-20" />
          <Skill name="CSS" x="-5vw" y="-10vw" />
          <Skill name="HTML" x="10vw" y="-2vw" />
          <Skill name="JavaScript" x="20vw" y="6vw" />
          <Skill name="React Js" x="0vw" y="12vw" />
          <Skill name="Git" x="-5vw" y="-18vw" />
          <Skill name="Next Js" x="-20vw" y="-15vw" />
          <Skill name="Tailwind CSS" x="15vw" y="-10vw" />
          <Skill name="TypeScript" x="32vw" y="-5vw" />
          <Skill name="Firebase" x="13vw" y="-17vw" />
          <Skill name="Figma" x="-25vw" y="10vw" />
          <Skill name="Web Design" x="18vw" y="18vw" />
          <Skill name="React Native" x="-15vw" y="0vw" />
          <Skill name="SASS" x="-30vw" y="-5vw" />
          <Skill name="Rest API" x="-14vw" y="18vw" />

        </div>
      </div>
      <Experience />
      <Education />
    </main>
  );
}
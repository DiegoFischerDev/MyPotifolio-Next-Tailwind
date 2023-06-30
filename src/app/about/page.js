import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import React from 'react';
import profileImg from "../../../public/images/profile-picture.png"
import Skill from '@/components/Skill';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

export default function about() {


  return (
    <main className='w-full flex flex-col items-center'>

      <TransitionEffect />

      <AnimatedText text="Passion Fuels Purpose!" className="self-center mt-20 mobile:mt-5 mb-32 tablet:ml-8 desktop:mb-24 mobile:mb-16" />


      <div className='flex items-center w-[90vw] desktop:flex-col max-w-[1100px]'>

        <div className='border border-solid dark:text-dark border-dark dark:border-light bg-light dark:bg-slate-300 pt-1 pb-2 rounded-3xl relative flex items-center justify-evenly desktop:flex-col w-[860px] desktop:w-[460px] max-w-[95vw] h-[330px] desktop:mb-10'>

          <div className='absolute top-0 left-0 -z-10 w-[102%] h-[103%] rounded-ee-[2rem] rounded-[2.5rem] bg-dark dark:bg-primaryDark ' />

          <div className="relative bg-[#FAB714] dark:bg-slate-500 w-[400px] h-[270px] flex items-center justify-center rounded-2xl border-2 border-solid border-dark dark:border-light translate-y-8 mb-16 mx-8 tablet:mx-0 max-w-[90vw]">

            <div className='absolute bottom-0 rounded-2xl grayscale-[70%] scale-y-[1.01]'>
              <Image src={profileImg}
                alt='Diego Fischer Image'
                className='rounded-2xl'
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

          </div>
        </div>

        <div className='ml-5 tablet:ml-0 px-5 flex flex-col items-start justify-start text-dark/75 dark:text-light/75 max-w-[900px]'>
          <h2 className='mb-4 text-lg font-bold uppercase '>About me</h2>
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

      </div>



      <div className="w-full">
        <h2 className="font-bold text-6xl desktop:text-5xl tablet:text-4xl mobile:text-3xl mt-36 desktop:mt-20 tablet:mt-16 mb-28 tablet:mb-24 mobile:mb-20 w-full text-center">Dev Skills</h2>
        <div className="w-full h-[50vw] relative flex items-center rounded-full justify-center bg-circularLight dark:bg-circularDark desktop:bg-circularLightLg desktop:dark:bg-circularDarkLg tablet:bg-circularLightMd tablet:dark:bg-circularDarkMd mobile:bg-circularLightSm mobile:dark:bg-circularDarkSm">

          <Skill name="Web" x="0" y="0" className="roundend-full w-25 h-20 tablet:w-18 tablet:h-10" />
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
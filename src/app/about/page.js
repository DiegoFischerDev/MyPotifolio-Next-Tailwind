import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import React from 'react';
import profileImg from "../../../public/images/about-picture-tyne.png"
import Skill from '@/components/Skill';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';
import { JavascriptIcon, NextIcon, ReactIcon } from '@/components/Icons';

export const metadata = {
  title: 'About'
}

export default function about() {


  return (
    <main className='w-full pb-24 px-5 flex flex-col items-center justify-center'>

      <TransitionEffect />

      <AnimatedText text="Passion Fuels Purpose!" className="mt-20 mobile:mt-5 mb-32 pl-8 tablet:pl-0 desktop:mb-24 mobile:mb-16" />


      <div className='flex items-center w-full max-w-[1200px] desktop:flex-col'>

        <div className='hidden desktop:inline grayscale-[30%] max-w-[500px] h-auto mr-10 desktop:mr-0 desktop:flex-col desktop:mb-10 relative'>
          <Image src={profileImg}
            alt='Diego Fischer Image'
            className='rounded-lg'
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />


          <div className='w-full flex items-center justify-between flex-wrap'>
            <NextIcon className="w-[18%] dark:fill-light fill-black/75 animate-pulseThree absolute top-44 left-0 -z-10" />
            <div className='dark:bg-light bg-black/75 rounded animate-pulseTwo absolute top-0 left-0 -z-10'>
              <ReactIcon className="w-44 dark:fill-dark fill-light " />
            </div>
            <JavascriptIcon className="w-[28%] dark:fill-light fill-black/75 animate-pulseOne absolute top-0 right-0 -z-10" />

          </div>
        </div>


        <div className='w-full h-[100%] tablet:ml-0 flex flex-col items-start justify-center text-dark/75 dark:text-light/75 max-w-[900px]'>

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

        <div className='desktop:hidden grayscale-[30%] max-w-[500px] h-auto mr-10 desktop:mr-0 desktop:flex-col desktop:mb-10 relative'>
          <Image src={profileImg}
            alt='Diego Fischer Image'
            className='rounded-lg'
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          <div className='w-full flex items-center justify-between flex-wrap'>
            <NextIcon className="w-[18%] dark:fill-light fill-black/75 animate-pulseOne absolute top-28 right-0 -z-10" />
            <div className='dark:bg-light bg-black/75 rounded animate-pulseTwo absolute top-0 left-0 -z-10'>
              <ReactIcon className="w-44 tablet:w-36 mobile:w-20 dark:fill-dark fill-light " />
            </div>
            <JavascriptIcon className="w-[18%] dark:fill-light fill-black/75 animate-pulseThree absolute top-0 right-0 -z-10" />
          </div>
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
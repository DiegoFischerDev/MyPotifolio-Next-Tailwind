import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import React from 'react';
import profileImg from "../../../public/images/about-pic.png"
import Skill from '@/components/Skill';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';
import { JavascriptIcon, LinkArrow, NextIcon, ReactIcon } from '@/components/Icons';
import Link from 'next/link';
import Foto1 from '../../../public/images/Foto1.jpg'
import Foto2 from '../../../public/images/Foto2.jpg'
import Foto3 from '../../../public/images/Foto3.jpg'
import Foto4 from '../../../public/images/Foto4.jpg'
import AnimatedImage from '@/components/AnimatedImage';

export const metadata = {
  title: 'About'
}

export default function about() {


  return (
    <main className='w-full pb-24 px-5 flex flex-col items-center justify-center'>

      <TransitionEffect />

      <AnimatedText text="Passion Fuels Purpose!" className="mt-20 mobile:mt-5 mb-32 pl-8 tablet:pl-0 desktop:mb-24 mobile:mb-16" />


      <div className='flex items-center w-full max-w-[1200px] desktop:flex-col mb-10'>

        <div className='hidden desktop:inline grayscale-[30%] max-w-[500px] h-auto mr-10 desktop:mr-0 desktop:flex-col desktop:mb-10 relative bg-primary/50 dark:bg-primaryDark/50 rounded-[30%] rounded-s-[70%] justify-start'>
          <Image src={profileImg}
            alt='Diego Fischer Image'
            className='rounded-[30%] rounded-s-[70%]'
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />


          <div className='w-full flex items-center justify-between flex-wrap'>
            <NextIcon className="w-[18%] dark:fill-light fill-black/75 animate-pulseThree absolute top-52 left-8 -z-10" />
            <div className='dark:bg-light bg-black/75 rounded animate-pulseTwo absolute top-20 left-16 -z-10'>
              <ReactIcon className="w-24 dark:fill-[#34647f] fill-[#dfa78a] " />
            </div>
            <JavascriptIcon className="w-[18%] dark:fill-light fill-black/75 animate-pulseOne absolute top-20 right-8 -z-10" />

          </div>
        </div>


        <div className='w-full h-[100%] mr-5 tablet:mr-0 flex flex-col items-start justify-center text-dark/75 dark:text-light/75 max-w-[900px]'>

          <h2 className='mb-4 text-lg font-bold uppercase '>About me</h2>

          <p className='font-medium mb-3'>
            Hello, how you doing?
          </p>
          <p className='font-medium mb-3'>
            My name is <span className='text-primary dark:text-primaryDark'>Diego Fischer</span>, I am a Web Developer with expertise in Front-End Technologies.
          </p>
          <p className='font-medium mb-3'>
            I am currently studying for a degree in software development and working as a part-time developer at Arsenal Tecnologia in <span className='text-primary dark:text-primaryDark'>Portugal</span>.
          </p>
          <p className='font-medium mb-3'>
            I also undertake freelance projects, ranging from website creation to developing software for internal company use and mobile applications.
          </p>
          <p className='font-medium mb-6'>
            My current goal is to work with a team and contribute as a <span className='text-primary dark:text-primaryDark'>Front-end Developer</span> in a full-time job.
          </p>


          <div className="self-start tablet:self-center">
            <a href="/ResumeDiegoFischer.pdf" target={"_blank"} download={true}
              className="flex mt-6 items-center bg-dark/75 text-light p-2.5 px-6 rounded-lg font-semibold border-2 border-solid border-transparent hover:bg-light/75 hover:text-dark hover:border-dark dark:bg-light/75 dark:text-dark dark:hover:bg-dark/75 dark:hover:text-light dark:hover:border-light">Resume <LinkArrow /></a>
          </div>

        </div>

        <div className='desktop:hidden grayscale-[30%] max-w-[500px] h-auto mr-10 desktop:mr-0 desktop:flex-col desktop:mb-10 relative bg-primary/50 dark:bg-primaryDark/50 rounded-[30%] rounded-s-[70%]'>
          <Image src={profileImg}
            alt='Diego Fischer Image'
            className='rounded-[30%] rounded-s-[70%]'
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          <div className='w-full flex items-center justify-between flex-wrap'>
            <NextIcon className="w-[18%] dark:fill-light fill-black/75 animate-pulseOne absolute top-28 right-16 -z-10" />
            <div className='dark:bg-light bg-black/75 rounded animate-pulseTwo absolute top-40 left-20 -z-10'>
              <ReactIcon className="w-32 tablet:w-36 mobile:w-20 dark:fill-[#34647f] fill-[#dfa78a] " />
            </div>
            <JavascriptIcon className="w-[18%] dark:fill-light fill-black/75 animate-pulseThree absolute top-10 left-40 -z-10" />
          </div>
        </div>

      </div>

      <h2 className='mt-16 font-bold text-5xl desktop:text-5xl tablet:text-4xl mobile:text-3xl mb-24 tablet:mb-20 mobile:mb-14 w-full text-center'>Dev Skills</h2>

      <div className='w-full max-w-[1200px] desktop:max-w-[900px] text-dark/75 dark:text-light/75'>

        <h2 className='mb-4 text-lg font-bold uppercase '>Projects and design</h2>

        <p className='font-medium mb-6'>
          One of my strengths lies in my sensitivity to <span className='text-primary dark:text-primaryDark'>UI and UX</span> considerations. In each project, I strive to align design, context, and usability. To accomplish this, I employ tools like <span className='text-primary dark:text-primaryDark'>Adobe Photoshop</span> and <span className='text-primary dark:text-primaryDark'>Figma</span>, as well as AI-powered image creation tools. These tools enable me to craft visually appealing and user-friendly experiences.
        </p>

        <h2 className='mb-4 mt-12 text-lg font-bold uppercase '>Front-End Libraries</h2>

        <p className='font-medium mb-6'>
          On the front-end, I have a preference for <span className='text-primary dark:text-primaryDark'>Next JS</span>. Its ease of use in creating routes (similar to PHP), fast page load times, and excellent SEO performance make it my framework of choice. Additionally, I feel very comfortable working with <span className='text-primary dark:text-primaryDark'>React JS</span>. With <span className='text-primary dark:text-primaryDark'>React Native</span>, I can develop beautiful native mobile applications for both Android and iOS, ensuring compliance with the requirements of Google Play and the Apple Store.
        </p>

        <h2 className='mb-4 mt-12 text-lg font-bold uppercase '>Styling Approach</h2>

        <p className='font-medium mb-6'>
          While I have previously built projects styled with <span className='text-primary dark:text-primaryDark'>SASS</span>, I now prefer utilizing <span className='text-primary dark:text-primaryDark'>Tailwind CSS</span>. The approach of keeping <span className='text-primary dark:text-primaryDark'>HTML</span>, <span className='text-primary dark:text-primaryDark'>CSS</span>, and <span className='text-primary dark:text-primaryDark'>Javascript</span> for a component in a single file resonates with me, making it easier to reuse components across different projects.
        </p>

        <h2 className='mb-4 mt-12 text-lg font-bold uppercase '>Back-End Solutions</h2>

        <p className='font-medium mb-6'>
          For the back-end of my applications, I rely on <span className='text-primary dark:text-primaryDark'>Firebase</span>, a content management system (CMS) provided by Google, as a backend-as-a-service, allowing me to securely store data and provide user registration and authentication features. It works seamlessly for small-scale projects.
        </p>

        <h2 className='mb-4 mt-12 text-lg font-bold uppercase '>organisation and control</h2>

        <p className='font-medium mb-6'>
          Even in my personal projects, I adhere to strict work and organizational guidelines, basing my approach on <span className='text-primary dark:text-primaryDark'>Agile methodologies</span> and utilizing <span className='text-primary dark:text-primaryDark'>Git Flow</span>. Before every merge, I take the time to carefully review and analyze my pull requests.
        </p>

        <h2 className='mb-4 mt-12 text-lg font-bold uppercase '>Continuous Learning and Growth</h2>

        <p className='font-medium mb-6'>
          I am always dedicated to staying up-to-date and keeping an eye on emerging technologies. Currently, I am focused on studying <span className='text-primary dark:text-primaryDark'>TypeScript</span> and implementing <span className='text-primary dark:text-primaryDark'>Unit Testing</span>, both of which are essential for professional application scalability and maintenance. In the future, I plan to expand my knowledge by studying <span className='text-primary dark:text-primaryDark'>Node JS</span> and developing backend skills. As a firm believer in lifelong learning, I am committed to continuously improving my skills and knowledge.
        </p>
      </div>


      <Experience />
      <Education />

      <div className='mb-24 tablet:mb-0 flex w-[90%] h-[300px] tablet:h-[250px] mobile:h-[180px] max-w-[1000px] justify-evenly relative grayscale-[30%] group'>

        <AnimatedImage
          image={Foto1}
          className="w-1/4 rounded-lg absolute left-0 top-0 -rotate-[8deg]"
          x="10%"
          y={-30}
          deg={5}
        />
        <AnimatedImage
          image={Foto2}
          className="w-1/4 rounded-lg absolute left-0 top-0 -rotate-[15deg]"
          x="100%"
          y={-60}
          deg={18}
        />
        <AnimatedImage
          image={Foto3}
          className="w-1/4 rounded-lg absolute left-0 top-0 -rotate-[28deg]"
          x="200%"
          y={-100}
          deg={25}
        />
        <AnimatedImage
          image={Foto4}
          className="w-1/4 rounded-lg absolute left-0 top-0 -rotate-[8deg]"
          x="280%"
          y={-130}
          deg={20}
        />

      </div>

      <div>

        <div className="flex items-center justify-start">

          <div className="self-start mr-8 tablet:self-center">
            <Link href="/projects"
              className="flex mb-4 items-center bg-dark text-light p-2.5 px-6 tablet:px-4 mobile:px-2 tablet:text-base mobile:text-base rounded-lg font-semibold border-2 border-solid border-transparent hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light">PROJECTS</Link>
          </div>
          <div className="self-start tablet:self-center">
            <Link href="/contact"
              className="flex mb-4 items-center bg-dark text-light p-2.5 px-6 tablet:px-4 mobile:px-2 tablet:text-base mobile:text-base rounded-lg font-semibold border-2 border-solid border-transparent hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light">CONTACT</Link>
          </div>

        </div>

      </div>
    </main>
  );
}
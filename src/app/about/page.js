import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import React from 'react';
import profileImg from "../../../public/images/about-picture-tyne.png"
import Skill from '@/components/Skill';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';
import { JavascriptIcon, LinkArrow, NextIcon, ReactIcon } from '@/components/Icons';

export const metadata = {
  title: 'About'
}

export default function about() {


  return (
    <main className='w-full pb-24 px-5 flex flex-col items-center justify-center'>

      <TransitionEffect />

      <AnimatedText text="Passion Fuels Purpose!" className="mt-20 mobile:mt-5 mb-32 pl-8 tablet:pl-0 desktop:mb-24 mobile:mb-16" />


      <div className='flex items-center w-full max-w-[1200px] desktop:flex-col mb-10'>

        <div className='hidden desktop:inline grayscale-[30%] max-w-[500px] h-auto mr-10 desktop:mr-0 desktop:flex-col desktop:mb-10 relative'>
          <Image src={profileImg}
            alt='Diego Fischer Image'
            className='rounded-lg'
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />


          <div className='w-full flex items-center justify-between flex-wrap'>
            <NextIcon className="w-[18%] dark:fill-light fill-black/75 animate-pulseThree absolute top-44 left-0 -z-10" />
            <div className='dark:bg-light bg-black/75 rounded animate-pulseTwo absolute top-0 left-10 -z-10'>
              <ReactIcon className="w-28 dark:fill-dark fill-light " />
            </div>
            <JavascriptIcon className="w-[18%] dark:fill-light fill-black/75 animate-pulseOne absolute top-0 right-0 -z-10" />

          </div>
        </div>


        <div className='w-full h-[100%] mr-5 tablet:mr-0 flex flex-col items-start justify-center text-dark/75 dark:text-light/75 max-w-[900px]'>

          <h2 className='mb-4 text-lg font-bold uppercase '>About me</h2>

          <p className='font-medium mb-6'>
          Hello! I'm Diego, a <span className='text-primary dark:text-primaryDark'>Full-Stack Developer</span> with expertise in Front-End Technologies. I have a background working as an engineer in big companies in Brazil. Currently, living in Portugal, i work as <span className='text-primary dark:text-primaryDark'>Front-End Developer</span> part-time at Arsenal Tecnologia. I collaborate closely with the team, utilizing my front-end skills to create visually appealing and user-friendly designs.
          </p>
          <p className='font-medium'>In addition, I also undertake freelance projects, ranging from website creation to developing software for internal company use and mobile applications.</p>

          <div className="self-start tablet:self-center">
            <a href="/ResumeDiegoFischer.pdf" target={"_blank"} download={true}
              className="flex mt-6 items-center bg-dark/75 text-light p-2.5 px-6 rounded-lg font-semibold border-2 border-solid border-transparent hover:bg-light/75 hover:text-dark hover:border-dark dark:bg-light/75 dark:text-dark dark:hover:bg-dark/75 dark:hover:text-light dark:hover:border-light">Resume <LinkArrow /></a>
          </div>

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
            <div className='dark:bg-light bg-black/75 rounded animate-pulseTwo absolute top-20 left-0 -z-10'>
              <ReactIcon className="w-32 tablet:w-36 mobile:w-20 dark:fill-dark fill-light " />
            </div>
            <JavascriptIcon className="w-[18%] dark:fill-light fill-black/75 animate-pulseThree absolute top-0 left-36 -z-10" />
          </div>
        </div>

      </div>

      <h2 className='mt-16 font-bold text-5xl desktop:text-5xl tablet:text-4xl mobile:text-3xl mb-24 tablet:mb-20 mobile:mb-14 w-full text-center'>Dev Skills</h2>

      <div className='w-full max-w-[1200px] desktop:max-w-[900px] text-dark/75 dark:text-light/75'>

        <h2 className='mb-4 text-lg font-bold uppercase '>Projects and design</h2>

        <p className='font-medium mb-6'>
          One of my strengths lies in my sensitivity to <span className='text-primary dark:text-primaryDark'>UI and UX</span> considerations. In each project, I strive to align design, context, and usability. To accomplish this, I employ tools like <span className='text-primary dark:text-primaryDark'>Adobe Photoshop</span> and <span className='text-primary dark:text-primaryDark'>Figma</span>, as well as AI-powered image creation tools. These tools enable me to craft visually appealing and user-friendly experiences.
        </p>

        <h2 className='mb-4 text-lg font-bold uppercase '>Front-End Librarys</h2>

        <p className='font-medium mb-6'>
          On the front-end, I have a preference for <span className='text-primary dark:text-primaryDark'>Next JS</span>. Its ease of use in creating routes (similar to PHP), fast page load times, and excellent SEO performance make it my framework of choice. Additionally, I feel very comfortable working with <span className='text-primary dark:text-primaryDark'>React JS</span>. With <span className='text-primary dark:text-primaryDark'>React Native</span>, I can develop beautiful native mobile applications for both Android and iOS, ensuring compliance with the requirements of Google Play and the Apple Store.
        </p>

        <h2 className='mb-4 text-lg font-bold uppercase '>Styling Approach</h2>

        <p className='font-medium mb-6'>
          While I have previously built projects styled with <span className='text-primary dark:text-primaryDark'>SASS</span>, I now prefer utilizing <span className='text-primary dark:text-primaryDark'>Tailwind CSS</span>. The approach of keeping <span className='text-primary dark:text-primaryDark'>HTML</span>, <span className='text-primary dark:text-primaryDark'>CSS</span>, and <span className='text-primary dark:text-primaryDark'>Javascript</span> for a component in a single file resonates with me, making it easier to reuse components across different projects.
        </p>

        <h2 className='mb-4 text-lg font-bold uppercase '>Back-End Solutions</h2>

        <p className='font-medium mb-6'>
          For the back-end of my applications, I rely on <span className='text-primary dark:text-primaryDark'>Firebase</span>, a content management system (CMS) provided by Google, as a backend-as-a-service, allowing me to securely store data and provide user registration and authentication features. It works seamlessly for small-scale projects.
        </p>

        <h2 className='mb-4 text-lg font-bold uppercase '>organisation and control</h2>

        <p className='font-medium mb-6'>
          Even in my personal projects, I adhere to strict work and organizational guidelines, basing my approach on <span className='text-primary dark:text-primaryDark'>Agile methodologies</span> and utilizing <span className='text-primary dark:text-primaryDark'>Git Flow</span>. Before every merge, I take the time to carefully review and analyze my pull requests.
        </p>

        <h2 className='mb-4 text-lg font-bold uppercase '>Continuous Learning and Growth</h2>

        <p className='font-medium mb-6'>
          I'm always dedicated to staying up-to-date and keeping an eye on emerging technologies. Currently, I am focused on studying <span className='text-primary dark:text-primaryDark'>TypeScript</span> and implementing <span className='text-primary dark:text-primaryDark'>Unit Testing</span>, both of which are essential for professional application scalability and maintenance. In the future, I plan to expand my knowledge by studying <span className='text-primary dark:text-primaryDark'>Node JS</span> and developing backend skills. As a firm believer in lifelong learning, I am committed to continuously improving my skills and knowledge.
        </p>
      </div>


      <Experience />
      <Education />
    </main>
  );
}
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import profileImg from "../../../public/images/about-pic.png"
import profileImg2 from "../../../public/images/about-pic2.png"
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';
import { JavascriptIcon, LinkArrow, NextIcon, ReactIcon } from '@/components/Icons';
import Link from 'next/link';
import DevSkills from '@/components/DevSkills';
import AboutImages from '@/components/AboutImages';

export const metadata = {
  title: 'About'
}


export default function about() {

  return (
    <main className='w-full pb-24 px-5 flex flex-col items-center justify-center'>

      <TransitionEffect />

      <AnimatedText text="Passion Fuels Purpose!" className="mt-20 mobile:mt-5 mb-32 pl-8 tablet:pl-0 desktop:mb-24 mobile:mb-16" />


      <div className='flex items-center w-full max-w-[1200px] desktop:flex-col mb-10'>

        <article className='w-full h-[100%] mr-5 tablet:mr-0 flex flex-col justify-center items-center text-dark/75 dark:text-light/75 max-w-[900px]'>

          <div className='desktop:inline hidden grayscale-[30%] mr-10 desktop:mr-0 desktop:flex-col desktop:mb-10 relative w-[350px] h-[380px]'>

            <Image src={profileImg}
              alt='Diego Fischer Image'
              className='profileAnimate bg-orange-400 dark:bg-primaryDark absolute top-0 left-0'
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            <Image src={profileImg2}
              alt='Diego Fischer Image'
              className='absolute top-0 left-0'
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            <div className='w-full flex items-center justify-between flex-wrap'>
              <NextIcon className="w-[18%] dark:fill-[#d4d4d4] fill-black/75 animate-pulseOne absolute top-20 right-10 z-10" />
              <div className='dark:bg-[#d4d4d4] bg-black/75 rounded animate-pulseTwo absolute top-40 left-5 z-10'>
              <ReactIcon className="w-24 tablet:w-36 mobile:w-20 dark:fill-primaryDark fill-orange-400 " />
            </div>
              <JavascriptIcon className="w-[18%] dark:fill-[#d4d4d4] fill-black/75 animate-pulseThree absolute top-14 left-24 z-10" />
            </div>
          </div>

          <h2 className='mb-4 text-lg font-bold uppercase w-[100%]'>About me</h2>

          <p className='font-medium mb-3 w-[100%]'>
            Hello, how you doing?
          </p>
          <p className='font-medium mb-3 w-[100%]'>
            My name is <span className='text-primary dark:text-primaryDark'>Diego Fischer</span>, I am a Web Developer with expertise in Front-End Technologies. I am currently working as a contracted developer at Arsenal Tecnologia in <span className='text-primary dark:text-primaryDark'>Portugal</span>.
          </p>
          <p className='font-medium mb-6'>
            I also do freelance projects, ranging from creating websites and mobile apps to developing systems for internal company use. My current goal is to join a team where I can learn and contribute as a full-time <span className='text-primary dark:text-primaryDark'>Front-end Developer</span>.
          </p>


          <div className="self-start tablet:self-center">
            <a href="/ResumeDiegoFischer.pdf" target={"_blank"} download={true}
              className="flex mt-6 items-center bg-dark/75 text-light p-2.5 px-6 rounded-lg font-semibold border-2 border-solid border-transparent hover:bg-light/75 hover:text-dark hover:border-dark dark:bg-light/75 dark:text-dark dark:hover:bg-dark/75 dark:hover:text-light dark:hover:border-light">Download Resume <LinkArrow className="ml-2 mb-1" /></a>
          </div>

        </article>

        <div className='desktop:hidden grayscale-[30%] mr-10 desktop:mr-0 desktop:flex-col desktop:mb-10 relative w-[800px] h-[500px]'>

          <Image src={profileImg}
            alt='Diego Fischer Image'
            className='profileAnimate bg-orange-400 dark:bg-primaryDark absolute top-0 left-0'
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          <Image src={profileImg2}
            alt='Diego Fischer Image'
            className='absolute top-0 left-0'
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          <div className='w-full flex items-center justify-between flex-wrap'>
            <NextIcon className="w-[18%] dark:fill-[#d4d4d4] fill-black/75 animate-pulseOne absolute top-28 right-10 z-10" />
            <div className='dark:bg-[#d4d4d4] bg-black/75 rounded animate-pulseTwo absolute top-40 left-10 z-10'>
              <ReactIcon className="w-24 tablet:w-36 mobile:w-20 dark:fill-primaryDark fill-orange-400 " />
            </div>
            <JavascriptIcon className="w-[18%] dark:fill-[#d4d4d4] fill-black/75 animate-pulseThree absolute top-0 left-28 z-10" />
          </div>
        </div>

      </div>

      <DevSkills />
      <Experience />
      <Education />
      <AboutImages />

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
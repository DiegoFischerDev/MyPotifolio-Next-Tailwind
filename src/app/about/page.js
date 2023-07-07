import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import profileImg from "../../../public/images/about-pic.png"
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


        <article className='w-full h-[100%] mr-5 tablet:mr-0 flex flex-col items-start justify-center text-dark/75 dark:text-light/75 max-w-[900px]'>

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
            My current goal is to join a team where I can learn and contribute as a full-time <span className='text-primary dark:text-primaryDark'>Front-end Developer</span>.
          </p>


          <div className="self-start tablet:self-center">
            <a href="/ResumeDiegoFischer.pdf" target={"_blank"} download={true}
              className="flex mt-6 items-center bg-dark/75 text-light p-2.5 px-6 rounded-lg font-semibold border-2 border-solid border-transparent hover:bg-light/75 hover:text-dark hover:border-dark dark:bg-light/75 dark:text-dark dark:hover:bg-dark/75 dark:hover:text-light dark:hover:border-light">Resume <LinkArrow /></a>
          </div>

        </article>

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
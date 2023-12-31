import Link from "next/link"
import Image from 'next/image';
import { GithubIcon } from "./Icons";


export const ProjectCard = ({ type, title, summary, img, link, github }) => {

  return (
    <article className='border border-solid dark:text-dark border-dark dark:border-light bg-light dark:bg-slate-300 p-12 rounded-3xl relative mx-20 desktop:mx-0 desktop:max-w-[500px] tablet:max-w-[400px] desktop:px-3 desktop:py-8'>

      <div className='absolute top-0 left-0 -z-10 w-[101%] desktop:w-[102%] h-[103%] desktop:h-[102%] rounded-ee-[2rem] rounded-[2rem] round bg-dark dark:bg-primaryDark shadow-2xl dark:shadow-primaryDark dark:animate-pulse' />

      <div className='w-full flex items-center justify-between desktop:flex-col'>

        <div className='cursor-pointer overflow-hidden mb-3'>

          <Link href={link} target='_blank'>
            <Image
              src={img}
              alt={title}
              className='rounded-2xl w-full'
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>

        </div>


        <div className='flex flex-col items-start justify-between w-2/3 desktop:w-full pl-6 mobile:pl-2'>

          <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
            <h2 className='mb-4 w-full text-left text-4xl tablet:text-3xl mobile:text-2xl font-bold'>{title}</h2>
          </Link>

          <span className='text-primary dark:text-primary font-medium text-xl mobile:text-base'>{type}</span>

          <p className='my2 font-medium text-dark mobile:text-sm'>{summary}</p>

          <div className='mt-4 flex justify-between'>

            <Link href={github} target='_blank' className='w-10 h-full'>
              <GithubIcon className="w-full text-dark" />
            </Link>

            <Link href={link} target='_blank' className='ml-10 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>
              Visit Project
            </Link>

          </div>
        </div>
      </div>
    </article>
  )
}

export const ProjectCardSmall = ({ title, summary, img, link, github }) => {

  return (
    <article className='border border-solid dark:text-dark border-dark dark:border-light bg-light dark:bg-slate-300 px-2 py-6 rounded-3xl col-span-12 relative max-w-[400px]'>

      <div className='absolute top-0 left-0 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-primaryDark shadow-2xl dark:shadow-primaryDark dark:animate-pulse' />

      <div className='w-full flex flex-col items-center justify-between'>

        <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-2xl'>
          <Image
            src={img}
            alt={title}
            className='w-full h-full'
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>

        <div className='w-full flex flex-col items-start justify-between pl-6 mobile:pl-2'>

          <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
            <h2 className='my-4 w-full text-left text-4xl tablet:text-3xl mobile:text-2xl font-bold'>{title}</h2>
          </Link>

          <p className='my2 font-medium text-dark mobile:text-sm'>{summary}</p>

          <div className='mt-4 flex justify-between'>

            <Link href={github} target='_blank' className='w-10 h-full'>
              <GithubIcon className="w-full text-dark" />
            </Link>

            <Link href={link} target='_blank' className='ml-10 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>
              Visit Project
            </Link>

          </div>
        </div>
      </div>
    </article>
  )
}
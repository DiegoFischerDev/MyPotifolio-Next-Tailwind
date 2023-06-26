import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Image from 'next/image';
import Link from 'next/link';
import projectImage from '../../../public/images/projectImage.jpg'

const ProjectCard = ({ type, title, summary, img, link, github }) => {

  return (
    <article className='border border-solid border-dark bg-light shadow-2xl p-12 rounded-3xl col-span-12 relative'>

      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-ee-[2rem] rounded-[2.5rem] round bg-dark' />

      <div className='w-full flex items-center justify-between'>

        <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
          <Image src={img} alt={title} width={500} height={500} className='w-full h-full' />
        </Link>

        <div className='w-full flex flex-col items-start justify-between pl-6'>

          <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
            <h2 className='mb-4 w-full text-left text-4xl font-bold'>{title}</h2>
          </Link>

          <span className='text-primary font-medium text-xl'>{type}</span>

          <p className='my2 font-medium text-dark'>{summary}</p>

          <div className='mt-4 flex justify-between'>

            <Link href={github} target='_blank' className='w-10 h-full'>
              <GithubIcon className="w-full" />
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

const ProjectCardSmall = ({ type, title, summary, img, link, github }) => {

  return (
    <article className='border border-solid border-dark bg-light shadow-2xl p-6 rounded-3xl col-span-12 relative'>

      <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark' />

      <div className='w-full flex flex-col items-center justify-between'>

        <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
          <Image src={img} alt={title} width={500} height={500} className='w-full h-auto' />
        </Link>

        <div className='w-full flex flex-col items-start justify-between pl-6'>

          <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
            <h2 className='my-4 w-full text-left text-4xl font-bold'>{title}</h2>
          </Link>

          <p className='my2 font-medium text-dark'>{summary}</p>

          <div className='mt-4 flex justify-between'>

            <Link href={github} target='_blank' className='w-10 h-full'>
              <GithubIcon className="w-full" />
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

export default function projects() {
  return (
    <main className="w-full pb-24 flex flex-col items-center justify-center">

      <AnimatedText text="Imagination Trumps Knowledge!" className="pt-24 pb-32 pl-2" />

      <div className='grid grid-cols-12 gap-24 gap-y-32 mx-36'>

        <ProjectCard
          title="Crypto Screener Application"
          summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
          link="/"
          type="Featured Project"
          github="/"
          img={projectImage}
        />

        <div className='col-span-6'>
          <ProjectCardSmall
            title="Crypto Screener Application"
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
            link="/"
            type="Featured Project"
            github="/"
            img={projectImage}
          />
        </div>

        <div className='col-span-6'>
          <ProjectCardSmall
            title="Crypto Screener Application"
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
            link="/"
            type="Featured Project"
            github="/"
            img={projectImage}
          />
        </div>

        <div className='col-span-12'>
          <ProjectCard
            title="Crypto Screener Application"
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
            link="/"
            type="Featured Project"
            github="/"
            img={projectImage}
          />
        </div>

        <div className='col-span-6'>
          <ProjectCardSmall
            title="Crypto Screener Application"
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
            link="/"
            type="Featured Project"
            github="/"
            img={projectImage}
          />
        </div>

        <div className='col-span-6'>
          <ProjectCardSmall
            title="Crypto Screener Application"
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
            link="/"
            type="Featured Project"
            github="/"
            img={projectImage}
          />
        </div>
      </div>


    </main>
  );
}
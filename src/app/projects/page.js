import AnimatedText from '@/components/AnimatedText';
import { ProjectCard, ProjectCardSmall } from '@/components/ProjectCards';
import TransitionEffect from '@/components/TransitionEffect';

export const metadata = {
  title: 'Projects'
}

export default function projects() {
  return (
    <main className="w-full pb-24 px-5 flex flex-col items-center justify-center">

      <TransitionEffect />

      <AnimatedText text="Imagination Trumps Knowledge!" className="pl-8 tablet:pl-0 pt-24 pb-32 desktop:pt-16 desktop:pb-24 tablet:pb-10 tablet:pt-10" />

      <p>I am currently working on some personal projects, and they will be showcased here soon.</p>
      <p> Stay tuned for the latest updates and check back shortly to explore my portfolio!</p>

      {/* <div className='flex justify-center flex-wrap gap-20'>

        <div className=''>
          <ProjectCard
            title="Crypto Screener Application"
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
            link="/"
            type="Featured Project"
            github="/"
            img={}
          />
        </div>

        <div className=''>
          <ProjectCardSmall
            title="Crypto Screener Application"
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
            link="/"
            type="Featured Project"
            github="/"
            img={}
          />
        </div>

        <div className=''>
          <ProjectCardSmall
            title="Crypto Screener Application"
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
            link="/"
            type="Featured Project"
            github="/"
            img={}
          />
        </div>

      </div> */}


    </main>
  );
}
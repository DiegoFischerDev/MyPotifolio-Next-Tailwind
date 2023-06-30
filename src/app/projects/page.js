import AnimatedText from '@/components/AnimatedText';
import projectImage from '../../../public/images/projectImage.jpg'
import { ProjectCard, ProjectCardSmall } from '@/components/ProjectCards';


export default function projects() {
  return (
    <main className="w-full pb-24 flex flex-col items-center justify-center">

      <AnimatedText text="Imagination Trumps Knowledge!" className="desktop:pl-8 pt-24 pb-32 desktop:pt-16 desktop:pb-24 tablet:pb-10 tablet:pt-10" />

      <div className='flex justify-center flex-wrap gap-20 mx-5'>

        <div className=''>
          <ProjectCard
            title="Crypto Screener Application"
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
            link="/"
            type="Featured Project"
            github="/"
            img={projectImage}
          />
        </div>

        <div className=''>
          <ProjectCardSmall
            title="Crypto Screener Application"
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
            link="/"
            type="Featured Project"
            github="/"
            img={projectImage}
          />
        </div>

        <div className=''>
          <ProjectCardSmall
            title="Crypto Screener Application"
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
            link="/"
            type="Featured Project"
            github="/"
            img={projectImage}
          />
        </div>

        <div className=''>
          <ProjectCard
            title="Crypto Screener Application"
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
            link="/"
            type="Featured Project"
            github="/"
            img={projectImage}
          />
        </div>

        <div className=''>
          <ProjectCardSmall
            title="Crypto Screener Application"
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency. A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
            link="/"
            type="Featured Project"
            github="/"
            img={projectImage}
          />
        </div>

        <div className=''>
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
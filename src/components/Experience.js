import ExperienceDetails from './ExperienceDetails';
import ExperienceLine from './ExperienceLine';


export default function Experience() {
  return (
    <div className='w-full max-w-[1200px] my-28 tablet:my-24 mobile:my-20'>
      <h2 className='font-bold text-5xl desktop:text-5xl tablet:text-4xl mobile:text-3xl mb-24 tablet:mb-20 mobile:mb-14 w-full text-center text-dark/75 dark:text-light/75'>
        Experience
      </h2>

      <div className=' text-dark/75 dark:text-light/75 mx-auto relative -translate-x-4'>

        <ExperienceLine />


        <ul className='w-full flex flex-col items-start justify-between ml-4 tablet:ml-6'>
          <ExperienceDetails
            position="Front-end | Sleeker - Web Application (React)"
            company="Arsenal Tecnologia"
            time="2023"
            address="Portugal · On-site"
            work=""
          />
          <ExperienceDetails
            position="Front-end | Sleeker - IOS / Android Application (React Native)"
            company="Arsenal Tecnologia"
            time="2023"
            address="Portugal · On-site"
            work=""
          />
          <ExperienceDetails
            position="Front-end | Evo - Web Application (React)"
            company="Arsenal Tecnologia"
            time="2022 - 2023"
            address="Brazil · On-site"
            work=""
          />
          <ExperienceDetails
            position="Engineer Officer"
            company="PETROBRAS"
            time="2017 - 2022"
            address="Brazil"
            work=""
          />
          <ExperienceDetails
            position="Marine Consultant"
            company="Bureau Veritas "
            time="2016 - 2017"
            address="Brazil"
            work=""
          />

        </ul>
      </div>

    </div>
  );
}
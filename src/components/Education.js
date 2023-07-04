import EducationDetails from './EducationDetails';
import ExperienceDetails from './ExperienceDetails';
import ExperienceLine from './ExperienceLine';


export default function Education() {
  return (
    <div className='w-full max-w-[1200px] mb-28'>
      <h2 className='font-bold text-5xl desktop:text-5xl tablet:text-4xl mobile:text-3xl mb-24 tablet:mb-20 mobile:mb-14 w-full text-center'>
        Education
      </h2>

      <div className=' text-dark/75 dark:text-light/75 mx-auto relative -translate-x-4'>

        <ExperienceLine />
        <ul className='w-full flex flex-col items-end justify-between ml-4 tablet:ml-6'>
          <EducationDetails
            course="Software Development"
            place="Estácio University"
            time="2023 - 2025"
            info="Bachelor's degree"
          />
            <EducationDetails
            course="React Js Bootcamp"
            place="Treina Recife"
            time="2023"
            info="Presential Course"
          />
            <EducationDetails
            course="React Native Bootcamp"
            place="Treina Recife"
            time="2022"
            info="Presential Course"
          />
          <EducationDetails
            course="Nautical Science (Engineer Officer)"
            place="Brazilian Merchant Navy Officers School"
            time="2011 - 2015"
            info="Bachelor's degree"
          />

        </ul>
      </div>

    </div>
  );
}
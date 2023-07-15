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
            work="Following the release of the new Sleeker app built with React Native, I was given the opportunity to contribute to the web version by implementing new features. I played a key role in restructuring the search functionality and enhancing the post editing screen for web mobile devices. As a result of my work, which effectively reduced support tickets, I received recognition for my contributions."
          />
          <ExperienceDetails
            position="Front-end | Sleeker - IOS / Android Application (React Native)"
            company="Arsenal Tecnologia"
            time="2023"
            address="Portugal · On-site"
            work="Sleeker is a marketing platform catering to nutritionists and personal trainers, with a large customer base. As part of the team, I was entrusted with the development of crucial components for their new app, including search and visualisation screens for posts, stories, reels, and ebooks. Additionally, I contributed to the implementation of support and payment screens."
          />
          <ExperienceDetails
            position="Front-end | Evo - Web Application (React)"
            company="Arsenal Tecnologia"
            time="2022 - 2023"
            address="Brazil · On-site"
            work="During my time at Arsenal Tecnologia, I worked on the development of the front-end for Evo, an application designed for physicians to track patient progress during hospitalisation and manage invoices for health insurances. Taking on the responsibility of designing and developing the entire app with minimal supervision, I was able to apply the knowledge I gained during a year of studying to a real project with actual stakeholders."
          />
          <ExperienceDetails
            position="Engineer Officer"
            company="PETROBRAS"
            time="2017 - 2022"
            address="Brazil"
            work="PETROBRAS is one of the largest oil exploration and production companies in the world. As first engineer officer, I was team leader and managed the services of operation and maintenance of equipment in the engine room aboard the LPG ship Jorge Amado (Transpetro). Planning, checking, and acting to ensure continuous improvements and develop more efficient problem-solving strategies. One of my main responsibilities was to always provide a safe work environment to the crew with a collaborative, flexible, respectful attitude."
          />
          <ExperienceDetails
            position="Marine Consultant"
            company="Bureau Veritas "
            time="2016 - 2017"
            address="Brazil"
            work="Bureau Veritas is a French company specialized in testing, inspection and certification. As a ship inspector, I performed inspections and tests of equipment on board offshore vessels. I also performed document audits, investigations, classification and treatment of marine accidents; Proposals for contractual safety attachments; Development of safety procedures; Visits to vessels for HSE meetings with captains."
          />

        </ul>
      </div>

    </div>
  );
}
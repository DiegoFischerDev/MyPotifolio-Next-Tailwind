import React from 'react';

export default function DevSkills() {
  return (
    <div className='w-full max-w-[1200px] desktop:max-w-[900px] text-dark/75 dark:text-light/75'>

      <h2 className='mt-16 font-bold text-5xl desktop:text-5xl tablet:text-4xl mobile:text-3xl mb-24 tablet:mb-20 mobile:mb-14 w-full text-center'>Dev Skills</h2>

      <article>
        <h2 className='mb-4 text-lg font-bold uppercase '>Projects and design</h2>

        <p className='font-medium mb-6'>
          One of my strengths lies in my sensitivity to <span className='text-primary dark:text-primaryDark'>UI and UX</span> considerations. In each project, I strive to align design, context, and usability. To accomplish this, I employ tools like <span className='text-primary dark:text-primaryDark'>Adobe Photoshop</span> and <span className='text-primary dark:text-primaryDark'>Figma</span>, as well as AI-powered image creation tools. These tools enable me to craft visually appealing and user-friendly experiences.
        </p>
      </article>

      <article>
        <h2 className='mb-4 mt-12 text-lg font-bold uppercase '>Front-End Libraries</h2>

        <p className='font-medium mb-6'>
          On the front-end, I have a preference for <span className='text-primary dark:text-primaryDark'>Next.js</span>. Its ease of use in creating routes (similar to PHP), fast page load times, and excellent SEO performance make it my framework of choice. Additionally, I feel very comfortable working with <span className='text-primary dark:text-primaryDark'>React.js</span>. With <span className='text-primary dark:text-primaryDark'>React Native</span>, I can develop beautiful native mobile applications for both Android and iOS, ensuring compliance with the requirements of Google Play and the Apple Store.
        </p>
      </article>

      <article>
        <h2 className='mb-4 mt-12 text-lg font-bold uppercase '>Styling Approach</h2>

        <p className='font-medium mb-6'>
          While I have previously built projects styled with <span className='text-primary dark:text-primaryDark'>SASS</span>, I now prefer utilizing <span className='text-primary dark:text-primaryDark'>Tailwind CSS</span>. The approach of keeping <span className='text-primary dark:text-primaryDark'>HTML</span>, <span className='text-primary dark:text-primaryDark'>CSS</span>, and <span className='text-primary dark:text-primaryDark'>Javascript</span> for a component in a single file resonates with me, making it easier to reuse components across different projects.
        </p>
      </article>

      <atticle>
        <h2 className='mb-4 mt-12 text-lg font-bold uppercase '>organisation and control</h2>

        <p className='font-medium mb-6'>
          Even in my personal projects, I adhere to strict work and organizational guidelines, basing my approach on <span className='text-primary dark:text-primaryDark'>Agile methodologies</span> and utilizing <span className='text-primary dark:text-primaryDark'>Git Flow</span>. Before every merge, I take the time to carefully review and analyze my pull requests.
        </p>
      </atticle>

      <atticle>
        <h2 className='mb-4 mt-12 text-lg font-bold uppercase '>Advanced skills</h2>

        <p className='font-medium mb-6'>
        In my latest works, I have been utilizing <span className='text-primary dark:text-primaryDark'>TypeScript</span> and <span className='text-primary dark:text-primaryDark'>Redux</span>. These powerful technologies have enabled me to build robust applications, leveraging the benefits of static typing and state management.
        </p>
      </atticle>

      <article>
        <h2 className='mb-4 mt-12 text-lg font-bold uppercase '>Continuous Learning and Growth</h2>

        <p className='font-medium mb-6'>
          I am always dedicated to staying up-to-date and keeping an eye on emerging technologies. Currently, I am focused on studying <span className='text-primary dark:text-primaryDark'>Unit Testing</span>, which is essential for professional application scalability and maintenance. In the future, I plan to expand my knowledge by studying <span className='text-primary dark:text-primaryDark'>Node JS</span> and developing backend skills. As a firm believer in lifelong learning, I am committed to continuously improving my skills and knowledge.
        </p>
      </article>
    </div>
  );
}
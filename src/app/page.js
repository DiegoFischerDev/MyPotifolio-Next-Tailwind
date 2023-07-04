import Image from "next/image";
import bgSectionHome from "../../public/images/bgSectionHome.png"
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import LightBulb from "@/components/LightBulb";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <main className='relative px-5'>
      <TransitionEffect />
      <div className="flex w-full items-center justify-between tablet:flex-col">

        <AnimatedText text="Turning Vision Into Reality With Code And Design." className="hidden tablet:flex" />

        <div className="w-1/2 ml-auto group tablet:w-full">
          <Image
            src={bgSectionHome}
            alt="Diego Fischer Dev Avatar"
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />

          <LightBulb />
        </div>

        <div className="w-1/2 flex flex-col items-center text-left tablet:w-full">
          <AnimatedText text="Turning Vision Into Reality With Code And Design." className="text-left tablet:hidden" />
          <p className="my-6 mr-6 text-base font-medium">
            Welcome to my personal portfolio page! I am a full-stack developer with a passion for creating testable and scalable applications from end-to-end.
          </p>
          <p className="text-start w-full mb-6 text-base font-medium">Explore my latest projects showcasing my expertise in web development.</p>
          <div className="flex w-full items-center justify-start">
            <div className="self-start tablet:self-center">
              <Link href="/about"
                className="flex mb-4 items-center bg-dark text-light p-2.5 px-6 tablet:px-4 mobile:px-2 tablet:text-base mobile:text-base rounded-lg font-semibold border-2 border-solid border-transparent hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light">ABOUT</Link>
            </div>
            <div className="self-start mx-4 tablet:self-center">
              <Link href="/projects"
                className="flex mb-4 items-center bg-dark text-light p-2.5 px-6 tablet:px-4 mobile:px-2 tablet:text-base mobile:text-base rounded-lg font-semibold border-2 border-solid border-transparent hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light">PROJECTS</Link>
            </div>
            <div className="self-start tablet:self-center">
              <Link href="/contact"
                className="flex mb-4 items-center bg-dark text-light p-2.5 px-6 tablet:px-4 mobile:px-2 tablet:text-base mobile:text-base rounded-lg font-semibold border-2 border-solid border-transparent hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light">CONTACT</Link>
            </div>

          </div>
        </div>

      </div>
    </main>
  )
}

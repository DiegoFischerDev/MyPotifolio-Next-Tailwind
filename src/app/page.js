import Image from "next/image";
import bgSectionHome from "../../public/images/bgSectionHome.png"
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import LightBulb from "@/components/LightBulb";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <main className='relative px-8'>
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
          <p className="my-4 mr-6 text-base font-medium relative">
            As a skilled front-end developer, I am dedicated to turning ideas into innovative web applications.
            Explore my latest projects showcasing my expertise in React.js and web development.
          </p>
          <div className="self-start mt-2 tablet:self-center">
            <Link href="/ResumeDiegoFischer.pdf" target={"_blank"} download={false}
              className="flex mb-4 items-center bg-dark text-light p-2.5 px-6 rounded-lg font-semibold border-2 border-solid border-transparent hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light">Resume <LinkArrow /></Link>
          </div>
        </div>

      </div>
    </main>
  )
}

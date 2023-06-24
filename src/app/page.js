import Image from "next/image";
import ProfileImage from "../../public/images/profileImg.jpg"
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import LightBulb from "@/components/LightBulb";

export default function Home() {
  return (
    <main className='relative'>
      <div className="flex w-full items-center justify-between">

        <div className="w-1/2 ml-auto group">
          <Image src={ProfileImage} alt="Diego Fischer Dev Avatar"/>
          <LightBulb />
        </div>

        <div className="w-1/2 flex flex-col items-center text-left">
          <AnimatedText text="Turning Vision Into Reality With Code And Design." className="text-left" />
          <p className="my-4 mr-6 text-base font-medium">
            As a skilled front-end developer, I am dedicated to turning ideas into innovative web applications.
            Explore my latest projects showcasing my expertise in React.js and web development.
          </p>
          <div className="self-start mt-2">
            <Link href="/Resume - Diego Fischer.pdf" target={"_blank"} download={true}
            className="flex mb-4 items-center bg-dark text-light p-2.5 px-6 rounded-lg font-semibold border-2 border-solid border-transparent hover:bg-light hover:text-dark hover:border-dark">Resume <LinkArrow /></Link>
          </div>
        </div>

      </div>
    </main>
  )
}

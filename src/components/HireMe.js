import Link from "next/link";
import { CircularText } from "./Icons";

export default function HireMe() {
 return (
   <div className="fixed left-10 bottom-10 flex items-center justify-center tablet:left-5 tablet:bottom-5 hover:scale-125 transition-all duration-200 ease-linear">
    <div className="w-40 h-auto flex items-center justify-center relative tablet:w-28 mobile:w-20">
      <CircularText className="fill-dark dark:fill-light animate-[spin_12s_linear_infinite]"/>
      <Link href="/contact"
      className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold bg-light dark:bg-dark text-dark dark:text-light shadow-lg border-solid border-dark dark:border-light border-2 w-24 h-24 tablet:w-16 mobile:w-12 tablet:h-16 mobile:h-12 tablet:text-xs mobile:text-[0.5rem] rounded-full hover:text-dark dark:hover:text-light hover:bg-light dark:hover:bg-dark"
      >Hire Me</Link>
    </div>
   </div>
 );
}
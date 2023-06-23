import Link from "next/link";
import { CircularText } from "./Icons";

export default function HireMe() {
 return (
   <div className="fixed left-10 bottom-10 flex items-center justify-center overflow-hidden">
    <div className="w-40 h-auto flex items-center justify-center relative">
      <CircularText className="fill-dark animate-spin-slow"/>
      <Link href="/contact"
      className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold bg-dark text-light shadow-lg border-solid border-dark border-2 w-24 h-24 rounded-full hover:text-dark hover:bg-light"
      >Hire Me</Link>
    </div>
   </div>
 );
}
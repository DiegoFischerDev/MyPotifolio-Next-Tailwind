import Link from "next/link";
import HireMe from "./HireMe";

export default function MyFooter() {
 return (
   <footer className="w-full h-24 border-t-2 border-solid border-dark font-medium text-sm flex items-center justify-center flex-col">
      <p>{new Date().getFullYear()} &copy; All Rights Reserved</p>
      <div className="flex items-center">
        Built With <icon className="text-red-600 text-2xl px-1">&#9825;</icon> by DiegoFischer.Dev
      </div>
    <HireMe />
   </footer>
 );
}
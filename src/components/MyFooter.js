import Link from "next/link";
import HireMe from "./HireMe";
import { WhatsappIcon, GithubIcon, LinkedInIcon, InstagramIcon, InstagramIconTwo } from './Icons';

export default function MyFooter() {
  return (
    <footer className="w-full h-24 border-t-2 border-solid border-dark dark:border-light font-medium text-sm flex items-center justify-center flex-col">
      <p>{new Date().getFullYear()} &copy; DiegoFischer.Dev</p>
      <HireMe />
    </footer>
  );
}
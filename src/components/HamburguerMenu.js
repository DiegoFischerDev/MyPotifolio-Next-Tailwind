'use client';
import Link from 'next/link';
import { useState } from 'react';
import { WhatsappIcon, GithubIcon, LinkedInIcon, InstagramIcon } from './Icons';
import NavBarActive from './NavBarActive';

export default function HamburguerMenu() {

  const CustomLink = ({ href, title }) => {

    return (
      <Link href={href} className="relative group">
        {title}

        <NavBarActive href={href} />
      </Link>
    )
  }

  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button onClick={() => { handleClick() }} className='flex flex-col justify-center items-center'>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1'}`}></span>
      </button>

      <div className='hidden laptop:flex flex-col justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/75 dark:bg-light/75 ronded-lg backdrop-blur-md px-24 py-16 z-20 text-light dark:text-dark rounded-lg'>

        <nav className='flex flex-col justify-evenly items-center text-2xl h-64 mb-10'>
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
          <CustomLink href="/contact" title="Contact" />
        </nav>

        <nav className='flex items-center justify-between w-56'>
          <Link href="https://api.whatsapp.com/send?phone=351927398547&text=Hi%20Diego!%20I%20found%20your%20contact%20on%20your%20website" target={"_blank"} ><WhatsappIcon /></Link>
          <Link href="https://instagram.com/diegooo.dev?igshid=OGQ5ZDc2ODk2ZA==" target={"_blank"} ><InstagramIcon /></Link>
          <Link href="https://github.com/DiegoFischerDev" target={"_blank"} ><GithubIcon /></Link>
          <Link href="https://www.linkedin.com/in/diego-fischer-dev/" target={"_blank"} ><LinkedInIcon className="mr-4" /></Link>

        </nav>
      </div>

    </div>
  );
}
import Link from 'next/link';
import Logo from './Logo';
import { WhatsappIcon, GithubIcon, LinkedInIcon, InstagramIcon } from './Icons';
import InstagramIconTwo from '../../public/images/instagramIcon.png'
import ButtonThemeDarkOrLight from './ButtonThemeDarkOrLight';
import HamburguerMenu from './HamburguerMenu';
import Image from 'next/image';
import CustomLink from './CustomLink';

export default function NavBar() {

  return (
    <header className='w-full px-32 desktop:px-16 mobile:px-5 tablet:px-10 py-8 font-medium flex items-center justify-between relative'>

      <div className='hidden laptop:flex justify-between w-full items-center'>
        <ButtonThemeDarkOrLight />
        <HamburguerMenu />
      </div>

      <Logo />

      <div className='laptop:hidden w-full flex justify-between items-center'>

        <nav className='flex justify-between items-center w-1/3 max-w-[400px]'>
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
          <CustomLink href="/contact" title="Contact" />
        </nav>

        <nav className='flex justify-between items-center w-[300px]'>
          <Link href="https://api.whatsapp.com/send?phone=351927398547&text=Hi%20Diego!%20I%20found%20your%20contact%20on%20your%20website" target={"_blank"} ><WhatsappIcon /></Link>
          <Link href="https://instagram.com/diegooo.dev?igshid=OGQ5ZDc2ODk2ZA==" target={"_blank"} ><Image src={InstagramIconTwo} alt='instagram Icon' width={30} className='hover:-translate-y-1 transition-all duration-300' /></Link>
          <Link href="https://github.com/DiegoFischerDev" target={"_blank"} ><GithubIcon /></Link>
          <Link href="https://www.linkedin.com/in/diego-fischer-dev/" target={"_blank"} ><LinkedInIcon /></Link>

          <ButtonThemeDarkOrLight className='ml-10' />
        </nav>

      </div>

    </header>
  );
}
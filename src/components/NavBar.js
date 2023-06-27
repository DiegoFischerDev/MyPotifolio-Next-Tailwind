import Link from 'next/link';
import Logo from './Logo';
import NavBarActive from './NavBarActive';
import { WhatsappIcon, GithubIcon, LinkedInIcon, InstagramIcon } from './Icons';
import ButtonThemeDarkOrLight from './ButtonThemeDarkOrLight';

export default function NavBar() {

  const CustomLink = ({ href, title }) => {

    return (
      <Link href={href} className="mr-6 relative group">
        {title}

        <NavBarActive href={href} />
      </Link>
    )
  }

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/projects" title="Projects" />
        <CustomLink href="/contact" title="Contact" />
      </nav>
      <Logo />
      <nav className='flex items-center flex-wrap'>
        <Link href="https://api.whatsapp.com/send?phone=351927398547&text=Hi%20Diego!%20I%20found%20your%20contact%20on%20your%20website" target={"_blank"}><WhatsappIcon /></Link>
        <Link href="https://instagram.com/diegooo.dev?igshid=OGQ5ZDc2ODk2ZA==" target={"_blank"}><InstagramIcon /></Link>
        <Link href="https://github.com/DiegoFischerDev" target={"_blank"}><GithubIcon /></Link>
        <Link href="https://www.linkedin.com/in/diego-fischer-dev/" target={"_blank"}><LinkedInIcon /></Link>

        <ButtonThemeDarkOrLight/>
      </nav>
    </header>
  );
}
'use client';

import { usePathname } from 'next/navigation';

export default function NavBarActive({ href }) {

  const pathname = usePathname();

  return (
    <span className={`h-[1px] w-0 bg-primary dark:bg-primaryDark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${href === pathname ? 'w-full' : 'w-0'}`}>
    </span>
  );
}
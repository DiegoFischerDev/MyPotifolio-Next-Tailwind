'use client';

import { useRouter } from "next/navigation";
import { LinkArrow } from "./Icons";

export default function DownloadResume() {

  const router = useRouter();

  return (
    <button onClick={() => { router.push("/ResumeDiegoFischer.pdf") }} className="flex mb-4 items-center bg-dark text-light p-2.5 px-6 rounded-lg font-semibold border-2 border-solid border-transparent hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light">
      Resume <LinkArrow className="ml-2" />
    </button>
  );
}
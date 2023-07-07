
import Image from "next/image";
import lightBulb from "../../public/images/bulb.svg";


export default function LightBulb() {

  return (
      <Image
        src={lightBulb}
        alt="LightBulb"
        className={`h-auto w-1/12 min-w-[60px] grayscale group-hover:grayscale-0 hover:grayscale-0 absolute -z-50 bottom-10 right-20 desktop:bottom-0 desktop:hidden`}
      />
  );
}
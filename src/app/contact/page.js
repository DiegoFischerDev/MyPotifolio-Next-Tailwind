import AnimatedText from "@/components/AnimatedText";
import ContactForm from "@/components/ContactForm";

export default function contact() {

  return (
    <main className="w-full pb-24 flex flex-col items-center justify-center">

      <AnimatedText text="Let's work together!" className="py-20 pl-2 desktop:py-14 tablet:py-10" />

      <h3 className="text-2xl tablet:text-xl mb-4">Do you need a push in a web project?</h3>
      <h3 className="text-2xl tablet:text-xl mb-10"><span className="text-primary dark:text-primaryDark">Get in touch!</span></h3>

      <ContactForm />

      <div className="flex items-center justify-center mt-10 w-[650px] mobile:flex-col mobile:items-start mobile:w-[400px] mobile:justify-between h-[50px] tablet:text-sm">
        <p className="mr-12"><span className="text-primary dark:text-primaryDark font-semibold mr-3">Fone:</span>+351 927 398 547</p>
        <p><span className="text-primary dark:text-primaryDark font-semibold mr-3">Email:</span>diegofischer.dev@gmail.com</p>
      </div>
    </main>
  );
} 
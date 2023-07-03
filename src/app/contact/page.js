import AnimatedText from "@/components/AnimatedText";
import ContactForm from "@/components/ContactForm";
import TransitionEffect from "@/components/TransitionEffect";

export const metadata = {
  title: 'Contact'
}

export default function contact() {

  return (
    <main className="w-full pb-24 px-5 flex flex-col items-center justify-center">

      <TransitionEffect />

      <AnimatedText text="Let's work together!" className="py-20 desktop:py-14 tablet:py-10" />

      <h3 className="text-2xl tablet:text-xl mb-4 tablet:mb-10">Do you need a push in a web project? <span className="text-primary dark:text-primaryDark hidden tablet:inline">Get in touch!</span></h3>
      <h3 className="text-2xl tablet:text-xl mb-10 tablet:hidden">
      <span className="text-primary dark:text-primaryDark">Get in touch!</span></h3>

      <ContactForm />

      <div className="flex items-center w-full justify-center">
        <div className="flex items-center justify-center mt-10 w-[650px] mobile:w-fit mobile:flex-col mobile:items-start mobile:justify-between h-[50px] tablet:text-sm">
          <p className="mr-12"><span className="text-primary dark:text-primaryDark font-semibold mr-3">Fone:</span>+351 927 398 547</p>
          <p><span className="text-primary dark:text-primaryDark font-semibold mr-3">Email:</span>hello@diegofischer.dev</p>
        </div>
      </div>
    </main>
  );
} 
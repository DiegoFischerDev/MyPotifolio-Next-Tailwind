import AnimatedText from "@/components/AnimatedText";
import ContactForm from "@/components/ContactForm";

export default function contact() {

  return (
    <main className="w-full pb-24 flex flex-col items-center justify-center">

      <AnimatedText text="Let's work together!" className="py-24 pl-2" />

      <h3 className="text-2xl mb-4">Do you need a push in a web project?</h3>
      <h3 className="text-2xl mb-10"><span className="text-primary dark:text-primaryDark">Get in touch!</span></h3>

      <ContactForm />

      <div className="flex items-center justify-between mt-10 w-[600px]">
        <p><span className="text-primary dark:text-primaryDark font-semibold mr-3">Fone:</span>+351 927 398 547</p>
        <p><span className="text-primary dark:text-primaryDark font-semibold mr-3">Email:</span>diegofischer.dev@gmail.com</p>
      </div>
    </main>
  );
} 
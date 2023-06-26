import AnimatedText from "@/components/AnimatedText";
import ContactForm from "@/components/ContactForm";
import { PortugalFlagIcon } from "@/components/Icons";

export default function contact() {

  return (
    <div className="w-full pb-24 flex flex-col items-center justify-center">

      <AnimatedText text="Send me a message" className="py-24 pl-2" />

      <h3 className="text-2xl mb-4">Do you need help with any project?</h3>
      <h3 className="text-2xl mb-10"><span className="text-primary">Get in touch</span> and let's work together!</h3>

      <ContactForm />

      <div className="flex items-center justify-between mt-10 w-[600px]">
        <p><span className="text-primary font-semibold mr-3">Fone:</span>+351 654 856 365</p>
        <p><span className="text-primary font-semibold mr-3">Email:</span>diegofischer.dev@gmail.com</p>
      </div>
    </div>
  );
} 
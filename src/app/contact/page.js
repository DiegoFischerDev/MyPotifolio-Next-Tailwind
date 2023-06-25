import AnimatedText from "@/components/AnimatedText";
import ContactForm from "@/components/ContactForm";

export default function contact() {

  return (
    <div className="w-full pb-24 flex flex-col items-center justify-center">
      <AnimatedText text="Send me a message" className="py-24" />
      <ContactForm />
    </div>
  );
}
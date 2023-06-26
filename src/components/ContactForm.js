'use client'

import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser'  // https://www.emailjs.com/

export default function ContactForm() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [emailValidation, setEmailValidation] = useState('')

  const emailRef = useRef(null);

  function handleEmailInputChange(e){

    setEmail(e.target.value);
    setEmailValidation(/\S+@\S+\.\S+/.test(email));

    if (emailValidation) {
      emailRef.current.setCustomValidity('');
    } else {
      emailRef.current.setCustomValidity('Invalid email address, please check this out.');
    }
  }

  function sendEmail(e) {

    e.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_x67z2t9", "template_d9l2dsx", templateParams, "llj__muMS8LgT28ex" )
    .then((response) => {
      console.log("email enviado", response.status, response.text)
      setName('');
      setEmail('');
      setMessage('');
      alert("email enviado!")

    }, (error) => {
      console.log(error);
    })

  }

  return (
    <div className="w-full flex flex-col items-center">

      <form className="border-4 border-solid border-white p-8 w-1/3 flex flex-col rounded-lg" onSubmit={(e) => {sendEmail(e)}}>
        <input 
          className="my-2 h-10 px-2 rounded"
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          required
          value={name}
        />
        
        <input 
          className="my-2 h-10 px-2 rounded"
          type="text"
          placeholder="Enter your email"
          onChange={(e) => {handleEmailInputChange(e)}}
          ref={emailRef}
          required
          value={email}
        />

        <textarea 
          className="my-2 h-36 px-2 py-4 rounded"
          placeholder="Enter your message..."
          onChange={(e) => setMessage(e.target.value)}
          required
          value={message}
        />

        <input
        className="mt-8 border-2 bg-primary text-white p-2 rounded text-2xl cursor-pointer font-semibold hover:bg-light border-white"
        type="submit"
        value="Send to Diego" />
      </form>

    </div>
  );
}
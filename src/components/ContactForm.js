'use client'

import { useRef, useState } from "react";
import emailjs from '@emailjs/browser'  // https://www.emailjs.com/
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [emailValidation, setEmailValidation] = useState('')

  const emailRef = useRef(null);

  function handleEmailInputChange(e) {

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

    const myPromise = new Promise((resolve, reject) => {

      emailjs.send("service_x67z2t9", "template_d9l2dsx", templateParams, "llj__muMS8LgT28ex")
      .then((response) => {
        console.log("email enviado", response.status, response.text)
        setName('');
        setEmail('');
        setMessage('');
        resolve();

      }, (error) => {
        reject();
        console.error(error);
      })

    })

    toast.promise(
      myPromise,
      {
        pending: 'Sending...',
        success: 'Message sent! Thank you.',
        error: 'Ops, Something went wrong. Message not sent.'
      }
    )
  }

  return (
    <div className="w-full flex flex-col items-center">
      <ToastContainer />

      <form className="border-4 border-solid border-gray-300 p-8 mobile:p-4 w-full max-w-[600px] flex flex-col rounded-lg text-dark" onSubmit={(e) => { sendEmail(e) }}>
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
          onChange={(e) => { handleEmailInputChange(e) }}
          ref={emailRef}
          required
          value={email}
        />

        <textarea
          className="my-2 h-36 px-2 py-4 rounded"
          placeholder="Enter your message"
          onChange={(e) => setMessage(e.target.value)}
          required
          value={message}
        />

        <input
          className="mt-8 border-2 bg-primary dark:bg-primaryDark text-white p-2 rounded text-2xl cursor-pointer font-semibold hover:bg-light dark:hover:bg-light border-white"
          type="submit"
          value="Send to Diego" />
      </form>

    </div>
  );
}
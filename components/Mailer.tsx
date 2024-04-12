import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Spinner from './common/Spinner';
import Checkmark from './common/Checkmark';

interface FormSubmit {
  senderName: string;
  senderEmail: string;
  subject: string;
  message: string;
}

export const Mailer = () => {
  const initialState = {
    senderName: "",
    senderEmail: "",
    subject: "",
    message: "",
  }

  const [formInfo, setFormInfo] = useState<FormSubmit>(initialState)
  const [loading, setLoading] = useState(false);
  const [hasSent, setHasSent] = useState(false);
  const [error, setError] = useState('');
  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormInfo(( prevState: FormSubmit ) => ({
      ...prevState,
      [name]: value
    }))
  };

  const sendEmail = async() => {
    console.log({formInfo});
    const validator = (str: string) => {
      
    }


    const obj = {
      publicKey: '4aavHsEnbJYvDKv0G',
      privateKey: '4aavHsEnbJYvDKv0G',
      templateId: 'template_79x37jk',
      serviceId: 'default_service',
    }
    setLoading(true);
    await emailjs.send(
      obj.serviceId,
      obj.templateId,
      // @ts-ignore 
      // formInfo,
      {
        user_email: formInfo.senderEmail,
        user_name: formInfo.senderName,
        subject: formInfo.subject,
        message: formInfo.message
      },
      obj.publicKey,
    ).then(
      (result) => {
        setHasSent(true)
        console.log(result.text)
      },
      (error) => {
        setError('kdrendel99@gmail.com')

        console.log(error)
      }
    );
    setLoading(false)
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // setLoading(true)
    sendEmail()
  }

  const renderButton = () => {
    if (loading) return <Spinner size='2'/>
    // if (hasSent) return <Checkmark />
    if (hasSent) return 'Message Sent. Thank You!'
    else return 'Send Message'
  }


  return (

    <div className='flex w-full flex-col lg:max-w-[480px]'>
      <form 
        onSubmit={handleSubmit}
        className='flex flex-col w-full bg-transparent overflow-auto space-y-5'
      >
          <input type="text" name="senderName" style={{border:'1px solid #898989'}} onChange={handleInputChange} placeholder="YOUR NAME" className='text-sm px-3 border-solid border border-[#000000] bg-offwhite py-3'
          aria-label='Your Name' id="senderName" required/>

          <input type="text" name="senderEmail" style={{border:'1px solid #898989'}} onChange={handleInputChange} placeholder="YOUR EMAIL" className='text-sm px-3 border-solid border-1 border-[#000000] bg-offwhite py-3' aria-label='Your Email Address' id="senderEmail" required/>

          <input type="text" name="subject" style={{border:'1px solid #898989'}} onChange={handleInputChange} placeholder="SUBJECT" className='text-sm px-3 border-solid border-1 border-[#000000] bg-offwhite py-3'
          aria-label='Subject' id="subject" required/>

          <textarea name="message" style={{border:'1px solid #898989'}} onChange={handleInputChange} placeholder="MESSAGE" className='text-sm px-3 border-solid border-1 border-[#000000] bg-offwhite py-3'
          aria-label='Message' id="message" required/>       

        <button type="submit" value="Submit" 
        disabled={loading || error.length > 0 || !loading && hasSent}
        className={`dark:bg-accentColor hover:shadow-xl transition-all bg-accentColor hover:font-normal uppercase text-sm tracking-kd-wide py-4 font-thin w-full text-white hover:cursor-pointer h-[52px] flex justify-center items-center ${loading ? 'bg-darkGrey' : ''} dark:${loading ? 'bg-darkGrey' : ''} disabled:hover:cursor-default`}>
          {renderButton()}
        </button>

      </form>
      <div className='text-grey font-thin flex w-full justify-center items-center mt-5'>
        <p>Or, schedule a chat with me on <a target="__blank" href="https://calendly.com/karlson-drendel/30min" className='underline underline-offset-2 dark:text-accentColor text-accentColor'>Calendly</a>!</p>
      </div>

    </div>
  );
};
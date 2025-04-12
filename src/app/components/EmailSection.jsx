"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/icons8-linkedin.svg";
import InstagramIcon from "../../../public/icons8-instagram.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: "POST",
            // Tell the server we're sending JSON.
            headers: {
            "Content-Type": "application/json",
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        };
    
        const response = await fetch(endpoint, options);
        const resData = await response.json();
        console.log(resData)
    
        if (response.status === 200) {
            console.log("Message sent.");
            setEmailSubmitted(true);
            // Clear the form
            setEmail("");
            setSubject("");
            setMessage("");
        }
    }
    return (
        <section id='contact' className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent 
            rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'>

            </div>
            <div className='z-10'>
                <h5 className='text-4xl font-bold text-white my-2'>
                    Let&apos;s Connect
                </h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always open. 
                    Whether you have a question or just want to say hi, I will get back to you as soon as possible!
                </p>
                <div className='socials flex flex-row gap-2'>
                    {/* <Link href="https://github.com/degaliang">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link> */}
                    <Link href="https://www.linkedin.com/in/ziyi-brian-wang/ ">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                    <Link href="https://www.instagram.com/pro_mechanics_engineer/ ">
                        <Image src={InstagramIcon} alt="Instagram Icon" />
                    </Link>
                </div>
            </div>
            {/* <div>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label htmlFor='email' className='text-white mb-2 block text-sm font-medium'>
                            Your Email
                        </label>
                        <input name='email' type='email' id='email' required className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] 
                        text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='youremail@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className='mb-6'>
                        <label htmlFor='subject' className='text-white mb-2 block text-sm font-medium'>
                            Subject
                        </label>
                        <input name='subject' type='text' id='subject' required className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] 
                        text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)}/>
                    </div>

                    <div className='mb-6'>
                        <label htmlFor='message' className='text-white mb-2 block text-sm font-medium'>
                            Message
                        </label>
                        <textarea name='message' id='message' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] 
                        text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='Leave your message here' value={message} onChange={(e) => setMessage(e.target.value)}/>
                    </div>
                    <button type='submit' className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                        Send Message
                    </button>
                    {
                        emailSubmitted && (
                            <p className="text-primary-400 text-sm mt-2">
                                Email sent successfully!
                            </p>
                        )
                    }
                </form>
            </div> */}
        </section>
    )
};

export default EmailSection

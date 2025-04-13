"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { prefix } from '../prefix';

const PersonSection = () => {
  return (
    <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
                    <div className="text-white bg-clip-text bg-gradient-to-r from-primary-500 via-secondary-300 to-gray-50">
                        Hi, I&apos;m{" "}
                    </div>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Ziyi (Brian) Wang',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'a Mechanical Engineer ',
                            1000,
                            'a Automotive Technician',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                {/* <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    The light that you give me will everglow. 
                </p> */}
                <div>
                    <Link href={'#contact'}>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-500 text-black bg-gradient-to-r from-primary-500 to-secondary-500">
                            Hire Me
                        </button>
                    </Link>
                    
                    <a href="/resume.pdf">
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white bg-gradient-to-r from-primary-500 to-secondary-500 mt-3">
                            <span className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2 border">Resume</span>
                        </button>
                    </a>
                </div>
            </div>
            <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src={`${prefix}/images/brian.jpeg`}
                        alt="developer"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default PersonSection

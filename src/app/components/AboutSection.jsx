"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

// the content displayed in each tab in the About Me section
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Circuits Design</li>
            </ul>
        )
    },
    {
        title: "Tools",
        id: "tools",
        content: (
            <ul className='list-disc pl-2'>
                <li>MATLAB</li>
                <li>Fusion 360</li>
                <li>SolidWorks</li>
                <li>CATIA</li>
                <li>FDM/DFA</li>
                <li>FDM</li>
                <li>Python</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>2025, M.S., Mechanical Engineering, UC Berkeley</li>
                <li>2024, B.S., Mechanical Engineering, UC Berkeley</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li>Mechanical Engineer</li>
                <li>Cell Manufacturing Engineer</li>
                <li>Automotive Technician</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className='text-white' id='about'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16'>
                <Image src='/images/about_me_im.webp' width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>
                        About Me
                    </h2>
                    <p className='text-base md:text-lg text-justify'>
                        I’m a graduate student at UC Berkeley pursuing an M.S. 
                        in Mechanical Engineering, specializing in mechanical design 
                        and advanced manufacturing. With over five years of experience 
                        in automotive repair, manufacturing, and technical design, I’ve 
                        developed strong analytical, problem-solving, and attention-to-detail 
                        skills. My background includes a Tesla internship, contributions to the 
                        Berkeley Solar Vehicle Team, and designing advanced carbon fiber components 
                        for high-performance systems. Collaborative, disciplined, and driven to excel, 
                        I bring technical expertise and a global perspective to solving complex engineering challenges.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab == "skills"}>
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("tools")} active={tab == "tools"}>
                            {" "}
                            Tools{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab == "education"}>
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab == "experience"}>
                            {" "}
                            Experience{" "}
                        </TabButton>
                    </div>
                    <div className='mt-8'>
                        {TAB_DATA.find((t) => t.id == tab).content}
                    </div>
                </div>
            </div>
        </section>)
}

export default AboutSection

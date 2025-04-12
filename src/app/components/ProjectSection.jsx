"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    // {
    //     id: 1,
    //     title: "The City of Pixels",
    //     description: "A pipeline for reconstructing large scale city scenes as 3D point clouds using RGB and depth data from the Google Street View API. The inputs used are 360 panoramas of street views and their associated depth map. The resolution is 256 by 512. The pipeline takes in the inputs, renders 3D point clouds, and aligns them to form a large 3D scene. ",
    //     image: "/images/projects/city_of_pixels.png",
    //     tag: ["All", "Computer Vision"],
    //     gitUrl: "https://github.com/degaliang/city_of_pixels ",
    //     previewUrl: "https://tinyurl.com/28p5jkcz"
    // },
    // {
    //     id: 2,
    //     title: "Vision-Language Model for Pose Estimation",
    //     description: "Fine-tune the BLIP vision-language model on MPII Pose Estimation dataset. BLIP was pre-trained on image captioning. The fine-tuned model outputs captions with coordinates describing the location of each body joint. The resulting model is robust in scenes with physical occlusions and achieves a validation accuracy of 90%. ",
    //     image: "/images/projects/blip.png",
    //     tag: ["All", "Machine Learning"],
    //     gitUrl: "https://github.com/degaliang/BLIP_fine_tuning",
    //     previewUrl: "https://github.com/degaliang/BLIP_fine_tuning"
    // },
    // {
    //     id: 3,
    //     title: "Autonomous Senior Helper System",
    //     description: "A computer-vision-based fall detection system and can detect human falls regardless of any occlusions in the scene. Spatial-Temporal Neural Networks with Learnable Edges (STGCN-LE) is used as the backbone model and AlphaPose is used to extract skeleton data from each video frame for inference.",
    //     image: "/images/projects/ash.jpg",
    //     tag: ["All", "Machine Learning", "Computer Vision"],
    //     gitUrl: "https://github.com/degaliang/auto-senior-care-system",
    //     previewUrl: "https://drive.google.com/drive/folders/1wj14MF9v9_vh6PONVDMa3gpYn3HDZYWu?usp=sharing"
    // }
]

const ProjectSection = ({ imgUrl, title, description }) => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

    return (
        <section id='projects'>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
                My Projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} /> 
                {/* <ProjectTag onClick={handleTagChange} name="Computer Vision" isSelected={tag === "Computer Vision"} /> 
                <ProjectTag onClick={handleTagChange} name="Machine Learning" isSelected={tag === "Machine Learning"} />  */}
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project) => (
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image} 
                        tags={project} 
                        gitUrl={project.gitUrl} 
                        previewUrl={project.previewUrl}
                    />
                 ))}
            </div>
        </section>
    );
};

export default ProjectSection

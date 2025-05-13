"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact,FaLaptopCode,FaChartBar,FaJava,FaPython,FaMicrophoneAlt,FaFileWord, FaGitAlt, FaCode, FaEnvelope} from "react-icons/fa";
import { SiDatabricks,SiMysql,SiPandas,SiOpencv,SiStreamlit,SiKeras, SiAnaconda,SiChartdotjs,SiOpenai,SiAudiomack,SiJupyter, SiFastapi,SiFontawesome, SiBootstrap ,SiPostgresql,  SiSqlite, SiGithub,SiMui,SiJson, SiDjango,SiNpm, SiGooglecolab,SiMongodb,SiExpress, SiApollographql, SiGraphql,SiEslint, SiHuggingface, SiNextdotjs, SiThreedotjs, SiNumpy, SiPlotly, SiPython, SiPytorch, SiScikitlearn, SiSpacy, SiTailwindcss, SiTensorflow, SiTypescript, SiVite } from "react-icons/si";
import { FaHtml5,FaNodeJs, FaRobot,FaCss3Alt, FaVideo,FaCamera,FaDocker, FaJsSquare, FaGithub}from "react-icons/fa";
import { VscGraph } from "react-icons/vsc"; 
import { GiMuscleUp, GiBrain } from "react-icons/gi"; 
import {HiSpeakerWave} from "react-icons/hi2";
import {MdGraphicEq,MdVoiceChat, MdMovie} from "react-icons/md";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import TabButton from "./TabButton"; // Import TabButton

const projects = [
    {
        title: "Yourstruely",
        description: "I have done this project to represent myself to the world",
        tag: ["All", "Web"],
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" }
        ],
        image: "/projects/portfolio.png",
        href: "https://yourstruly.vercel.app/"
    },
    {
        title: "Movie Recommender System",
        description: "I have done this project to represent myself to the world",
        tag: ["All", "Web"],
        tech: [
            { name: "Python", icon: FaPython, color: "#3776AB" },
            { name: "Pandas", icon: SiPandas, color: "#150458" },
            { name: "NumPy", icon: SiNumpy, color: "#013243" },
            { name: "scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
            { name: "NLTK", icon: GiBrain, color: "#8CBF26" }, // closest match; you can change color if preferred
            { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
            { name: "Cosine Similarity", icon: FaChartBar, color: "#4E8DF5" },
            { name: "Movie Data (TMDB API)", icon: MdMovie, color: "#FF6F00" }
            ],
        image: "/projects/mrs.jpg",
        href: "https://github.com/kartikeya-datta/Movie-Recommender-System"
    },
        {
        title: "FitPulse",
        description: "Never miss a beat with FitPulse! This web app tracks your posture, calories burned, and workout duration, helping you stay fit and healthy.",
        tag: ["All", "Web", "ML"],
        tech: [
            { name: "Python", icon: FaPython, color: "#3776AB" },
            { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
            { name: "Keras", icon: SiKeras, color: "#D00000" },
            { name: "scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
            { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
            { name: "NumPy", icon: SiNumpy, color: "#013243" },
            { name: "Pandas", icon: SiPandas, color: "#150458" },
            { name: "Matplotlib", icon: FaChartBar, color: "#11557C" },
            { name: "Jupyter Notebook", icon: SiJupyter, color: "#F37626" },
            { name: "Anaconda", icon: SiAnaconda, color: "#44A833" },
            { name: "Webcam Access", icon: FaCamera, color: "#212121" },
            { name: "Video Processing", icon: FaVideo, color: "#E53935" },
            { name: "Pose Tracking", icon: GiMuscleUp, color: "#F48C06" } // symbolic for pose estimation / fitness
            ],
        image: "/projects/fitpulse.avif",
        href: "https://github.com/kartikeya-datta/FitPulse"
    },
        {
        title: "VoiceBot",
        description: "I have done this project to represent myself to the world",
        tag: ["All", "Web"],
        tech: [
            { name: "Python", icon: FaPython, color: "#3776AB" },
            { name: "OpenAI GPT-3.5", icon: SiOpenai, color: "#412991" },
            { name: "Hugging Face Transformers", icon: SiHuggingface, color: "#FF6B00" },
            { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
            { name: "Gradio (UI)", icon: FaLaptopCode, color: "#00B295" }, // Alternative to SiGradio
            { name: "SpeechRecognition", icon: FaMicrophoneAlt, color: "#F4B400" },
            { name: "pyttsx3 (Text-to-Speech)", icon: HiSpeakerWave, color: "#007ACC" },
            { name: "librosa", icon: SiAudiomack, color: "#F9A825" }, // Best match for audio processing
            { name: "soundfile", icon: MdGraphicEq, color: "#00ACC1" },
            { name: "Voice Input", icon: MdVoiceChat, color: "#8E24AA" },
            { name: "AI Assistant", icon: FaRobot, color: "#7E57C2" }
            ],
        image: "/projects/voicebot.svg",
        href: "https://github.com/kartikeya-datta/VoiceBot"
    },
        {
        title: "Blog Creator Using Mistralai Model",
        description: "I have done this project to represent myself to the world",
        tag: ["All", "ML"],
        tech: [
            { name: "Python", icon: FaPython, color: "#3776AB" },
            { name: "Hugging Face Transformers", icon: SiHuggingface, color: "#FF6B00" },
            { name: "Mistral-7B", icon: SiPytorch, color: "#EE4C2C" }, // No official Mistral icon, using PyTorch
            { name: "Gradio", icon: FaLaptopCode, color: "#00B295" },
            { name: "Jupyter Notebook", icon: SiJupyter, color: "#F37626" },
            { name: "Microsoft Word (docx)", icon: FaFileWord, color: "#2B579A" },
            { name: "FastAPI (optional future deployment)", icon: SiFastapi, color: "#009688" }
        ],
        image: "/projects/blogcreator.jpeg",
        href: "https://github.com/kartikeya-datta/Blog-creator-using-mistralai-Model"
    },
        {
        title: "Extract Method Refactor Suggester",
        description: "Here I am intending to make a model using which we can optimize the java code by looking for extract method refactoring opportunities in Java code using Code Property Graphs (CPGs) and multi-view graph embeddings.",
        tag: ["All", "ML"],
        tech: [
        { name: "Java", icon: FaJava, color: "#007396" },
        { name: "Python", icon: FaPython, color: "#3776AB" },
        { name: "NumPy", icon: SiNumpy, color: "#013243" },
        { name: "Pandas", icon: SiPandas, color: "#150458" },
        { name: "scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
        { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
        { name: "Jupyter Notebook", icon: SiJupyter, color: "#F37626" },
        { name: "Joern (CPG)", icon: VscGraph, color: "#9E77ED" }, // Custom substitute for CPG tools
        { name: "Graph Embeddings", icon: SiGraphql, color: "#E10098" }, // Best-fit for graph features
        { name: "VS Code", icon: FaCode, color: "#007ACC" }
        ],
                image: "/projects/extractmethodrefactorsuggestor.jpg",
        href: "https://github.com/kartikeya-datta/extract-method-refactor-suggester"
    },
        {
        title: "StudyBuddy",
        description: "StudyBuddy is a Django-based web application designed to help students organize their study sessions, track progress, and collaborate with peers.",
        tag: ["All", "Web"],
        tech: [
            { name: "Python", icon: FaPython, color: "#3776AB" },
            { name: "Django", icon: SiDjango, color: "#092E20" },
            { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
            { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
            { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
            { name: "SQLite", icon: SiSqlite, color: "#003B57" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
            { name: "Chart.js", icon: SiChartdotjs, color: "#FF6384" },
            { name: "Font Awesome", icon: SiFontawesome, color: "#228AE6" },
            { name: "Git", icon: FaGitAlt, color: "#F05032" }
            ],
        image: "/projects/studybuddy.png",
        href: "https://github.com/kartikeya-datta/StudyBuddy"
    },
    {
        title: "Point of Sale",
        description: "designed to provide comprehensive role-based access control (RBAC), efficient inventory management, and an enhanced user experience",
        tag: ["All", "Web"],
        tech: [
            { name: "Node.js", icon: FaNodeJs, color: "#339933" },
            { name: "Express.js", icon: SiExpress, color: "#000000" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Nodemailer", icon: FaEnvelope, color: "#0072C6" },
            { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
            { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
            { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
            { name: "NPM", icon: SiNpm, color: "#CB3837" },
            { name: "Excel Upload", icon: SiJson, color: "#f0db4f" }, // Using JSON icon as a proxy for Excel integration
            { name: "VS Code", icon: FaCode, color: "#007ACC" }
            ],
        image: "/projects/pointofsale.jpg",
        href: "https://github.com/kartikeya-datta/POS-system"
    },
        {
        title: "jobdiary",
        description: "Job Winner helps you keep track of all your job applications in one place—totally free! No hidden fees, and you won't have to worry about your personal data being sold.",
        tag: ["All", "Web"],
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Apollo Client", icon: SiApollographql, color: "#311C87" },
            { name: "Material UI", icon: SiMui, color: "#007FFF" },
            { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
            { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
            { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
            { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
            { name: "Docker", icon: FaDocker, color: "#2496ED" },
            { name: "GitHub", icon: FaGithub, color: "#181717" }
            ],
        image: "/projects/jobdiary.png",
        href: "https://github.com/kartikeya-datta/jobdiary"
    },
    {
        title: "TV-Series-Analysis-System",
        description: "In this I will Develop a website using different features and technolagies I have laerned to create a universe of one my favourite anime namely naruto.",
        tag: ["All", "ML"],
        tech: [
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "Hugging Face", icon: SiHuggingface, color: "#FF6B00" },
            { name: "Transformers", icon: SiTensorflow, color: "#FF6F00" }, // Representing NLP model libs
            { name: "spaCy", icon: SiSpacy, color: "#09A3D5" }, // You may create a custom icon if SiSpacy doesn't exist
            // { name: "Gradio", icon: SiGradio, color: "#FF4B4B" }, // Substitute with SiStreamlit or custom if unavailable
            { name: "NetworkX", icon: SiGraphql, color: "#E10098" }, // Closest alternative for graph-based libs
            { name: "NLTK", icon: SiNumpy, color: "#4B8BBE" }, // No NLTK icon exists—NumPy as proxy
            { name: "scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
            { name: "Matplotlib", icon: SiPlotly, color: "#3F4F75" }, // Use SiPlotly as proxy
            { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
            { name: "Google Colab", icon: SiGooglecolab, color: "#F9AB00" },
            { name: "LoRA", icon: SiDatabricks, color: "#FF3621" }, // closest representation
            // { name: "Gradio", icon: SiGradio, color: "#00B295" },
            { name: "Hugging Face Hub", icon: SiGithub, color: "#181717" }, // If no HuggingFace icon available
        ],
        image: "/projects/CharacterNersGraphs.png",
        href: "https://github.com/kartikeya-datta/TV-Series-Analysis-System"
    },
        {
        title: "MeOn3D",
        description: "MeOn3D is an interactive 3D portfolio website designed to showcase my skills, projects, and professional journey in a visually captivating way.",
        tag: ["All", "Web"],
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Vite", icon: SiVite, color: "#646CFF" },
            { name: "Three.js", icon: SiThreedotjs, color: "#000000" },
            { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
            { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
            { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
            { name: "ESLint", icon: SiEslint, color: "#4B32C3" },
            { name: "GitHub Pages", icon: FaGithub, color: "#181717" }
        ],
        image: "/projects/portfolio.png",
        href: "https://me-on3-d.vercel.app/"
    },
];

export default function Main() {
    const [selectedTag, setSelectedTag] = useState("All");
    const [showAll, setShowAll] = useState(false);

    const handleTagChange = (tag: string) => {
        setSelectedTag(tag);
    };

    const filteredProjects = projects.filter((project) =>
        project.tag.includes(selectedTag)
    );

    const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

    return (
        <section id="projects" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center mb-10 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-content mb-4">
                        Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full" />
                </motion.div>

                {/* Tag Selection */}
                <div className="flex justify-center space-x-4 mb-10">
                    {["All", "Web", "ML"].map((tag) => (
                        <TabButton
                            key={tag}
                            active={selectedTag === tag}
                            selectTab={() => handleTagChange(tag)}
                        >
                            {tag}
                        </TabButton>
                    ))}
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {visibleProjects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i, duration: 0.6 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className="group relative h-[500px] rounded-3xl overflow-hidden bg-surface border border-white/10 cursor-pointer"
                        >
                            {/* Image Section */}
                            <motion.div
                                className="h-[250px] relative"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>
                            {/* Content Section */}
                            <motion.div className="p-6 bg-surface" transition={{ duration: 0.3 }}>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-content">{project.title}</h3>
                                    <ArrowUpRightIcon className="h-6 w-6 text-content/50 group-hover:text-primary transition-colors duration-300" />
                                </div>
                                <p className="text-content/80 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, j) => (
                                        <span
                                            key={j}
                                            className="px-3 py-1 rounded-full bg-white/5 text-content/80 text-sm border border-white/5 hover:bg-surface transition-colors flex items-center gap-1.5"
                                        >
                                            <tech.icon style={{ color: tech.color }} className="w-4 h-4" />
                                            <span>{tech.name}</span>
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* View More / View Less Button */}
                {filteredProjects.length > 3 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex justify-center mt-20 relative z-[5]"
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="relative px-8 py-3 rounded-full bg-surface border border-white/10 hover:border-primary/10 transition-all group"
                        >
                            <span className="text-content transition-colors">
                                {showAll ? "View Less" : "View All Projects"}
                            </span>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}

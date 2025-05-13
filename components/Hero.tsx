'use client';
import { useState, useEffect } from "react";
import { ParticleCanvas } from "@/hooks/particle";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";


export default function Hero() {
    const {scrollY} = useScroll(); 
    const y = useTransform(scrollY, [0, 500], [0, 100]);
    const [index, setIndex] = useState(0);
    const titles = ["Full Stack Developer", "React Developer", "Java Developer","Python Developer"];



    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return(
        <section 
        id = "about"
        className='min-h-screen relative overflow-hidden bg-black'>
            <ParticleCanvas/>
            <div className="max-w-7xl mx-auto px-6 pt-32">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    {/* Text Content */}
                    <motion.div
                    initial={{opacity:0, x:-50}}
                    animate={{opacity:1, x:0}}
                    transition={{delay:0.1, duration:1, ease: "easeOut"}}
                    className="relative group lg:w-1/2"
                    >
                        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r
            from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-6"
        >
                {titles[index]}
        </motion.h1>
                        <motion.p
                        initial={{opacity:0, y:20}}
                        animate={{opacity:1, y:0}}
                        transition={{delay:1.1, duration:0.8, ease: "easeOut"}}
                        className="text-xl text-content/80 mb-8"
                        >
                            I am a software engineer with 3 years of experience in full-stack development, specializing in Java Spring Boot, microservices, and cloud-based solutions. I excel in building scalable backend systems and responsive front-end interfaces using ReactJS and AngularJS. Proficient in PostgreSQL, MySQL, and MongoDB, I also have hands-on experience with Docker, Kubernetes, and CI/CD pipelines using Jenkins. Passionate about developing secure, high-performance applications that enhance business efficiency.
                        </motion.p>
                        <motion.a
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 20px 0 rgba(0,0,0,0.1)",
                                transition: { duration: 0.1 },
                            }}
                            onHoverEnd={(e) => {
                                if (e.target) {
                                (e.target as HTMLElement).style.transform = "scale(1)";
                                }
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="relative overflow-hidden px-8 py-4 rounded-full bg-surface border border-white/10 
                                        hover:border-primary/30 transition-all group"
                            href="mailto:kartikeyadatta3@gmail.com?cc=dattakartikeya@gmail.com,s562604@nwmissouri.edu&subject=Hello kartik, this is an offer to hire you!&body=Hi Kartik,"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            >
                            <span className="text-content/90 group-hover:text-primary transition-colors font-bold font-mono">
                                Hire me!
                            </span>
                            
                            
                            {/* Fix gradient overflow issue */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-tertiary/10 opacity-0 
                                            group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.a>

                    </motion.div>
                    {/* image card */}
                    <motion.div
                    initial={{opacity:0, x:50}}
                    animate={{opacity:1, x:0}}
                    transition={{delay:0.1, duration:5, ease: "easeOut"}}
                    className="relative lg:w-1/2"
                    style = {{y}}
                    >
                        <div
                        className="relative w-full aspect-square group">
                            <motion.div
                            initial={{scale:0.95}}
                            animate={{scale:1}}
                            transition={{repeat:Infinity, duration:2, ease: "easeOut", repeatType:"mirror"}}
                            className="absolute insert-0 rounded-3xl bg-gradient-to-r from-primary/30 vie-secondary/30 to-tertiary/30 opacity-50"
                            />
                        {/* Floating animation */}
                        <motion.div
                        animate={{y: [0, -20, 0]}}
                        transition={{duration:6, ease: "easeInOut", repeat: Infinity}}
                        className="realtive w-full aspect-square rounded-3xl overflow-hidden border border-white/10 bg-surface backdrop-blur-sm">
                            <Image src= "/projects/me.jpeg" alt='Avatar' fill className="object-cover  scale-110 group-hover:scale-100 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-r from-back/60 to-transparent"/>
                            <motion.div
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{delay:0.6}}
                            className="absolute bottom-8 left-8"
                            >
                                <div className="text-2xl font-bold text-content">
                                    Born In
                                    <motion.span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                                    animate={{backgroundPosition: ["0% 50%", "100% 50%"]}}
                                    transition={{duration:3, ease: "easeInOut", repeat:Infinity, repeatType:"mirror"}}
                                    style={{backgroundSize: "200% 200%"}}>
                                        Visakhapatnam, India
                                    </motion.span>
                                </div>
                            </motion.div>
                        </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </section>
    )
}
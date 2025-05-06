'use client';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedInIcon } from './social-icons';

const socialLinks = {
    github: "https://github.com/kartikeya-datta",
    linkedin: "https://www.linkedin.com/in/kartikeya-datta-749b0214a/",
    resume: "https://drive.google.com/file/d/1vX0gk2x4j7q3c5m8z6f5e5e5e5e5e5e/view?usp=sharing"
};

export default function SocialLinks() {
    return (
        <div className="flex items-center gap-4 w-full">
        <div className="flex gap-4">
            <a
                className="p-2 rounded-lg bg-white/5 hover:bg-primary/50 transition-colors group"
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
            >
                <GithubIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
            </a>
            <a
                className="p-2 rounded-lg bg-white/5 hover:bg-primary/50 transition-colors group"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
            >
                <LinkedInIcon className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors" />
            </a>
            </div>
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
                            className=" relative overflow-hidden px-8 py-4 rounded-full bg-surface border border-white/10 
                                        hover:border-primary/30 transition-all group"
                            href={socialLinks.resume}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            >
                            <span className="text-content/90 group-hover:text-primary transition-colors font-bold font-mono">
                                Resume
                            </span>
                            
                            
                            {/* Fix gradient overflow issue */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-tertiary/10 opacity-0 
                                            group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
        </div>
    );
}





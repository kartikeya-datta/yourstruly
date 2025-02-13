'use client';
import { GithubIcon, LinkedInIcon } from './social-icons';

const socialLinks = {
    github: "https://github.com/kartikeya-datta",
    linkedin: "https://www.linkedin.com/in/kartikeya-datta-749b0214a/"
};

export default function SocialLinks() {
    return (
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
    );
}

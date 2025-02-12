'use client';
import { motion } from 'framer-motion';
import Menuitems from './menu-items';
import { GithubIcon, LinkedInIcon } from './social-icons';
const navItems = [
    { name: "About", href:"#about" },
    { name: "Skills", href:"#skills" },
    { name: "experience", href:"#experience" },
    { name: "Projects", href:"#projects" },
    { name: "Contact", href:"#contact" },]

    const socialLinks = {
        icons: ""
    }
export default function Navbar () {

    return(
        <motion.nav 
        initial={{y:-100}}
        animate={{y:0}}
        className="fixed w-full z-50 bg-background/50 backdrop-blur-2xl transition-all duration-300 ease-out">
            <div className="max-w-7xl mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <motion.div whileHover={{scale:1.05}} className="flex items-center gap-2 group">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-tertiary animate-spin-slow [mask-image:linear-gradient(transparent,white)]"></div>
                        <div className="absolute inset-[2px] bg-background rounded-full flex items-center justify-center">
                            {/* <span className="font-bold bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">KD</span> */}
                            <img src="/logo.png" alt="Logo" className="h-10 w-9 object-contain" />
                        </div>
                    </div>
                    <span className="text-lg font-semibold text-content/90 group-hover:text-primary transition-colors">M Kartikeya Datta</span>
                    </motion.div>
                    <div className='hidden md:flex items-center gap-6'>
                        <div className='flex items-center gap-6 bg-background/60 rounded-full px-4 py-2 border border-white/15 shadow-lg shadow-white/2 '>
                        {navItems.map((items, i) => (
                            <Menuitems key={items.name} index={i} href={items.href}>{items.name}</Menuitems>
                        ))}
                        </div>
                        <div className='h-6 w-px bg-white/20 mx-2'></div>
                        <div className='flex gap-4'>
                            <a className='p-2 rounded-lg bg-white/5 hover:bg-primary/50 transition-colors group' href={socialLinks.icons}><GithubIcon className='h-5 w-5 text-content/80 group-hover:text-ellipsis transition-colors'></GithubIcon></a>
                            <a className='p-2 rounded-lg bg-white/5 hover:bg-primary/50 transition-colors group' href={socialLinks.icons}><LinkedInIcon className='h-5 w-5 text-content/80 group-hover:text-ellipsis transition-colors'></LinkedInIcon></a>
                        </div>
                    </div>
                </div>
            </div>

        </motion.nav>
    );
}
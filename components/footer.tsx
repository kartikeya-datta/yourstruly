import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { GithubIcon, LinkedInIcon } from "./social-icons";

export default function Footer(){
    return (
        <footer className="border-t bg-gray-900 border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* About Section */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">About</h3>
                    <p className="text-gray-400">
                        Building digital experiences that combine modern technology with exceptional design.
                    </p>
                </div>

                {/* Links Section */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                        <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                        <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Legal Section */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
                    <ul className="space-y-2">
                        <li><a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                        <li><a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                    </ul>
                </div>

                {/* Connect Section */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
                    <ul className="flex space-x-4">
                        <li><GithubIcon className="text-gray-400 h-6 w-6 hover:text-white transition-colors"/></li>
                        <li><LinkedInIcon className="text-gray-400 h-6 w-6 hover:text-white transition-colors"/></li>
                        <li><EnvelopeIcon className="text-gray-400 h-6 w-6 hover:text-white transition-colors"/></li>
                    </ul>
                </div>
            </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p>
                        &copy; {new Date().getFullYear()} M Kartikeya Datta. All rights reserved.
                    </p>
                </div>
            </div>

        </footer>
    )
}
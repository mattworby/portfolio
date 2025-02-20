import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Home = ({ onData }) => {
    const [score, setScore] = useState(0);
    const [blinkingText, setBlinkingText] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setBlinkingText(prev => !prev);
        }, 800);
        return () => clearInterval(interval);
    }, []); 4

    return (
        < div className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-16 pb-8" >
            <div className="bg-black/80 p-8 rounded pixel-border">
                <h1 className="text-3xl mb-8 text-white">
                    Matt Worby
                </h1>
                <h2 className="text-xl text-cyan-400 mb-8">
                    LEVEL 30 FULL-STACK DEV
                </h2>
                <div className="flex justify-center gap-6 mb-8">
                    <button
                        className={`bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded pixel-border ${blinkingText ? 'opacity-100' : 'opacity-50'}`}
                        onClick={() => onData(100, 'projects')}
                    >
                        VIEW QUESTS
                    </button>
                </div>
                <div className="flex justify-center gap-6 mb-8">
                    <button
                        className={`bg-black-600 hover:bg-gray-700 text-white px-12 py-2 rounded pixel-border `}
                        onClick={() => onData(100, 'about')}
                    >
                        ABOUT ME
                    </button>
                </div>
                <div className="flex justify-center gap-6 mb-8">
                    <button
                        className={`bg-white-600 hover:bg-gray-900 text-white px-8 py-2 rounded pixel-border`}
                        onClick={() => onData(100, 'contact')}
                    >
                        CONTACT ME
                    </button>
                </div>
                <div className="flex justify-center gap-8">
                    <a href="https://github.com/mattworby" target="_blank" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/mattworby13a87b123" target="_blank" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        <Mail size={20} />
                    </a>
                    <a href="public\worby-resume.pdf" download="matt-worby-resume.pdf" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        <FileText size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
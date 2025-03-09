import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const About = () => {
    const [blinkingText, setBlinkingText] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setBlinkingText(prev => !prev);
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-16 pb-8">
            <div className="bg-black/80 p-8 rounded pixel-border max-w-3xl">
                <h1 className="text-2xl mb-6 text-white">CHARACTER STATS</h1>

                <div className="mb-8 text-left">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex flex-col">
                            <h3 className="text-yellow-400 mb-2">CLASS</h3>
                            <p className="text-cyan-400">Full-Stack Developer</p>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-yellow-400 mb-2">LEVEL</h3>
                            <p className="text-cyan-400">30</p>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-yellow-400 mb-2">EXP</h3>
                            <p className="text-cyan-400">8+ Years</p>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-yellow-400 mb-2">LOCATION</h3>
                            <p className="text-cyan-400">New York, USA</p>
                        </div>
                    </div>

                    <h3 className="text-yellow-400 mb-2">SKILLS</h3>
                    <div className="mb-6 grid grid-cols-2 gap-2">
                        <div className="flex items-center">
                            <div className="w-16 h-4 bg-gray-700 rounded-full mr-2">
                                <div className="h-full bg-green-500 rounded-full" style={{ width: '90%' }}></div>
                            </div>
                            <span className="text-white text-sm">React</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-16 h-4 bg-gray-700 rounded-full mr-2">
                                <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                            <span className="text-white text-sm">Node.js</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-16 h-4 bg-gray-700 rounded-full mr-2">
                                <div className="h-full bg-green-500 rounded-full" style={{ width: '80%' }}></div>
                            </div>
                            <span className="text-white text-sm">TypeScript</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-16 h-4 bg-gray-700 rounded-full mr-2">
                                <div className="h-full bg-green-500 rounded-full" style={{ width: '75%' }}></div>
                            </div>
                            <span className="text-white text-sm">MongoDB</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-16 h-4 bg-gray-700 rounded-full mr-2">
                                <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                            <span className="text-white text-sm">CSS/Tailwind</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-16 h-4 bg-gray-700 rounded-full mr-2">
                                <div className="h-full bg-green-500 rounded-full" style={{ width: '70%' }}></div>
                            </div>
                            <span className="text-white text-sm">AWS</span>
                        </div>
                    </div>

                    <h3 className="text-yellow-400 mb-2">CHARACTER BIO</h3>
                    <p className="text-white mb-6 text-sm leading-relaxed">
                        Dedicated software engineer with a strong passion for prompt engineering and developing robust software solutions.
                    </p>

                    <h3 className="text-yellow-400 mb-2">QUEST HISTORY</h3>
                    <ul className="text-white text-sm leading-relaxed mb-6">
                        <li className="mb-2">- Senior Software Engineer at Lumeris, Inc. (2021-Present)</li>
                        <li className="mb-2">- Data Analyst at Applied Systems  (2018-2021)</li>
                        <li className="mb-2">- Programmer I at Kankakee Community College (2016-2018)</li>
                    </ul>
                </div>

                <button
                    className={`bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded pixel-border ${blinkingText ? 'opacity-100' : 'opacity-50'}`}
                >
                    DOWNLOAD CHARACTER SHEET
                </button>
            </div>
        </div>
    );
};

export default About;
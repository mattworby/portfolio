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
        <div className="flex-1 flex flex-col items-center justify-center text-center px-2 sm:px-4 pt-16 pb-8">
            <div className="bg-black/80 p-3 md:p-8 rounded pixel-border max-w-full sm:max-w-3xl">
                <h1 className="text-lg md:text-2xl mb-4 text-white">CHARACTER STATS</h1>

                <div className="mb-4 text-left">
                    {/* Desktop layout */}
                    <div className="hidden md:grid md:grid-cols-2 gap-4 mb-6">
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
                            <p className="text-cyan-400">St. Louis, MO</p>
                        </div>
                    </div>

                    {/* Mobile compressed layout */}
                    <div className="md:hidden grid grid-cols-1 xs:grid-cols-2 gap-x-2 gap-y-2 mb-4">
                        <div className="flex flex-row items-center justify-between">
                            <h3 className="text-yellow-400 text-xs">CLASS:</h3>
                            <p className="text-cyan-400 text-xs text-right ml-1">Full-Stack Developer</p>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <h3 className="text-yellow-400 text-xs">LEVEL:</h3>
                            <p className="text-cyan-400 text-xs text-right ml-1">30</p>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <h3 className="text-yellow-400 text-xs">EXP:</h3>
                            <p className="text-cyan-400 text-xs text-right ml-1">8+ Years</p>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <h3 className="text-yellow-400 text-xs">LOCATION:</h3>
                            <p className="text-cyan-400 text-xs text-right ml-1">St. Louis, MO</p>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-yellow-400 mb-1 text-sm md:text-base">SKILLS</h3>
                        {/* Desktop skills */}
                        <div className="hidden md:grid md:grid-cols-2 gap-2 mb-6">
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

                        {/* Mobile compressed skills */}
                        <div className="md:hidden grid grid-cols-1 xs:grid-cols-2 gap-1">
                            <div className="flex items-center">
                                <div className="w-10 h-2 bg-gray-700 rounded-full mr-1">
                                    <div className="h-full bg-green-500 rounded-full" style={{ width: '90%' }}></div>
                                </div>
                                <span className="text-white text-xs">React</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-10 h-2 bg-gray-700 rounded-full mr-1">
                                    <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                                <span className="text-white text-xs">Node.js</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-10 h-2 bg-gray-700 rounded-full mr-1">
                                    <div className="h-full bg-green-500 rounded-full" style={{ width: '80%' }}></div>
                                </div>
                                <span className="text-white text-xs">TypeScript</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-10 h-2 bg-gray-700 rounded-full mr-1">
                                    <div className="h-full bg-green-500 rounded-full" style={{ width: '75%' }}></div>
                                </div>
                                <span className="text-white text-xs">MongoDB</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-10 h-2 bg-gray-700 rounded-full mr-1">
                                    <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                                <span className="text-white text-xs">CSS/Tailwind</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-10 h-2 bg-gray-700 rounded-full mr-1">
                                    <div className="h-full bg-green-500 rounded-full" style={{ width: '70%' }}></div>
                                </div>
                                <span className="text-white text-xs">AWS</span>
                            </div>
                        </div>
                    </div>

                    {/* Bio section - more compact on mobile */}
                    <div className="mb-4">
                        <h3 className="text-yellow-400 mb-1 text-sm md:text-base">CHARACTER BIO</h3>
                        <p className="text-white text-xs md:text-sm leading-tight md:leading-relaxed">
                            Dedicated software engineer with a strong passion for prompt engineering and developing robust software solutions.
                        </p>
                    </div>

                    {/* Quest history - more compact on mobile */}
                    <div>
                        <h3 className="text-yellow-400 mb-1 text-sm md:text-base">QUEST HISTORY</h3>
                        {/* Desktop quest history */}
                        <ul className="hidden md:block text-white text-sm leading-relaxed">
                            <li className="mb-2">- Senior Software Engineer at Lumeris, Inc. (2021-Present)</li>
                            <li className="mb-2">- Data Analyst at Applied Systems (2018-2021)</li>
                            <li className="mb-2">- Programmer I at Kankakee Community College (2016-2018)</li>
                        </ul>
                        {/* Mobile compressed quest history */}
                        <ul className="md:hidden text-white text-xs leading-tight">
                            <li className="mb-1">- Sr. Software Engineer, Lumeris (2021-Present)</li>
                            <li className="mb-1">- Data Analyst, Applied Systems (2018-2021)</li>
                            <li className="mb-1">- Programmer I, KCC (2016-2018)</li>
                        </ul>
                    </div>
                </div>

                <a
                    href="/portfolio/matt-resume.pdf"
                    download
                    className={`inline-flex items-center justify-center bg-cyan-600 hover:bg-cyan-700 text-white px-4 sm:px-6 py-2 rounded pixel-border text-sm sm:text-base ${blinkingText ? 'opacity-100' : 'opacity-50'}`}
                >
                    <FileText className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    DOWNLOAD CHARACTER SHEET
                </a>
            </div>
        </div>
    );
};

export default About;
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText, Send } from 'lucide-react';

const ContactMe = () => {
    const [blinkingText, setBlinkingText] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [messageStatus, setMessageStatus] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setBlinkingText(prev => !prev);
        }, 800);
        return () => clearInterval(interval);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate sending a message
        setTimeout(() => {
            setMessageStatus('success');
            setFormData({ name: '', email: '', message: '' });

            // Reset status after 3 seconds
            setTimeout(() => {
                setMessageStatus(null);
            }, 3000);
        }, 1000);
    };

    return (
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-16 pb-8">
            <div className="bg-black/80 p-8 rounded pixel-border max-w-lg w-full">
                <h1 className="text-2xl mb-6 text-white">SEND MESSAGE</h1>

                {messageStatus === 'success' ? (
                    <div className="bg-green-800/50 border border-green-700 text-green-300 p-4 mb-6 rounded">
                        Message sent successfully! I'll respond as soon as possible.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="text-left">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-cyan-400 mb-2">
                                NAME
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-gray-900 border border-gray-700 text-white p-2 rounded focus:border-cyan-400 focus:outline-none pixel-border"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-cyan-400 mb-2">
                                EMAIL
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-gray-900 border border-gray-700 text-white p-2 rounded focus:border-cyan-400 focus:outline-none pixel-border"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block text-cyan-400 mb-2">
                                MESSAGE
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full bg-gray-900 border border-gray-700 text-white p-2 rounded focus:border-cyan-400 focus:outline-none pixel-border resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className={`w-full bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded pixel-border flex items-center justify-center ${blinkingText ? 'opacity-100' : 'opacity-80'}`}
                        >
                            <Send size={16} className="mr-2" />
                            SEND
                        </button>
                    </form>
                )}

                <div className="mt-8 border-t border-gray-700 pt-6">
                    <h3 className="text-yellow-400 mb-4">DIRECT CONTACT</h3>
                    <div className="flex flex-col gap-4 items-center">
                        <a href="mailto:mattworby@example.com" className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                            <Mail size={18} className="mr-2" />
                            mattworby@gmail.com
                        </a>
                        <div className="flex justify-center gap-8 mt-2">
                            <a href="https://github.com/mattworby" target="_blank" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/mattworby13a87b123" target="_blank" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="public\matt-resume.pdf" download="matt-worby-resume.pdf" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                                <FileText size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
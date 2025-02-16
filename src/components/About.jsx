import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const About = () => {
    const [score, setScore] = useState(0);
    const [blinkingText, setBlinkingText] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setBlinkingText(prev => !prev);
        }, 800);
        return () => clearInterval(interval);
    }, []); 4

    useEffect(() => {
        const cdnScript = document.createElement('script');
        cdnScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.6/dat.gui.min.js';
        cdnScript.async = true; // Ensures the script is loaded asynchronously
        document.body.appendChild(cdnScript);

        const script = document.createElement('script');
        script.src = './src/effects/crt.js';
        script.async = true; // Ensures the script is loaded asynchronously
        document.body.appendChild(script);

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(cdnScript);
            document.body.removeChild(script);
        };
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div id='screen'>
        </div>
    );
};

export default About;
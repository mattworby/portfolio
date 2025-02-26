import React, { useState, useRef, useEffect } from 'react';
import Home from './Home'
import About from './About'
import Projects from './Projects'
import ContactMe from './ContactMe'
import HomeBackground from './backgrounds/HomeBackground'
import AboutBackground from './backgrounds/AboutBackground'
import ProjectsBackground from './backgrounds/ProjectsBackground'
import ContactMeBackground from './backgrounds/ContactMeBackground'

const Portfolio = () => {
    const [score, setDataFromChild] = React.useState(0);
    let [screen, setCurrentScreen] = React.useState(0);

    const handleScoreSetFromChild = (data, screen) => {
        handleSetCurrentScreen(screen);
        setDataFromChild(prev => prev + data);
    };

    const handleSetCurrentScreen = (state) => {
        setCurrentScreen(state);
    };

    useEffect(() => {
        handleSetCurrentScreen('home');

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

    const setScreenState = (screenState, isBackground) => {
        if (screenState == 'home') {
            if (isBackground) return <HomeBackground />
            else return <Home onData={handleScoreSetFromChild} />
        } else if (screenState == 'about') {
            if (isBackground) return <AboutBackground />
            else return <About />
        } else if (screenState == 'projects') {
            if (isBackground) return <ProjectsBackground />
            else return <Projects />
        } else if (screenState == 'contactme') {
            if (isBackground) return <ContactMeBackground />
            else return <ContactMe />
        }
    }

    return (
        <div id='screen'>
            {setScreenState(screen, 1)}
            <div className="min-h-screen flex flex-col arcade-screen p-4">
                <div className="flex justify-evenly">
                    {/* Score Display */}
                    <div className="flex flex-col text-yellow-400 text-sm">
                        INSERT COIN 0/1
                    </div>
                    {/* Score Display */}
                    <div className="flex flex-col text-yellow-400 text-sm">
                        HIGH SCORE: 156235
                    </div>
                    {/* Score Display */}
                    <div className="flex flex-col text-yellow-400 text-sm">
                        SCORE: {score}
                    </div>
                </div>
                {setScreenState(screen, 0)}
            </div>
        </div >
    );
};

export default Portfolio;
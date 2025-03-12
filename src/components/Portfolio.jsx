import React, { useEffect } from 'react';
import Home from './Home'
import About from './About'
import Projects from './Projects'
import ContactMe from './ContactMe'
import HomeBackground from './backgrounds/HomeBackground'
import AboutBackground from './backgrounds/AboutBackground'
import ProjectsBackground from './backgrounds/ProjectsBackground'
import ContactMeBackground from './backgrounds/ContactMeBackground'
import HamburgerMenu from '../common/hamburger';
import { ArrowLeft } from 'lucide-react';

const Portfolio = () => {
    const [score, setDataFromChild] = React.useState(0);
    let [screen, setCurrentScreen] = React.useState(0);
    let isHome = true;

    const handleScoreSetFromChild = (data, screen) => {
        handleSetCurrentScreen(screen);
        setDataFromChild(prev => prev + data);
    };

    const handleSetCurrentScreen = (state) => {
        setCurrentScreen(state);
    };

    useEffect(() => {
        handleSetCurrentScreen('Home');

        const cdnScript = document.createElement('script');
        cdnScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.6/dat.gui.min.js';
        cdnScript.async = true; // Ensures the script is loaded asynchronously
        document.body.appendChild(cdnScript);

        const script = document.createElement('script');
        script.src = '/portfolio/src/effects/crt.js';
        script.async = true; // Ensures the script is loaded asynchronously
        document.body.appendChild(script);

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(cdnScript);
            document.body.removeChild(script);
        };
    }, []); // Empty dependency array ensures this runs only once

    const setScreenState = (screenState, isBackground) => {
        // Update isHome flag
        isHome = screenState === 'Home';

        // Define a mapping of screen names to their components
        const componentMap = {
            'Home': Home,
            'About': About,
            'Projects': Projects,
            'ContactMe': ContactMe
        };

        // Define a mapping of screen names to their background components
        const backgroundMap = {
            'Home': HomeBackground,
            'About': AboutBackground,
            'Projects': ProjectsBackground,
            'ContactMe': ContactMeBackground
        };

        // Get the appropriate component based on screen name and background flag
        const Component = isBackground ? backgroundMap[screenState] : componentMap[screenState];

        // If component doesn't exist, log an error and return null
        if (!Component) {
            console.error(`Component for screen "${screenState}" ${isBackground ? 'background' : ''} not found`);
            return null;
        }

        // Return the component with appropriate props
        return screenState === 'Home' && !isBackground ?
            <Component onData={handleScoreSetFromChild} /> :
            <Component />;
    };

    const handleBackClick = () => {
        handleSetCurrentScreen('Home');
    };

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

            <HamburgerMenu
                onNavigate={handleSetCurrentScreen}
                currentScreen={screen}
            />

            <button
                id="backButton"
                onClick={handleBackClick}
                className={`${isHome ? 'invisible' : 'visible'} absolute top-8 left-8 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500`}
                aria-label="Go back"
            >
                <ArrowLeft className="h-6 w-6" />
            </button>
        </div >
    );
};

export default Portfolio;
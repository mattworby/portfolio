import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const HamburgerMenu = ({ onNavigate, currentScreen }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavigation = (screen) => {
        onNavigate(screen);
        setIsOpen(false);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="absolute top-8 right-8 z-50" ref={menuRef}>
            <button
                onClick={toggleMenu}
                className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                aria-label="Menu"
            >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                        <button
                            onClick={() => handleNavigation('home')}
                            className={`${currentScreen === 'home' ? 'bg-gray-700' : ''} text-white block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors`}
                            role="menuitem"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => handleNavigation('projects')}
                            className={`${currentScreen === 'projects' ? 'bg-gray-700' : ''} text-white block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors`}
                            role="menuitem"
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => handleNavigation('about')}
                            className={`${currentScreen === 'about' ? 'bg-gray-700' : ''} text-white block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors`}
                            role="menuitem"
                        >
                            About Me
                        </button>
                        <button
                            onClick={() => handleNavigation('contactme')}
                            className={`${currentScreen === 'contactme' ? 'bg-gray-700' : ''} text-white block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors`}
                            role="menuitem"
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
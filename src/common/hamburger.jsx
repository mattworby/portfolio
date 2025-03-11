import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const HamburgerMenu = ({ onNavigate, currentScreen }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const menuRef = useRef(null);

    // Check if device is mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // Only prevent scrolling on mobile when menu is open
        if (isMobile) {
            if (!isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }
    };

    const handleNavigation = (screen) => {
        onNavigate(screen);
        setIsOpen(false);
        if (isMobile) {
            document.body.style.overflow = 'auto';
        }
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
                if (isMobile) {
                    document.body.style.overflow = 'auto';
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            if (isMobile) {
                document.body.style.overflow = 'auto';
            }
        };
    }, [isMobile]);

    return (
        <div className="fixed top-8 right-8 z-50" ref={menuRef}>
            <button
                onClick={toggleMenu}
                className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                aria-label="Menu"
            >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {isOpen && (
                <>
                    {/* Full screen menu for mobile */}
                    {isMobile ? (
                        <div className="fixed inset-0 bg-gray-900/95 flex flex-col items-center justify-center">
                            <div className="w-full max-w-md px-4" role="menu" aria-orientation="vertical">
                                <button
                                    onClick={() => handleNavigation('Home')}
                                    className={`${currentScreen === 'Home' ? 'bg-gray-700' : ''} text-white block w-full text-center px-4 py-4 text-xl font-medium hover:bg-gray-700 mb-4 rounded transition-colors`}
                                    role="menuitem"
                                >
                                    Home
                                </button>
                                <button
                                    onClick={() => handleNavigation('Projects')}
                                    className={`${currentScreen === 'Projects' ? 'bg-gray-700' : ''} text-white block w-full text-center px-4 py-4 text-xl font-medium hover:bg-gray-700 mb-4 rounded transition-colors`}
                                    role="menuitem"
                                >
                                    Projects
                                </button>
                                <button
                                    onClick={() => handleNavigation('About')}
                                    className={`${currentScreen === 'About' ? 'bg-gray-700' : ''} text-white block w-full text-center px-4 py-4 text-xl font-medium hover:bg-gray-700 mb-4 rounded transition-colors`}
                                    role="menuitem"
                                >
                                    About Me
                                </button>
                                <button
                                    onClick={() => handleNavigation('ContactMe')}
                                    className={`${currentScreen === 'ContactMe' ? 'bg-gray-700' : ''} text-white block w-full text-center px-4 py-4 text-xl font-medium hover:bg-gray-700 mb-4 rounded transition-colors`}
                                    role="menuitem"
                                >
                                    Contact Me
                                </button>
                            </div>
                        </div>
                    ) : (
                        // Original dropdown for desktop
                        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
                            <div className="py-1" role="menu" aria-orientation="vertical">
                                <button
                                    onClick={() => handleNavigation('Home')}
                                    className={`${currentScreen === 'Home' ? 'bg-gray-700' : ''} text-white block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors`}
                                    role="menuitem"
                                >
                                    Home
                                </button>
                                <button
                                    onClick={() => handleNavigation('Projects')}
                                    className={`${currentScreen === 'Projects' ? 'bg-gray-700' : ''} text-white block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors`}
                                    role="menuitem"
                                >
                                    Projects
                                </button>
                                <button
                                    onClick={() => handleNavigation('About')}
                                    className={`${currentScreen === 'About' ? 'bg-gray-700' : ''} text-white block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors`}
                                    role="menuitem"
                                >
                                    About Me
                                </button>
                                <button
                                    onClick={() => handleNavigation('ContactMe')}
                                    className={`${currentScreen === 'ContactMe' ? 'bg-gray-700' : ''} text-white block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors`}
                                    role="menuitem"
                                >
                                    Contact Me
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default HamburgerMenu;
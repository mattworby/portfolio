import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
    const [score, setScore] = useState(0);
    const [blinkingText, setBlinkingText] = useState(true);
    const [selectedProject, setSelectedProject] = useState(null);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    // Pagination state (for mobile)
    const [currentPage, setCurrentPage] = useState(0);
    const projectsPerPage = 1; // Show one project per page on mobile
    const isMobile = windowSize.width < 640;

    // Handle window resize to update layout
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });

            // Reset to first page when switching between mobile/desktop
            if ((window.innerWidth < 640) !== isMobile) {
                setCurrentPage(0);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobile]);

    useEffect(() => {
        const interval = setInterval(() => {
            setBlinkingText(prev => !prev);
        }, 800);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const cdnScript = document.createElement('script');
        cdnScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.6/dat.gui.min.js';
        cdnScript.async = true;
        document.body.appendChild(cdnScript);

        const script = document.createElement('script');
        script.src = '/portfolio/src/effects/crt.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(cdnScript);
            document.body.removeChild(script);
        };
    }, []);

    // Sample project data - replace with your actual projects later
    const projects = [
        {
            id: 1,
            title: "E-Commerce",
            description: "Full-stack shop with React",
            image: "/api/placeholder/300/200",
            github: "https://github.com/username/ecommerce",
            demo: "https://example.com/demo",
            tech: ["React", "Node.js"]
        },
        {
            id: 2,
            title: "AI Generator",
            description: "ML-powered image creator",
            image: "/api/placeholder/300/200",
            github: "https://github.com/username/ai-image-gen",
            demo: "https://example.com/demo",
            tech: ["Python", "React"]
        },
        {
            id: 3,
            title: "Budget App",
            description: "Personal finance tracker",
            image: "/api/placeholder/300/200",
            github: "https://github.com/username/budget-app",
            demo: "https://example.com/demo",
            tech: ["React", "Firebase"]
        },
        {
            id: 4,
            title: "Weather App",
            description: "Real-time forecasts",
            image: "/api/placeholder/300/200",
            github: "https://github.com/username/weather-app",
            demo: "https://example.com/demo",
            tech: ["JavaScript", "API"]
        },
        {
            id: 5,
            title: "Social Media",
            description: "Connect & share platform",
            image: "/api/placeholder/300/200",
            github: "https://github.com/username/social-media",
            demo: "https://example.com/demo",
            tech: ["React", "Firebase"]
        },
        {
            id: 6,
            title: "Portfolio",
            description: "Developer showcase",
            image: "/api/placeholder/300/200",
            github: "https://github.com/username/portfolio",
            demo: "https://example.com/demo",
            tech: ["React", "Tailwind"]
        }
    ];

    // Calculate pagination values
    const totalPages = Math.ceil(projects.length / projectsPerPage);
    const paginatedProjects = isMobile
        ? projects.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage)
        : projects;

    // Determine grid layout based on window size
    const getGridLayout = () => {
        // Reserve space for navigation & header (adjust as needed)
        const topNavHeight = 70; // Space for menu and back button
        const headerHeight = 60; // Space for Projects header
        const bottomPadding = isMobile ? 100 : 20; // Extra padding for pagination controls on mobile

        // Calculate available height for grid
        const availableHeight = windowSize.height - topNavHeight - headerHeight - bottomPadding;

        // Set max items per row based on window width
        let columns = 3;
        if (windowSize.width < 1024) columns = 2;
        if (windowSize.width < 640) columns = 1;

        // Calculate rows needed for visible projects
        const visibleProjects = isMobile ? paginatedProjects.length : projects.length;
        const rows = Math.ceil(visibleProjects / columns);

        // Calculate ideal tile height with spacing
        const gapSize = 16; // 1rem gap between tiles
        const maxTileHeight = Math.floor((availableHeight - (gapSize * (rows - 1))) / rows);

        // Ensure minimum readable size
        const minTileHeight = 120;
        const tileHeight = Math.max(minTileHeight, maxTileHeight);

        return {
            columns,
            tileHeight,
            imgHeight: Math.floor(tileHeight * 0.4)
        };
    };

    const { columns, tileHeight, imgHeight } = getGridLayout();

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handlePrevPage = () => {
        setCurrentPage(prev => (prev > 0 ? prev - 1 : totalPages - 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prev => (prev < totalPages - 1 ? prev + 1 : 0));
    };

    return (
        <div id='screen' className="h-screen w-full overflow-hidden">
            {/* Top space for navigation */}
            <div className="h-16"></div>

            <div className="px-4 pb-4 h-full overflow-hidden">
                <div
                    className="grid gap-4"
                    style={{
                        gridTemplateColumns: `repeat(${columns}, 1fr)`,
                        height: isMobile ? 'calc(100% - 120px)' : 'calc(100% - 60px)' // Adjust for pagination controls
                    }}
                >
                    {paginatedProjects.map((project) => (
                        <div
                            key={project.id}
                            className="rounded overflow-hidden shadow cursor-pointer border border-gray-700 hover:border-gray-400 flex flex-col backdrop-blur-sm transition-all duration-300 hover:backdrop-blur-none"
                            onClick={() => handleProjectClick(project)}
                            style={{
                                height: `${tileHeight}px`,
                                maxHeight: `${tileHeight}px`,
                                backgroundColor: 'rgba(31, 41, 55, 0.7)' // Semi-transparent dark background
                            }}
                        >
                            <div className="p-2 flex-1 flex flex-col bg-opacity-90">
                                <h3 className="text-md font-medium text-gray-100 truncate">{project.title}</h3>
                                <p className="text-gray-200 text-xs mb-1 flex-1 line-clamp-2">{project.description}</p>

                                <div className="relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full object-cover"
                                        style={{
                                            height: `${imgHeight}px`,
                                            opacity: 0.85 // Slightly transparent image
                                        }}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-8"></div>
                                </div>

                                <div className="flex flex-wrap gap-1 mb-1">
                                    {project.tech.slice(0, 2).map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-1 py-0.5 bg-gray-800 bg-opacity-80 text-gray-200 text-xs rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-200 hover:text-white"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Github size={14} />
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-200 hover:text-white"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination controls - only shown on mobile */}
                {isMobile && (
                    <div className="fixed bottom-0 left-0 right-0 flex justify-between items-center p-4 bg-gray-900 bg-opacity-80 border-t border-gray-700">
                        <button
                            onClick={handlePrevPage}
                            className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-200 active:bg-gray-600 touch-manipulation"
                            aria-label="Previous project"
                        >
                            <ChevronLeft size={28} />
                        </button>

                        <div className="text-gray-200 text-base font-medium">
                            {currentPage + 1} / {totalPages}
                        </div>

                        <button
                            onClick={handleNextPage}
                            className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-200 active:bg-gray-600 touch-manipulation"
                            aria-label="Next project"
                        >
                            <ChevronRight size={28} />
                        </button>
                    </div>
                )}
            </div>

            {selectedProject && (
                <div className="fixed inset-0 flex items-center justify-center p-4 z-50 backdrop-blur-sm bg-black bg-opacity-50">
                    <div className="bg-gray-800 bg-opacity-90 p-4 rounded max-w-lg w-full max-h-screen overflow-hidden border border-gray-600">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-xl font-bold text-gray-100">{selectedProject.title}</h2>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="text-gray-400 hover:text-white"
                            >
                                ✕
                            </button>
                        </div>
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="w-full h-48 object-cover mb-2 rounded"
                        />
                        <p className="text-gray-200 mb-2">{selectedProject.description}</p>

                        <div className="flex flex-wrap gap-1 mb-2">
                            {selectedProject.tech.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-1 py-0.5 bg-gray-700 text-gray-200 text-xs rounded"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-2">
                            <a
                                href={selectedProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-sm"
                            >
                                <Github size={14} />
                                GitHub
                            </a>
                            <a
                                href={selectedProject.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-sm"
                            >
                                <ExternalLink size={14} />
                                Demo
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
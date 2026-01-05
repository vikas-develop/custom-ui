import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {!isLanding && (
              <button
                onClick={() => {
                  const sidebar = document.querySelector('aside');
                  if (sidebar) {
                    sidebar.classList.toggle('-translate-x-full');
                  }
                }}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle sidebar"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            )}
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Custom UI
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className={`transition-colors ${
                  isLanding
                    ? 'text-gray-900 dark:text-white font-medium'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link
                to="/components"
                className={`transition-colors ${
                  !isLanding
                    ? 'text-gray-900 dark:text-white font-medium'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Components
              </Link>
              <a href="#docs" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Documentation
              </a>
            </div>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="theme-toggle relative w-14 h-7 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-700 dark:to-gray-800 p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Toggle dark mode"
            role="switch"
            aria-checked={darkMode}
          >
            <div
              className={`theme-toggle-thumb absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-lg flex items-center justify-center ${
                darkMode ? 'toggle-on' : 'toggle-off'
              }`}
            >
              {/* Sun Icon */}
              <svg
                className={`theme-toggle-sun absolute w-3.5 h-3.5 ${
                  darkMode ? 'sun-hidden' : 'sun-visible'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: '#fbbf24' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              {/* Moon Icon */}
              <svg
                className={`theme-toggle-moon absolute w-3.5 h-3.5 ${
                  darkMode ? 'moon-visible' : 'moon-hidden'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: '#1e293b' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; // ShadCN button
import { Sun, Moon, Menu, X } from 'lucide-react'; // Icons for theme toggle and hamburger

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 dark:from-gray-800 dark:via-gray-900 dark:to-gray-700 shadow-lg py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo/Brand Name */}
        <div className="text-2xl font-bold text-white">
          File Fairy
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 text-white font-medium">
          <a href="#profile" className="hover:text-blue-300 transition-colors duration-300">Profile</a>
          <a href="#upload" className="hover:text-blue-300 transition-colors duration-300">Upload File</a>
          <a href="#download" className="hover:text-blue-300 transition-colors duration-300">Download File</a>
        </div>

        {/* Theme Toggle Button for Desktop */}
        <div className="hidden md:flex items-center space-x-2">
          <Button
            onClick={toggleTheme}
            className="p-2 text-white bg-blue-500 hover:bg-blue-400 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full transition-all duration-300"
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5 text-blue-300" />}
          </Button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center space-x-2">
          <Button
            onClick={toggleTheme}
            className="p-2 text-white bg-blue-500 hover:bg-blue-400 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full transition-all duration-300"
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5 text-blue-300" />}
          </Button>

          <Button
            onClick={toggleMenu}
            className="p-2 text-white bg-blue-500 hover:bg-blue-400 rounded-full transition-all duration-300"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-blue-600 dark:bg-gray-800 text-white font-medium py-4 rounded-lg shadow-lg">
          <a href="#profile" onClick={toggleMenu} className="hover:text-blue-300 transition-colors duration-300">Profile</a>
          <a href="#upload" onClick={toggleMenu} className="hover:text-blue-300 transition-colors duration-300">Upload File</a>
          <a href="#download" onClick={toggleMenu} className="hover:text-blue-300 transition-colors duration-300">Download File</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // ShadCN button
import { Sun, Moon, Menu, X } from "lucide-react"; // Icons for theme toggle and hamburger

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 dark:from-gray-800 dark:via-gray-900 dark:to-gray-700 shadow-lg py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Brand Name */}
        <a href="/">
          <div className="text-2xl font-bold text-white">File Fairy</div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 text-white font-medium">
          <a href="/upload"className="text-xl relative group transition-colors duration-300  hover:text-blue-100 dark:hover:text-blue-500 ">
            Upload File
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left dark:group-hover:bg-blue-500"></span>
          </a>

          <a href="/download" className="text-xl relative group transition-colors duration-300 hover:text-blue-100 dark:hover:text-blue-500 ">
            Download File
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left dark:group-hover:bg-blue-500"></span>
          </a>

          <a href="/profile" className="text-xl relative group transition-colors duration-300 hover:text-blue-100 dark:hover:text-blue-500 ">
            Profile
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left dark:group-hover:bg-blue-500"></span>          </a>
        </div>

        {/* Theme Toggle Button for Desktop */}
        <div className="hidden md:flex items-center space-x-2">
          <Button
            onClick={toggleTheme}
            className="p-2 text-white bg-blue-500 hover:bg-blue-400 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full transition-all duration-300"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-blue-300" />
            )}
          </Button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center space-x-2">
          <Button
            onClick={toggleTheme}
            className="p-2 text-white bg-blue-500 hover:bg-blue-400 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full transition-all duration-300"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-blue-300" />
            )}
          </Button>

          <Button
            onClick={toggleMenu}
            className="p-2 text-white bg-blue-500 hover:bg-blue-400 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full transition-all duration-300"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
  <div className="md:hidden flex flex-col items-center space-y-4 mt-4 text-white font-medium py-4">
    <a
      href="/upload"
      onClick={toggleMenu}
      className="relative group text-lg transition-colors duration-300 hover:text-blue-300"
    >
      Upload File
      <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </a>
    <a
      href="/download"
      onClick={toggleMenu}
      className="relative group text-lg transition-colors duration-300 hover:text-blue-300"
    >
      Download File
      <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </a>
    <a
      href="/profile"
      onClick={toggleMenu}
      className="relative group text-lg transition-colors duration-300 hover:text-blue-300"
    >
      Profile
      <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </a>
  </div>
)}

    </nav>
  );
};

export default Navbar;
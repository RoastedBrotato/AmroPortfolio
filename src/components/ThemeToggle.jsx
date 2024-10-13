import React, { useState, useEffect, useRef } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemPreference;
    setTheme(initialTheme);
    applyTheme(initialTheme);

    const handleClickOutside = (event) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const applyTheme = (newTheme) => {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
    setIsOpen(false);
  };

  const getThemeIcon = (themeType) => {
    return themeType === "light" ? "🌞" : "🌙";
  };

  return (
    <div className="relative" ref={toggleRef}>
      <div className="flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Toggle theme"
        >
          {getThemeIcon(theme)}
        </button>
        {isOpen && (
          <div className="ml-2 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 flex">
            {["light", "dark"].map((themeOption) => (
              <button
                key={themeOption}
                onClick={() => changeTheme(themeOption)}
                className={`
                  p-2 rounded-md
                  ${theme === themeOption ? "bg-gray-100 dark:bg-gray-700" : ""}
                  hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors
                `}
                aria-label={`Switch to ${themeOption} mode`}
              >
                {getThemeIcon(themeOption)}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;

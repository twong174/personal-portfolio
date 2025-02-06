import React, { useState, useEffect } from "react";

import IntroPage from "./pages/IntroPage";
import BackgroundPage from "./pages/BackgroundPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectPage from "./pages/ProjectPage";
import Footer from "./Footer";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="w-full flex flex-col p-2 gap-2">
      <header className="p-4 flex justify-end">
        <button onClick={toggleDarkMode}>
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
      </header>

      <main className="w-full p-2 flex flex-col gap-10 md:gap-50">
        <IntroPage />
        <BackgroundPage />
        <SkillsPage />
        <ProjectPage />
      </main>

      <footer className="my-20 px-15 ">
        <Footer />
      </footer>
    </div>
  );
};

export default App;

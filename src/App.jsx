import React from 'react';
import Navbar from './components/NavBar';
import Home from "./components/Home";
import About from "./components/About";
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import FeaturedProjects from './components/FeaturedProjects';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';



function App() {
  return (
    <ThemeProvider>
      <div className='flex flex-col items-right justify-center min-h-screen bg-white dark:bg-black text-black dark:text-white'>
        <div className='mt-5'>
          <Navbar />
          <Home />
          <About />
          <Education />
          <Hobbies />
          <FeaturedProjects />
          <Projects />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

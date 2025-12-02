import React from "react";
import Home from "./Home.jsx";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

const Homepage = () => {
    return (
        <>
            <Home />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
        </>
    );
}

export default Homepage;
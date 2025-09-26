import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 relative">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-10">
        
        {/* Heading */}
        <h2 className="text-5xl font-bold gradient-text">About Me</h2>

        {/* Intro Text */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          I'm <span className="text-blue-400 font-semibold">Avinash Sharma</span>, 
          a dedicated <span className="text-purple-400 font-semibold">Full Stack Developer</span> 
          specializing in the <span className="text-green-400 font-semibold">MERN stack</span>.  
          I love building clean, scalable, and user-friendly applications that deliver 
          great experiences and solve real-world problems.
        </p>

        <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
          My approach to development is focused on clean code, performance, 
          and creating intuitive user interfaces. I enjoy both frontend design 
          and backend logic, making me versatile in handling end-to-end solutions.
        </p>

        {/* Highlighted Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="p-6 bg-blue-600 bg-opacity-10 rounded-xl border border-blue-600 shadow-md">
            <h3 className="text-4xl font-bold text-blue-400">Fresher</h3>
            <p className="text-sm text-gray-300 mt-2">Years Experience</p>
          </div>
          <div className="p-6 bg-purple-600 bg-opacity-10 rounded-xl border border-purple-600 shadow-md">
            <h3 className="text-4xl font-bold text-purple-400">5+</h3>
            <p className="text-sm text-gray-300 mt-2">Projects Completed</p>
          </div>
          <div className="p-6 bg-green-600 bg-opacity-10 rounded-xl border border-green-600 shadow-md">
            <h3 className="text-4xl font-bold text-green-400">MERN</h3>
            <p className="text-sm text-gray-300 mt-2">Stack Expertise</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

import React from "react";
import Avinash from "../assets/Avinash.jpg"; // 🔄 Ensure you have your photo in /src/assets/

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-900 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Image */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-600 transform hover:scale-105 transition-transform duration-300">
            <img
              src={Avinash} // 🔄 replace with your photo
              alt="Avinash Sharma"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Hi, I'm <span className="text-purple-400">Avinash Sharma</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 font-medium">
            Full Stack Developer | MERN Stack
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
            I build scalable, user-friendly applications with clean code and modern design.  
            Passionate about solving real-world problems through technology.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="/projects"
              className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-purple-600 text-purple-400 rounded-xl shadow-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

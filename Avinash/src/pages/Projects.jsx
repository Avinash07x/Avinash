import React from "react";
import { Github, ExternalLink, Figma } from "lucide-react";

const projects = [
  {
    title: "E-commerce Web Application",
    description:
      "Full-stack e-commerce platform with modern UI, authentication, payment integration, and admin dashboard.",
    tech: ["React.js", "Node.js", "MongoDB", "JWT", "Razorpay", "Material-UI"],
    github: "#",
    demo: "https://unnatii.vercel.app/",
  },
  {
    title: "Advanced Todo-List Web App",
    description:
      "Todo app with dark/light mode, CRUD, duplicate prevention, and progress tracking.",
    tech: ["React.js", "Tailwind CSS", "Local Storage"],
    github: "https://github.com/Avinash07x/Todo/tree/main/TODO",
    demo: "https://todo-mu-peach.vercel.app/",
  },
  {
    title: "Real-Time Weather App",
    description:
      "Responsive weather app with real-time API integration, temperature, and error handling.",
    tech: ["React.js", "Tailwind CSS", "Weather API"],
    github: "http://github.com/Avinash07x/weather",
    demo: "https://weather-lemon-delta.vercel.app/",
  },
  // Added Unnatii Real Estate Frontend Project
  {
    title: "Unnatii Real Estate (Frontend)",
    description:
      "Frontend of a real estate web app with property listings, responsive design, and search functionality.",
    tech: ["React.js", "Tailwind CSS", "React Router", "Axios"],
    github: "https://github.com/Avinash07x/Unnatii/tree/main/frontend",
    demo: "https://unnatii.vercel.app/",
  },
];


const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-500 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-500 hover:text-purple-400 font-semibold transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-500 hover:text-purple-400 font-semibold transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" /> Live Demo
                  </a>
                )}
                {project.figma && (
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-500 hover:text-purple-400 font-semibold transition-colors duration-300"
                  >
                    <Figma className="w-5 h-5" /> Figma
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

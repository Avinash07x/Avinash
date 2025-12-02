import React from "react";
import { Github, ExternalLink, Figma } from "lucide-react";
import TodoImg from "../assets/Todo.png";
import WeatherImg from "../assets/Weather.png";
import UnnatiiImg from "../assets/Unnatii1.png";
import Calculators from "../assets/Calculator.png";
import Portfolio from "../assets/Portfolio.png";
import Calendar from "../assets/Calendar.png";

const projects = [
  {
    title: "Advanced Todo-List Web App",
    description:
      "Todo app with dark/light mode, CRUD, duplicate prevention, and progress tracking.",
    tech: ["React.js", "Tailwind CSS", "Local Storage"],
    github: "https://github.com/Avinash07x/Todo/tree/main/TODO",
    demo: "https://todo-mu-peach.vercel.app/",
    image: TodoImg,
  },
  {
    title: "Real-Time Weather App",
    description:
      "Responsive weather app with real-time API integration, temperature, and error handling.",
    tech: ["React.js", "Tailwind CSS", "Weather API"],
    github: "http://github.com/Avinash07x/weather",
    demo: "https://weather-lemon-delta.vercel.app/",
    image: WeatherImg,
  },
  {
    title: "Unnatii Real Estate (Frontend)",
    description:
      "Frontend of a real estate web app with property listings, responsive design, and search functionality.",
    tech: ["React.js", "Tailwind CSS", "React Router"],
    github: "https://github.com/Avinash07x/Unnatii/tree/main/frontend",
    demo: "https://unnatii.vercel.app/",
    image: UnnatiiImg,
  },
  {
    title: "Calculator Web App",
    description:
      "A simple and responsive calculator web application with basic arithmetic operations.",
    tech: ["React.js", "Tailwind CSS"],
    github: "https://github.com/Avinash07x/Calculator.git",
    demo: "https://calculator-blue-theta-18.vercel.app/",
    image: Calculators,
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects, skills, and experience.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Avinash07x/Avinash.git",
    demo: "https://avinash-theta.vercel.app/",
    image: Portfolio,
  },
  {
    title: "Calendar",
    description: "A simple calendar web application to manage events and tasks.",
    tech: ["React.js", "Tailwind CSS", "Date-fns"],
    github: "https://github.com/Avinash07x/Calendar.git",
    demo: "https://calendar-beta-wheat.vercel.app/",
    image: Calendar,
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
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Project Image Click → Live Demo */}
              {project.image && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover rounded-xl mb-6 hover:opacity-90 transition"
                  />
                </a>
              )}

              {/* Title */}
              <h3 className="text-2xl font-bold text-blue-500 mb-4">
                {project.title}
              </h3>

              {/* Description */}
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



// import React, { useState } from "react";
// import { Github, ExternalLink, Figma, Code, Server } from "lucide-react";

// const projectsData = {
//   frontend: {
//     active: [
//       {
//         title: "E-commerce Web Application",
//         description: "Full-stack e-commerce platform with modern UI, authentication, payment integration, and admin dashboard.",
//         tech: ["React.js", "Material-UI", "Razorpay", "JWT"],
//         github: "#",
//         demo: "https://unnatii.vercel.app/",
//         status: "active"
//       },
//       {
//         title: "Advanced Todo-List Web App",
//         description: "Todo app with dark/light mode, CRUD, duplicate prevention, and progress tracking.",
//         tech: ["React.js", "Tailwind CSS", "Local Storage"],
//         github: "https://github.com/Avinash07x/Todo/tree/main/TODO",
//         demo: "https://todo-mu-peach.vercel.app/",
//         status: "active"
//       }
//     ],
//     completed: [
//       {
//         title: "Real-Time Weather App",
//         description: "Responsive weather app with real-time API integration, temperature, and error handling.",
//         tech: ["React.js", "Tailwind CSS", "Weather API"],
//         github: "http://github.com/Avinash07x/weather",
//         demo: "https://weather-lemon-delta.vercel.app/",
//         status: "completed"
//       },
//       {
//         title: "Unnatii Real Estate (Frontend)",
//         description: "Frontend of a real estate web app with property listings, responsive design, and search functionality.",
//         tech: ["React.js", "Tailwind CSS", "React Router", "Axios"],
//         github: "https://github.com/Avinash07x/Unnatii/tree/main/frontend",
//         demo: "https://unnatii.vercel.app/c",
//         status: "completed"
//       }
//     ],
//     pending: []
//   },
//   backend: {
//     active: [
//       {
//         title: "E-commerce API",
//         description: "RESTful API with user authentication, product management, order processing, and payment gateway integration.",
//         tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Razorpay"],
//         github: "#",
//         status: "active"
//       }
//     ],
//     completed: [
//       {
//         title: "Authentication Service",
//         description: "Secure authentication microservice with JWT tokens, password hashing, and session management.",
//         tech: ["Node.js", "Express.js", "MongoDB", "bcrypt", "JWT"],
//         github: "#",
//         status: "completed"
//       }
//     ],
//     pending: [
//       {
//         title: "Real-time Chat API",
//         description: "WebSocket-based chat API for real-time messaging with room support and message persistence.",
//         tech: ["Node.js", "Socket.io", "MongoDB", "Redis"],
//         status: "pending"
//       }
//     ]
//   }
// };

// const Projects = () => {
//   const [activeTab, setActiveTab] = useState("frontend");
//   const [activeStatus, setActiveStatus] = useState("active");

//   const tabs = [
//     { id: "frontend", label: "Frontend", icon: <Code className="w-4 h-4" /> },
//     { id: "backend", label: "Backend", icon: <Server className="w-4 h-4" /> }
//   ];

//   const statusTabs = [
//     { id: "active", label: "Active", color: "green" },
//     { id: "completed", label: "Completed", color: "blue" },
//     { id: "pending", label: "Pending", color: "yellow" }
//   ];

//   const getStatusBadge = (status) => {
//     const colors = {
//       active: "bg-green-500/20 text-green-400 border-green-500/30",
//       completed: "bg-blue-500/20 text-blue-400 border-blue-500/30",
//       pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
//     };
//     return colors[status] || colors.active;
//   };

//   const currentProjects = projectsData[activeTab][activeStatus] || [];

//   return (
//     <section id="projects" className="py-24 bg-gray-900">
//       <div className="max-w-6xl mx-auto px-5">
//         <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
//           Featured Projects
//         </h2>
//         <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
//           Explore my work across frontend and backend development
//         </p>

//         {/* Type Tabs (Frontend/Backend) */}
//         <div className="flex justify-center gap-4 mb-8">
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
//                 activeTab === tab.id
//                   ? "bg-gray-800 text-white shadow-lg scale-105"
//                   : "bg-gray-800/50 text-gray-400 hover:bg-gray-800/70"
//               }`}
//             >
//               {tab.icon}
//               {tab.label}
//             </button>
//           ))}
//         </div>

//         {/* Status Tabs (Active/Completed/Pending) */}
//         <div className="flex justify-center flex-wrap gap-3 mb-12">
//           {statusTabs.map((status) => {
//             const count = projectsData[activeTab][status.id]?.length || 0;
//             return (
//               <button
//                 key={status.id}
//                 onClick={() => setActiveStatus(status.id)}
//                 className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 border ${
//                   activeStatus === status.id
//                     ? getStatusBadge(status.id) + " scale-105"
//                     : "bg-gray-800/30 text-gray-500 border-gray-700 hover:border-gray-600"
//                 }`}
//               >
//                 {status.label} ({count})
//               </button>
//             );
//           })}
//         </div>

//         {/* Projects Grid */}
//         {currentProjects.length > 0 ? (
//           <div className="grid md:grid-cols-2 gap-8">
//             {currentProjects.map((project, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
//               >
//                 {/* Status Badge */}
//                 <div className="absolute top-4 right-4">
//                   <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusBadge(project.status)}`}>
//                     {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
//                   </span>
//                 </div>

//                 {/* Gradient Background Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                 <div className="relative z-10">
//                   <h3 className="text-2xl font-bold text-white mb-4 pr-24">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-300 mb-6 leading-relaxed">
//                     {project.description}
//                   </p>

//                   {/* Tech Stack */}
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.tech.map((tech, idx) => (
//                       <span
//                         key={idx}
//                         className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-lg text-sm font-medium border border-gray-600/50"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Links */}
//                   <div className="flex flex-wrap gap-4">
//                     {project.github && (
//                       <a
//                         href={project.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center gap-2 text-gray-300 hover:text-white font-semibold transition-colors duration-300 group/link"
//                       >
//                         <Github className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
//                         GitHub
//                       </a>
//                     )}
//                     {project.demo && (
//                       <a
//                         href={project.demo}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center gap-2 text-gray-300 hover:text-white font-semibold transition-colors duration-300 group/link"
//                       >
//                         <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
//                         Live Demo
//                       </a>
//                     )}
//                     {project.figma && (
//                       <a
//                         href={project.figma}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center gap-2 text-gray-300 hover:text-white font-semibold transition-colors duration-300 group/link"
//                       >
//                         <Figma className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
//                         Figma
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-16">
//             <div className="inline-block p-6 bg-gray-800 rounded-2xl border border-gray-700">
//               <p className="text-gray-400 text-lg">
//                 No {activeStatus} {activeTab} projects yet
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Projects;

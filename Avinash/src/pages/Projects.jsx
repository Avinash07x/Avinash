// import React from "react";
// import { Github, ExternalLink, Figma } from "lucide-react";
// import TodoImg from "../assets/Todo.png";
// import WeatherImg from "../assets/Weather.png";
// import UnnatiiImg from "../assets/Unnatii1.png";
// import Calculators from "../assets/Calculator.png";
// import Portfolio from "../assets/Portfolio.png";
// import Calendar from "../assets/Calendar.png";

// const projects = [
//   {
//     title: "Advanced Todo-List Web App",
//     description:
//       "Todo app with dark/light mode, CRUD, duplicate prevention, and progress tracking.",
//     tech: ["React.js", "Tailwind CSS", "Local Storage"],
//     github: "https://github.com/Avinash07x/Todo/tree/main/TODO",
//     demo: "https://todo-mu-peach.vercel.app/",
//     image: TodoImg,
//   },
//   {
//     title: "Real-Time Weather App",
//     description:
//       "Responsive weather app with real-time API integration, temperature, and error handling.",
//     tech: ["React.js", "Tailwind CSS", "Weather API"],
//     github: "http://github.com/Avinash07x/weather",
//     demo: "https://weather-lemon-delta.vercel.app/",
//     image: WeatherImg,
//   },
//   {
//     title: "Unnatii Real Estate (Frontend)",
//     description:
//       "Frontend of a real estate web app with property listings, responsive design, and search functionality.",
//     tech: ["React.js", "Tailwind CSS", "React Router"],
//     github: "https://github.com/Avinash07x/Unnatii/tree/main/frontend",
//     demo: "https://unnatii.vercel.app/",
//     image: UnnatiiImg,
//   },
//   {
//     title: "Calculator Web App",
//     description:
//       "A simple and responsive calculator web application with basic arithmetic operations.",
//     tech: ["React.js", "Tailwind CSS"],
//     github: "https://github.com/Avinash07x/Calculator.git",
//     demo: "https://calculator-blue-theta-18.vercel.app/",
//     image: Calculators,
//   },
//   {
//     title: "Portfolio Website",
//     description:
//       "A personal portfolio website to showcase projects, skills, and experience.",
//     tech: ["React.js", "Tailwind CSS", "Framer Motion"],
//     github: "https://github.com/Avinash07x/Avinash.git",
//     demo: "https://avinash-theta.vercel.app/",
//     image: Portfolio,
//   },
//   {
//     title: "Calendar",
//     description: "A simple calendar web application to manage events and tasks.",
//     tech: ["React.js", "Tailwind CSS", "Date-fns"],
//     github: "https://github.com/Avinash07x/Calendar.git",
//     demo: "https://calendar-beta-wheat.vercel.app/",
//     image: Calendar,
//   },
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="py-24 bg-gray-900">
//       <div className="max-w-6xl mx-auto px-5">
//         <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text">
//           Featured Projects
//         </h2>

//         <div className="grid md:grid-cols-2 gap-10">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
//             >
//               {/* Project Image Click → Live Demo */}
//               {project.image && (
//                 <a
//                   href={project.demo}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-56 object-cover rounded-xl mb-6 hover:opacity-90 transition"
//                   />
//                 </a>
//               )}

//               {/* Title */}
//               <h3 className="text-2xl font-bold text-blue-500 mb-4">
//                 {project.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-300 mb-6 leading-relaxed">
//                 {project.description}
//               </p>

//               {/* Tech Stack */}
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {project.tech.map((tech, idx) => (
//                   <span
//                     key={idx}
//                     className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* Links */}
//               <div className="flex flex-wrap gap-4">
//                 {project.github && (
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-blue-500 hover:text-purple-400 font-semibold transition-colors duration-300"
//                   >
//                     <Github className="w-5 h-5" /> GitHub
//                   </a>
//                 )}

//                 {project.demo && (
//                   <a
//                     href={project.demo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-blue-500 hover:text-purple-400 font-semibold transition-colors duration-300"
//                   >
//                     <ExternalLink className="w-5 h-5" /> Live Demo
//                   </a>
//                 )}

//                 {project.figma && (
//                   <a
//                     href={project.figma}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-blue-500 hover:text-purple-400 font-semibold transition-colors duration-300"
//                   >
//                     <Figma className="w-5 h-5" /> Figma
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;



// // import React, { useState } from "react";
// // import { Github, ExternalLink, Figma, Code, Server } from "lucide-react";

// // const projectsData = {
// //   frontend: {
// //     active: [
// //       {
// //         title: "E-commerce Web Application",
// //         description: "Full-stack e-commerce platform with modern UI, authentication, payment integration, and admin dashboard.",
// //         tech: ["React.js", "Material-UI", "Razorpay", "JWT"],
// //         github: "#",
// //         demo: "https://unnatii.vercel.app/",
// //         status: "active"
// //       },
// //       {
// //         title: "Advanced Todo-List Web App",
// //         description: "Todo app with dark/light mode, CRUD, duplicate prevention, and progress tracking.",
// //         tech: ["React.js", "Tailwind CSS", "Local Storage"],
// //         github: "https://github.com/Avinash07x/Todo/tree/main/TODO",
// //         demo: "https://todo-mu-peach.vercel.app/",
// //         status: "active"
// //       }
// //     ],
// //     completed: [
// //       {
// //         title: "Real-Time Weather App",
// //         description: "Responsive weather app with real-time API integration, temperature, and error handling.",
// //         tech: ["React.js", "Tailwind CSS", "Weather API"],
// //         github: "http://github.com/Avinash07x/weather",
// //         demo: "https://weather-lemon-delta.vercel.app/",
// //         status: "completed"
// //       },
// //       {
// //         title: "Unnatii Real Estate (Frontend)",
// //         description: "Frontend of a real estate web app with property listings, responsive design, and search functionality.",
// //         tech: ["React.js", "Tailwind CSS", "React Router", "Axios"],
// //         github: "https://github.com/Avinash07x/Unnatii/tree/main/frontend",
// //         demo: "https://unnatii.vercel.app/c",
// //         status: "completed"
// //       }
// //     ],
// //     pending: []
// //   },
// //   backend: {
// //     active: [
// //       {
// //         title: "E-commerce API",
// //         description: "RESTful API with user authentication, product management, order processing, and payment gateway integration.",
// //         tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Razorpay"],
// //         github: "#",
// //         status: "active"
// //       }
// //     ],
// //     completed: [
// //       {
// //         title: "Authentication Service",
// //         description: "Secure authentication microservice with JWT tokens, password hashing, and session management.",
// //         tech: ["Node.js", "Express.js", "MongoDB", "bcrypt", "JWT"],
// //         github: "#",
// //         status: "completed"
// //       }
// //     ],
// //     pending: [
// //       {
// //         title: "Real-time Chat API",
// //         description: "WebSocket-based chat API for real-time messaging with room support and message persistence.",
// //         tech: ["Node.js", "Socket.io", "MongoDB", "Redis"],
// //         status: "pending"
// //       }
// //     ]
// //   }
// // };

// // const Projects = () => {
// //   const [activeTab, setActiveTab] = useState("frontend");
// //   const [activeStatus, setActiveStatus] = useState("active");

// //   const tabs = [
// //     { id: "frontend", label: "Frontend", icon: <Code className="w-4 h-4" /> },
// //     { id: "backend", label: "Backend", icon: <Server className="w-4 h-4" /> }
// //   ];

// //   const statusTabs = [
// //     { id: "active", label: "Active", color: "green" },
// //     { id: "completed", label: "Completed", color: "blue" },
// //     { id: "pending", label: "Pending", color: "yellow" }
// //   ];

// //   const getStatusBadge = (status) => {
// //     const colors = {
// //       active: "bg-green-500/20 text-green-400 border-green-500/30",
// //       completed: "bg-blue-500/20 text-blue-400 border-blue-500/30",
// //       pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
// //     };
// //     return colors[status] || colors.active;
// //   };

// //   const currentProjects = projectsData[activeTab][activeStatus] || [];

// //   return (
// //     <section id="projects" className="py-24 ">
// //       <div className="max-w-6xl mx-auto px-5">
// //         <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
// //           Featured Projects
// //         </h2>
// //         <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
// //           Explore my work across frontend and backend development
// //         </p>

// //         {/* Type Tabs (Frontend/Backend) */}
// //         <div className="flex justify-center gap-4 mb-8">
// //           {tabs.map((tab) => (
// //             <button
// //               key={tab.id}
// //               onClick={() => setActiveTab(tab.id)}
// //               className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
// //                 activeTab === tab.id
// //                   ? "bg-gray-800 text-white shadow-lg scale-105"
// //                   : "bg-gray-800/50 text-gray-400 hover:bg-gray-800/70"
// //               }`}
// //             >
// //               {tab.icon}
// //               {tab.label}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Status Tabs (Active/Completed/Pending) */}
// //         <div className="flex justify-center flex-wrap gap-3 mb-12">
// //           {statusTabs.map((status) => {
// //             const count = projectsData[activeTab][status.id]?.length || 0;
// //             return (
// //               <button
// //                 key={status.id}
// //                 onClick={() => setActiveStatus(status.id)}
// //                 className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 border ${
// //                   activeStatus === status.id
// //                     ? getStatusBadge(status.id) + " scale-105"
// //                     : "bg-gray-800/30 text-gray-500 border-gray-700 hover:border-gray-600"
// //                 }`}
// //               >
// //                 {status.label} ({count})
// //               </button>
// //             );
// //           })}
// //         </div>

// //         {/* Projects Grid */}
// //         {currentProjects.length > 0 ? (
// //           <div className="grid md:grid-cols-2 gap-8">
// //             {currentProjects.map((project, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
// //               >
// //                 {/* Status Badge */}
// //                 <div className="absolute top-4 right-4">
// //                   <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusBadge(project.status)}`}>
// //                     {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
// //                   </span>
// //                 </div>

// //                 {/* Gradient Background Effect */}
// //                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

// //                 <div className="relative z-10">
// //                   <h3 className="text-2xl font-bold text-white mb-4 pr-24">
// //                     {project.title}
// //                   </h3>
// //                   <p className="text-gray-300 mb-6 leading-relaxed">
// //                     {project.description}
// //                   </p>

// //                   {/* Tech Stack */}
// //                   <div className="flex flex-wrap gap-2 mb-6">
// //                     {project.tech.map((tech, idx) => (
// //                       <span
// //                         key={idx}
// //                         className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-lg text-sm font-medium border border-gray-600/50"
// //                       >
// //                         {tech}
// //                       </span>
// //                     ))}
// //                   </div>

// //                   {/* Links */}
// //                   <div className="flex flex-wrap gap-4">
// //                     {project.github && (
// //                       <a
// //                         href={project.github}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                         className="flex items-center gap-2 text-gray-300 hover:text-white font-semibold transition-colors duration-300 group/link"
// //                       >
// //                         <Github className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
// //                         GitHub
// //                       </a>
// //                     )}
// //                     {project.demo && (
// //                       <a
// //                         href={project.demo}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                         className="flex items-center gap-2 text-gray-300 hover:text-white font-semibold transition-colors duration-300 group/link"
// //                       >
// //                         <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
// //                         Live Demo
// //                       </a>
// //                     )}
// //                     {project.figma && (
// //                       <a
// //                         href={project.figma}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                         className="flex items-center gap-2 text-gray-300 hover:text-white font-semibold transition-colors duration-300 group/link"
// //                       >
// //                         <Figma className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
// //                         Figma
// //                       </a>
// //                     )}
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         ) : (
// //           <div className="text-center py-16">
// //             <div className="inline-block p-6 bg-gray-800 rounded-2xl border border-gray-700">
// //               <p className="text-gray-400 text-lg">
// //                 No {activeStatus} {activeTab} projects yet
// //               </p>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Projects;

// import React, { useRef } from "react";
// import { Github, ExternalLink, Figma } from "lucide-react";
// import TodoImg from "../assets/Todo.png";
// import WeatherImg from "../assets/Weather.png";
// import UnnatiiImg from "../assets/Unnatii1.png";
// import Calculators from "../assets/Calculator.png";
// import Portfolio from "../assets/Portfolio.png";
// import Calendar from "../assets/Calendar.png";

// const projects = [
//   {
//     title: "Advanced Todo-List Web App",
//     description:
//       "Todo app with dark/light mode, CRUD, duplicate prevention, and progress tracking.",
//     tech: ["React.js", "Tailwind CSS", "Local Storage"],
//     github: "https://github.com/Avinash07x/Todo/tree/main/TODO",
//     demo: "https://todo-mu-peach.vercel.app/",
//     image: TodoImg,
//   },
//   {
//     title: "Real-Time Weather App",
//     description:
//       "Responsive weather app with real-time API integration, temperature, and error handling.",
//     tech: ["React.js", "Tailwind CSS", "Weather API"],
//     github: "http://github.com/Avinash07x/weather",
//     demo: "https://weather-lemon-delta.vercel.app/",
//     image: WeatherImg,
//   },
//   {
//     title: "Unnatii Real Estate (Frontend)",
//     description:
//       "Frontend of a real estate web app with property listings, responsive design, and search functionality.",
//     tech: ["React.js", "Tailwind CSS", "React Router"],
//     github: "https://github.com/Avinash07x/Unnatii/tree/main/frontend",
//     demo: "https://unnatii.vercel.app/",
//     image: UnnatiiImg,
//   },
//   {
//     title: "Calculator Web App",
//     description:
//       "A simple and responsive calculator web application with basic arithmetic operations.",
//     tech: ["React.js", "Tailwind CSS"],
//     github: "https://github.com/Avinash07x/Calculator.git",
//     demo: "https://calculator-blue-theta-18.vercel.app/",
//     image: Calculators,
//   },
//   {
//     title: "Portfolio Website",
//     description:
//       "A personal portfolio website to showcase projects, skills, and experience.",
//     tech: ["React.js", "Tailwind CSS", "Framer Motion"],
//     github: "https://github.com/Avinash07x/Avinash.git",
//     demo: "https://avinash-theta.vercel.app/",
//     image: Portfolio,
//   },
//   {
//     title: "Calendar",
//     description: "A simple calendar web application to manage events and tasks.",
//     tech: ["React.js", "Tailwind CSS", "Date-fns"],
//     github: "https://github.com/Avinash07x/Calendar.git",
//     demo: "https://calendar-beta-wheat.vercel.app/",
//     image: Calendar,
//   },
// ];

// const Projects = () => {
//   const scrollRef = useRef(null);

//   // drag scroll
//   const isDragging = useRef(false);
//   const startX = useRef(0);
//   const scrollLeft = useRef(0);

//   const handleMouseDown = (e) => {
//     isDragging.current = true;
//     startX.current = e.pageX - scrollRef.current.offsetLeft;
//     scrollLeft.current = scrollRef.current.scrollLeft;
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging.current) return;
//     e.preventDefault();
//     const x = e.pageX - scrollRef.current.offsetLeft;
//     const walk = (x - startX.current) * 1.2;
//     scrollRef.current.scrollLeft = scrollLeft.current - walk;
//   };

//   const handleMouseUp = () => {
//     isDragging.current = false;
//   };

//   return (
//     <section id="projects" className="py-24 bg-gray-900">
//       <div className="max-w-7xl mx-auto px-5">
//         <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text">
//           Featured Projects
//         </h2>

//         {/* Horizontal Slider */}
//         <div
//           ref={scrollRef}
//           onMouseDown={handleMouseDown}
//           onMouseLeave={handleMouseUp}
//           onMouseUp={handleMouseUp}
//           onMouseMove={handleMouseMove}
//           className="
//             flex gap-8 overflow-x-auto scroll-smooth cursor-grab active:cursor-grabbing
//             pb-4
//           "
//           style={{ scrollbarWidth: "none" }}
//         >
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="
//                 min-w-[85%] sm:min-w-[60%] md:min-w-[48%] lg:min-w-[30%]
//                 bg-gray-800 rounded-2xl p-6 border border-gray-700 
//                 hover:shadow-2xl transition duration-300
//               "
//             >
//               <a href={project.demo} target="_blank">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-56 object-cover rounded-xl mb-6"
//                 />
//               </a>

//               <h3 className="text-2xl font-bold text-blue-500 mb-4">
//                 {project.title}
//               </h3>

//               <p className="text-gray-300 mb-6">{project.description}</p>

//               <div className="flex flex-wrap gap-2 mb-6">
//                 {project.tech.map((tech, idx) => (
//                   <span
//                     key={idx}
//                     className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex gap-4">
//                 {project.github && (
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     className="flex items-center gap-2 text-blue-500 hover:text-purple-400"
//                   >
//                     <Github className="w-5 h-5" /> GitHub
//                   </a>
//                 )}

//                 {project.demo && (
//                   <a
//                     href={project.demo}
//                     target="_blank"
//                     className="flex items-center gap-2 text-blue-500 hover:text-purple-400"
//                   >
//                     <ExternalLink className="w-5 h-5" /> Live Demo
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React, { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

import Todo1 from "../assets/Todo.png";
import Weather1 from "../assets/Weather.png";
import Unnatii1 from "../assets/Unnatii1.png";
import DC1 from "../assets/DC.png";
import Portfolio1 from "../assets/Portfolio.png";
import Calendar1 from "../assets/Calendar.png";
import Cal1 from "../assets/Calculator.png";
import Wood1 from "../assets/woodland.png";

// ✅ Project Data
const projects = [
  {
    title: "Woodland",
    description: "Woodland Architecture Firm — A modern architecture and interior‑design studio offering building design, interior styling, layout planning and project management to create purposeful, human‑centered spaces.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion" , "Gsap"],
    github: "https://github.com/Avinash07x/Woodland.git",
    demo: "https://woodland-three.vercel.app/",
    image: Wood1,
    color: "from-green-400 to-blue-500"

  },
  {
    title: "Advanced Todo-List Web App",
    description: "Todo app with dark/light mode, CRUD, duplicate prevention, and progress tracking.",
    tech: ["React.js", "Tailwind CSS", "Local Storage"],
    github: "https://github.com/Avinash07x/Todo/tree/main/TODO",
    demo: "https://todo-mu-peach.vercel.app/",
    image: Todo1,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Real-Time Weather App",
    description: "Responsive weather app with real-time API integration.",
    tech: ["React.js", "Tailwind CSS", "Weather API"],
    github: "http://github.com/Avinash07x/weather",
    demo: "https://weather-lemon-delta.vercel.app/",
    image: Weather1,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Unnatii Real Estate",
    description: "Real estate web app with property listings & filters.",
    tech: ["React.js", "Tailwind CSS", "React Router"],
    github: "https://github.com/Avinash07x/Unnatii/tree/main/frontend",
    demo: "https://unnatii.vercel.app/",
    image: Unnatii1,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "DC Keepers",
    description: "Task management app with authentication.",
    tech: ["React.js", "Tailwind CSS", "Axios"],
    github: "https://github.com/Avinash07x/Avinash07x-Internship-Project-1.git",
    demo: "https://digitalcloud-psi.vercel.app/",
    image: DC1,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Portfolio Website",
    description: "Showcase of skills & projects.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Avinash07x/Avinash.git",
    demo: "https://avinash-theta.vercel.app/",
    image: Portfolio1,
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Calendar App",
    description: "Advanced calendar with event management.",
    tech: ["React.js", "Tailwind CSS", "Date-fns"],
    github: "https://github.com/Avinash07x/Calendar.git",
    demo: "https://calendar-beta-wheat.vercel.app/",
    image: Calendar1,
    color: "from-teal-500 to-cyan-500"
  },
  {
    title: "Calculator Web App",
    description: "Simple and responsive calculator.",
    tech: ["React.js", "Tailwind CSS"],
    github: "https://github.com/Avinash07x/Calculator.git",
    demo: "https://calculator-blue-theta-18.vercel.app/",
    image: Cal1,
    color: "from-yellow-500 to-orange-500"
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(projects.length);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  const infiniteProjects = [...projects, ...projects, ...projects];
  const totalProjects = projects.length;

  // ✅ 3D Positioning Logic
  const updateCarousel = (index) => {
    const items = carouselRef.current?.children;
    if (!items) return;

    Array.from(items).forEach((item, i) => {
      const diff = i - index;
      const absDiff = Math.abs(diff);

      const translateX = diff * 320;
      const translateZ = -absDiff * 300;
      const scale = Math.max(0.7, 1 - absDiff * 0.15);
      const opacity = Math.max(0.3, 1 - absDiff * 0.3);
      const rotateY = diff * -25;

      item.style.transform = `
        translateX(${translateX}px)
        translateZ(${translateZ}px)
        scale(${scale})
        rotateY(${rotateY}deg)
      `;
      item.style.opacity = opacity;
      item.style.zIndex = 100 - absDiff;
      item.style.filter = diff === 0 ? "brightness(1.2)" : "brightness(0.7)";
    });
  };

  // ✅ Slide Controls
  const goToSlide = (index) => {
    if (index < 0) index = infiniteProjects.length - 1;
    if (index >= infiniteProjects.length) index = 0;

    setCurrentIndex(index);
    updateCarousel(index);
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  // ✅ Smooth Auto Rotation (PERFECT FIX)
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(autoPlayRef.current);
  }, []);

  // ✅ Update animation on index change
  useEffect(() => {
    updateCarousel(currentIndex);
  }, [currentIndex]);

  const actualIndex = currentIndex % totalProjects;
  const currentProject = projects[actualIndex];

  return (
    <section className="min-h-screen bg-gray-900 py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
      </div>

      {/* ✅ 3D Carousel */}
      <div className="relative mb-20" style={{ perspective: "2000px", height: "500px" }}>
        <div ref={carouselRef} className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
          {infiniteProjects.map((project, index) => (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 cursor-pointer"
              style={{
                width: "400px",
                height: "500px",
                marginLeft: "-200px",
                marginTop: "-250px",
                transition: "all 0.6s ease"
              }}
              onClick={() => goToSlide(index)}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
                <img src={project.image} alt={project.title} className="w-full h-2/3 object-cover" />
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Navigation */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-4 rounded-full">
          <ChevronLeft className="text-white" />
        </button>

        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-4 rounded-full">
          <ChevronRight className="text-white" />
        </button>
      </div>

      {/* ✅ Project Info */}
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-xl text-white">
        <h3 className={`text-3xl font-bold bg-gradient-to-r ${currentProject.color} bg-clip-text text-transparent mb-4`}>
          {currentProject.title}
        </h3>

        <p className="text-gray-300 mb-6">{currentProject.description}</p>

        <div className="flex gap-4">
          <a href={currentProject.github} target="_blank" className="flex gap-2 bg-gray-700 px-6 py-3 rounded-lg">
            <Github /> GitHub
          </a>

          <a href={currentProject.demo} target="_blank" className={`flex gap-2 bg-gradient-to-r ${currentProject.color} px-6 py-3 rounded-lg`}>
            <ExternalLink /> Live Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

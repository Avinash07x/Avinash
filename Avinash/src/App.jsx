import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        <Footer />
    </Router>
  );
};

export default App;


// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [activeSection, setActiveSection] = useState('home');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
//       const scrollPosition = window.scrollY + 100;

//       for (let i = sections.length - 1; i >= 0; i--) {
//         const section = document.getElementById(sections[i]);
//         if (section && scrollPosition >= section.offsetTop) {
//           setActiveSection(sections[i]);
//           break;
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setMobileMenuOpen(false);
//   };

//   const skills = {
//     frontend: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React.js', 'Redux Toolkit', 'Tailwind CSS', 'Material-UI'],
//     backend: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'RESTful APIs', 'JWT Authentication'],
//     tools: ['Git', 'GitHub', 'Postman', 'Figma', 'Responsive Design']
//   };

//   const projects = [
//     {
//       title: 'E-commerce Web Application',
//       description: 'Full-stack e-commerce platform with modern UI, secure authentication, payment integration, and admin dashboard. Features complete shopping cart functionality and order management.',
//       tech: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Razorpay', 'Material-UI'],
//       github: '#',
//       demo: 'https://unnatii.vercel.app/',
//       type: 'Full Stack'
//     },
//     {
//       title: 'Advanced Todo-List Web App',
//       description: 'High-performance todo application with dark/light mode toggle, CRUD operations, duplicate prevention, and progress tracking with persistent local storage.',
//       tech: ['React.js', 'Tailwind CSS', 'Local Storage', 'NPM Rosters'],
//       github: '#',
//       demo: '#',
//       type: 'Frontend'
//     },
//     {
//       title: 'Real-Time Weather App',
//       description: 'Responsive weather application with real-time API integration, displaying temperature, humidity, and conditions with error handling and loading states.',
//       tech: ['React.js', 'Tailwind CSS', 'Weather API', 'Responsive Design'],
//       github: '#',
//       demo: '#',
//       type: 'Frontend'
//     },
//     {
//       title: 'Shoe Store Mobile App UI/UX',
//       description: 'Complete mobile app design with high-fidelity wireframes, prototypes, and interactive user flows. Includes cart functionality and payment gateway screens.',
//       tech: ['Figma', 'Wireframing', 'Prototyping', 'UI/UX Design'],
//       figma: '#',
//       demo: '#',
//       type: 'Design'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800">
//       <style jsx>{`
//         @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
//         * {
//           font-family: 'Inter', sans-serif;
//           scroll-behavior: smooth;
//         }

//         .glass-effect {
//           backdrop-filter: blur(20px);
//           background: rgba(255, 255, 255, 0.95);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//         }

//         .gradient-bg {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//         }

//         .gradient-text {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .card-hover {
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .card-hover:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
//         }

//         .floating-animation {
//           animation: float 6s ease-in-out infinite;
//         }

//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }

//         .fade-in-up {
//           animation: fadeInUp 0.8s ease-out forwards;
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(60px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .stagger-1 { animation-delay: 0.1s; }
//         .stagger-2 { animation-delay: 0.2s; }
//         .stagger-3 { animation-delay: 0.3s; }
//         .stagger-4 { animation-delay: 0.4s; }

//         .skill-card {
//           background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
//           border: 1px solid rgba(102, 126, 234, 0.2);
//         }

//         .project-gradient {
//           background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
//         }

//         .project-gradient-2 {
//           background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
//         }

//         .project-gradient-3 {
//           background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
//         }

//         .project-gradient-4 {
//           background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
//         }

//         .tab-indicator {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           height: 2px;
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           transition: all 0.3s ease;
//         }
//       `}</style>

//       {/* Navigation */}
//       <nav className="fixed top-0 w-full z-50 glass-effect">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex-shrink-0">
//               <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
//                 <span className="text-white font-bold text-lg">AS</span>
//               </div>
//             </div>
            
//             {/* Desktop Navigation */}
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-8 relative">
//                 {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item, index) => (
//                   <button
//                     key={item}
//                     onClick={() => scrollToSection(item.toLowerCase())}
//                     className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
//                       activeSection === item.toLowerCase()
//                         ? 'text-purple-600'
//                         : 'text-gray-600 hover:text-purple-600'
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="p-2 rounded-md text-gray-600 hover:text-purple-600 focus:outline-none"
//               >
//                 <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden glass-effect border-t">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item.toLowerCase())}
//                   className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-purple-600 w-full text-left"
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="pt-16 min-h-screen flex items-center gradient-bg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <div className="mb-8 floating-animation">
//               <div className="w-32 h-32 mx-auto rounded-full bg-white bg-opacity-20 backdrop-blur-lg border border-white border-opacity-30 flex items-center justify-center">
//                 <span className="text-4xl text-white font-bold">AS</span>
//               </div>
//             </div>
//             <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 fade-in-up">
//               Avinash Sharma
//             </h1>
//             <p className="text-xl md:text-2xl text-white text-opacity-90 mb-4 fade-in-up stagger-1">
//               Full Stack Developer
//             </p>
//             <p className="text-lg text-white text-opacity-80 mb-12 max-w-3xl mx-auto leading-relaxed fade-in-up stagger-2">
//               Passionate developer with practical experience in MERN stack development, specializing in building responsive user interfaces, secure REST APIs, and scalable web solutions.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up stagger-3">
//               <button
//                 onClick={() => scrollToSection('projects')}
//                 className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:transform hover:scale-105 transition-all duration-200 shadow-lg"
//               >
//                 <i className="fas fa-code mr-2"></i>View Projects
//               </button>
//               <button
//                 onClick={() => scrollToSection('contact')}
//                 className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200"
//               >
//                 <i className="fas fa-envelope mr-2"></i>Get In Touch
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
//             <p className="text-gray-600 text-lg">Get to know me better</p>
//           </div>
          
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <div className="bg-white rounded-2xl p-8 shadow-xl border card-hover">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mr-4">
//                     <i className="fas fa-user text-white"></i>
//                   </div>
//                   <h3 className="text-xl font-semibold">Who I Am</h3>
//                 </div>
//                 <p className="text-gray-600 leading-relaxed">
//                   I'm a dedicated Full Stack Developer with hands-on experience in the MERN stack. I specialize in creating responsive, user-friendly interfaces and building robust backend solutions that scale.
//                 </p>
//               </div>

//               <div className="bg-white rounded-2xl p-8 shadow-xl border card-hover">
//                 <div className="flex items-center mb-4">
//                   <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mr-4">
//                     <i className="fas fa-briefcase text-white"></i>
//                   </div>
//                   <h3 className="text-xl font-semibold">What I Do</h3>
//                 </div>
//                 <p className="text-gray-600 leading-relaxed">
//                   Currently working as a Full Stack Developer Intern at Site Worx Infotech, leading teams and delivering professional web solutions including "Digital Cloud Keepers".
//                 </p>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div className="bg-white rounded-2xl p-6 shadow-xl border card-hover">
//                 <h3 className="text-xl font-semibold mb-6 gradient-text">Contact Information</h3>
//                 <div className="space-y-4">
//                   {[
//                     { icon: 'fas fa-phone', label: 'Phone', value: '9664007889', href: 'tel:9664007889' },
//                     { icon: 'fas fa-envelope', label: 'Email', value: 'itsavinash0@gmail.com', href: 'mailto:itsavinash0@gmail.com' },
//                     { icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'Avinash Sharma', href: 'https://linkedin.com/in/avinash-sharma' },
//                     { icon: 'fab fa-github', label: 'GitHub', value: 'Avinash07x', href: 'https://github.com/Avinash07x' }
//                   ].map((contact, index) => (
//                     <a
//                       key={index}
//                       href={contact.href}
//                       target={contact.href.startsWith('http') ? '_blank' : '_self'}
//                       rel="noopener noreferrer"
//                       className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
//                     >
//                       <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mr-4">
//                         <i className={`${contact.icon} text-white`}></i>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">{contact.label}</p>
//                         <p className="font-medium text-gray-800">{contact.value}</p>
//                       </div>
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Technical Skills</h2>
//             <p className="text-gray-600 text-lg">Technologies I work with</p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { title: 'Frontend Development', skills: skills.frontend, icon: 'fas fa-laptop-code', color: 'from-blue-500 to-purple-600' },
//               { title: 'Backend & Database', skills: skills.backend, icon: 'fas fa-server', color: 'from-green-500 to-blue-600' },
//               { title: 'Tools & Technologies', skills: skills.tools, icon: 'fas fa-tools', color: 'from-orange-500 to-red-600' }
//             ].map((category, index) => (
//               <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border card-hover">
//                 <div className="text-center mb-6">
//                   <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
//                     <i className={`${category.icon} text-2xl text-white`}></i>
//                   </div>
//                   <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
//                 </div>
//                 <div className="flex flex-wrap gap-2 justify-center">
//                   {category.skills.map((skill, skillIndex) => (
//                     <span
//                       key={skillIndex}
//                       className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${category.color}`}
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section id="experience" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Work Experience</h2>
//             <p className="text-gray-600 text-lg">My professional journey</p>
//           </div>
          
//           <div className="max-w-4xl mx-auto">
//             <div className="bg-white rounded-2xl p-8 shadow-xl border card-hover">
//               <div className="flex flex-col lg:flex-row justify-between items-start mb-6">
//                 <div className="flex items-center mb-4 lg:mb-0">
//                   <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mr-4">
//                     <i className="fas fa-building text-white text-xl"></i>
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold gradient-text">Full Stack Developer Intern</h3>
//                     <p className="text-xl text-gray-600">Site Worx Infotech</p>
//                   </div>
//                 </div>
//                 <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
//                   Feb 2025 - Jul 2025
//                 </div>
//               </div>
              
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="space-y-3">
//                   <h4 className="font-semibold text-gray-800 mb-3">Key Achievements</h4>
//                   {[
//                     'Led team development of "Digital Cloud Keepers"',
//                     'Built responsive frontend with React.js & Tailwind',
//                     'Integrated live chat support'
//                   ].map((achievement, index) => (
//                     <div key={index} className="flex items-center">
//                       <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mr-3"></div>
//                       <span className="text-gray-600">{achievement}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="space-y-3">
//                   <h4 className="font-semibold text-gray-800 mb-3">Responsibilities</h4>
//                   {[
//                     'Team coordination & task distribution',
//                     'Quality assurance & code review',
//                     'Modern development standards'
//                   ].map((responsibility, index) => (
//                     <div key={index} className="flex items-center">
//                       <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-blue-600 mr-3"></div>
//                       <span className="text-gray-600">{responsibility}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
//             <p className="text-gray-600 text-lg">Some of my recent work</p>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             {projects.map((project, index) => {
//               const gradients = ['project-gradient', 'project-gradient-2', 'project-gradient-3', 'project-gradient-4'];
//               return (
//                 <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl border card-hover">
//                   <div className={`h-48 ${gradients[index]} relative flex items-center justify-center`}>
//                     <div className="text-center text-white">
//                       <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
//                         <i className="fas fa-code text-3xl"></i>
//                       </div>
//                       <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
//                         {project.type}
//                       </span>
//                     </div>
//                   </div>
                  
//                   <div className="p-8">
//                     <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
//                     <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    
//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {project.tech.map((tech, techIndex) => (
//                         <span
//                           key={techIndex}
//                           className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
                    
//                     <div className="flex space-x-4">
//                       {project.github && (
//                         <a
//                           href={project.github}
//                           className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
//                           target={project.github !== '#' ? '_blank' : '_self'}
//                           rel="noopener noreferrer"
//                         >
//                           <i className="fab fa-github mr-2"></i>Code
//                         </a>
//                       )}
//                       {project.demo && (
//                         <a
//                           href={project.demo}
//                           className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
//                           target={project.demo !== '#' ? '_blank' : '_self'}
//                           rel="noopener noreferrer"
//                         >
//                           <i className="fas fa-external-link-alt mr-2"></i>Live Demo
//                         </a>
//                       )}
//                       {project.figma && (
//                         <a
//                           href={project.figma}
//                           className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200"
//                           target={project.figma !== '#' ? '_blank' : '_self'}
//                           rel="noopener noreferrer"
//                         >
//                           <i className="fab fa-figma mr-2"></i>Design
//                         </a>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Let's Work Together</h2>
//             <p className="text-gray-600 text-lg">Ready to start your next project?</p>
//           </div>
          
//           <div className="max-w-4xl mx-auto">
//             <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center text-white">
//               <h3 className="text-2xl font-bold mb-4">Ready to bring your ideas to life?</h3>
//               <p className="text-xl mb-8 text-white text-opacity-90">
//                 I'm always open to discussing new opportunities and interesting projects.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <a
//                   href="mailto:itsavinash0@gmail.com"
//                   className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:transform hover:scale-105 transition-all duration-200 shadow-lg"
//                 >
//                   <i className="fas fa-envelope mr-2"></i>Send Email
//                 </a>
//                 <a
//                   href="tel:9664007889"
//                   className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200"
//                 >
//                   <i className="fas fa-phone mr-2"></i>Call Now
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-12 bg-gray-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <div className="flex justify-center space-x-6 mb-8">
//               {[
//                 { href: 'mailto:itsavinash0@gmail.com', icon: 'fas fa-envelope', color: 'from-red-500 to-pink-500' },
//                 { href: 'https://linkedin.com/in/avinash-sharma', icon: 'fab fa-linkedin', color: 'from-blue-500 to-blue-600' },
//                 { href: 'https://github.com/Avinash07x', icon: 'fab fa-github', color: 'from-gray-600 to-gray-700' },
//                 { href: 'tel:9664007889', icon: 'fas fa-phone', color: 'from-green-500 to-green-600' }
//               ].map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.href}
//                   target={social.href.startsWith('http') ? '_blank' : '_self'}
//                   rel="noopener noreferrer"
//                   className={`w-14 h-14 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center text-white hover:transform hover:scale-110 transition-all duration-200 shadow-lg`}
//                 >
//                   <i className={`${social.icon} text-xl`}></i>
//                 </a>
//               ))}
//             </div>
//             <div className="border-t border-gray-800 pt-8">
//               <p className="text-gray-400">
//                 &copy; 2025 Avinash Sharma. Crafted with <i className="fas fa-heart text-red-500 mx-1"></i> and React.
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;
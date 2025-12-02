// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/AV.png";

// const Navbar = () => {
//   const [navBackground, setNavBackground] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setNavBackground(window.scrollY > 100);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Skills", path: "/skills" },
//     { name: "Experience", path: "/experience" },
//     { name: "Projects", path: "/projects" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-500 ${
//         navBackground 
//           ? "bg-gray-800 shadow-xl shadow-purple-500/20" 
//           : "bg-gray-800"
//       } backdrop-blur-lg border-b border-white/10`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">

//         {/* Logo with Glow Effect */}
//         <Link to="/" className="flex items-center space-x-3 group">
//           <div className="relative">
//             <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
//             <img
//               src={logo}
//               alt="Avinash Logo"
//               className="relative h-12 w-12 md:h-14 md:w-14 rounded-full border-2 border-cyan-400 shadow-2xl shadow-cyan-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
//             />
//           </div>
//           <span className="hidden sm:block text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//             Portfolio
//           </span>
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-1">
//           {menuItems.map((item) => (
//             <li key={item.name}>
//               <Link
//                 to={item.path}
//                 className="relative px-4 py-2 text-white font-medium overflow-hidden group"
//               >
//                 <span className="relative z-10 group-hover:text-white transition-colors duration-300">
//                   {item.name}
//                 </span>
//                 <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></span>
//                 <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Animated Hamburger Button */}
//         <button
//           className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300 z-50"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           <div className="flex flex-col space-y-1.5">
//             <span
//               className={`w-5 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300 ${
//                 mobileMenuOpen ? "rotate-45 translate-y-2" : ""
//               }`}
//             ></span>
//             <span
//               className={`w-5 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300 ${
//                 mobileMenuOpen ? "opacity-0" : ""
//               }`}
//             ></span>
//             <span
//               className={`w-5 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300 ${
//                 mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
//               }`}
//             ></span>
//           </div>
//         </button>

//         {/* Mobile Menu with Slide Animation */}
//         <div
//           className={`absolute top-full left-0 w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 md:hidden transition-all duration-300 border-b border-white/10 ${
//             mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
//           }`}
//         >
//           <ul className="flex flex-col p-6 space-y-2">
//             {menuItems.map((item, index) => (
//               <li
//                 key={item.name}
//                 className={`transform transition-all duration-300 ${
//                   mobileMenuOpen 
//                     ? "translate-x-0 opacity-100" 
//                     : "-translate-x-4 opacity-0"
//                 }`}
//                 style={{ transitionDelay: `${index * 50}ms` }}
//               >
//                 <Link
//                   to={item.path}
//                   className="block px-4 py-3 text-white font-medium rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 border border-transparent hover:border-purple-500/30"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   <span className="flex items-center space-x-2">
//                     <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"></span>
//                     <span>{item.name}</span>
//                   </span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/AV.png";

// const Navbar = () => {
//   const [navBackground, setNavBackground] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setNavBackground(window.scrollY > 100);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Skills", path: "/skills" },
//     { name: "Experience", path: "/experience" },
//     { name: "Projects", path: "/projects" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-500 ${
//         navBackground 
//           ? "bg-gray-800 shadow-2xl shadow-gray-900/50" 
//           : "bg-gray-900/95"
//       } backdrop-blur-lg border-b border-gray-700/50`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">

//         {/* Logo with Subtle Glow */}
//         <Link to="/" className="flex items-center space-x-3 group">
//           <div className="relative">
//             <div className="absolute inset-0 bg-gray-600 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
//             <img
//               src={logo}
//               alt="Avinash Logo"
//               className="relative h-12 w-12 md:h-14 md:w-14 rounded-full border-2 border-gray-500 shadow-xl shadow-gray-900/50 group-hover:scale-110 group-hover:border-gray-400 transition-all duration-300"
//             />
//           </div>
//           <span className="hidden sm:block text-xl font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
//             Portfolio
//           </span>
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-1">
//           {menuItems.map((item) => (
//             <li key={item.name}>
//               <Link
//                 to={item.path}
//                 className="relative px-4 py-2 text-gray-300 font-medium overflow-hidden group"
//               >
//                 <span className="relative z-10 group-hover:text-white transition-colors duration-300">
//                   {item.name}
//                 </span>
//                 <span className="absolute inset-0 bg-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></span>
//                 <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Animated Hamburger Button */}
//         <button
//           className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors duration-300 z-50"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           <div className="flex flex-col space-y-1.5">
//             <span
//               className={`w-5 h-0.5 bg-gray-300 rounded-full transition-all duration-300 ${
//                 mobileMenuOpen ? "rotate-45 translate-y-2" : ""
//               }`}
//             ></span>
//             <span
//               className={`w-5 h-0.5 bg-gray-300 rounded-full transition-all duration-300 ${
//                 mobileMenuOpen ? "opacity-0" : ""
//               }`}
//             ></span>
//             <span
//               className={`w-5 h-0.5 bg-gray-300 rounded-full transition-all duration-300 ${
//                 mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
//               }`}
//             ></span>
//           </div>
//         </button>

//         {/* Mobile Menu with Slide Animation */}
//         <div
//           className={`absolute top-full left-0 w-full bg-gray-900 md:hidden transition-all duration-300 border-b border-gray-700/50 ${
//             mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
//           }`}
//         >
//           <ul className="flex flex-col p-6 space-y-2">
//             {menuItems.map((item, index) => (
//               <li
//                 key={item.name}
//                 className={`transform transition-all duration-300 ${
//                   mobileMenuOpen 
//                     ? "translate-x-0 opacity-100" 
//                     : "-translate-x-4 opacity-0"
//                 }`}
//                 style={{ transitionDelay: `${index * 50}ms` }}
//               >
//                 <Link
//                   to={item.path}
//                   className="block px-4 py-3 text-gray-300 font-medium rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300 border border-transparent hover:border-gray-700"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   <span className="flex items-center space-x-2">
//                     <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
//                     <span>{item.name}</span>
//                   </span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/AV.png";
// import homeGif from "../assets/home.gif";
// import aboutGif from "../assets/about.gif";
// import skillsGif from "../assets/Skills.gif";
// import experienceGif from "../assets/Experience.gif";
// import projectsGif from "../assets/project.gif";
// import contactGif from "../assets/contact.gif";

// const Navbar = () => {
//   const [navBackground, setNavBackground] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setNavBackground(window.scrollY > 100);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const menuItems = [
//     { name: "Home", path: "/", icon: homeGif },
//     { name: "About", path: "/about", icon: aboutGif },
//     { name: "Skills", path: "/skills", icon: skillsGif },
//     { name: "Experience", path: "/experience", icon: experienceGif },
//     { name: "Projects", path: "/projects", icon: projectsGif },
//     { name: "Contact", path: "/contact", icon: contactGif },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-500 ${navBackground
//           ? "bg-white shadow-xl shadow-purple-500/20"
//           : "bg-white"
//         } backdrop-blur-lg border-b border-white/10`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">

//         {/* Logo with glow */}
//         <Link to="/" className="flex items-center space-x-3 group">
//           <div className="relative">
//             <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
//             <img
//               src={logo}
//               alt="Logo"
//               className="relative h-12 w-12 md:h-14 md:w-14 rounded-full border-2 border-cyan-400 shadow-2xl shadow-cyan-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
//             />
//           </div>
//           <span className="hidden sm:block text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//             Portfolio
//           </span>
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-4">
//           {menuItems.map((item) => (
//             <li key={item.name}>
//               <Link
//                 to={item.path}
//                 className="relative px-4 py-2 text-white font-medium overflow-hidden group flex items-center gap-2"
//               >
//                 {/* Always Visible GIF Icon */}
//                 <img
//                   src={item.icon}
//                   alt="icon"
//                   className="w-7 h-7 group-hover:scale-110 transition-all duration-300"
//                 />

//                 {/* Name Hidden (Visible Only on Hover) */}
//                 <span
//                   className="absolute left-12 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 
//           transition-all duration-300 bg-gradient-to-r from-cyan-400  bg-clip-text text-transparent font-semibold"
//                 >
//                   {item.name}
//                 </span>

//                 {/* Hover Background Animation */}
//                 {/* <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></span> */}
//               </Link>
//             </li>
//           ))}
//         </ul>


//         {/* Hamburger */}
//         <button
//           className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300 z-50"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           <div className="flex flex-col space-y-1.5">
//             <span
//               className={`w-5 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""
//                 }`}
//             ></span>
//             <span
//               className={`w-5 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""
//                 }`}
//             ></span>
//             <span
//               className={`w-5 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
//                 }`}
//             ></span>
//           </div>
//         </button>

//         {/* Mobile Menu */}
//         <div
//           className={`absolute top-full left-0 w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 md:hidden transition-all duration-300 border-b border-white/10 ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
//             }`}
//         >
//           <ul className="flex flex-col p-6 space-y-3">
//             {menuItems.map((item, index) => (
//               <li
//                 key={item.name}
//                 className={`transform transition-all duration-300 ${mobileMenuOpen
//                     ? "translate-x-0 opacity-100"
//                     : "-translate-x-4 opacity-0"
//                   }`}
//                 style={{ transitionDelay: `${index * 60}ms` }}
//               >
//                 <Link
//                   to={item.path}
//                   className="flex items-center gap-3 px-4 py-3 text-white font-medium rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 border border-transparent hover:border-purple-500/30"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {/* GIF Icon */}
//                   <img
//                     src={item.icon}
//                     alt="icon"
//                     className="w-6 h-6"
//                   />

//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/AV.png";
import homeGif from "../assets/home1.gif";
import aboutGif from "../assets/about1.gif";
import skillsGif from "../assets/Skills1.gif";
import experienceGif from "../assets/Experience1.gif";
import projectsGif from "../assets/project1.gif";
import contactGif from "../assets/contact1.gif";

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/", icon: homeGif },
    { name: "About", path: "/about", icon: aboutGif },
    { name: "Skills", path: "/skills", icon: skillsGif },
    { name: "Experience", path: "/experience", icon: experienceGif },
    { name: "Projects", path: "/projects", icon: projectsGif },
    { name: "Contact", path: "/contact", icon: contactGif },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${navBackground ? "bg-gray-800 shadow-xl shadow-purple-500/20" : "bg-gray-800"
        } backdrop-blur-lg border-b border-white/10`}
    >
      <div className="max-w-6xl mx-auto px- flex justify-between items-center py-1">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-4 group">
          <img
            src={logo}
            alt="Logo"
            className="relative h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-cyan-400 animate-pulse hover:animate-none shadow-2xl shadow-cyan-500/50"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <li key={item.path} className="relative group">
              <Link
                to={item.path}
                className="flex items-center justify-center w-20 h-12 px-2 py-2 rounded-lg  transition-all duration-300 relative "
              >
                {/* ICON */}
                <span
                  className="opacity-0 group-hover:opacity-100 text-purple-600 font-medium text-sm whitespace-nowrap before:text-purple-600 after:text-purple-600 group-hover:animate-glitch transition-all duration-300"
                >
                  {item.name}
                </span>
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-10 h-10 p-2 animate-wobble group-hover:opacity-0  group-hover:scale-50 transition-all duration-300"
                />
              </Link>
            </li>
          ))}
        </ul>


        {/* Hamburger */}
        <button
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div
            className={`w-6 h-0.5 bg-white mb-1.5 transition-transform duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white mb-1.5 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : ""
              }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
          ></div>
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl md:hidden transition-all duration-300 ${mobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
            }`}
        >
          <ul className="flex flex-col p-6 space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 rounded-lg transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <img src={item.icon} alt={item.name} className="w-7 h-7" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

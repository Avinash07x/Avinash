import React from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Site Worx Infotech",
    period: "Feb 2025 - Jul 2025",
    responsibilities: [
      'Led a team of interns in the end-to-end development of "Digital Cloud Keepers"',
      "Built responsive frontend using React.js and Tailwind CSS",
      "Developed backend functionalities with Node.js and integrated live chat support",
      "Oversaw task distribution, team coordination, and quality assurance",
      "Implemented modern development standards and best practices",
    ],
  },
  // Add more experiences here if needed
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-16">
          Work Experience
        </h2>

        <div className="grid md:grid-cols-1 gap-10">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <Briefcase className="w-8 h-8 text-blue-500" />
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                </div>
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-3 text-gray-300 pl-4">
                {exp.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-blue-500 mt-1">▶</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

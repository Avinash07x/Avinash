import React from "react"; // ✅ replaced Tool with Settings

const Skills = () => {
  const skills = {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "React.js",
      "Redux Toolkit",
      "Bootstrap",
      "Tailwind CSS",
      "Material-UI",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "RESTful APIs",
      "JWT Authentication",
    ],
    tools: ["Git", "GitHub", "Postman", "Figma", "Responsive Design" , "vercel" ],
  };

  const categories = [
    { title: "Frontend Development",  items: skills.frontend, color: "from-blue-500 to-purple-600" },
    { title: "Backend & Database",  items: skills.backend, color: "from-purple-500 to-pink-600" },
    { title: "Tools & Technologies", items: skills.tools, color: "from-green-400 to-green-600" },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-12">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">{cat.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {cat.items.map((skill, index) => (
                  <span
                    key={index}
                    className={`bg-gradient-to-r ${cat.color} text-white px-4 py-2 rounded-full text-sm font-medium`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

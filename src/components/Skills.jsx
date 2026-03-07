import React from "react";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiDjango,
  SiPostgresql,
  SiPostman,
  // SiVisualstudiocode,
} from "react-icons/si";

const Skills = () => {
  const skillsData = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Postman", icon: <SiPostman /> },
        // { name: "VS Code", icon: <SiVisualstudiocode /> },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-gray-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-blue-500">Skills</span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-500 mb-8 text-center">
                {category.title}
              </h3>

              <div className="grid gap-5">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition duration-300"
                  >
                    <span className="text-2xl text-blue-400">
                      {skill.icon}
                    </span>
                    <span className="text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </div>
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

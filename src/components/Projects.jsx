import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import { projectsData } from "./projectsData"; // Import the data

const Projects = ({ showAll = false }) => {
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section id="projects" className="bg-gray-900 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-700 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition"
                  >
                    <FaGithub /> Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition"
                  >
                    <FiExternalLink /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
            >
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

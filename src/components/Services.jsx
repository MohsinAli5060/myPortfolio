import React from "react";
import { FaCode, FaServer, FaDatabase, FaRocket } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services" className="bg-gray-950 text-white py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          What I <span className="text-blue-500">Offer</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-20">
          As a Full Stack Developer, I provide complete web solutions — from
          beautiful frontend interfaces to secure backend systems.
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Frontend Development */}
          <div
            className="bg-gray-900 p-10 rounded-3xl border border-gray-800 
                          hover:border-blue-500 transition duration-300 
                          shadow-xl hover:shadow-blue-500/20"
          >
            <FaCode className="text-blue-500 text-5xl mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4">
              Frontend Development
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Building modern, responsive and interactive user interfaces using
              React.js and Tailwind CSS with reusable components and clean
              architecture.
            </p>
          </div>

          {/* Backend Development */}
          <div
            className="bg-gray-900 p-10 rounded-3xl border border-gray-800 
                          hover:border-blue-500 transition duration-300 
                          shadow-xl hover:shadow-blue-500/20"
          >
            <FaServer className="text-blue-500 text-5xl mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4">Backend Development</h3>
            <p className="text-gray-400 leading-relaxed">
              Developing secure and scalable backend systems using Python &
              Django, including REST APIs, authentication systems and business
              logic implementation.
            </p>
          </div>

          {/* Database Management */}
          <div
            className="bg-gray-900 p-10 rounded-3xl border border-gray-800 
                          hover:border-blue-500 transition duration-300 
                          shadow-xl hover:shadow-blue-500/20"
          >
            <FaDatabase className="text-blue-500 text-5xl mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4">Database Management</h3>
            <p className="text-gray-400 leading-relaxed">
              Designing and managing relational databases using PostgreSQL,
              optimizing queries, ensuring data integrity and
              performance-focused solutions.
            </p>
          </div>

          {/* Deployment & Optimization */}
          <div
            className="bg-gray-900 p-10 rounded-3xl border border-gray-800 
                          hover:border-blue-500 transition duration-300 
                          shadow-xl hover:shadow-blue-500/20"
          >
            <FaRocket className="text-blue-500 text-5xl mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4">
              Deployment & Optimization
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Deploying full-stack applications to production with performance
              optimization, secure configurations and scalable hosting
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

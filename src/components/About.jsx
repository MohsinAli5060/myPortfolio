import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-blue-500">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text */}
          <div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm a passionate Full-Stack Developer currently pursuing 
              a Bachelor's degree in Information Technology. 
              I specialize in building modern web applications using 
              React, Tailwind CSS, and Django.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I focus on writing clean, maintainable code and creating 
              responsive user interfaces with smooth user experiences. 
              My goal is to become a professional remote developer 
              and build scalable real-world applications.
            </p>

            <div className="flex gap-6 mt-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-500">10+</h3>
                <p className="text-gray-400">Projects Built</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-500">1+</h3>
                <p className="text-gray-400">Years Learning</p>
              </div>
            </div>
          </div>

          {/* Right Side - Card */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-blue-500">
              What I Do
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>✔ Build responsive front-end interfaces</li>
              <li>✔ Develop REST APIs with Django</li>
              <li>✔ Connect frontend with backend</li>
              <li>✔ Optimize performance & clean code</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

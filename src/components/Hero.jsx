import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-6"
    >
      <div className="max-w-4xl text-center">
        {/* Small Intro Text */}
        <p className="text-blue-500 text-lg mb-4">Hi, I'm</p>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Mohsin Ali
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Full-Stack Developer (React & Django)
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl mb-8">
          I build modern, scalable, and responsive web applications using React,
          Tailwind CSS, and Django. Passionate about creating clean UI and
          powerful backend systems.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border border-gray-600 hover:border-blue-500 hover:text-blue-500 transition rounded-lg font-medium"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

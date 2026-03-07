import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";
import { SiFiverr, SiLeetcode } from "react-icons/si";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY",
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
        },
      );
  };

  return (
    <section id="contact" className="bg-gray-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Let's <span className="text-blue-500">Connect</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT — FORM */}
          <div className="bg-gray-900 p-10 rounded-3xl shadow-2xl border border-gray-800">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              Send a Message
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-5 py-3 rounded-xl bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-5 py-3 rounded-xl bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full px-5 py-3 rounded-xl bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition duration-300"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-green-400 text-sm mt-2">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </div>

          {/* RIGHT — CONTACT INFO */}
          <div className="bg-gray-900 p-10 rounded-3xl shadow-2xl border border-gray-800 space-y-6">
            <h3 className="text-2xl font-semibold text-blue-400">
              Contact Information
            </h3>

            <div className="space-y-5 text-gray-300">
              <a
                href="mailto:mohsinaliasdf8@gmail.com"
                className="flex items-center gap-4 hover:text-blue-400 transition"
              >
                <FaEnvelope /> mohsinaliasdf8@gmail.com
              </a>

              <a
                href="tel:03285081283"
                className="flex items-center gap-4 hover:text-blue-400 transition"
              >
                <FaPhone /> 0328 5081283
              </a>

              <a
                href="https://www.linkedin.com/in/mohsin-ali-227632369/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-blue-400 transition"
              >
                <FaLinkedin /> LinkedIn
              </a>

              <a
                href="https://github.com/MohsinAli5060"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-blue-400 transition"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href="https://www.fiverr.com/mohsinali5060"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-blue-400 transition"
              >
                <SiFiverr /> Fiverr
              </a>

              <a
                href="https://leetcode.com/u/mohsinali6070/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-blue-400 transition"
              >
                <SiLeetcode /> LeetCode
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import portfolioImage from "../src/assets/image/portfolio.png"
import ecommerceImage from "../src/assets/image/ecommerce.png"
import giphyImage from "../src/assets/image/giphy.png"


export default function App() {
  const sections = [
    {
      id: "about",
      title: "About Me",
      text: "MERN stack developer skilled in building responsive, dynamic web applications using MongoDB, Express, React, and Node.js. Passionate about creating clean, efficient code and delivering seamless user experiences from front to back.",
    },
    {
      id: "skills",
      title: "Skills",
      icons: [
        { icon: <FaReact className="text-sky-400" />, label: "React" },
        {
          icon: <SiTailwindcss className="text-teal-400" />,
          label: "TailwindCSS",
        },
        { icon: <FaNodeJs className="text-green-500" />, label: "Node.js" },
        { icon: <SiMongodb className="text-green-400" />, label: "MongoDB" },
        { icon: <FaHtml5 className="text-orange-500" />, label: "HTML" },
        { icon: <FaCss3Alt className="text-blue-500" />, label: "CSS" },
        {
          icon: <IoLogoJavascript className="text-yellow-500" />,
          label: "JAVASCIPT",
        },
        {
          icon: <FaDatabase className="text-purple-500" />,
          label: "Databases",
        },
      ],
    },
    {
      id: "projects",
      title: "Projects",
      text: "My work showcases creativity, scalability, and attention to detail.",
    },
    {
      id: "contact",
      title: "Contact",
      text: "Email: adityasharma626367@gmail.com\nLinkedIn: /in/adiityasharma\nX: /adityasharma_16",
    },
  ];

  // Mouse parallax effect
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setOffset({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200

  return (
    <div className="min-h-screen  bg-gradient-to-tr from-slate-100 to-zinc-100 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-300 opacity-40 animate-[spin_30s_linear_infinite]" />

      <div className="absolute w-72 h-72 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 top-10 left-10 animate-bounce" />
      <div className="absolute w-96 h-96  rounded-full mix-blend-multiply filter blur-3xl opacity-40 bottom-10 right-10 animate-pulse" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-16 space-y-12">
        {/* Hero Section */}
        <motion.div
          style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/30 rounded-2xl shadow-lg p-10 max-w-5xl text-center border border-white/40 transition transform hover:scale-[1.03] hover:shadow-2xl hover:border-purple-400/50"
        >
          <h1 className="text-5xl md:text-8xl font-bold text-gray-800 transition-colors duration-300 hover:text-purple-600">
            Hi👋, I’m <span className="text-purple-600 ">Aditya Sharma</span>
          </h1>
          <p className="text-xl md:text-3xl  mt-4 text-gray-700">
            Full-stack Developer — building beautiful & functional experiences.
          </p>
        </motion.div>

        {/* Sections */}
        {sections.map((sec, i) => (
          <motion.div
            key={sec.id}
            style={{
              transform: `translate(${(offset.x * (i + 1)) / 8}px, ${
                (offset.y * (i + 1)) / 8
              }px)`,
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/30 rounded-2xl shadow-lg p-8 max-w-5xl w-full border border-white/40 transition transform hover:scale-[1.03] hover:shadow-2xl hover:border-purple-400/50"
          >
            <h2 className="text-4xl font-semibold text-gray-800 transition-colors duration-300 hover:text-purple-600">
              {sec.title}
            </h2>

            {/* Skills Section */}
            {sec.id === "skills" ? (
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 mt-4">
                {sec.icons.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex flex-col items-center space-y-2 cursor-pointer group"
                  >
                    <div className="text-4xl group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition">
                      {skill.icon}
                    </div>
                    <p className="text-lg text-gray-700">{skill.label}</p>
                  </motion.div>
                ))}
              </div>
            ) : /* Projects Section */
            sec.id === "projects" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {[
                  {
                    title: "Portfolio Website",
                    desc: "A personal portfolio to showcase my work and skills.",
                    tech: ["React", "TailwindCSS", "Framer-motion"],
                    img: portfolioImage,
                    live: "https://adityasharma-puce.vercel.app",
                    code: "https://github.com/adiityasharma/portfolio-web",
                  },
                  {
                    title: "E-commerce App",
                    desc: "A full-stack e-commerce platform with payment integration.",
                    tech: ["Node.js", "Express", "MongoDB", "ReactJs"],
                    img: ecommerceImage,
                    live: "https://ecommerce-three-black-47.vercel.app/",
                    code: "https://github.com/adiityasharma/e-commerce-web",
                  },
                  {
                    title: "Giphy",
                    desc: "A fast, fun, and seamless interface for exploring and sharing GIFs from Giphy.",
                    tech: ["React", "TailwindCSS"],
                    img: giphyImage,
                    live: "https://giphy-clone-bice-xi.vercel.app/",
                    code: "https://github.com/adiityasharma/GIPHY-Clone",
                  },
                ].map((proj, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="backdrop-blur-xl bg-white/30 rounded-xl shadow-lg border border-white/40 overflow-hidden hover:shadow-2xl hover:border-purple-400/50"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={proj.img}
                        alt={proj.title}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-3xl font-semibold text-gray-800">
                        {proj.title}
                      </h3>
                      <p className="text-gray-600 mt-2 text-xl">{proj.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {proj.tech.map((t, i) => (
                          <span
                            key={i}
                            className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-sm"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3 mt-4">
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 transition text-lg"
                        >
                          Live Demo
                        </a>
                        <a
                          href={proj.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-900 transition text-lg"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              /* Default Text for Other Sections */
              <p className="mt-2 text-xl md:text-2xl text-gray-700 whitespace-pre-line">
                {sec.text}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

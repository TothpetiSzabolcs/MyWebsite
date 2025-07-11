import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TiHtml5 } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa";

const Skills = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const skills = [
    {
      name: "",
      icon: <TiHtml5 className="w-15 h-15 text-blue-500" />,
      level: 70,
      description:
        "HTML5 is the foundation of every modern website, allowing for clean and semantic structure. I focus on writing accessible markup that follows best practices for SEO and screen readers. I'm also comfortable using form elements and canvas for dynamic content.",
    },
    {
      name: "",
      icon: [
        <IoLogoCss3 className="w-15 h-15 text-blue-500" />,
        <RiTailwindCssFill className="w-15 h-15 text-blue-500" />,
      ],
      level: 50,
      description:
        "With Tailwind CSS, I build responsive and modern interfaces using utility-first classes. I have solid experience with Flexbox, CSS Grid, and creating smooth transitions and animations. My workflow includes dark mode support, reusable component styling, and clean design systems.",
    },
    {
      name: "",
      icon: <IoLogoJavascript className="w-15 h-15 text-blue-500" />,
      level: 55,
      description:
        "JavaScript lets me create dynamic, interactive features in frontend applications. I use modern ES6+ features like destructuring, arrow functions, and modular code structures. I frequently implement event handling, DOM manipulation, and work with APIs using fetch or async/await.",
    },
    {
      name: "",
      icon: <FaReact className="w-15 h-15 text-blue-500" />,
      level: 60,
      description:
        "React allows me to build scalable, component-based user interfaces with a clean structure. I’m comfortable using hooks like useState and useEffect, and managing state efficiently across components. I also use React Router, context API, and understand how to optimize rendering performance.",
    },
    {
      name: "",
      icon: <FaGithubSquare className="w-15 h-15 text-blue-500" />,
      level: 60,
      description:
        "Using Git and GitHub, I manage version control, track changes, and collaborate with others through branches and pull requests. I follow best practices with meaningful commit messages and clear histories. I'm confident handling merge conflicts and maintaining clean repositories.",
    },
    {
      name: "",
      icon: <FaNode className="w-15 h-15 text-blue-500" />,
      level: 70,
      description:
        "With Node.js and Express, I can build backend APIs to support full-stack applications. I create RESTful routes, handle middleware, and connect to databases like MongoDB. These tools let me manage server-side logic and data flow securely and efficiently.",
    },
    {
      name: "",
      icon: <SiMongodb className="w-15 h-15 text-blue-500" />,
      level: 75,
      description:
        "MongoDB is a flexible NoSQL database I use to store and manage data in JSON-like documents. I'm comfortable designing schemas, creating queries, and integrating it with Node.js through Mongoose. It allows me to build scalable backend systems with efficient data handling.",
    },
    {
      name: "Teamwork",
      icon: <FaPeopleGroup className="w-15 h-15 text-blue-500" />,
      level: 80,
      description:
        "I enjoy working in teams, sharing knowledge, and solving problems collaboratively. I believe good communication and mutual support lead to better results."
    },
    {
      name: "Continuous Learning",
      icon: <FaLightbulb className="w-15 h-15 text-blue-500" />,
      level: 95,
      description:
        "I'm always eager to learn new technologies and improve my skills. I follow modern trends and love experimenting with new tools and frameworks."
    },
    {
      name: "Problem Solving",
      icon: <FaPuzzlePiece className="w-15 h-15 text-blue-500" />,
      level: 70,
      description:
        "I enjoy breaking down complex problems into simple, manageable pieces. I approach challenges logically and aim for clean, maintainable solutions."
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-15 px-6 md:px-12 lg:px-20 py-24.5 bg-gray-900 w-full h-full relative">
      {skills.map((skill, i) => (
        <div
          key={i}
          className="hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300"
          onMouseEnter={() => setHoveredCardIndex(i)}
          onMouseLeave={() => setHoveredCardIndex(null)}
        >
          <div
            className="p-5 bg-white/5 backdrop-blur-md rounded-xl shadow-lg shadow-blue-500/10 text-white w-full h-full"
            data-aos-duration="700"
            data-aos-once="true"
          >
            <div className="flex items-center gap-4 mb-4 justify-center">
              {Array.isArray(skill.icon) ? (
                <div className="flex gap-2">
                  {skill.icon.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>
              ) : (
                skill.icon
              )}
            </div>
            {skill.level && (
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-300 mb-1">
                  <span>Proficiency</span>
                  <span className="font-semibold">
                    {hoveredCardIndex === i ? skill.level : "0"}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-300 to-blue-700 h-2 rounded-full transition-all duration-700 ease-in-out"
                    style={{
                      width: `${hoveredCardIndex === i ? skill.level : "0"}%`,
                    }}
                  />
                </div>
              </div>
            )}
            <p className="text-gray-300 text-sm md:text-base text-center">
              {skill.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

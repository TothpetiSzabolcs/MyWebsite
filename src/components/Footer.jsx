import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiArrowToTop } from "react-icons/bi";

import me from "../assets/me.svg";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-950 w-full px-6 md:px-12 lg:px-30 py-5">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left gap-10">
        <div className="flex flex-col items-center lg:items-start">
          <Link to="/">
            <img
              src={me}
              alt="logo"
              className="w-24 h-32 lg:w-30 lg:translate-x-10 xl:translate-x-10 lg:h-40 object-cover rounded-lg border-2 border-gray-700 opacity-40 transition-all duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </Link>
          <h1 className="text-xl xl:text-2xl lg:text-2xl md:text-xl sm:text-xl font-bold mt-4 bg-gradient-to-r from-blue-300 to-blue-700 bg-clip-text text-transparent">
            Szabolcs Tóthpeti
          </h1>
        </div>

        <div className="flex flex-col items-center gap-4 pt-0 md:pt-0 sm:pt-0 lg:pt-20 xl:pt-20">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="https://www.instagram.com/szabolcstothpeti/"
              target="_blank"
            >
              <FaInstagram className="h-6 w-6 text-white" />
            </Link>
            <Link
              to="https://www.facebook.com/szabolcs.tothpeti"
              target="_blank"
            >
              <FaFacebook className="h-6 w-6 text-white" />
            </Link>
            <Link to="https://x.com/STothpeti" target="_blank">
              <FaXTwitter className="h-6 w-6 text-white" />
            </Link>
            <Link to="https://github.com/TothpetiSzabolcs" target="_blank">
              <FaGithub className="h-6 w-6 text-white" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/szabolcs-tothpeti-7867b52a0/"
              target="_blank"
            >
              <FaLinkedin className="h-6 w-6 text-white" />
            </Link>
          </div>

          <p className="text-gray-700 text-sm pt-5 xl:pt-15 lg:pt-15 md:pt-5 sm:pt-5">
            2025 Created by Szabolcs Tóthpeti ©
          </p>

          <div className="flex gap-2 justify-center text-gray-500 text-xs">
            <span>Made with</span>
            <FaReact className="h-4 w-4 text-blue-500" />
            <span>&</span>
            <RiTailwindCssFill className="h-4 w-4 text-blue-400" />
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-end gap-2">
          <button className=" bg-blue-500 text-white px-4 py-2 rounded-md mb-8 hover:bg-blue-600 transition-all duration-300">
            <Link
              to="/"
              className="flex items-center justify-center gap-2"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <BiArrowToTop className="h-5 w-5" />
              <span className="text-xs">Back to top</span>
            </Link>
          </button>
          <h1 className="text-white text-xs font-semibold pb-2">Quick links</h1>
          <Link
            to="/about"
            className="text-gray-500 text-xs hover:text-blue-500 transition"
          >
            Who am I?
          </Link>
          <Link
            to="/projects"
            className="text-gray-500 text-xs hover:text-blue-500 transition"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-gray-500 text-xs hover:text-blue-500 transition"
          >
            Get in touch
          </Link>
          <Link
            to="/skills"
            className="text-gray-500 text-xs hover:text-blue-500 transition"
          >
            Skills
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

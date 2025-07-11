import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Profile from "../assets/profilePicture.png";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <div className="bg-gray-900 w-full px-6 sm:px-10 md:px-10 lg:px-10 xl:px-35 2xl:px-60 py-[10.3%] flex flex-col lg:flex-row items-center justify-between gap-12">
      <div
        className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <p className="text-xl text-white">
          Welcome, <span className="text-blue-500">I'm</span>
        </p>

        <h1
          className="text-4xl md:text-5xl font-bold text-blue-500 pb-2"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Szabolcs Tóthpeti
        </h1>

        <h2
          className="text-lg md:text-xl font-medium text-white mt-2"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          Frontend Developer
        </h2>

        <p
          className="text-gray-300 mt-4 mb-6 text-sm md:text-md px-2 lg:px-0"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          I'm focused on building clean and responsive user interfaces with
          React, Tailwind CSS and JavaScript or TypeScript. I enjoy turning
          complex problems into intuitive, user-friendly solutions and always
          strive to write maintainable, scalable code.
        </p>

        <button
          className="bg-blue-500 text-white px-6 py-2 my-6 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition-all duration-300 w-fit"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          Download CV
        </button>

        <div
          className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-4"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <div className="flex items-center gap-2">
            <span className="text-gray-200 text-sm">Check Out My</span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="https://www.instagram.com/szabolcstothpeti/"
              target="_blank"
              className="bg-blue-500 p-3 rounded-2xl hover:bg-blue-600 transition-all duration-300"
            >
              <FaInstagram className="h-6 w-6 text-white" />
            </Link>
            <Link
              to="https://www.facebook.com/szabolcs.tothpeti"
              target="_blank"
              className="bg-blue-500 p-3 rounded-2xl hover:bg-blue-600 transition-all duration-300"
            >
              <FaFacebook className="h-6 w-6 text-white" />
            </Link>
            <Link
              to="https://x.com/STothpeti"
              target="_blank"
              className="bg-blue-500 p-3 rounded-2xl hover:bg-blue-600 transition-all duration-300"
            >
              <FaSquareXTwitter className="h-6 w-6 text-white" />
            </Link>
            <Link
              to="https://github.com/TothpetiSzabolcs"
              target="_blank"
              className="bg-blue-500 p-3 rounded-2xl hover:bg-blue-600 transition-all duration-300"
            >
              <FaGithub className="h-6 w-6 text-white" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/szabolcs-tothpeti-7867b52a0/"
              target="_blank"
              className="bg-blue-500 p-3 rounded-2xl hover:bg-blue-600 transition-all duration-300"
            >
              <FaLinkedin className="h-6 w-6 text-white" />
            </Link>
          </div>
        </div>
      </div>

      <div
        className="w-72 h-72 xl:w-100 xl:h-100 lg:w-96 lg:h-96 flex items-center justify-center"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <img
          src={Profile}
          alt="profile"
          className="w-full h-full object-contain rounded-3xl shadow-[0_8px_40px_8px_rgba(59,130,246,0.35)] border-2 border-blue-400 transform -translate-y-4"
        />
      </div>
    </div>
  );
};

export default Hero;
